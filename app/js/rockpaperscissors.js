
function getInput()
{
    console.log("--------------------------");
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}

function randomPlay()
{
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}


function getPlayerMove(move)
{
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    if (move != null)
    {
      playerMove = move;
    }
    else
    {
       playerMove = getInput();
    }
    return playerMove;
}

function getComputerMove(move)
 {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    if (move !=null)
    {
      computerMove = move;
    }
    else
     {
       computerMove = randomPlay();
    }
    return computerMove;
 }

function getWinner(playerMove,computerMove)
 {
    var winner;
    if (playerMove == "rock" && computerMove=="scissors")
    {
      winner = "Player";

    }
    else if (playerMove == "scissors" && computerMove == "paper")
    {
        winner = "Player";

    }
    else if (playerMove == "paper" && computerMove =="rock")
     {
      winner = "Player";
     }

    else if (playerMove == "rock" && computerMove =="rock")
      {
      winner = "Tie";
      }

    else if (playerMove == "scissors" && computerMove =="scissors")
     {
      winner = "Tie";

    }
    else if (playerMove == "paper" && computerMove =="paper")
     {
      winner = "Tie";

    }
    else {
      winner = "Computer";

    }


    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */


    return winner;
}




function playToFive()
{
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */


  while(playerWins < 5 && computerWins < 5)
   {
      playerChoice = getPlayerMove();
      computerChoice = getComputerMove();

      var result = getWinner(playerChoice,computerChoice);

      if (result == "Player")
         {
        playerWins ++;
         }
        else if (result =="Computer")
         {
          computerWins ++;
         }
	else
	 {
	console.log("This round was a tie");
	 }

        console.log('Player chose ' + playerChoice + ' while Computer chose ' + computerChoice);
        console.log('The score is currently PLAYER:' + playerWins + ' to COMPUTER:' + computerWins + '\n');


    //return [playerWins, computerWins];
   }

}

playToFive();
