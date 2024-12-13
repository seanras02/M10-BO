const setup = document.getElementById('setup');
const game = document.getElementById('game');
const startButton = document.getElementById('startGame');
const playerNameInput = document.getElementById('playerName');
const timeOptions = document.getElementById('timeOptions');
const gameArea = document.getElementById('gameArea');
const timerDisplay = document.getElementById('timer');
const scoreDisplay = document.getElementById('score');
const leaderboardList = document.getElementById('leaderboardList');


let timer, score, targetInterval, countdown;

function startGame(){
    const playerName = playerNameInput.ariaValueMax.trim();
    const gameTime = parseInt(timeOptions.value);
    if (!playerName){
        alert('Enter a name!');
    }
}