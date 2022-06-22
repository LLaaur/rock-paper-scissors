const playerScore = 0;
const computerScore = 0;
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



triggerAnimation = function(value){ setTimeout(function(){
    playerHand.style.animation = '';
    computerHand.style.animation = '';
    const choices = ['rock', 'paper', 'scissors'];
    const computerRandom = Math.floor(Math.random() * 3);
    const computerChoice = choices[computerRandom];
    if (value === 'rock'){
        playerHand.src = "assets\\rock.png";
        computerHand.src = `/assets/${computerChoice}.png`;
    } else if (value === 'paper'){
        playerHand.src = "assets\\paper.png";
        computerHand.src = `/assets/${computerChoice}.png`;
    } else if (value === 'scissors'){
        playerHand.src = "assets\\scissors.png";
        computerHand.src = `/assets/${computerChoice}.png`;
    }
}, 1500);
playerHand.style.animation = 'fistLeft 1.5s';
computerHand.style.animation = 'fistRight 1.5s';
};