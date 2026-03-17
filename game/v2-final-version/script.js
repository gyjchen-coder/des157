(function () {
	'use strict';
	console.log('reading js');

	const cards = document.querySelectorAll('.card');
	const startBtn = document.querySelector('#start-btn');
	const overlay = document.querySelector('#overlay');
	const gameOverText = document.querySelector('#gameOver');
	const pairNum = document.querySelector('#pair-num');

	const cardFlip = new Audio('sounds/flip.mp3');
	const buttonClick = new Audio('sounds/ding.mp3');
	const cheer = new Audio('sounds/happy-sound.mp3');

	let firstCard = null;
	let secondCard = null;
	let matches = 0;

	const gameCards = [
		{ type: 'text', content: 'Shoulder', id: '0' },
		{ type: 'img', content: 'images/xray-shoulder.png', id: '0' },
		{ type: 'text', content: 'Chest', id: '1' },
		{ type: 'img', content: 'images/xray-chest.jpg', id: '1' },
		{ type: 'text', content: 'Foot', id: '2' },
		{ type: 'img', content: 'images/xray-foot.jpg', id: '2' },
		{ type: 'text', content: 'Hand', id: '3' },
		{ type: 'img', content: 'images/xray-hand.jpg', id: '3' },
		{ type: 'text', content: 'Neck', id: '4' },
		{ type: 'img', content: 'images/xray-neck.jpg', id: '4' },
		{ type: 'text', content: 'Skull', id: '5' },
		{ type: 'img', content: 'images/xray-skull.jpg', id: '5' },
	];

	function shuffleCards() {
		for (let i = gameCards.length - 1; i > 0; i--) {
			let randomIndex = Math.floor(Math.random() * (i + 1));
			let temp = gameCards[i];
			gameCards[i] = gameCards[randomIndex];
			gameCards[randomIndex] = temp;
		}
	}

	function setupCards() {
		for (let i = 0; i < cards.length; i++) {
			cards[i].id = gameCards[i].id;
			if (gameCards[i].type === 'text') {
				cards[i].querySelector('.cardback').innerHTML =
					`<p class="cardtext">${gameCards[i].content}</p>`;
			} else {
				cards[i].querySelector('.cardback').innerHTML =
					`<img src="${gameCards[i].content}" alt="xray">`;
			}
		}
	}

	function resetTurn() {
		firstCard = null;
		secondCard = null;
	}

	function checkMatch() {
		if (firstCard.id === secondCard.id) {
			matches++;
			pairNum.textContent = matches;

			if (matches === 6) {
				cheer.play();
				gameOverText.innerHTML = 'Great job! You matched them all!';
				overlay.classList.remove('hide');
			}

			resetTurn();
		} else {
			setTimeout(function () {
				firstCard.classList.remove('flip');
				secondCard.classList.remove('flip');
				resetTurn();
			}, 500);
		}
	}

	function flipCard() {
		cardFlip.play();
		if (firstCard && secondCard) return;
		if (this === firstCard) return;

		this.classList.add('flip');

		if (firstCard === null) {
			firstCard = this;
		} else {
			secondCard = this;
			checkMatch();
		}
	}

	function startGame() {
		buttonClick.play();
		firstCard = null;
		secondCard = null;
		matches = 0;
		pairNum.textContent = matches;
		overlay.classList.add('hide');
		for (let i = 0; i < cards.length; i++) {
			cards[i].classList.remove('flip');
		}

		shuffleCards();
		setupCards();
	}

	shuffleCards();
	setupCards();

	for (let i = 0; i < cards.length; i++) {
		cards[i].addEventListener('click', flipCard);
	}

	startBtn.addEventListener('click', startGame);
})();
