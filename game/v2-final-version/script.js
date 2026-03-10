(function () {
  "use strict";
  console.log("reading js");
  
  
  // 1. Data and Variables
const gamePairs = [
    { anatomy: "Anatomy 0", ID: "0" }, { img: "images/xray0.jpg", ID: "0" },
    { anatomy: "Anatomy 1", ID: "1" }, { img: "images/xray1.jpg", ID: "1" },
    { anatomy: "Anatomy 2", ID: "2" }, { img: "images/xray2.jpg", ID: "2" },
    { anatomy: "Anatomy 3", ID: "3" }, { img: "images/xray3.jpg", ID: "3" },
    { anatomy: "Anatomy 4", ID: "4" }, { img: "images/xray4.jpg", ID: "4" },
    { anatomy: "Anatomy 5", ID: "5" }, { img: "images/xray5.jpg", ID: "5" }
];

const allCards = document.querySelectorAll('.card');
const startBtn = document.querySelector('#start-btn');
const pairsText = document.querySelector('h2');

let pairsFound = 0;
let firstCard = null; 
let secondCard = null;
let isWaiting = false; // Prevents clicking during the flip-back delay

// 2. The missing function - This puts the data into your HTML
function setupCards() {
    for (let i = 0; i < allCards.length; i++) {
        const cardBack = allCards[i].querySelector('.cardback');
        const data = gamePairs[i];

        // Give the card an ID so we can match it later
        allCards[i].id = data.ID;

        if (data.anatomy) {
            cardBack.innerHTML = '<p class="cardtext">' + data.anatomy + '</p>';
        } else if (data.img) {
            cardBack.innerHTML = '<img src="' + data.img + '" alt="xray">';
        }
    }
}

// 3. Reset and Shuffle
function startGame() {
    startBtn.innerHTML = "Restart";
    document.querySelector('#overlay').classList.add('hide');

    pairsFound = 0;
    pairsText.innerHTML = pairsFound;
    firstCard = null;
    secondCard = null;
    isWaiting = false;
    

    for (let i = 0; i < gamePairs.length; i++) {
        let randomNum = Math.floor(Math.random() * gamePairs.length);
        let temporaryStorage = gamePairs[i];
        gamePairs[i] = gamePairs[randomNum];
        gamePairs[randomNum] = temporaryStorage;
    }

    for (let i = 0; i < allCards.length; i++) {
        allCards[i].classList.remove("flip");
    }
    
    setupCards(); 
}

// 4. Handle Clicks
function clickCard(event) {

    const clickedCard = event.currentTarget; 

    if (isWaiting || clickedCard.classList.contains("flip") || clickedCard === firstCard) {
        return;
    }

    clickedCard.classList.add("flip");

    if (firstCard === null) {
        firstCard = clickedCard;
    } else {
        secondCard = clickedCard;
        checkMatch();
    }
}

// 5. Check if IDs match (The simplified .id version)
function checkMatch() {
    const id1 = firstCard.id;
    const id2 = secondCard.id;

    if (id1 === id2) {
        pairsFound = pairsFound + 1;
        pairsText.innerHTML = pairsFound;
        
        if (pairsFound === 6) {
            document.querySelector('#overlay').classList.remove('hide');
        }

        firstCard = null;
        secondCard = null;
    } else {
        isWaiting = true; 
        setTimeout(function() {
            firstCard.classList.remove("flip");
            secondCard.classList.remove("flip");
            firstCard = null;
            secondCard = null;
            isWaiting = false;
        }, 500);
    }
}

// 6. Listeners
startBtn.addEventListener('click', startGame);

for (let i = 0; i < allCards.length; i++) {
    allCards[i].addEventListener('click', clickCard);
}

// Start the game for the first time
setupCards();

const cheatBtn = document.querySelector('#cheat-code');

cheatBtn.addEventListener('click', function() {
    pairsFound = 6; 
    pairsText.innerHTML = pairsFound; 
    document.querySelector('#overlay').classList.remove('hide');// Show win screen
    
    
    allCards.forEach(card => card.classList.add('flip'));

});

})();