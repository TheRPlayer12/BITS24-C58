var quizzes = JSON.parse(localStorage.getItem('quizzes')) || [];
var answers = [];

function renderQuiz() {
    var quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = '';

    quizzes.forEach(function(quiz, index) {
        var questionElement = document.createElement('p');
        questionElement.textContent = (index + 1) + '. ' + quiz.question;
        quizContainer.appendChild(questionElement);
        quiz.choices.forEach(function(choice, choiceIndex) {
            var choiceElement = document.createElement('input');
            choiceElement.type = 'radio';
            choiceElement.name = 'quiz' + index;
            choiceElement.value = choiceIndex;
            quizContainer.appendChild(choiceElement);

            var labelElement = document.createElement('label');
            labelElement.textContent = choice;
            quizContainer.appendChild(labelElement);

            quizContainer.appendChild(document.createElement('br'));
        });
    });
}

function submitAnswers() {
    quizzes.forEach(function(quiz, index) {
        var selectedChoice = document.querySelector('input[name="quiz' + index + '"]:checked').value;
        answers.push(selectedChoice);
    });
    calculateScore();
}

function calculateScore() {
    var score = 0;
    answers.forEach(function(answer, index) {
        if (quizzes[index].answer == answer) {
            score++;
        }
    });
    document.getElementById('result').textContent = 'Your score is: ' + score;
}
document.getElementById('submit-btn').addEventListener('click', submitAnswers);
renderQuiz();
