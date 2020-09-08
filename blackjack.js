const getCardButt = document.querySelector('#hitMe');
getCardButt.addEventListener('click', getCard);
const raiseBetButt = document.querySelector('#raiseBet');
raiseBetButt.addEventListener('click', raiseBet);
const lowerBetButt = document.querySelector('#lowerBet');
lowerBetButt.addEventListener('click', lowerBet);
const playerScore = document.querySelector('#playerScore');
const playerCard = document.querySelector('#playerCard');
const dealerScore = document.querySelector('#dealerScore');
const dealerCard = document.querySelector('#dealerCard');
const playerCash = document.querySelector('#playerCash');
const currentBet = document.querySelector('#currentBet');

let arr = [2,3,4,5,6,7,8,9,10,11];

let score = 0;

function raiseBet() {
	console.log('raise');
}

function lowerBet() {
	console.log('lower');
}

function getCard() {
	const randomCard = arr[Math.floor(Math.random() * arr.length)];
	playerCard.innerHTML = randomCard;
	score += randomCard;
	playerScore.innerHTML = `Player's score: ${score}`;

	if (score > 21) {
		score = 0;
		playerScore.innerHTML = `Player's score: ${score}`;
		alert('durnas');
	};
};