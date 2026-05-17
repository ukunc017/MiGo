const vocabulary = [
  { word: "silav", meaning: "gotina silavê", pronunciation: "si-lav", category: "Silavkirin", example: "Silav, tu çawa yî?" },
  { word: "spas", meaning: "gotina spasdarî", pronunciation: "spas", category: "Nazikî", example: "Spas ji bo alîkariya te." },
  { word: "erê", meaning: "pejirandin", pronunciation: "e-re", category: "Bingehîn", example: "Erê, ez amade me." },
  { word: "na", meaning: "nepejirandin", pronunciation: "na", category: "Bingehîn", example: "Na, ez nizanim." },
  { word: "av", meaning: "tişta ku em vedixwin", pronunciation: "av", category: "Xwarin û vexwarin", example: "Ez av dixwazim." },
  { word: "nan", meaning: "xwarina bingehîn", pronunciation: "nan", category: "Xwarin û vexwarin", example: "Nan li ser mase ye." },
  { word: "şîr", meaning: "vexwarina spî", pronunciation: "shir", category: "Xwarin û vexwarin", example: "Şîr germ e." },
  { word: "çay", meaning: "vexwarina germ", pronunciation: "chay", category: "Xwarin û vexwarin", example: "Ez çay vedixwim." },
  { word: "mal", meaning: "cihê jiyanê", pronunciation: "mal", category: "Cih", example: "Mala min nêzîk e." },
  { word: "dibistan", meaning: "cihê xwendinê", pronunciation: "di-bis-tan", category: "Cih", example: "Ew diçe dibistanê." },
  { word: "bajar", meaning: "cihê mezin ê jiyanê", pronunciation: "ba-jar", category: "Cih", example: "Bajar mezin e." },
  { word: "kolan", meaning: "rêya nav bajêr", pronunciation: "ko-lan", category: "Cih", example: "Kolan vala ye." },
  { word: "roj", meaning: "ronahiya rojê", pronunciation: "roj", category: "Dem", example: "Îro roj xweş e." },
  { word: "şev", meaning: "dema tarî", pronunciation: "shev", category: "Dem", example: "Şev tarî ye." },
  { word: "îro", meaning: "ev roj", pronunciation: "i-ro", category: "Dem", example: "Îro em dixwînin." },
  { word: "sibê", meaning: "roja piştî îro", pronunciation: "si-be", category: "Dem", example: "Sibê em ê hev bibînin." },
  { word: "heval", meaning: "kesê nêzîk", pronunciation: "he-val", category: "Mirov", example: "Ew hevala min e." },
  { word: "dayik", meaning: "dayika malbatê", pronunciation: "da-yik", category: "Malbat", example: "Dayika min li mal e." },
  { word: "bav", meaning: "bavê malbatê", pronunciation: "bav", category: "Malbat", example: "Bavê min mamoste ye." },
  { word: "zarok", meaning: "mirovê biçûk", pronunciation: "za-rok", category: "Malbat", example: "Zarok dilşad e." },
  { word: "baş", meaning: "ne xerab", pronunciation: "bash", category: "Rengdêr", example: "Ez baş im." },
  { word: "xweş", meaning: "tiştekî dilxweş", pronunciation: "hwesh", category: "Rengdêr", example: "Ev stran xweş e." },
  { word: "mezin", meaning: "ne biçûk", pronunciation: "me-zin", category: "Rengdêr", example: "Ev mal mezin e." },
  { word: "biçûk", meaning: "ne mezin", pronunciation: "bi-chuk", category: "Rengdêr", example: "Pirtûk biçûk e." },
  { word: "dil", meaning: "navenda hestan", pronunciation: "dil", category: "Hest", example: "Dilê min geş e." },
  { word: "şa", meaning: "dilxweş", pronunciation: "sha", category: "Hest", example: "Ez îro şa me." },
  { word: "xemgîn", meaning: "ne dilxweş", pronunciation: "hem-gin", category: "Hest", example: "Ew hinekî xemgîn e." },
  { word: "xwendin", meaning: "nivîsan fêm kirin", pronunciation: "hwen-din", category: "Lêker", example: "Ez pirtûk dixwînim." },
  { word: "nivîsîn", meaning: "peyvan nivîsîn", pronunciation: "ni-vi-sin", category: "Lêker", example: "Tu name dinivîsî." },
  { word: "hatin", meaning: "ber bi vir ve hatin", pronunciation: "ha-tin", category: "Lêker", example: "Ew tê malê." },
  { word: "çûn", meaning: "ji vir dûr bûn", pronunciation: "chun", category: "Lêker", example: "Em diçin bajêr." },
  { word: "dîtin", meaning: "bi çavan dîtin", pronunciation: "di-tin", category: "Lêker", example: "Ez hevalê xwe dibînim." },
  { word: "yek", meaning: "hejmara yekem", pronunciation: "yek", category: "Hejmar", example: "Yek pirtûk li vir e." },
  { word: "du", meaning: "yek û yek", pronunciation: "du", category: "Hejmar", example: "Du heval hatin." },
  { word: "sê", meaning: "du û yek", pronunciation: "se", category: "Hejmar", example: "Sê roj man." },
  { word: "çar", meaning: "sê û yek", pronunciation: "char", category: "Hejmar", example: "Çar kes li vir in." },
  { word: "pênc", meaning: "çar û yek", pronunciation: "penj", category: "Hejmar", example: "Pênc zarok dilîzin." },
];

