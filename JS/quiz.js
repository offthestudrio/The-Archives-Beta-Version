// Define your quiz questions and answers
const quizData = [
  {
    question: "What is the capital of Australia?",
    choices: ["Sydney", "Melbourne", "Canberra"],
    correctChoice: 2
  },
  {
    question: "Which planet is known as the Red Planet?",
    choices: ["Venus", "Mars", "Jupiter"],
    correctChoice: 1
  },
  // Add more quiz questions as needed
];

let currentQuestion = 0;
let score = 0;

// Function to display the current question and choices
function displayQuestion() {
  const questionElement = document.getElementById("question");
  const choicesElement = document.getElementById("choices");

  questionElement.innerText = quizData[currentQuestion].question;
  choicesElement.innerHTML = "";

  quizData[currentQuestion].choices.forEach((choice, index) => {
    const choiceElement = document.createElement("button");
    choiceElement.innerText = choice;
    choiceElement.addEventListener("click", () => checkAnswer(index));
    choicesElement.appendChild(choiceElement);
  });
}

// Function to check the selected answer
function checkAnswer(choice) {
  if (choice === quizData[currentQuestion].correctChoice) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    displayQuestion();
  } else {
    showResults();
  }
}

// Function to display the quiz results
function showResults() {
  const quizContainer = document.querySelector(".quiz-container");
  const questionElement = document.getElementById("question");
  const choicesElement = document.getElementById("choices");
  const submitButton = document.getElementById("submit-btn");
  const resultsElement = document.getElementById("results");

  quizContainer.removeChild(questionElement);
  quizContainer.removeChild(choicesElement);
  submitButton.style.display = "none";
  resultsElement.innerText = `You scored ${score} out of ${quizData.length}.`;
}

// Call the displayQuestion function to start the quiz
displayQuestion();
