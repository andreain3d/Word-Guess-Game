var lives = 10;
document.getElementById("lives").textContent = lives;
var wordBank = [
  "PIZZA",
  "KITTEN",
  "KAWAII",
  "NAPTIME",
  "DONUTS",
  "STORMY",
  "FLOOF",
  "TOEBEANS"
];

//on startup, randomly pick a word from the word bank and insert the appropriate
//number of underscores in mysteryWord field
var game = function() {
  mysteryWord = wordBank[Math.floor(Math.random() * wordBank.length)];
  console.log(mysteryWord);
  var mysteryWordArray = [];
  for (i = 0; i < mysteryWord.length; i++) {
    mysteryWordArray.push("_ ");
  }
  for (i = 0; i < mysteryWordArray.length; i++) {
    document.getElementById("mysteryWord").append(mysteryWordArray[i]);
  }

  //record userChoice, compare userChoice to letters in the word
  var lettersGuessed = [];
  document.onkeypress = function() {
    var userChoice = event.key;
    if (lettersGuessed.indexOf(userChoice.toUpperCase()) < 0) {
      document.getElementById("lettersGuessed").append(userChoice);
      lettersGuessed.push(userChoice.toUpperCase());
    }
    //reveal letters that match, subtract lives for letters that don't match
    if (mysteryWord.indexOf(userChoice.toUpperCase()) >= 0) {
      guessIndex = mysteryWord.indexOf(userChoice.toUpperCase());
      mysteryWordArray[guessIndex] = userChoice.toUpperCase() + " ";
      document.getElementById("mysteryWord").textContent = "";
      for (i = 0; i < mysteryWordArray.length; i++) {
        document.getElementById("mysteryWord").append(mysteryWordArray[i]);
      }
      //      var mysteryWordContent = "";
      //      for (i = 0; i < guessIndex; i++) {
      //        mysteryWordContent += "_ ";
      //      }
      //      mysteryWordContent += userChoice.toUpperCase() + " ";
      //      for (i = guessIndex + 1; i < mysteryWord.length; i++) {
      //        mysteryWordContent += "_ ";
      //      }
      //      document.getElementById("mysteryWord").textContent = mysteryWordContent;
    } else {
      lives = lives - 1;
      document.getElementById("lives").textContent = lives;
    }

    //if lives reach zero, end game
    if (lives <= 0) {
      //losing pop-up reveal?
    }
  };
  //restart game
};
game();

//document.onkeyup = function() {
//  var userChoice = event.key;
//};
