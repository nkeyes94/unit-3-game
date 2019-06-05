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

//Creating win/loss
var win = 0;
var lose = 0;

//Win/lose document var
var docWin = document.getElementById("recWins");
var docLose = document.getElementById("recLoss");
var rem = document.getElementById("rem");

//Win function
function victory(){
    alert("Round won!");
    win++;
    docWin.innerHTML=win;
    rem.innerHTML=9;
    randomTarget;
    console.log(randomTarget);
}

document.onkeypress = function(e){
    console.log(e.key +" pressed");
    var remaining = rem.innerHTML - 1;
    console.log("rem: "+ remaining);
    rem.innerHTML = remaining;

    if(e.key.toUpperCase() === randomTarget){
        victory();
    }
}