const phrases = [
  { ku: "Tu çawa yî?", tr: "Pirsa rewşa kesekî." },
  { ku: "Ez baş im.", tr: "Bersiva erênî ji bo rewşê." },
  { ku: "Navê te çi ye?", tr: "Pirsa navê kesekî." },
  { ku: "Navê min Azad e.", tr: "Nasandina navê xwe." },
  { ku: "Bi xêr hatî.", tr: "Gotina pêşwaziyê." },
  { ku: "Em ê hev bibînin.", tr: "Gotina xatirxwestinê." },
  { ku: "Tu ji ku derê yî?", tr: "Pirsa cihê mirov." },
  { ku: "Ez hînî Kurmancî dibim.", tr: "Gotina fêrbûna ziman." },
  { ku: "Ji kerema xwe dubare bike.", tr: "Daxwaza dubarekirinê." },
  { ku: "Ev çi ye?", tr: "Pirsa nasîna tiştekî." },
];

const STORAGE_KEY = "migo-progress-v1";
const defaultProgress = {
  learnedWords: [],
  mistakes: {},
  correctAnswers: 0,
  totalAnswers: 0,
};

let cardIndex = 0;
let quizItem = null;
let score = 0;
let selectedCategory = "Hemû kategorî";
let progress = loadProgress();

const dailyWord = document.querySelector("#daily-word");
const dailyMeaning = document.querySelector("#daily-meaning");
const learnedCount = document.querySelector("#learned-count");
const correctCount = document.querySelector("#correct-count");
const accuracyRate = document.querySelector("#accuracy-rate");
const categoryFilter = document.querySelector("#category-filter");
const flashWord = document.querySelector("#flash-word");
const flashCategory = document.querySelector("#flash-category");
const flashPronunciation = document.querySelector("#flash-pronunciation");
const flashTranslation = document.querySelector("#flash-translation");
const flashExample = document.querySelector("#flash-example");
const showMeaningButton = document.querySelector("#show-meaning");
const markLearnedButton = document.querySelector("#mark-learned");
const nextCardButton = document.querySelector("#next-card");
const phraseList = document.querySelector("#phrase-list");
const quizWord = document.querySelector("#quiz-word");
const quizOptions = document.querySelector("#quiz-options");
const quizFeedback = document.querySelector("#quiz-feedback");
const scoreElement = document.querySelector("#score");
const mistakeList = document.querySelector("#mistake-list");
const clearProgressButton = document.querySelector("#clear-progress");

