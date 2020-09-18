const getCardButt = document.querySelector('#hitMe');
getCardButt.addEventListener('click', getCard);
const holdButt = document.querySelector('#hold');
holdButt.addEventListener('click', holdCard);
const raiseBetButt = document.querySelector('#raiseBet');
raiseBetButt.addEventListener('click', raiseBet);
const resetBetButt = document.querySelector('#resetBet');
resetBetButt.addEventListener('click', resetBet);
const playerScore = document.querySelector('#playerScore');
const playerCard = document.querySelector('#playerCard');
const dealerScore = document.querySelector('#dealerScore');
const dealerCard = document.querySelector('#dealerCard');
const playerCash = document.querySelector('#playerCash');
const currentBet = document.querySelector('#currentBet');
const betAmmount = document.querySelector('#betAmmount')

let arr = [2,3,4,5,6,7,8,9,10,11];

let playScore = 0;
let dealScore = 0;
let bet = 0;
let win = true;
let lose = false;

let cash = 100;

function raiseBet() {
	if (betAmmount.value != '') {
		bet += Number(betAmmount.value);
		cash -= Number(betAmmount.value);
		betAmmount.value = 0;
		playerCash.innerHTML = `CASH: $${cash}`;
		currentBet.innerHTML = `Current bet: ${bet}`;
	};
}

function resetBet() {
	cash += bet;
	bet = 0;
	betAmmount.value = 0;
	playerCash.innerHTML = `CASH: ${cash}`;
	currentBet.innerHTML = `Current bet: ${bet}`;
}

function getCard() {
	const randomCard1 = arr[Math.floor(Math.random() * arr.length)];
	playerCard.innerHTML = randomCard1;
	playScore += randomCard1;
	playerScore.innerHTML = `Player's score: ${playScore}`;

	const randomCard2 = arr[Math.floor(Math.random() * arr.length)];
	dealerCard.innerHTML =randomCard2;
	dealScore += randomCard2;
	dealerScore.innerHTML = `Dealer's score: ${dealScore}`;
	
	if (playScore === dealScore) {
		alert('It\'s a draw...');
		betLogic(win)
		boardReset();
	};

	if (playScore === 21 && playScore != dealScore) {
		alert('You Win!');
		betLogic(win);
		boardReset();
	};

	if (playScore > 21) {
		alert('tu durnas');
		betLogic(lose);
		boardReset();
	};

	if (dealScore > 21) {
		alert('You Win!');
		betLogic(win);
		boardReset();
	};
};

function holdCard() {
	// if (playScore > dealScore) {
	// 	boardReset()
	// }
}

function betLogic(win) {
	if (win) {
		cash += bet;
		bet = 0;
		betAmmount.value = 0;
		playerCash.innerHTML = `CASH: $${cash}`;
		currentBet.innerHTML = `Current bet: ${bet}`;
	};
};

function boardReset() {
	playScore = 0;
	playerScore.innerHTML = `Player's score: ${playScore}`;
	playerCard.innerHTML = 'X';

	dealScore = 0;
	dealerScore.innerHTML = `Dealer's score: ${dealScore}`;
	dealerCard.innerHTML = 'X';
}