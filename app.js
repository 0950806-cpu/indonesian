const flashcards = [
  {
    hanzi: "谢谢",
    pinyin: "xiè xie",
    indo: "Terima kasih",
    example: "谢谢你帮助我。 = Terima kasih sudah membantu saya.",
  },
  {
    hanzi: "请问",
    pinyin: "qǐng wèn",
    indo: "Permisi / Bolehkah saya bertanya",
    example: "请问，地铁站在哪儿？ = Permisi, stasiun MRT di mana?",
  },
  {
    hanzi: "多少钱",
    pinyin: "duō shǎo qián",
    indo: "Berapa harganya?",
    example: "这个多少钱？ = Ini berapa harganya?",
  },
  {
    hanzi: "我想要",
    pinyin: "wǒ xiǎng yào",
    indo: "Saya ingin",
    example: "我想要一杯咖啡。 = Saya ingin secangkir kopi.",
  },
];

const quizzes = [
  {
    hanzi: "再见",
    correct: "Sampai jumpa",
    options: ["Selamat pagi", "Sampai jumpa", "Terima kasih", "Maaf"],
  },
  {
    hanzi: "可以",
    correct: "Boleh / Bisa",
    options: ["Tidak bisa", "Boleh / Bisa", "Makan dulu", "Kamu"],
  },
  {
    hanzi: "现在",
    correct: "Sekarang",
    options: ["Kemarin", "Sekarang", "Nanti", "Minggu"],
  },
];

const flashcard = document.getElementById("flashcard");
const flashcardHanzi = document.getElementById("flashcard-hanzi");
const flashcardPinyin = document.getElementById("flashcard-pinyin");
const flashcardIndo = document.getElementById("flashcard-indo");
const flashcardExample = document.getElementById("flashcard-example");
const nextCardButton = document.getElementById("next-card");

const quizWord = document.getElementById("quiz-word");
const quizOptions = document.getElementById("quiz-options");
const quizFeedback = document.getElementById("quiz-feedback");
const nextQuizButton = document.getElementById("next-quiz");

let flashcardIndex = 0;
let quizIndex = 0;

const updateFlashcard = () => {
  const card = flashcards[flashcardIndex];
  flashcardHanzi.textContent = card.hanzi;
  flashcardPinyin.textContent = card.pinyin;
  flashcardIndo.textContent = card.indo;
  flashcardExample.textContent = card.example;
};

const updateQuiz = () => {
  const quiz = quizzes[quizIndex];
  quizWord.textContent = quiz.hanzi;
  quizOptions.innerHTML = "";
  quizFeedback.textContent = "";

  quiz.options.forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = option;
    button.addEventListener("click", () => {
      const isCorrect = option === quiz.correct;
      button.classList.add(isCorrect ? "correct" : "wrong");
      quizFeedback.textContent = isCorrect
        ? "Benar! Mantap, lanjutkan latihan."
        : `Belum tepat. Jawaban yang benar: ${quiz.correct}`;
    });
    quizOptions.appendChild(button);
  });
};

flashcard.addEventListener("click", () => {
  flashcard.classList.toggle("is-flipped");
});

nextCardButton.addEventListener("click", () => {
  flashcardIndex = (flashcardIndex + 1) % flashcards.length;
  flashcard.classList.remove("is-flipped");
  updateFlashcard();
});

nextQuizButton.addEventListener("click", () => {
  quizIndex = (quizIndex + 1) % quizzes.length;
  updateQuiz();
});

updateFlashcard();
updateQuiz();
