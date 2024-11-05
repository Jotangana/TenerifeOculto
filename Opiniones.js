document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registrationForm');
    const commentForm = document.getElementById('commentForm');
    const commentsContainer = document.getElementById('commentsContainer');
    
    let username = '';

    registrationForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const userInput = document.getElementById('username').value;
        if (userInput) {
            username = userInput;
            alert(`Bienvenido, ${username}! Puedes empezar a comentar.`);
            registrationForm.reset();
        }
    });

    commentForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const commentInput = document.getElementById('comment').value;

        if (username && commentInput) {
            const commentElement = document.createElement('div');
            commentElement.className = 'comments';
            commentElement.textContent = `${username}: ${commentInput}`;
            commentsContainer.appendChild(commentElement);
            commentForm.reset();
        } else {
            alert('Por favor, regístrate antes de comentar.');
        }
    });
});
function goToHome() {
    window.location.href = "index.html"; // Cambia esto por la URL de tu página principal
}