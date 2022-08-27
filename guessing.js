// The game is about guessing a number between 1 to 10, you can choose how many 
// times you want to guess and guess those many times, if you are able to guess 
// the secret number you won the game, or if your chances are completed means you
// completely lost the game. Are you ready to play the game?

let c = require("readline-sync");
var choose=c.question("enter how many chance do you want:");
var random=Math.floor(Math.random()*10)


console.log("you have",choose,"chances to guess number");

