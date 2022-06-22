let playerScore = 0;
let computerScore = 0;
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


displayScore = function () {
    const playerScreenScore = document.querySelector('.player span');
    const computerScreenScore = document.querySelector('.computer span');
    playerScreenScore.textContent = playerScore;
    computerScreenScore.textContent = computerScore;
}


triggerAnimation = function (value) {
    setTimeout(function () {
        playerHand.style.animation = '';
        computerHand.style.animation = '';
        const choices = ['rock', 'paper', 'scissors'];
        const computerRandom = Math.floor(Math.random() * 3);
        const computerChoice = choices[computerRandom];
        const winner = document.querySelector('.choice')
        if (value === 'rock') {
            playerHand.src = "assets\\rock.png";
            computerHand.src = `/assets/${computerChoice}.png`;
        } else if (value === 'paper') {
            playerHand.src = "assets\\paper.png";
            computerHand.src = `/assets/${computerChoice}.png`;
        } else if (value === 'scissors') {
            playerHand.src = "assets\\scissors.png";
            computerHand.src = `/assets/${computerChoice}.png`;
        }


        if (value === computerChoice) {
            return winner.textContent = 'Tie!'
        }
        else if (value === 'rock' && computerChoice === 'paper') {
            winner.textContent = 'The computer wins';
            computerScore++;
            displayScore();
            return
        }
        else if (value === 'rock' && computerChoice === 'scissors') {
            winner.textContent = 'The player wins';
            playerScore++;
            displayScore();
            return
        }
        else if (value === 'paper' && computerChoice === 'rock') {
            winner.textContent = 'The player wins';
            playerScore++;
            displayScore();
            return
        }
        else if (value === 'paper' && computerChoice === 'scissors') {
            winner.textContent = 'The computer wins';
            computerScore++;
            displayScore();
            return
        }
        else if (value === 'scissors' && computerChoice === 'paper') {
            winner.textContent = 'The player wins';
            playerScore++;
            displayScore();
            return
        }
        else if (value === 'scissors' && computerChoice === 'rock') {
            winner.textContent = 'The computer wins';
            computerScore++;
            displayScore();
            return
        }
    }, 1500);
    playerHand.style.animation = 'fistLeft 1.5s';
    computerHand.style.animation = 'fistRight 1.5s';
};
