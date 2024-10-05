let PlayerScore = document.querySelector('#PlayerScore'),
ComputerScore = document.querySelector('#ComputerScore'),
Middle = document.querySelector('#middle'),
Round = document.querySelector('#round'),
GameResults, GameResultBtn = document.createElement('button')
GameResultBtn.textContent = 'game results'
GameResultBtn.className = 'GameBtn'
// assign a class to it and make a node based off the class and buttn
// use let to change the score unlike const
const PlayerContainer = document.querySelector('#player'),
ComputerContainer = document.querySelector('#computer'),
RoundContainer = document.querySelector('#middle'),
RockBtn = document.querySelector('#rock'),
PaperBtn = document.querySelector('#paper'),
ScissorsBtn = document.querySelector('scissors'),
bottom = document.querySelector('#bottom')
let PlayerWins = 0, PlayerTies = 0, PlayerLosses = 0, /*display with
PlayerScore and `${Player wins/ties/losses}`*/
ComputerWins = 0, ComputerTies = 0, ComputerLosses = 0, RoundNum = 0
/*display with ComputerScore and `${Computer wins/ties/losses}`*/
// `Round: ${RoundNum}`
PlayerScore.textContent = `Wins: ${PlayerWins} Ties: ${PlayerTies} Losses: ${PlayerLosses}`
ComputerScore.textContent = `Wins: ${ComputerWins} Ties: ${ComputerTies} Losses: ${ComputerLosses}`
Round.textContent = 'Click the rock, paper or scissors button to start. Best of 5!'
    //const newBottom = bottom.cloneNode(true)
    //bottom.parentNode.replaceChild(newBottom, bottom)
