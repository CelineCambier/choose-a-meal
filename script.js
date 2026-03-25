const buttons = document.querySelectorAll('button');
const mealImage = document.getElementById('meal-image');
const startOverBtn = document.getElementById('startOver');
const textMessage = document.getElementById('text-message');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        mealImage.src = button.dataset.img;
        mealImage.style.display = 'block';
        textMessage.textContent = button.dataset.message;
        buttons.forEach(btn => btn.style.display = 'none');
        startOverBtn.style.display = 'block';
    });
});

startOverBtn.addEventListener("click", restartGame);

function restartGame() {
    window.location.reload();
}