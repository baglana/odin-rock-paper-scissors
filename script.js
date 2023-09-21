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
 Problem:
 Simulate one round of the game between the player and the computer

 Pseudocode:
 Take player's choice and computer's choices as two input strings
 Write a separate utility function for case conversion:
  Convert player selection parameter string to proper case
    take string's first character, convert it to upper case
    take the rest of the string and convert it to lower case
    concatenate both strings
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

function showWinOrLoseOrTie(playerSelection, computerSelection) {
  // playerSelection = playerSelection.charAt(0).toUpperCase();

  const choiceStrength = {
    'Paper': 0,
    'Scissors': 1,
    'Rock': 2
  };

  console.log(`player: ${playerSelection}; strength: ${choiceStrength[playerSelection]}`);
  console.log(`computer: ${computerSelection}; strength: ${choiceStrength[computerSelection]}`);

  const diff = choiceStrength[playerSelection]
              - choiceStrength[computerSelection];

  switch (diff) {
    case 0:
      console.log("It's a tie!");
      return;

    case 1:
    case -2:
      console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
      return;

    case -1:
    case 2:
      console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
      return;

    default:
      console.log(`Unexpected case: diff is ${diff}`);
      break;
  }
}

showWinOrLoseOrTie('Rock', getComputerChoice());