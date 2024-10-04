/*let win = 0, lose = 0, tie = 0,
UserRSP, BotNumber , BotRPS, Round, LowerCaseUser,
total = 0, RoundsLeft = 5
function RoundRPS(){
    if (total == 5){
        if (win > lose){
            alert(`you won! Score: wins: ${win}, ties: ${tie}, losses: ${lose}`)
        }
        else if (win < lose){
            alert(`you lost :( Score: wins: ${win}, ties: ${tie}, losses: ${lose}`)
        }
        else {
            alert(`you tied! Score: wins: ${win}, ties: ${tie}, losses: ${lose}`)
        }
    }
    else if (BotRPS == 'rock' || BotRPS == 'paper' || BotRPS == 'scissors'){
        RoundsLeft --
        alert(`(you) ${UserChoice} vs ${BotRPS} (bot) You ${Round}! wins: ${win}, ties: ${tie}, losses: ${lose} Rounds left: ${RoundsLeft}`)
        RockPaperScissors()
    }
} 
function BotRPSFunc(){
    if(BotNumber <= 0.33){
        BotRPS = 'rock'
        RoundRPS()
    }
    if(BotNumber  <= 0.66 && BotNumber  >= 0.33){
        BotRPS = 'paper'
        RoundRPS()
    }
    if(BotNumber  <= 1 && BotNumber  >= 0.66){
        BotRPS = 'scissors'
        RoundRPS()
    }
}
function RockPaperScissors(){
    UserChoice = prompt('type rock, paper or scissors:')
    BotChoice = Math.random()
    BotNumber = BotChoice
    if (UserChoice !== null){
        UserChoice = UserChoice.toLowerCase()
        if (BotChoice <= 0.33 && UserChoice == 'rock'){
            tie ++
            Round = 'tied'
            total ++
            BotRPSFunc()
        }
        else if (BotChoice <= 0.33 && UserChoice == 'paper'){
            win ++
            Round = 'win'
            total ++
            BotRPSFunc()
        }
        else if (BotChoice <= 0.33 && UserChoice == 'scissors'){
            lose ++
            Round = 'lose'
            total ++
           BotRPSFunc()
        }
    
        else if (BotChoice <= 0.66 && BotChoice >= 0.33 && UserChoice == 'paper'){
            tie ++
            Round = 'tied'
            total ++
            BotRPSFunc()
        }
        else if (BotChoice <= 0.66 && BotChoice >= 0.33 && UserChoice == 'rock'){
            lose ++
            Round = 'lose'
            total ++
            BotRPSFunc()
        }
        else if (BotChoice <= 0.66 && BotChoice >= 0.33 && UserChoice == 'scissors') {
            win ++
            Round = 'win'
            total ++
            BotRPSFunc()
        }
        else if (BotChoice <= 1 && BotChoice >= 0.66 && UserChoice == 'scissors') {
            tie ++
            Round = 'tied'
            total ++
            BotRPSFunc()
        }
        else if (BotChoice <= 1 && BotChoice >= 0.66 && UserChoice == 'rock') {
            win ++
            Round = 'win'
            total ++
            BotRPSFunc()
        }
        else if (BotChoice <= 1 && BotChoice >= 0.66 && UserChoice == 'paper') {
            lose ++
            Round = 'lose'
            total ++
            BotRPSFunc()
        }
}
else {
    console.log('game canceled.')
}
}
RockPaperScissors() */