//Create array with all letters of alphabet
var alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//Var with the array length
var alphaLength = alpha.length;

//Random number with the max length of the array
var randomNumber = Math.floor(Math.random()* (1, alphaLength));

//Logging the target to ensure functionality
console.log(randomNumber);

//Creating a random target
var randomTarget = alpha[randomNumber];

//Logging the target to ensure functionality
console.log(randomTarget);

//Creating a number for guesses left
var remaining = 9;

//Creating win/loss
var win = 0;
var lose = 0;

//Win/lose document var
var docWin = document.getElementById("recWin");
var docLose = document.getElementById("recLoss");