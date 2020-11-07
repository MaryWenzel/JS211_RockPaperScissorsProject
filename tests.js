"use strict";

// brings in the assert module for unit testing
const assert = require("assert");
// brings in the readline module to access the command line
const readline = require("readline");
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const rockPaperScissors = (hand1, hand2) => {
    
    hand1 = hand1.toLowerCase().trim();
    hand2 = hand2.toLowerCase().trim();

    if (hand1 === "" && hand2 === "") {
        return "Please enter Rock, Paper, or Scissors!";
    }else if(hand1 === hand2){
        return "Tie!"
    } else if (hand1 === 'rock') {
        if (hand2 === 'scissors') {
          return 'You Win!';
        } else if (hand2 = 'paper') {
          return 'Hand two wins!';
        }
    }else if(hand1 === 'paper'){
        if(hand2 === 'rock'){
            return 'You Win!'
        }else if(hand2 === 'scissors'){
            return 'Computer Wins'
        }
    }else if(hand1 === 'scissors'){
        if(hand2 === 'paper'){
            return 'You Win!'
        }else if(hand2 === 'rock'){
            return 'Computer Wins!'
        }
    }else{
        return "Make up your mind."
    }
};

// the first function called in the program to get an input from the user
// to run the function use the command: node tests.js
// to close it ctrl + C
function getPrompt() {
    rl.question("hand1: ", (answer1) => {
      rl.question("hand2: ", (answer2) => {
        console.log(rockPaperScissors(answer1, answer2));
        getPrompt();
      });
    });
  }

  // Unit Tests
// You use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {
    // most are notes for human eyes to read, but essentially passes in inputs then compares
    //if the function you built return the expected output.
    describe('#rockPaperScissors()', () => {
      it('should detect a tie', () => {
        assert.equal(rockPaperScissors('rock', 'rock'), 'Tie!');
        assert.equal(rockPaperScissors('paper', 'paper'), 'Tie!');
        assert.equal(rockPaperScissors('scissors', 'scissors'), 'Tie!');
      });
      it('should detect which hand won', () => {
        assert.equal(rockPaperScissors('rock', 'paper'), 'Computer wins!');
        assert.equal(rockPaperScissors('paper', 'scissors'), 'Computer wins!');
        assert.equal(rockPaperScissors('rock', 'scissors'), 'Computer wins!');
      });
      it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
        assert.equal(rockPaperScissors('rOcK', ' paper '), 'You Win');
        assert.equal(rockPaperScissors('Paper', 'SCISSORS'), 'You Win');
        assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), 'You Win');
      });
      it('should check if user adds a space before or after their input?', () => {
        assert.equal(rockPaperScissors(' rock ', ' paper '), 'Computer wins!');
        assert.equal(rockPaperScissors(' paper ', ' scissors'), 'Computer wins!');
        assert.equal(rockPaperScissors('rock ', ' scissors '), 'Computer wins!');
      });
    });
  } else {
    // always returns ask the user for another input
    getPrompt();
  }