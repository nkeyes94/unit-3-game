//Create array with all letters of alphabet
var alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//Var with the array length
var alphaLength = alpha.length;

//Random number with the max length of the array
var randomNumber = Math.floor(Math.random()* (1, alphaLength));

//Creating a random target
var randomTarget = alpha[randomNumber];

//Creating win/loss
var win = 0;
var lose = 0;

//Win/lose document var
var docWin = document.getElementById("recWins");
var docLose = document.getElementById("recLoss");
var rem = document.getElementById("rem");
var recGuess = document.getElementById("guesses");

//Win function
function victory(){
    alert("Round won!");
    win++;
    docWin.innerHTML=win;
    rem.innerHTML=9;
    randomTarget = newRandom();
}

function loss(){
    alert("Round lost!");
    lose++;
    docLose.innerHTML=lose;
    rem.innerHTML=9;
    randomTarget = newRandom();
}

//function newRandom (for a new target)
function newRandom(){
    var newNumber = Math.floor(Math.random() * (1, alphaLength));
    var newRandom = alpha[newNumber];
    return newRandom;
}

document.onkeypress = function(e){
    var remaining = rem.innerHTML - 1;
    rem.innerHTML = remaining;
    recGuess.append(" " + e.key + " ");

    if(e.key.toUpperCase() === randomTarget){
        victory();
        //Clear the text list except for the initial text.
        while(recGuess.childNodes.length > 1){
            recGuess.removeChild(recGuess.lastChild);
        }

    }else if(remaining === 0){
        loss();
        //Clear the guess list except for the initial text.
        while(recGuess.childNodes.length > 1){
            recGuess.removeChild(recGuess.lastChild);
        }
    }

}


