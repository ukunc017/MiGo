const OPENAI_URL = "https://api.openai.com/v1/responses";
const DEFAULT_MODEL = "gpt-4.1-mini";
const MAX_MESSAGE_LENGTH = 1200;
const MAX_HISTORY_ITEMS = 8;
const MAX_CONTEXT_WORDS = 20;
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_REQUESTS = 12;
const rateLimitStore = new Map();

const modeInstructions = {
  tutor: "Answer the learner's question as a patient Kurmanci tutor. Give short examples and explain unfamiliar Kurmanci words.",
  correct: "Correct the learner's Kurmanci sentence. Show the corrected sentence first, then explain each important correction briefly.",
  quiz: "Create one short personalized Kurmanci exercise based on the learner context. Ask the question first and do not reveal the answer until the learner responds.",
};

function setSecurityHeaders(response) {
  response.setHeader("Cache-Control", "no-store");
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.setHeader("X-Content-Type-Options", "nosniff");
}

function getClientId(request) {
  const forwardedFor = request.headers["x-forwarded-for"];
  return String(Array.isArray(forwardedFor) ? forwardedFor[0] : forwardedFor || request.socket?.remoteAddress || "unknown")
    .split(",")[0]
    .trim();
}

function isRateLimited(clientId) {
  const now = Date.now();
  const current = rateLimitStore.get(clientId);

  if (!current || now - current.startedAt >= RATE_LIMIT_WINDOW_MS) {
    rateLimitStore.set(clientId, { count: 1, startedAt: now });
    return false;
  }

  current.count += 1;
  return current.count > RATE_LIMIT_REQUESTS;
}

function cleanString(value, maxLength) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function cleanStringArray(value) {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .filter((item) => typeof item === "string")
    .map((item) => item.trim().slice(0, 80))
    .filter(Boolean)
    .slice(0, MAX_CONTEXT_WORDS);
}

function cleanHistory(value) {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .filter((item) => item && ["user", "assistant"].includes(item.role))
    .map((item) => ({
      role: item.role,
      content: cleanString(item.content, MAX_MESSAGE_LENGTH),
    }))
    .filter((item) => item.content)
    .slice(-MAX_HISTORY_ITEMS);
}

function extractOutputText(payload) {
  if (typeof payload.output_text === "string" && payload.output_text.trim()) {
    return payload.output_text.trim();
  }

  for (const item of payload.output || []) {
    for (const content of item.content || []) {
      if (content.type === "output_text" && typeof content.text === "string") {
        return content.text.trim();
      }
    }
  }

  return "";
}

function buildPrompt({ message, mode, language, learnedWords, mistakeWords, history }) {
  const languageNames = { tr: "Turkish", de: "German", en: "English" };
  const interfaceLanguage = languageNames[language] || languageNames.tr;
  const conversation = history
    .map((item) => `${item.role === "user" ? "Learner" : "Tutor"}: ${item.content}`)
    .join("\n");

  return [
    `Teaching mode: ${mode}. ${modeInstructions[mode]}`,
    `Explain everything in ${interfaceLanguage}, while keeping target examples in Kurmanci.`,
    "Use beginner-friendly Kurmanci. Be concise, encouraging, and linguistically careful.",
    "Stay focused on language learning. Never claim the learner's sentence is correct when it is not.",
    learnedWords.length ? `Words already learned: ${learnedWords.join(", ")}.` : "No learned-word context yet.",
    mistakeWords.length ? `Words needing review: ${mistakeWords.join(", ")}.` : "No mistake-word context yet.",
    conversation ? `Recent conversation:\n${conversation}` : "No previous conversation.",
    `Learner message: ${message}`,
  ].join("\n\n");
}

module.exports = async function handler(request, response) {
  setSecurityHeaders(response);

  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ error: "Method not allowed." });
  }

  if (!process.env.OPENAI_API_KEY) {
    return response.status(503).json({ error: "AI tutor is not configured yet." });
  }

  if (isRateLimited(getClientId(request))) {
    return response.status(429).json({ error: "Too many requests. Please wait a moment." });
  }

  const body = request.body && typeof request.body === "object" ? request.body : {};
  const message = cleanString(body.message, MAX_MESSAGE_LENGTH);
  const mode = Object.hasOwn(modeInstructions, body.mode) ? body.mode : "tutor";
  const language = ["tr", "de", "en"].includes(body.language) ? body.language : "tr";

  if (!message) {
    return response.status(400).json({ error: "A message is required." });
  }

  const prompt = buildPrompt({
    message,
    mode,
    language,
    learnedWords: cleanStringArray(body.learnedWords),
    mistakeWords: cleanStringArray(body.mistakeWords),
    history: cleanHistory(body.history),
  });

  try {
    const openAIResponse = await fetch(OPENAI_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || DEFAULT_MODEL,
        instructions: "You are MiGo, a focused and supportive Kurmanci language tutor.",
        input: prompt,
        max_output_tokens: 700,
      }),
    });

    const payload = await openAIResponse.json();

    if (!openAIResponse.ok) {
      console.error("OpenAI request failed", openAIResponse.status, payload?.error?.code || "unknown_error");
      return response.status(502).json({ error: "The AI tutor could not answer right now." });
    }

    const reply = extractOutputText(payload);
    if (!reply) {
      return response.status(502).json({ error: "The AI tutor returned an empty answer." });
    }

    return response.status(200).json({ reply });
  } catch (error) {
    console.error("AI tutor connection failed", error instanceof Error ? error.message : "unknown_error");
    return response.status(502).json({ error: "The AI tutor is temporarily unavailable." });
  }
};
