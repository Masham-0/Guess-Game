'use strict';

let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20 + 1);
// Guess game where you guess number from 1 to 20
document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '❌ No Input';
  } else if (Number(guess) === secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🎉 Correct Number!';

      document.querySelector('body').style.backgroundColor = '#60b347';

      document.querySelector('.number').textContent = secretNumber;

      document.querySelector('.number').style.width = '30rem';
      if (score > highscore) {
        document.querySelector('.highscore').textContent = score;
      }
    } else {
      document.querySelector('.message').textContent = '💥 You lose the Game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (Number(guess) > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lose the Game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (Number(guess) < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lose the Game!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#cc0000';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing...';
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
