function getComptureChoice (arr) {
    return arr[Math.floor(Math.random() * arr.length)] 
}

const choices = ['Rock', 'Paper', 'Scissors'];

for (let i = 1; i < 6; i++) {
    let mychoice = prompt('Your choice: ')
    let computerChoice = getComptureChoice(choices)

    if (mychoice === computerChoice) {
        console.log('Draw! Rext round')
    };

    if (
    (mychoice === 'Rock' && computerChoice === 'Scissors') || 
    (mychoice === 'Paper' && computerChoice === 'Rock') || 
    (mychoice === 'Scissors' && computerChoice === 'Paper')
        ) {
        console.log(`${mychoice} beats ${computerChoice}, Player won!`)
    } else {
        console.log(`${computerChoice} beats ${mychoice}, Computer won!`)
    };
    
}
