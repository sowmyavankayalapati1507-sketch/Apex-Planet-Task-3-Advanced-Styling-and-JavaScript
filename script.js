// Quiz Questions
const quizData = [
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars"
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["William Shakespeare", "Charles Dickens", "J.K. Rowling", "Mark Twain"],
    answer: "William Shakespeare"
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Shark"],
    answer: "Blue Whale"
  }
];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");

// Load Question
function loadQuestion() {
  let currentQuestion = quizData[currentQuestionIndex];
  questionEl.innerText = currentQuestion.question;
  optionsEl.innerHTML = "";

  currentQuestion.options.forEach(option => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.classList.add("option-btn");
    btn.onclick = () => selectAnswer(btn, currentQuestion.answer);
    optionsEl.appendChild(btn);
  });
}

// Select Answer
function selectAnswer(button, correctAnswer) {
  const allBtns = document.querySelectorAll(".option-btn");
  allBtns.forEach(btn => btn.disabled = true);

  if (button.innerText === correctAnswer) {
    button.style.backgroundColor = "green";
    score++;
  } else {
    button.style.backgroundColor = "red";
  }
}

// Next Button
nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

// Show Result
function showResult() {
  questionEl.innerText = `🎉 Quiz Finished! Your score: ${score}/${quizData.length}`;
  optionsEl.innerHTML = "";
  nextBtn.classList.add("hidden");
  restartBtn.classList.remove("hidden");
}

// Restart Quiz
restartBtn.addEventListener("click", () => {
  currentQuestionIndex = 0;
  score = 0;
  restartBtn.classList.add("hidden");
  nextBtn.classList.remove("hidden");
  loadQuestion();
});

// Load first question
loadQuestion();

// --------------------
// Random Joke Generator
// --------------------
const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("joke-btn");

const jokes = [
  "Why don’t scientists trust atoms? Because they make up everything!",
  "Why was the math book sad? Because it had too many problems.",
  "Why can’t your nose be 12 inches long? Because then it would be a foot!",
  "I told my computer I needed a break, and now it won’t stop sending me Kit-Kats.",
  "Why did the scarecrow win an award? Because he was outstanding in his field!"
];

jokeBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  jokeEl.innerText = jokes[randomIndex];
});
