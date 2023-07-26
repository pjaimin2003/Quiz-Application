const quizData = [{
        question: "What is the capital of France?",
        answers: ["London", "Paris", "Berlin", "Madrid"],
        correct: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: ["Mars", "Jupiter", "Venus", "Mercury"],
        correct: "Mars"
    },
    {
        question: "What is 5 + 7?",
        answers: ["11", "12", "21", "13"],
        correct: "12"
    }

];

const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');

function buildQuiz() {
    const output = [];

    quizData.forEach((questionData, index) => {
        const answers = [];

        for (let i = 0; i < questionData.answers.length; i++) {
            answers.push(`
                <label>
                    <input type="radio" name="question${index}" value="${questionData.answers[i]}">
                    ${questionData.answers[i]}
                </label>
            `);
        }

        output.push(`
            <div class="question">
                <p>${questionData.question}</p>
                ${answers.join('')}
            </div>
        `);
    });

    quizContainer.innerHTML = output.join('');
}

function calculateScore() {
    const questions = quizContainer.querySelectorAll('.question');
    let score = 0;

    quizData.forEach((questionData, index) => {
        const selectedAnswer = questions[index].querySelector(`input[name="question${index}"]:checked`);

        if (selectedAnswer && selectedAnswer.value === questionData.correct) {
            score++;
        }
    });

    return score;
}

function showResult(score) {
    let message;
    if (score === quizData.length) {
        message = "Congratulations! You're a winner!";

    } else {
        message = "You did a great job, but you missed some questions.";

    }
    alert(`${message} Your score is: ${score}/${quizData.length}`);
}

submitButton.addEventListener('click', () => {
    const score = calculateScore();
    showResult(score);
});

buildQuiz();