function loadProgress() {
  try {
    const savedProgress = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return { ...defaultProgress, ...savedProgress };
  } catch {
    return { ...defaultProgress };
  }
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

function getActiveVocabulary() {
  if (selectedCategory === "Hemû kategorî") {
    return vocabulary;
  }

  return vocabulary.filter((item) => item.category === selectedCategory);
}

function setDailyWord() {
  const today = new Date();
  const index = today.getDate() % vocabulary.length;
  const item = vocabulary[index];
  dailyWord.textContent = item.word;
  dailyMeaning.textContent = `${item.meaning} · ${item.category}`;
}

function renderProgress() {
  const accuracy =
    progress.totalAnswers === 0
      ? 0
      : Math.round((progress.correctAnswers / progress.totalAnswers) * 100);

  learnedCount.textContent = progress.learnedWords.length;
  correctCount.textContent = progress.correctAnswers;
  accuracyRate.textContent = `${accuracy}%`;
  scoreElement.textContent = score;
}

function renderCategoryFilter() {
  const categories = ["Hemû kategorî", ...new Set(vocabulary.map((item) => item.category))];
  categoryFilter.innerHTML = categories
    .map((category) => `<option value="${category}">${category}</option>`)
    .join("");
}

function renderCard() {
  const activeVocabulary = getActiveVocabulary();
  const item = activeVocabulary[cardIndex % activeVocabulary.length];
  const isLearned = progress.learnedWords.includes(item.word);

  flashWord.textContent = item.word;
  flashCategory.textContent = item.category;
  flashPronunciation.textContent = item.pronunciation;
  flashTranslation.textContent = item.meaning;
  flashExample.textContent = item.example;
  flashTranslation.classList.add("hidden");
  flashExample.classList.add("hidden");
  showMeaningButton.textContent = "Wateyê nîşan bide";
  markLearnedButton.textContent = isLearned ? "Hatiye hînbûn" : "Min hîn bû";
  markLearnedButton.disabled = isLearned;
}

function renderPhrases() {
  phraseList.innerHTML = phrases
    .map(
      (phrase) => `
        <li>
          <strong>${phrase.ku}</strong>
          <span>${phrase.tr}</span>
        </li>
      `,
    )
    .join("");
}

function renderMistakes() {
  const mistakeItems = Object.entries(progress.mistakes)
    .map(([word, count]) => {
      const item = vocabulary.find((entry) => entry.word === word);
      return item ? { ...item, count } : null;
    })
    .filter(Boolean)
    .sort((a, b) => b.count - a.count);

  if (mistakeItems.length === 0) {
    mistakeList.innerHTML = "<li><strong>Hê şaşî tune ye</strong><span>Gava tu quizê dixebitînî, ev beş jîr dibe.</span></li>";
    return;
  }

  mistakeList.innerHTML = mistakeItems
    .map(
      (item) => `
        <li>
          <strong>${item.word} · ${item.meaning}</strong>
          <span>${item.count} caran divê were dubarekirin · ${item.category}</span>
        </li>
      `,
    )
    .join("");
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function chooseQuizItem() {
  const activeVocabulary = getActiveVocabulary();
  const mistakeWords = Object.keys(progress.mistakes);
  const mistakePool = activeVocabulary.filter((item) => mistakeWords.includes(item.word));

  if (mistakePool.length > 0 && Math.random() < 0.55) {
    return mistakePool[Math.floor(Math.random() * mistakePool.length)];
  }

  return activeVocabulary[Math.floor(Math.random() * activeVocabulary.length)];
}

function buildQuiz() {
  const activeVocabulary = getActiveVocabulary();
  quizItem = chooseQuizItem();
  const wrongAnswers = shuffle(vocabulary.filter((item) => item.word !== quizItem.word))
    .slice(0, 3)
    .map((item) => item.meaning);
  const answers = shuffle([quizItem.meaning, ...wrongAnswers]);

  quizWord.textContent = quizItem.word;
  quizFeedback.textContent = `${selectedCategory} · ${activeVocabulary.length} kart`;
  quizOptions.innerHTML = answers
    .map((answer) => `<button class="option" type="button">${answer}</button>`)
    .join("");
}

function markCurrentCardAsLearned() {
  const activeVocabulary = getActiveVocabulary();
  const item = activeVocabulary[cardIndex % activeVocabulary.length];

  if (!progress.learnedWords.includes(item.word)) {
    progress.learnedWords.push(item.word);
    saveProgress();
  }

  renderProgress();
  renderCard();
}

showMeaningButton.addEventListener("click", () => {
  const shouldHide = !flashTranslation.classList.contains("hidden");
  flashTranslation.classList.toggle("hidden", shouldHide);
  flashExample.classList.toggle("hidden", shouldHide);
  showMeaningButton.textContent = shouldHide ? "Wateyê nîşan bide" : "Wateyê veşêre";
});

markLearnedButton.addEventListener("click", markCurrentCardAsLearned);

nextCardButton.addEventListener("click", () => {
  cardIndex = (cardIndex + 1) % getActiveVocabulary().length;
  renderCard();
});

categoryFilter.addEventListener("change", (event) => {
  selectedCategory = event.target.value;
  cardIndex = 0;
  renderCard();
  buildQuiz();
});

quizOptions.addEventListener("click", (event) => {
  if (!event.target.matches(".option")) {
    return;
  }

  const selectedAnswer = event.target.textContent;
  progress.totalAnswers += 1;

  if (selectedAnswer === quizItem.meaning) {
    score += 1;
    progress.correctAnswers += 1;
    delete progress.mistakes[quizItem.word];
    quizFeedback.textContent = "Rast e! Tu pir baş diçî.";
    saveProgress();
    renderProgress();
    renderMistakes();
    setTimeout(buildQuiz, 750);
  } else {
    progress.mistakes[quizItem.word] = (progress.mistakes[quizItem.word] || 0) + 1;
    quizFeedback.textContent = `Nêzîk bû. Bersiva rast: ${quizItem.meaning}`;
    saveProgress();
    renderProgress();
    renderMistakes();
  }
});

clearProgressButton.addEventListener("click", () => {
  progress = { ...defaultProgress };
  score = 0;
  saveProgress();
  renderProgress();
  renderMistakes();
  renderCard();
  buildQuiz();
});

renderCategoryFilter();
setDailyWord();
renderProgress();
renderCard();
renderPhrases();
renderMistakes();
buildQuiz();


