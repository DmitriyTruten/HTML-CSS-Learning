const check = document.getElementById('check');
const guess = new URLSearchParams(window.location.search);
const num = guess.get('guess');
const randomNum = Math.floor(Math.random() * 10) + 1;
const textRandomNum = randomNum.toString();

if(num === textRandomNum){
  check.innerHTML = 'You guessed correctly!';
} else {
  check.innerHTML = 'Try again...';
}
