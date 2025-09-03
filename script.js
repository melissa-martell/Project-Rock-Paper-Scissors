let humanScore = 0;
let computerScore = 0;

playGame();


function getComputerChoice() 
{
    // Get int value from 0 to 2
    let randomNum = Math.floor(Math.random() * 3) ;

    if(randomNum == 0)
    {
        return "rock";
    }
    else if(randomNum == 1)
    {
        return "paper";
    }
    else 
    {
        return "scissors";
    }
}

function getHumanChoice()
{
    let humanChoise, humanChoise_lowerCase;

    do
    {
       humanChoise = prompt("Rock Paper Scissors go....").toLowerCase(); 

       if(humanChoise == "rock" || humanChoise == "paper" || humanChoise == "scissors")
        {
            return humanChoise;
        }
    }
    while(true);
}

function playRound(humanChoise, computerChoise)
{
    switch (humanChoise)
    {
        case "rock": 
        {
            if(computerChoise == "scissors")
            {
                console.log("You win! Rock beats Scissors");
                return 1;
            }
            else if (computerChoise == "paper")
            {
                console.log("You lose! Paper beats Rock");
                return 0;
            }
            else
            {
                console.log("TIE!");
            }
            break;
        }
        case "paper":
        {
            if(computerChoise == "rock")
            {
                console.log("You win! Paper beats Rock");
                return 1;
            }
            else if (computerChoise == "scissors")
            {
                console.log("You lose! Scissors beats Paper");
                return 0;
            }
            else
            {
                console.log("TIE!");
            }
            break;
        }
        case "scissors":
        {
            if(computerChoise == "paper")
            {
                console.log("You win! Scissors beats Paper");
                return 1;
            }
            else if (computerChoise == "rock")
            {
                console.log("You lose! Rock beats Scissors");
                return 0;
            }
            else
            {
                console.log("TIE!");
            }
        }
    }
}

function playGame() 
{
    let score, cont = 0;

    let humanSelection;
    let computerSelection;

    // 5 rounds
    do
    {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();

        console.log(humanSelection);
        console.log(computerSelection);

        score = playRound(humanSelection, computerSelection);

        if(score == 1)
        {
            humanScore++;
        }
        else
        {
            computerScore++;
        }

        cont++;
    }
    while(cont < 5)

    if(humanScore > computerScore)
    {
        console.log("YOU WIN!!!");
    }
    else if(humanScore < computerScore)
    {
        console.log("YOU LOSE!!!");
    }
    else
    {
        console.log("IT IS A TIE!!!");
    }

}