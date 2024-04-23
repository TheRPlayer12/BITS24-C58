var quizzes = JSON.parse(localStorage.getItem('quizzes')) || [];

function renderQuiz() {
    var quizList = document.getElementById('quiz-list');
    quizList.innerHTML = '';

    quizzes.forEach(function(quiz, index) {
        var quizElement = document.createElement('p');
        quizElement.textContent = (index + 1) + '. ' + quiz.question;

        var removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.addEventListener('click', function() {
            removeQuiz(index);
        });

        quizList.appendChild(quizElement);
        quizList.appendChild(removeBtn);
    });
}
function addQuiz() {
    var question = document.getElementById('question-input').value;
    var choices = document.getElementById('choices-input').value.split('/');
    var answer = document.getElementById('answer-input').value;

    quizzes.push({ question: question, choices: choices, answer: parseInt(answer - 1) });

    // Clear the inputs
    document.getElementById('question-input').value = '';
    document.getElementById('choices-input').value = '';
    document.getElementById('answer-input').value = '';

    localStorage.setItem('quizzes', JSON.stringify(quizzes));
    renderQuiz();
}

function removeQuiz(index) {
    quizzes.splice(index, 1);

    localStorage.setItem('quizzes', JSON.stringify(quizzes));
    renderQuiz();
}

function previewQuiz() {
    window.open('quiz.html', '_blank');
}

document.getElementById('add-quiz-btn').addEventListener('click', addQuiz);
renderQuiz();
