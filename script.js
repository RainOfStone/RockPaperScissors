let PlayerScore = document.querySelector('#PlayerScore'),
ComputerScore = document.querySelector('#ComputerScore'),
Middle = document.querySelector('#middle'),
Round = document.querySelector('#round')
// use let to change the score unlike const
const PlayerContainer = document.querySelector('#player'),
ComputerContainer = document.querySelector('#computer')
RoundContainer = document.querySelector('#middle'),
RockBtn = document.querySelector('#rock'),
PaperBtn = document.querySelector('#paper'),
ScissorsBtn = document.querySelector('scissors')
let PlayerWins = 0, PlayerTies = 0, PlayerLosses = 0, /*display with
PlayerScore and `${Player wins/ties/losses}`*/
ComputerWins = 0, ComputerTies = 0, ComputerLosses = 0, RoundNum = 0
/*display with ComputerScore and `${Computer wins/ties/losses}`*/
// `Round: ${RoundNum}`
PlayerScore.textContent = `Wins: ${PlayerWins} Ties: ${PlayerTies} Losses: ${PlayerLosses}`
ComputerScore.textContent = `Wins: ${ComputerWins} Ties: ${ComputerTies} Losses: ${ComputerLosses}`
Round.textContent = 'Click the rock, paper or scissors button to start. Best out of 5!'