let RoundsRemaining = 5
    bottom.addEventListener('click', (event) => {
    let target = event.target //ai did this thank it
    switch(target.id) {
        case 'rock':
            PlayerChoiceRock() 
            if (RoundsRemaining != 0) {
            PlayerChoiceRock()
            }
            RoundsRemaining--
            break
        case 'paper':
            if (RoundsRemaining != 0) {
            PlayerChoicePaper()
            }
            RoundsRemaining--
            break
        case 'scissors':
            if (RoundsRemaining != 0) {
            PlayerChoiceScissors()
            }
            RoundsRemaining--
            break
        case 'GameResults':
            if (RoundsRemaining == 0) {
                winner()
            }
            break
    }
}) 
let PlayerChoice, ComputerNum, ComputerChoice,
RoundWinner
function PlayerChoiceRock() {
    PlayerChoice = 'rock'
    ComputerNumber()
}
function PlayerChoicePaper() {
    PlayerChoice = 'paper'
    ComputerNumber()
}
function PlayerChoiceScissors() {
    PlayerChoice = 'scissors'   
    ComputerNumber()
}
function ComputerNumber() {
    if (RoundsRemaining != 0 && RoundNum < 5) {
    ComputerNum = Math.random()
    ComputerChoiceFunc()
    }
    else if (RoundNum == 5) {
        winner()
    }
}
function ComputerChoiceFunc() {
   // if (RoundsRemaining != 0) {
    if (ComputerNum <= 0.33 && PlayerChoice == 'rock'){
        ComputerChoice = 'rock'
        RoundWinner = 'tie'
        PlayerTies += 1
        ComputerTies += 1
        DisplayRoundResult()
    }
    else if (ComputerNum <= 0.66 && ComputerNum >= 0.33 && PlayerChoice == 'rock'){
        ComputerChoice = 'paper'
        RoundWinner = 'computer'
        ComputerWins += 1
        DisplayRoundResult()
    }
    else if (ComputerNum <= 1 && ComputerNum >= 0.66 && PlayerChoice == 'rock'){
        ComputerChoice = 'scissors'
        RoundWinner = 'player'
        PlayerWins += 1
        DisplayRoundResult()
    }
    else if (ComputerNum <= 0.33 && PlayerChoice == 'paper'){
        ComputerChoice = 'rock'
        RoundWinner = 'player'
        PlayerWins += 1
        DisplayRoundResult()
    }
    else if (ComputerNum <= 0.66 && ComputerNum >= 0.33 && PlayerChoice == 'paper' ) {
        ComputerChoice = 'paper'
        RoundWinner = 'tie'
        ComputerTies += 1
        PlayerTies += 1
        DisplayRoundResult()
    }
    else if (ComputerNum <= 1 && ComputerNum >= 0.66 && PlayerChoice == 'paper'){
        ComputerChoice = 'scissors'
        RoundWinner = 'computer'
        ComputerWins += 1
        DisplayRoundResult()
    }
    else if (ComputerNum <= 0.33 && PlayerChoice == 'scissors'){
        ComputerChoice = 'rock'
        RoundWinner = 'computer'
        ComputerWins += 1
        DisplayRoundResult()
    }
    else if (ComputerNum <= 0.66 && ComputerNum >= 0.33 && PlayerChoice == 'scissors'){
        ComputerChoice = 'paper'
        RoundWinner = 'player'
        PlayerWins += 1
        DisplayRoundResult()
    }
    else if (ComputerNum <= 1 && ComputerNum >= 0.66 && PlayerChoice == 'scissors'){
        ComputerChoice = 'scissors'
        RoundWinner = 'tie'
        ComputerTies += 1
        PlayerTies += 1
        DisplayRoundResult()
    }
    console.log(`${ComputerChoice} num: ${ComputerNum}`)
   // }
}
function DisplayRoundResult() {
    if (RoundWinner == 'player' && RoundNum < 5 && RoundsRemaining != 0) {
        RoundNum += 1
        ComputerLosses += 1
        Round.textContent = `Round: ${RoundNum}, ${PlayerChoice} (you) vs ${ComputerChoice} (computer), ${RoundWinner} wins!
        Press the rock, paper or scissors button to start the next round. (if the round is 5, click display game results.)`
        PlayerScore.textContent = `Wins: ${PlayerWins} Ties: ${PlayerTies} Losses: ${PlayerLosses}`
        ComputerScore.textContent = `Wins: ${ComputerWins} Ties: ${ComputerTies} Losses: ${ComputerLosses}`
    }
    else if (RoundWinner == 'tie' && RoundNum < 5 && RoundsRemaining != 0){
        RoundNum += 1
        Round.textContent = `Round: ${RoundNum}, ${PlayerChoice} (you) vs ${ComputerChoice} (computer), it's a tie!
        Press the rock, paper or scissors button to start the next round. (if the round is 5, click display game results.)`
        PlayerScore.textContent = `Wins: ${PlayerWins} Ties: ${PlayerTies} Losses: ${PlayerLosses}`
        ComputerScore.textContent = `Wins: ${ComputerWins} Ties: ${ComputerTies} Losses: ${ComputerLosses}`
    }
    else if (RoundWinner == 'computer' && RoundNum < 5 && RoundsRemaining != 0) {
        RoundNum += 1
        PlayerLosses += 1
        Round.textContent = `Round: ${RoundNum}, ${PlayerChoice} (you) vs ${ComputerChoice} (computer), ${RoundWinner} wins!
        Press the rock, paper or scissors button to start the next round. (if the round is 5, click display game results.)`
        PlayerScore.textContent = `Wins: ${PlayerWins} Ties: ${PlayerTies} Losses: ${PlayerLosses}`
        ComputerScore.textContent = `Wins: ${ComputerWins} Ties: ${ComputerTies} Losses: ${ComputerLosses}`
    }

}
function winner() {
    let OverallWinner
    if (PlayerWins > ComputerWins) {
        OverallWinner = 'the player'
        Round.textContent = `Player wins: ${PlayerWins}, ties: ${PlayerTies}, losses: ${PlayerLosses} Computer wins: ${ComputerWins}, ties: ${ComputerTies}, losses: ${ComputerLosses} The winner is ${OverallWinner}!`
    }
    else if (PlayerWins < ComputerWins) {
        OverallWinner = 'the computer'
        Round.textContent = `Player wins: ${PlayerWins}, ties: ${PlayerTies}, losses: ${PlayerLosses} Computer wins: ${ComputerWins}, ties: ${ComputerTies}, losses: ${ComputerLosses} The winner is ${OverallWinner}!`
    }
    else if (PlayerWins === ComputerWins) {
        OverallWinner = 'no one'
        Round.textContent = `Player wins: ${PlayerWins}, ties: ${PlayerTies}, losses: ${PlayerLosses} Computer wins: ${ComputerWins}, ties: ${ComputerTies}, losses: ${ComputerLosses} The winner is ${OverallWinner}!`
    }
}
