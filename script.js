function getComputerChoice (arr) {
    return arr[Math.floor(Math.random() * arr.length)] 
}

const choices = Array.from(document.querySelectorAll('.btn'));
const result = document.querySelector('.results');
const roundCounter = document.querySelector('.round-count');
const player_score = document.querySelector('.player-score');
const cpu_score = document.querySelector('.cpu-score');
const resultText = document.querySelector('.results-text')
let player_scoreNum = 0;
let cpu_scoreNum = 0;
let counter = 0;

;

choices.forEach(player_choice => player_choice.addEventListener('click', function (){
    let player_str = player_choice.textContent.toLowerCase()
    let cpu_str = getComputerChoice(choices).textContent.toLowerCase()


    counter += 1;
    roundCounter.textContent = `Round ${counter}`

    if (player_str === cpu_str) {
        resultText.textContent = 'Tie!'  
    } else {

        if (
            (player_str === 'rock' && cpu_str === 'scissors') ||
            (player_str === 'paper' && cpu_str === 'rock') ||
            (player_str === 'scissors' && cpu_str === 'paper')
        ) {
            player_scoreNum += 1
            player_score.textContent = `${player_scoreNum}`
            resultText.textContent = `${player_str} beats ${cpu_str}. Player wins!`

        } else {
            cpu_scoreNum += 1
            cpu_score.textContent = `${cpu_scoreNum}`
            resultText.textContent = `${cpu_str} beats ${player_str}. Computer wins!`
        }
    };
}));
