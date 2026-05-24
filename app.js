const languageOptions = {
  tr: "Türkçe",
  de: "Deutsch",
  en: "English",
};

const vocabulary = [
  { word: "silav", meaning: { tr: "merhaba", de: "Hallo", en: "hello" }, pronunciation: "si-lav", category: "Silavkirin", example: "Silav, tu çawa yî?" },
  { word: "spas", meaning: { tr: "teşekkürler", de: "Danke", en: "thank you" }, pronunciation: "spas", category: "Nazikî", example: "Spas ji bo alîkariya te." },
  { word: "erê", meaning: { tr: "evet", de: "ja", en: "yes" }, pronunciation: "e-re", category: "Bingehîn", example: "Erê, ez amade me." },
  { word: "na", meaning: { tr: "hayır", de: "nein", en: "no" }, pronunciation: "na", category: "Bingehîn", example: "Na, ez nizanim." },
  { word: "av", meaning: { tr: "su", de: "Wasser", en: "water" }, pronunciation: "av", category: "Xwarin û vexwarin", example: "Ez av dixwazim." },
  { word: "nan", meaning: { tr: "ekmek", de: "Brot", en: "bread" }, pronunciation: "nan", category: "Xwarin û vexwarin", example: "Nan li ser mase ye." },
  { word: "şîr", meaning: { tr: "süt", de: "Milch", en: "milk" }, pronunciation: "shir", category: "Xwarin û vexwarin", example: "Şîr germ e." },
  { word: "çay", meaning: { tr: "çay", de: "Tee", en: "tea" }, pronunciation: "chay", category: "Xwarin û vexwarin", example: "Ez çay vedixwim." },
  { word: "mal", meaning: { tr: "ev", de: "Haus", en: "house" }, pronunciation: "mal", category: "Cih", example: "Mala min nêzîk e." },
  { word: "dibistan", meaning: { tr: "okul", de: "Schule", en: "school" }, pronunciation: "di-bis-tan", category: "Cih", example: "Ew diçe dibistanê." },
  { word: "bajar", meaning: { tr: "şehir", de: "Stadt", en: "city" }, pronunciation: "ba-jar", category: "Cih", example: "Bajar mezin e." },
  { word: "kolan", meaning: { tr: "sokak", de: "Straße", en: "street" }, pronunciation: "ko-lan", category: "Cih", example: "Kolan vala ye." },
  { word: "roj", meaning: { tr: "gün", de: "Tag", en: "day" }, pronunciation: "roj", category: "Dem", example: "Îro roj xweş e." },
  { word: "şev", meaning: { tr: "gece", de: "Nacht", en: "night" }, pronunciation: "shev", category: "Dem", example: "Şev tarî ye." },
  { word: "îro", meaning: { tr: "bugün", de: "heute", en: "today" }, pronunciation: "i-ro", category: "Dem", example: "Îro em dixwînin." },
  { word: "sibê", meaning: { tr: "yarın", de: "morgen", en: "tomorrow" }, pronunciation: "si-be", category: "Dem", example: "Sibê em ê hev bibînin." },
  { word: "heval", meaning: { tr: "arkadaş", de: "Freund", en: "friend" }, pronunciation: "he-val", category: "Mirov", example: "Ew hevala min e." },
  { word: "dayik", meaning: { tr: "anne", de: "Mutter", en: "mother" }, pronunciation: "da-yik", category: "Malbat", example: "Dayika min li mal e." },
  { word: "bav", meaning: { tr: "baba", de: "Vater", en: "father" }, pronunciation: "bav", category: "Malbat", example: "Bavê min mamoste ye." },
  { word: "zarok", meaning: { tr: "çocuk", de: "Kind", en: "child" }, pronunciation: "za-rok", category: "Malbat", example: "Zarok dilşad e." },
  { word: "baş", meaning: { tr: "iyi", de: "gut", en: "good" }, pronunciation: "bash", category: "Rengdêr", example: "Ez baş im." },
  { word: "xweş", meaning: { tr: "hoş", de: "schön", en: "nice" }, pronunciation: "hwesh", category: "Rengdêr", example: "Ev stran xweş e." },
  { word: "mezin", meaning: { tr: "büyük", de: "groß", en: "big" }, pronunciation: "me-zin", category: "Rengdêr", example: "Ev mal mezin e." },
  { word: "biçûk", meaning: { tr: "küçük", de: "klein", en: "small" }, pronunciation: "bi-chuk", category: "Rengdêr", example: "Pirtûk biçûk e." },
  { word: "dil", meaning: { tr: "kalp", de: "Herz", en: "heart" }, pronunciation: "dil", category: "Hest", example: "Dilê min geş e." },
  { word: "şa", meaning: { tr: "mutlu", de: "froh", en: "happy" }, pronunciation: "sha", category: "Hest", example: "Ez îro şa me." },
  { word: "xemgîn", meaning: { tr: "üzgün", de: "traurig", en: "sad" }, pronunciation: "hem-gin", category: "Hest", example: "Ew hinekî xemgîn e." },
  { word: "xwendin", meaning: { tr: "okumak", de: "lesen", en: "to read" }, pronunciation: "hwen-din", category: "Lêker", example: "Ez pirtûk dixwînim." },
  { word: "nivîsîn", meaning: { tr: "yazmak", de: "schreiben", en: "to write" }, pronunciation: "ni-vi-sin", category: "Lêker", example: "Tu name dinivîsî." },
  { word: "hatin", meaning: { tr: "gelmek", de: "kommen", en: "to come" }, pronunciation: "ha-tin", category: "Lêker", example: "Ew tê malê." },
  { word: "çûn", meaning: { tr: "gitmek", de: "gehen", en: "to go" }, pronunciation: "chun", category: "Lêker", example: "Em diçin bajêr." },
  { word: "dîtin", meaning: { tr: "görmek", de: "sehen", en: "to see" }, pronunciation: "di-tin", category: "Lêker", example: "Ez hevalê xwe dibînim." },
  { word: "yek", meaning: { tr: "bir", de: "eins", en: "one" }, pronunciation: "yek", category: "Hejmar", example: "Yek pirtûk li vir e." },
  { word: "du", meaning: { tr: "iki", de: "zwei", en: "two" }, pronunciation: "du", category: "Hejmar", example: "Du heval hatin." },
  { word: "sê", meaning: { tr: "üç", de: "drei", en: "three" }, pronunciation: "se", category: "Hejmar", example: "Sê roj man." },
  { word: "çar", meaning: { tr: "dört", de: "vier", en: "four" }, pronunciation: "char", category: "Hejmar", example: "Çar kes li vir in." },
  { word: "pênc", meaning: { tr: "beş", de: "fünf", en: "five" }, pronunciation: "penj", category: "Hejmar", example: "Pênc zarok dilîzin." },
  { word: "pirtûk", meaning: { tr: "kitap", de: "Buch", en: "book" }, pronunciation: "pir-tuk", category: "Dibistan", example: "Pirtûka te li vir e." },
  { word: "mamoste", meaning: { tr: "öğretmen", de: "Lehrer", en: "teacher" }, pronunciation: "ma-mos-te", category: "Dibistan", example: "Mamoste ders dide." },
  { word: "xwendekar", meaning: { tr: "öğrenci", de: "Schüler", en: "student" }, pronunciation: "hwen-de-kar", category: "Dibistan", example: "Xwendekar li dersê ye." },
  { word: "qelem", meaning: { tr: "kalem", de: "Stift", en: "pen" }, pronunciation: "qe-lem", category: "Dibistan", example: "Qelem li ser mase ye." },
  { word: "mase", meaning: { tr: "masa", de: "Tisch", en: "table" }, pronunciation: "ma-se", category: "Mal", example: "Nan li ser mase ye." },
  { word: "kursî", meaning: { tr: "sandalye", de: "Stuhl", en: "chair" }, pronunciation: "kur-si", category: "Mal", example: "Kursî nêzîkî paceyê ye." },
  { word: "derî", meaning: { tr: "kapı", de: "Tür", en: "door" }, pronunciation: "de-ri", category: "Mal", example: "Derî vekirî ye." },
  { word: "pace", meaning: { tr: "pencere", de: "Fenster", en: "window" }, pronunciation: "pa-ce", category: "Mal", example: "Pace ronahî dide." },
  { word: "sol", meaning: { tr: "ayakkabı", de: "Schuh", en: "shoe" }, pronunciation: "sol", category: "Laş û cil", example: "Solên min nû ne." },
  { word: "cil", meaning: { tr: "kıyafet", de: "Kleidung", en: "clothes" }, pronunciation: "cil", category: "Laş û cil", example: "Cilên te xweş in." },
  { word: "dest", meaning: { tr: "el", de: "Hand", en: "hand" }, pronunciation: "dest", category: "Laş û cil", example: "Destê min germ e." },
  { word: "çav", meaning: { tr: "göz", de: "Auge", en: "eye" }, pronunciation: "chav", category: "Laş û cil", example: "Çavên wê kesk in." },
  { word: "ser", meaning: { tr: "baş", de: "Kopf", en: "head" }, pronunciation: "ser", category: "Laş û cil", example: "Serê min diêşe." },
  { word: "guh", meaning: { tr: "kulak", de: "Ohr", en: "ear" }, pronunciation: "guh", category: "Laş û cil", example: "Guhê min dibihîze." },
  { word: "xwarin", meaning: { tr: "yemek", de: "Essen", en: "food" }, pronunciation: "hwa-rin", category: "Xwarin û vexwarin", example: "Xwarin amade ye." },
  { word: "sêv", meaning: { tr: "elma", de: "Apfel", en: "apple" }, pronunciation: "sev", category: "Xwarin û vexwarin", example: "Sêv sor e." },
  { word: "penîr", meaning: { tr: "peynir", de: "Käse", en: "cheese" }, pronunciation: "pe-nir", category: "Xwarin û vexwarin", example: "Penîr li ser nan e." },
  { word: "goşt", meaning: { tr: "et", de: "Fleisch", en: "meat" }, pronunciation: "gosht", category: "Xwarin û vexwarin", example: "Goşt germ e." },
  { word: "sebze", meaning: { tr: "sebze", de: "Gemüse", en: "vegetable" }, pronunciation: "seb-ze", category: "Xwarin û vexwarin", example: "Sebze tendurist e." },
  { word: "germ", meaning: { tr: "sıcak", de: "warm", en: "warm" }, pronunciation: "germ", category: "Rengdêr", example: "Av germ e." },
  { word: "sar", meaning: { tr: "soğuk", de: "kalt", en: "cold" }, pronunciation: "sar", category: "Rengdêr", example: "Şev sar e." },
  { word: "nû", meaning: { tr: "yeni", de: "neu", en: "new" }, pronunciation: "nu", category: "Rengdêr", example: "Ev qelem nû ye." },
  { word: "kevn", meaning: { tr: "eski", de: "alt", en: "old" }, pronunciation: "kevn", category: "Rengdêr", example: "Mala kevn li wir e." },
  { word: "reş", meaning: { tr: "siyah", de: "schwarz", en: "black" }, pronunciation: "resh", category: "Reng", example: "Solên min reş in." },
  { word: "spî", meaning: { tr: "beyaz", de: "weiß", en: "white" }, pronunciation: "spi", category: "Reng", example: "Şîr spî ye." },
  { word: "sor", meaning: { tr: "kırmızı", de: "rot", en: "red" }, pronunciation: "sor", category: "Reng", example: "Sêv sor e." },
  { word: "kesk", meaning: { tr: "yeşil", de: "grün", en: "green" }, pronunciation: "kesk", category: "Reng", example: "Çayê min kesk e." },
  { word: "kirin", meaning: { tr: "yapmak", de: "machen", en: "to do" }, pronunciation: "ki-rin", category: "Lêker", example: "Ez karê xwe dikim." },
  { word: "gotin", meaning: { tr: "söylemek", de: "sagen", en: "to say" }, pronunciation: "go-tin", category: "Lêker", example: "Ew dibêje silav." },
  { word: "zanîn", meaning: { tr: "bilmek", de: "wissen", en: "to know" }, pronunciation: "za-nin", category: "Lêker", example: "Ez vê peyvê dizanim." },
  { word: "xwestin", meaning: { tr: "istemek", de: "wollen", en: "to want" }, pronunciation: "hwes-tin", category: "Lêker", example: "Ez av dixwazim." },
  { word: "vexwarin", meaning: { tr: "içmek", de: "trinken", en: "to drink" }, pronunciation: "vex-wa-rin", category: "Lêker", example: "Em çay vedixwin." },
  { word: "fêrbûn", meaning: { tr: "öğrenmek", de: "lernen", en: "to learn" }, pronunciation: "fer-bun", category: "Lêker", example: "Ez hînî Kurmancî dibim." },
  { word: "alîkarî", meaning: { tr: "yardım", de: "Hilfe", en: "help" }, pronunciation: "a-li-ka-ri", category: "Nazikî", example: "Alîkariya te pir baş e." },
  { word: "lîstin", meaning: { tr: "oynamak", de: "spielen", en: "to play" }, pronunciation: "lis-tin", category: "Lêker", example: "Zarok dilîzin." },
  { word: "ez", meaning: { tr: "ben", de: "ich", en: "I" }, pronunciation: "ez", category: "Cînav", example: "Ez baş im." },
  { word: "tu", meaning: { tr: "sen", de: "du", en: "you" }, pronunciation: "tu", category: "Cînav", example: "Tu çawa yî?" },
  { word: "ew", meaning: { tr: "o", de: "er/sie/es", en: "he/she/it" }, pronunciation: "ew", category: "Cînav", example: "Ew li mal e." },
  { word: "em", meaning: { tr: "biz", de: "wir", en: "we" }, pronunciation: "em", category: "Cînav", example: "Em dixwînin." },
  { word: "hûn", meaning: { tr: "siz", de: "ihr/Sie", en: "you all" }, pronunciation: "hun", category: "Cînav", example: "Hûn amade ne?" },
  { word: "min", meaning: { tr: "benim/bana", de: "mein/mir", en: "my/me" }, pronunciation: "min", category: "Cînav", example: "Navê min Azad e." },
];

