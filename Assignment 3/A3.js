const username = "KTK";
const password = "humber";

document.getElementById('login-btn').addEventListener('click', function () {
    const inputUser = document.getElementById('username').value;
    const inputPass = document.getElementById('password').value;
    
    if (inputUser === username && inputPass === password) {
        document.getElementById('auth-section').style.display = 'none';
        document.getElementById('quiz-section').style.display = 'block';
    } else {
        alert('Wrong User Name Or Password Input');
    }
});

document.getElementById('submit-quiz').addEventListener('click', function () {
    const questions = document.querySelectorAll('.question');
    let score = 0;
    
    questions.forEach((question) => {
        const selectedAnswer = question.querySelector('input[type="radio"]:checked');
        if (selectedAnswer) {
            if (selectedAnswer.value === 'correct') {
                selectedAnswer.parentElement.classList.add('correct');
                score++;
            } else {
                selectedAnswer.parentElement.classList.add('wrong');
            }
        }
    });
    document.getElementById('quiz-section').style.display = 'none';
    document.getElementById('score-section').style.display = 'block';
    document.getElementById('score').innerText = score + '/' + questions.length;
});

const totalQuestions = document.querySelectorAll('.question').length;

function updateProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    currentQuestion++;
    const progress = (currentQuestion / totalQuestions) * 100;
    progressBar.style.width = progress + '%';
}

document.querySelectorAll('input[type="radio"]').forEach((input) => {
    input.addEventListener('click', updateProgressBar);
});