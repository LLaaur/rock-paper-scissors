let playerScore = 0;
let computerScore = 0;
const introScreen = document.querySelector('.intro-screen');
const startBtn = document.querySelector('.start-game');
const loadScreen = document.querySelector('.wrapper');
const gameScreen = document.querySelector('.game-screen');
const playerScreenScore = document.querySelector('.player span');
const computerScreenScore = document.querySelector('.computer span');
const gameBtns = document.querySelector('.pick');
const playerHand = document.querySelector('.fist-left');
const computerHand = document.querySelector('.fist-right');
const winner = document.querySelector('.choice');
const gameOverScreen = document.querySelector('.buttons-container');
const exitBtn = document.querySelector('.exit');
const homeBtn = document.querySelector('.home');
const restartBtn = document.querySelector('.restart');

function showGame() {
    loadScreen.style.display = 'none';
    gameScreen.style.display = 'flex';
};

swapScreens = function () {
    if (startBtn) {
        introScreen.style.display = 'none';
        loadScreen.style.display = 'flex';
        setTimeout(showGame, 2000);
    };
};


displayScore = function () {
    playerScreenScore.textContent = playerScore;
    computerScreenScore.textContent = computerScore;
};


triggerAnimation = function (value) {
    setTimeout(function () {
        playerHand.style.animation = '';
        computerHand.style.animation = '';
        const choices = ['rock', 'paper', 'scissors'];
        const computerRandom = Math.floor(Math.random() * 3);
        const computerChoice = choices[computerRandom];
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
            gameOver();
            return
        }
        else if (value === 'rock' && computerChoice === 'scissors') {
            winner.textContent = 'The player wins';
            playerScore++;
            displayScore();
            gameOver();
            return
        }
        else if (value === 'paper' && computerChoice === 'rock') {
            winner.textContent = 'The player wins';
            playerScore++;
            displayScore();
            gameOver();
            return
        }
        else if (value === 'paper' && computerChoice === 'scissors') {
            winner.textContent = 'The computer wins';
            computerScore++;
            displayScore();
            gameOver();
            return
        }
        else if (value === 'scissors' && computerChoice === 'paper') {
            winner.textContent = 'The player wins';
            playerScore++;
            displayScore();
            gameOver();
            return
        }
        else if (value === 'scissors' && computerChoice === 'rock') {
            winner.textContent = 'The computer wins';
            computerScore++;
            displayScore();
            gameOver();
            return
        }
    }, 1500);
    playerHand.style.animation = 'fistLeft 1.5s';
    computerHand.style.animation = 'fistRight 1.5s';
};

gameOver = function(){
    if (playerScore === 5 && computerScore < playerScore){
        winner.textContent = 'The player wins this match';
        $(gameBtns).css('display', 'none');
        $(gameOverScreen).css('display', 'flex');
    }
    else if (computerScore === 5 && playerScore < computerScore){
        winner.textContent = 'The computer wins this match';
        $(gameBtns).css('display', 'none');
        $(gameOverScreen).css('display', 'flex');
    };
};

gameOverBtns = function(value){
    if(value === 'home'){
        location.reload();
    }
    else if(value === 'restart'){
        $(gameOverScreen).css('display', 'none');
        $(gameBtns).css('display', 'flex');
        winner.textContent = '';
        computerScore = 0;
        playerScore = 0;
        playerScreenScore.textContent = playerScore;
        computerScreenScore.textContent = computerScore;
        return;
    }
    else if(value === 'exit'){
        window.close();
    };
};