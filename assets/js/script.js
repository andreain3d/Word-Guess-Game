//on startup, set initial lives counter, show it on the document, and establish the word bank
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

function getIndicesOf(searchStr, str) {
  var searchStrLen = searchStr.length;
  if (searchStrLen == 0) {
    return [];
  }
  var startIndex = 0;
  var index;
  var indices = [];

  while ((index = str.indexOf(searchStr, startIndex)) > -1) {
    indices.push(index);
    startIndex = index + searchStrLen;
  }
  return indices;
}

//create function that when called:
//
// randomly picks a word from the word bank and inserts the appropriate
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

  //checks if userChoice is a repeat guess, records it, compares userChoice to letters in the word
  var lettersGuessed = [];
  document.onkeypress = function() {
    var userChoice = event.key;
    if (lettersGuessed.indexOf(userChoice.toUpperCase()) < 0) {
      document.getElementById("lettersGuessed").append(userChoice);
      lettersGuessed.push(userChoice.toUpperCase());
    }
    //reveals letters that match **can't handle double leters right now**, subtracts lives for letters that don't match

    if (mysteryWord.indexOf(userChoice.toUpperCase()) >= 0) {
      guessIndices = getIndicesOf(userChoice.toUpperCase(), mysteryWord);
      //mysteryWord.indexOf(userChoice.toUpperCase());
      for (x = 0; x < guessIndices.length; x++) {
        var guessIndex = guessIndices[x];
        mysteryWordArray[guessIndex] = userChoice.toUpperCase() + " ";
        document.getElementById("mysteryWord").textContent = "";
        for (i = 0; i < mysteryWordArray.length; i++) {
          document.getElementById("mysteryWord").append(mysteryWordArray[i]);
        }
      }
    } else {
      lives = lives - 1;
      document.getElementById("lives").textContent = lives;
    }

    //if lives reach zero, ends game
    if (lives <= 0) {
      //losing pop-up reveal?
      //restarts game on button click
    }
    if (mysteryWordArray.indexOf("_ ") < 0) {
      //winning pop-up
      //restarts game on button click
    }
  };
  //restarts game at any time on button click
};

//call function
game();
