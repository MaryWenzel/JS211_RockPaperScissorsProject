
// Main RPS Game
// the function that will be called by the unit test below
const rockPaperScissors = (hand1, hand2) => {
  hand1 = document.getElementById('player-selection').value.toLowerCase().trim();

  let rpsArray = ['rock', 'paper', 'scissors'];
  hand2 = rpsArray[Math.floor(Math.random() * rpsArray.length)]
  // Write code here
  // Use the unit test to see what is expected
  if (hand1 === "" && hand2 === ""){
    document.getElementById('result-box').innerHTML = "Type in Rock Paper or Scissors";
    return 'Type in Rock Paper or Scissors'
  } else if (hand1 === hand2){
    document.getElementById('leftHand').src = "./images/leftTie.png";
    document.getElementById('rightHand').src = "./images/rightTie.png";
    document.getElementById('result-box').innerHTML = "Tie!"
    return "Tie!"
  } else if (hand1 === "rock"){
    document.getElementById('leftHand').src = "./images/leftRock.png";
    if(hand2 === "scissors"){
      document.getElementById('rightHand').src = "./images/scissors.png";
      document.getElementById('result-box').innerHTML = "Player One Wins!";
      return 'Player One Wins!'
    }else if(hand2 === "paper"){
      document.getElementById('rightHand').src ="./images/paper.png";
      document.getElementById('result-box').innerHTML = "Computer Wins!";
      return 'Computer Wins!'
    }
  } else if(hand1 === "paper"){
    document.getElementById('leftHand').src = "./images/leftPaper.png";
    if(hand2 === 'rock'){
      document.getElementById('rightHand').src = "./images/rock.png";
      document.getElementById('result-box').innerHTML = "Player One Wins!";
      return "Player One Wins!"
    }else if (hand2 === 'scissors'){
      document.getElementById('rightHand').src = "./images/scissors.png";
      document.getElementById('result-box').innerHTML = "Computer Wins!";
      return "Computer Wins!"
    }
  } else if(hand1 === "scissors"){
    document.getElementById('left-hand').src = "./images/leftScissors.png";
    if(hand2 === "paper"){
      document.getElementById('rightHand').src = "./images/paper.png";
      document.getElementById('result-box').innerHTML = "Player One Wins!";
      return 'Player One Wins!'
    } else if(hand2 === 'rock'){
      document.getElementById('rightHand').src = "./images/rock.png";
      document.getElementById('result-box').innerHTML = "Computer Wins!";
      return "Computer Wins!"
    } else {
      document.getElementById('result-box').innerHTML = "Make up your mind.";
      return "Make up your mind."
    }
  }
}









