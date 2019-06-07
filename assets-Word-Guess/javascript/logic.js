//Create an array of random words to guess
var wordArray = ["test", "this", "junk"];

//Create a var for the length of the array
var arrayLength = wordArray.length;

//Create a var for our random word

//Create a function for selecting a random number
function selectRandom(){
    var randomNumber = Math.floor(Math.random() * (1, arrayLength));
    var randomWord = wordArray[randomNumber];
    return randomWord;
}
var randomWord = selectRandom();
console.log(randomWord);

var boxOne = document.getElementById("boxOne");

var wordLength = randomWord.length;
var i = 0;
var hidden;
var word = [randomWord.length];
for(i; i < wordLength; i++){
    var randomArray = [i];
    word[i] = randomWord.charAt(i);
    // word[i] = {letter: randomWord.charAt(i)};
    boxOne.append(" _ ");
    console.log(word[i]);
}
console.log(word[2]);

document.onkeypress = function(e){
    console.log(e.key);
    if(word.includes(e.key)){
        alert("detected");
        var position = word.indexOf(e.key);
        boxOne.childNodes[position].replaceWith(e.key);
        console.log(position);
    }
}