const phrases = [
  { ku: "Tu çawa yî?", meaning: { tr: "Nasılsın?", de: "Wie geht es dir?", en: "How are you?" } },
  { ku: "Ez baş im.", meaning: { tr: "İyiyim.", de: "Mir geht es gut.", en: "I am fine." } },
  { ku: "Navê te çi ye?", meaning: { tr: "Adın ne?", de: "Wie heißt du?", en: "What is your name?" } },
  { ku: "Navê min Azad e.", meaning: { tr: "Benim adım Azad.", de: "Ich heiße Azad.", en: "My name is Azad." } },
  { ku: "Bi xêr hatî.", meaning: { tr: "Hoş geldin.", de: "Willkommen.", en: "Welcome." } },
  { ku: "Em ê hev bibînin.", meaning: { tr: "Görüşürüz.", de: "Wir sehen uns.", en: "See you." } },
  { ku: "Tu ji ku derê yî?", meaning: { tr: "Nerelisin?", de: "Woher kommst du?", en: "Where are you from?" } },
  { ku: "Ez hînî Kurmancî dibim.", meaning: { tr: "Kurmanci öğreniyorum.", de: "Ich lerne Kurmanci.", en: "I am learning Kurmanci." } },
  { ku: "Ji kerema xwe dubare bike.", meaning: { tr: "Lütfen tekrar et.", de: "Bitte wiederhole es.", en: "Please repeat it." } },
  { ku: "Ev çi ye?", meaning: { tr: "Bu nedir?", de: "Was ist das?", en: "What is this?" } },
];

