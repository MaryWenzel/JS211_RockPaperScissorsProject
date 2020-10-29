const game = () => {
  let pScore = 0;
  let cScore = 0;

// START THE GAME 
  const startGame = () => {
    const playButton = document.querySelector('.intro button');
    const introScreen = document.querySelector('.intro');
    const match = document.querySelector('.match')
// PLAY BUTTON EVENT LISTENERS
    playButton.addEventListener('click', () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  }
  // PLAY MATCH 
  const playMatch = () => {
    const options = document.querySelectorAll('.options button')
    const playerHand = document.querySelector(".player-hand")
    const computerHand = document.querySelector(".computer-hand")
    const hands = document.querySelectorAll('.hands img');

    hands.forEach(hand =>{
      hand.addEventListener('animationend', function(){
        this.style.animation = '';
      })
    })
    // COMPUTER OPTIONS 
    const computerOptions = ['rock', 'paper', 'scissors'];

    options.forEach(option=>{
      option.addEventListener('click', function(){
        // COMPUTER CHOICE 
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];
     
        setTimeout(() =>{
        // HERE IS WHERE WE COMPARE HANDS
        compareHands(this.textContent, computerChoice);
        // UPDATE IMAGES
        playerHand.src = `./images/${this.textContent}.png`;
        computerHand.src = `./images/${computerChoice}.png`;
        }, 2000)

        // ANIMATION
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };

  // KEEPING SCORE 
  const updateScore = () => {
    const playerScore = document.querySelector('.player-score p');
    const computerScore = document.querySelector('.computer-score p');
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  }

  const compareHands = (playerChoice, computerChoice) => {
    // UPDATE TEXT
    const winner = document.querySelector('.winner');
    // CHECKING FOR A TIE
    if(playerChoice === computerChoice){
      winner.textContent = 'It is a tie!';
      return;
    }
    // CHECK FOR ROCK
    if(playerChoice === 'rock'){
      if(computerChoice === 'scissors'){
        winner.textContent = 'You Win!';
        pScore++;
        updateScore();
        return;
      }else{
        winner.textContent = 'You Lose!';
        cScore++
        updateScore();
        return;
      }
    }
    // CHECK FOR PAPER
    if(playerChoice === 'paper'){
      if(computerChoice === 'scissors'){
        winner.textContent = 'You Lose!';
        cScore++;
        updateScore();
        return;
      }else{
        winner.textContent = 'You Win!';
        pScore++;
        updateScore();
        return;
      }
    }
    // CHECK FOR SCISSORS
    if(playerChoice === 'scissors'){
      if(computerChoice === 'paper'){
        winner.textContent = 'You Win!';
        pScore++;
        updateScore();
        return;
      }else{
        winner.textContent = 'You Lose!';
        cScore++;
        updateScore();
        return;
      }
    }
  }

  // CALL INNER FUNCTIONS
  startGame();
  playMatch();
}


// START GAME FUNCTION
game();