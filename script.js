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

console.log(getComputerChoice());