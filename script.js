/*
 Problem:
 Return one of the three strings ('Rock', 'Paper', 'Scissors') randomly

 Pseudocode:
 Store three strings in an array
 Generate a random number from 0 to 2
 Return the array element with index equal to the random number
*/

function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomIndex = Math.floor((Math.random() * choices.length));
  return choices[randomIndex];
}

/*
 Convert player selection parameter string to proper case
    take string's first character, convert it to upper case
    take the rest of the string and convert it to lower case
    concatenate both strings and return it
*/

function toCapitalizedCase(txt) {
  return txt.charAt(0).toUpperCase()
        + txt.slice(1).toLowerCase();
}

/*
 Problem:
 Simulate one round of the game between the player and the computer

 Pseudocode:
 Take player's choice and computer's choices as two input strings
 Convert player's choice to capitalized case
 Decide if the player is a winner or a loser and return corresponding string
 Create an object with choice strings as keys and numbers from 0 to 2 as
 their strength
 Subtract computer choice strength from player choice strength and store in diff var

 if strength diff is 0
  its a tie
 if strength diff is 1 and -2
  Player wins
 if strength diff is -1 and 2
  Player loses
 */

  
function playRound(playerSelection, computerSelection) {
  
  playerSelection = toCapitalizedCase(playerSelection);

  const choiceStrength = {
    'Paper': 0,
    'Scissors': 1,
    'Rock': 2
  };

  // console.log(`player: ${playerSelection}; strength: ${choiceStrength[playerSelection]}`);
  // console.log(`computer: ${computerSelection}; strength: ${choiceStrength[computerSelection]}`);

  const diff  = choiceStrength[playerSelection]
              - choiceStrength[computerSelection];

  switch (diff) {
    case 0:
      return {
        playerScore: 0,
        computerScore: 0,
        msg: "It's a tie!"
      };

    case 1:
    case -2:
      return {
        playerScore: 1,
        computerScore: 0,
        msg: `You Win! ${playerSelection} beats ${computerSelection}`
      };

    case -1:
    case 2:
      return {
        playerScore: 0,
        computerScore: 1,
        msg: `You Lose! ${computerSelection} beats ${playerSelection}`
      };

    default:
      return `Unexpected case: diff is ${diff}`;
  }
}

/*
  Problem: play 5 rounds of Rock Paper Scissors and output the winner

  Pseudocode:
  Create two variables to store player's and computer's score
  Call playRound() function for 5 times
  if the returned string starts with 'You win' add 1 to player's score
  if it is 'You lose' add 1 to computer's score
  Output the result
*/

function game() {
  let round = 0;
  let playerScore = 0;
  let computerScore = 0;

  const roundPara = document.querySelector('#round');
  roundPara.style.cssText = 'font-size: 16px;';

  const buttons = document.querySelectorAll('button');

  buttons.forEach((button) => {

    button.addEventListener('click', () => {
      roundPara.textContent = `Round ${++round}`;
      console.log(`%c\nRound ${round}`, "font-size: 16px;");

      const playerSelection = button.value;
      const computerSelection = getComputerChoice();

      const roundResult = playRound(playerSelection, computerSelection);
      console.table(roundResult);

      playerScore += roundResult.playerScore;
      computerScore += roundResult.computerScore;

      showResults(playerScore, computerScore);
    });
    
  });

}

function showResults(playerScore, computerScore) {
  const styles = {
    won: "font-size: 20px; font-weight: bold; color: green",
    lost: "font-size: 20px; font-weight: bold; color: red",
    tie: "font-size: 20px; font-weight: bold; color: grey"
  }

  const resultsDiv = document.querySelector('#results');
  resultsDiv.style = '';
  let resultsMsg = `Final score: ${playerScore} - ${computerScore}`;

  if (playerScore > computerScore) {

    resultsMsg = `You Won! ` + resultsMsg;
    console.log(`%c\n` + resultsMsg, styles.won);

    resultsDiv.textContent = resultsMsg;
    resultsDiv.style.cssText = styles.won;

  } else if (playerScore < computerScore) {

    resultsMsg = `You Lost! ` + resultsMsg;
    console.log(`%c\n` + resultsMsg, styles.lost);

    resultsDiv.textContent = resultsMsg;
    resultsDiv.style.cssText = styles.lost;

  } else {

    resultsMsg = `It's a tie! ` + resultsMsg;
    console.log(`%c\n` + resultsMsg, styles.tie);

    resultsDiv.textContent = resultsMsg;
    resultsDiv.style.cssText = styles.tie;

  }
}

game();