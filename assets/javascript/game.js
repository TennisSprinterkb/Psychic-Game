//The choices for user and computer to pick
var choices = ["a","b","c","d","e",
            "f","g","h","i","j","k","l","m",
            "n","o","p","q","r","s","t","u",
            "v","w","x","y","z"];

//Setting variables for tracking players wins, losses and guesses left          
var Wins = 0;
var Losses = 0;
var whatsLeft = 9;
var guessedLetters = [];
var letterToGuess =  [];

//Fun prompt to get to get th user engaged
var playGame = confirm("Are you sure you want to enter!?");
    if(playGame) {
        alert("Prepare yourself!");
    } else {
        alert("Too bad you're playing!!");
        };

//Initial computer choice        
window.onload =function() {
    var compguess = choices[Math.floor(Math.random()*choices.length)];
        letterToGuess.push(compguess);
                
}

//Game play
document.onkeyup = function() {
    var userinput = String.fromCharCode(event.keyCode).toLowerCase();
        guessedLetters.push(userinput);

    if (userinput=='a' || userinput=='b' || userinput=='c' ||
        userinput=='d' || userinput=='e' || userinput=='f' ||
        userinput=='g' || userinput=='h' || userinput=='i' ||
        userinput=='j' || userinput=='k' || userinput=="l" ||
        userinput=='m' || userinput=='n' || userinput=='o' ||
        userinput=='p' || userinput=='q' || userinput=='r' ||
        userinput=='s' || userinput=='t' || userinput=='u' ||
        userinput=='v' || userinput=='w' || userinput=="x" ||
        userinput=='y' || userinput=='z') {

    if ((userinput === letterToGuess[0]) && (whatsLeft > 0)) {
        Wins++;
        whatsLeft = 9;
        guessedLetters.length = 0;
        letterToGuess.length = 0;
        var compguess = choices[Math.floor(Math.random()*choices.length)];
        letterToGuess.push(compguess);
        alert("You are a psychic!! Wins: " + Wins);
        }

    else if ((userinput !== letterToGuess[0]) && (whatsLeft > 0)) {
        whatsLeft = whatsLeft-1;
        }

    else if ((userinput !== compguess)) {
        Losses++;
        whatsLeft = 9;
        guessedLetters.length = 0;
        letterToGuess.length = 0;
        var compguess = choices[Math.floor(Math.random()*choices.length)];
        letterToGuess.push(compguess);
        alert("Sorry you lost! Losses: "+ Losses);
        }

        }else {
        alert("Only hit letters please!");
            }

    var html = "<h5>Using only the letters on the keyboard try to match the letter the computer is guessing.</h5>" +
                "<h6>Press any letter to start playing!</h6>" +
                "<p>wins: " + Wins + "</p>" +
                "<p>losses: " +Losses + "</p>" +
                "<p>Remaining guesses: " + whatsLeft + "</p>" +
                "<p>Letters used: " + guessedLetters + "</p>";
                

    document.querySelector('#game').innerHTML = html;

        }