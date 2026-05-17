const vocabulary = [
  { word: "silav", meaning: "merhaba", pronunciation: "si-lav", category: "Selamlasma", example: "Silav, tu çawa yî?" },
  { word: "spas", meaning: "tesekkurler", pronunciation: "spas", category: "Nezaket", example: "Spas ji bo alîkariya te." },
  { word: "erê", meaning: "evet", pronunciation: "e-re", category: "Temel", example: "Erê, ez amade me." },
  { word: "na", meaning: "hayir", pronunciation: "na", category: "Temel", example: "Na, ez nizanim." },
  { word: "av", meaning: "su", pronunciation: "av", category: "Yiyecek icecek", example: "Ez av dixwazim." },
  { word: "nan", meaning: "ekmek", pronunciation: "nan", category: "Yiyecek icecek", example: "Nan li ser mase ye." },
  { word: "şîr", meaning: "sut", pronunciation: "shir", category: "Yiyecek icecek", example: "Şîr germ e." },
  { word: "çay", meaning: "cay", pronunciation: "chay", category: "Yiyecek icecek", example: "Ez çay vedixwim." },
  { word: "mal", meaning: "ev", pronunciation: "mal", category: "Yerler", example: "Mala min nêzîk e." },
  { word: "dibistan", meaning: "okul", pronunciation: "di-bis-tan", category: "Yerler", example: "Ew diçe dibistanê." },
  { word: "bajar", meaning: "sehir", pronunciation: "ba-jar", category: "Yerler", example: "Bajar mezin e." },
  { word: "kolan", meaning: "sokak", pronunciation: "ko-lan", category: "Yerler", example: "Kolan vala ye." },
  { word: "roj", meaning: "gun / gunes", pronunciation: "roj", category: "Zaman", example: "Îro roj xweş e." },
  { word: "şev", meaning: "gece", pronunciation: "shev", category: "Zaman", example: "Şev tarî ye." },
  { word: "îro", meaning: "bugun", pronunciation: "i-ro", category: "Zaman", example: "Îro em dixwînin." },
  { word: "sibê", meaning: "yarin / sabah", pronunciation: "si-be", category: "Zaman", example: "Sibê em ê hev bibînin." },
  { word: "heval", meaning: "arkadas", pronunciation: "he-val", category: "Insanlar", example: "Ew hevala min e." },
  { word: "dayik", meaning: "anne", pronunciation: "da-yik", category: "Aile", example: "Dayika min li mal e." },
  { word: "bav", meaning: "baba", pronunciation: "bav", category: "Aile", example: "Bavê min mamoste ye." },
  { word: "zarok", meaning: "cocuk", pronunciation: "za-rok", category: "Aile", example: "Zarok dilşad e." },
  { word: "baş", meaning: "iyi", pronunciation: "bash", category: "Sifatlar", example: "Ez baş im." },
  { word: "xweş", meaning: "guzel / hos", pronunciation: "hwesh", category: "Sifatlar", example: "Ev stran xweş e." },
  { word: "mezin", meaning: "buyuk", pronunciation: "me-zin", category: "Sifatlar", example: "Ev mal mezin e." },
  { word: "biçûk", meaning: "kucuk", pronunciation: "bi-chuk", category: "Sifatlar", example: "Pirtûk biçûk e." },
  { word: "dil", meaning: "kalp / gonul", pronunciation: "dil", category: "Duygular", example: "Dilê min geş e." },
  { word: "şa", meaning: "mutlu", pronunciation: "sha", category: "Duygular", example: "Ez îro şa me." },
  { word: "xemgîn", meaning: "uzgun", pronunciation: "hem-gin", category: "Duygular", example: "Ew hinekî xemgîn e." },
  { word: "xwendin", meaning: "okumak", pronunciation: "hwen-din", category: "Fiiller", example: "Ez pirtûk dixwînim." },
  { word: "nivîsîn", meaning: "yazmak", pronunciation: "ni-vi-sin", category: "Fiiller", example: "Tu name dinivîsî." },
  { word: "hatin", meaning: "gelmek", pronunciation: "ha-tin", category: "Fiiller", example: "Ew tê malê." },
  { word: "çûn", meaning: "gitmek", pronunciation: "chun", category: "Fiiller", example: "Em diçin bajêr." },
  { word: "dîtin", meaning: "gormek", pronunciation: "di-tin", category: "Fiiller", example: "Ez hevalê xwe dibînim." },
  { word: "yek", meaning: "bir", pronunciation: "yek", category: "Sayilar", example: "Yek pirtûk li vir e." },
  { word: "du", meaning: "iki", pronunciation: "du", category: "Sayilar", example: "Du heval hatin." },
  { word: "sê", meaning: "uc", pronunciation: "se", category: "Sayilar", example: "Sê roj man." },
  { word: "çar", meaning: "dort", pronunciation: "char", category: "Sayilar", example: "Çar kes li vir in." },
  { word: "pênc", meaning: "bes", pronunciation: "penj", category: "Sayilar", example: "Pênc zarok dilîzin." },
];

const phrases = [
  { ku: "Tu çawa yî?", tr: "Nasilsin?" },
  { ku: "Ez baş im.", tr: "Ben iyiyim." },
  { ku: "Navê te çi ye?", tr: "Adin ne?" },
  { ku: "Navê min Azad e.", tr: "Benim adim Azad." },
  { ku: "Bi xêr hatî.", tr: "Hos geldin." },
  { ku: "Em ê hev bibînin.", tr: "Gorusuruz." },
  { ku: "Tu ji ku derê yî?", tr: "Nerelisin?" },
  { ku: "Ez hînî Kurmancî dibim.", tr: "Kurmancî ogreniyorum." },
  { ku: "Ji kerema xwe dubare bike.", tr: "Lutfen tekrar et." },
  { ku: "Ev çi ye?", tr: "Bu nedir?" },
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
let selectedCategory = "Tum kategoriler";
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
  if (selectedCategory === "Tum kategoriler") {
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
  const categories = ["Tum kategoriler", ...new Set(vocabulary.map((item) => item.category))];
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
  showMeaningButton.textContent = "Anlami goster";
  markLearnedButton.textContent = isLearned ? "Ogrenildi" : "Ogrendim";
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
    mistakeList.innerHTML = "<li><strong>Henuz yanlis yok</strong><span>Quiz cozdukce burasi akillanacak.</span></li>";
    return;
  }

  mistakeList.innerHTML = mistakeItems
    .map(
      (item) => `
        <li>
          <strong>${item.word} · ${item.meaning}</strong>
          <span>${item.count} kez tekrar edilmeli · ${item.category}</span>
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
  showMeaningButton.textContent = shouldHide ? "Anlami goster" : "Anlami gizle";
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
    quizFeedback.textContent = "Dogru! Harika gidiyorsun.";
    saveProgress();
    renderProgress();
    renderMistakes();
    setTimeout(buildQuiz, 750);
  } else {
    progress.mistakes[quizItem.word] = (progress.mistakes[quizItem.word] || 0) + 1;
    quizFeedback.textContent = `Yaklastin. Dogru cevap: ${quizItem.meaning}`;
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