const STORAGE_KEY = "migo-progress-v1";
const PREFS_KEY = "migo-preferences-v1";
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
let selectedLanguage = loadPreferences().language;
let progress = loadProgress();

const dailyWord = document.querySelector("#daily-word");
const dailyMeaning = document.querySelector("#daily-meaning");
const learnedCount = document.querySelector("#learned-count");
const correctCount = document.querySelector("#correct-count");
const accuracyRate = document.querySelector("#accuracy-rate");
const languageSelect = document.querySelector("#learning-language");
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

function loadPreferences() {
  try {
    return { language: "tr", ...JSON.parse(localStorage.getItem(PREFS_KEY)) };
  } catch {
    return { language: "tr" };
  }
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

function savePreferences() {
  localStorage.setItem(PREFS_KEY, JSON.stringify({ language: selectedLanguage }));
}

function translate(item) {
  return item.meaning[selectedLanguage] || item.meaning.tr;
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
  dailyMeaning.textContent = `${translate(item)} · ${item.category}`;
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

function renderLanguageSelect() {
  languageSelect.innerHTML = Object.entries(languageOptions)
    .map(([value, label]) => `<option value="${value}">${label}</option>`)
    .join("");
  languageSelect.value = selectedLanguage;
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
  flashTranslation.textContent = translate(item);
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
          <span>${translate(phrase)}</span>
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
          <strong>${item.word} · ${translate(item)}</strong>
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
    .map((item) => translate(item))
    .filter((answer, index, answers) => answer !== translate(quizItem) && answers.indexOf(answer) === index)
    .slice(0, 3);
  const answers = shuffle([translate(quizItem), ...wrongAnswers]);

  quizWord.textContent = quizItem.word;
  quizFeedback.textContent = `${selectedCategory} · ${activeVocabulary.length} kart · ${languageOptions[selectedLanguage]}`;
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

languageSelect.addEventListener("change", (event) => {
  selectedLanguage = event.target.value;
  savePreferences();
  setDailyWord();
  renderCard();
  renderPhrases();
  renderMistakes();
  buildQuiz();
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
  const correctAnswer = translate(quizItem);
  progress.totalAnswers += 1;

  if (selectedAnswer === correctAnswer) {
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
    quizFeedback.textContent = `Nêzîk bû. Bersiva rast: ${correctAnswer}`;
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

renderLanguageSelect();
renderCategoryFilter();
setDailyWord();
renderProgress();
renderCard();
renderPhrases();
renderMistakes();
buildQuiz();
