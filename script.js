const questions = [
    {
        question: "What's my favorite color?",
        answers: [
            "Red",
            "Blue",
            "Green",
            "Pink"
        ],
        correct: "Green"
    },
    {
        question: "What's my favorite food?",
        answers: [
            "Pizza",
            "Sushi",
            "Ice Cream",
            "Pasta"
        ],
        correct: "Ice Cream"
    },
    {
        question: "What's my favorite movie?",
        answers: [
            "Inception",
            "Titanic",
            "Avatar",
            "The Lion King"
        ],
        correct: "Titanic"
    },
    {
        question: "What's my favorite hobby?",
        answers: [
            "Painting",
            "Reading",
            "Dancing",
            "Cooking"
        ],
        correct: "Dancing"
    },
    {
        question: "What's my favorite animal?",
        answers: [
            "Dog",
            "Cat",
            "Rabbit",
            "Horse"
        ],
        correct: "Dog"
    },
    {
        question: "What's my dream travel destination?",
        answers: [
            "Paris",
            "Tokyo",
            "New York",
            "Sydney"
        ],
        correct: "Paris"
    }
];

function loadQuiz() {
    const quizContainer = document.getElementById("quiz");
    questions.forEach((q, index) => {
        const questionElement = document.createElement("div");
        questionElement.innerHTML = `<h3>${q.question}</h3>`;
        q.answers.forEach(answer => {
            questionElement.innerHTML += `
                <label>
                    <input type="radio" name="question${index}" value="${answer}">
                    ${answer}
                </label><br>
            `;
        });
        quizContainer.appendChild(questionElement);
    });

    document.getElementById("submit").classList.remove("hidden");
}

function showResults() {
    const resultContainer = document.getElementById("result");
    let score = 0;

    questions.forEach((q, index) => {
        const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedAnswer && selectedAnswer.value === q.correct) {
            score++;
        }
    });

    resultContainer.innerHTML = `You got ${score} out of ${questions.length} questions right!`;
    
    const popup = document.getElementById("popup");
    popup.style.display = "flex"; // Show the popup
}

document.getElementById("submit").addEventListener("click", showResults);
document.getElementById("close-popup").addEventListener("click", () => {
    document.getElementById("popup").style.display = "none"; // Hide the popup
});

loadQuiz();
