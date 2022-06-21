const introScreen = document.querySelector('.intro-screen');
const startBtn = document.querySelector('.start-game');
const loadScreen = document.querySelector('.wrapper');
const gameScreen = document.querySelector('.game-screen');
const playerHand = document.querySelector('.fist-left');
const computerHand = document.querySelector('.fist-right');

function showGame() {
    loadScreen.style.display = 'none';
    gameScreen.style.display = 'flex';
};

swapScreens = function () {
    if (startBtn) {
        introScreen.style.display = 'none';
        loadScreen.style.display = 'flex';
        setTimeout(showGame, 2000);
    }
};

triggerAnimation = function(){
    playerHand.style.animation = 'fistLeft 2s';
    computerHand.style.animation = 'fistRight 2s';
};