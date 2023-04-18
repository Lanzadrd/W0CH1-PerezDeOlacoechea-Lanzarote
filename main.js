const frenchDeck = [
  { rank: "Ace", suit: "♠️", value: 13 },
  { rank: "2", suit: "♠️", value: 1 },
  { rank: "3", suit: "♠️", value: 2 },
  { rank: "4", suit: "♠️", value: 3 },
  { rank: "5", suit: "♠️", value: 4 },
  { rank: "6", suit: "♠️", value: 5 },
  { rank: "7", suit: "♠️", value: 6 },
  { rank: "8", suit: "♠️", value: 7 },
  { rank: "9", suit: "♠️", value: 8 },
  { rank: "10", suit: "♠️", value: 9 },
  { rank: "Jack", suit: "♠️", value: 10 },
  { rank: "Queen", suit: "♠️", value: 11 },
  { rank: "King", suit: "♠️", value: 12 },
  { rank: "Ace", suit: "♥️", value: 13 },
  { rank: "2", suit: "♥️", value: 1 },
  { rank: "3", suit: "♥️", value: 2 },
  { rank: "4", suit: "♥️", value: 3 },
  { rank: "5", suit: "♥️", value: 4 },
  { rank: "6", suit: "♥️", value: 5 },
  { rank: "7", suit: "♥️", value: 6 },
  { rank: "8", suit: "♥️", value: 7 },
  { rank: "9", suit: "♥️", value: 8 },
  { rank: "10", suit: "♥️", value: 9 },
  { rank: "Jack", suit: "♥️", value: 10 },
  { rank: "Queen", suit: "♥️", value: 11 },
  { rank: "King", suit: "♥️", value: 12 },
  { rank: "Ace", suit: "♦️", value: 13 },
  { rank: "2", suit: "♦️", value: 1 },
  { rank: "3", suit: "♦️", value: 2 },
  { rank: "4", suit: "♦️", value: 3 },
  { rank: "5", suit: "♦️", value: 4 },
  { rank: "6", suit: "♦️", value: 5 },
  { rank: "7", suit: "♦️", value: 6 },
  { rank: "8", suit: "♦️", value: 7 },
  { rank: "9", suit: "♦️", value: 8 },
  { rank: "10", suit: "♦️", value: 9 },
  { rank: "Jack", suit: "♦️", value: 10 },
  { rank: "Queen", suit: "♦️", value: 11 },
  { rank: "King", suit: "♦️", value: 12 },
  { rank: "Ace", suit: "♣️", value: 13 },
  { rank: "2", suit: "♣️", value: 2 },
  { rank: "3", suit: "♣️", value: 2 },
  { rank: "4", suit: "♣️", value: 2 },
  { rank: "5", suit: "♣️", value: 2 },
  { rank: "6", suit: "♣️", value: 2 },
  { rank: "7", suit: "♣️", value: 2 },
  { rank: "8", suit: "♣️", value: 2 },
  { rank: "9", suit: "♣️", value: 2 },
  { rank: "10", suit: "♣️", value: 2 },
  { rank: "Jack", suit: "♣️", value: 2 },
  { rank: "Queen", suit: "♣️", value: 2 },
  { rank: "King", suit: "♣️", value: 2 },
];

let userPoints = 0;
let selectedFirstCard;
let selectedSecondCard;
let readyForNextGame = true;

let textDisplay = document.querySelector(".text-display");
let machineCard = document.querySelector(".machine-card");
let userCard = document.querySelector(".user-card");
let higherValueButton = document.querySelector(".higher-value-button");
let lowerValueButton = document.querySelector(".lower-value-button");
let startButton = document.querySelector(".start-button");

const selectFirstRandomCard = () => {
  randomPosition = Math.floor(Math.random() * frenchDeck.length);
  selectedFirstCard = frenchDeck[randomPosition];
};

const selectSecondRandomCard = () => {
  randomPosition = Math.floor(Math.random() * frenchDeck.length);
  selectedSecondCard = frenchDeck[randomPosition];
};

const playGame = () => {
  userCard.innerHTML = selectFirstRandomCard();
  machineCard.innerHTML = selectedFirstCard.value + selectedFirstCard.suit;
  textDisplay.innerHTML = `¿Crees que la siguiente carta será mayor o menor?`;
  selectSecondRandomCard();
};

const higherGuessCheck = () => {
  if (selectedSecondCard.value === selectedFirstCard.value) {
    selectSecondRandomCard();
  }
  userCard.innerHTML = selectedSecondCard.value + selectedSecondCard.suit;
  if (selectedFirstCard.value < selectedSecondCard.value) {
    textDisplay.innerHTML = "Has acertado! Has conseguido 1 punto";
    userPoints++;
  } else if (selectedFirstCard.value > selectedSecondCard.value) {
    textDisplay.innerHTML = "Has fallado!";
    userPoints++;
  }
};

const lowerGuessCheck = () => {
  if (selectedSecondCard.value === selectedFirstCard.value) {
    selectSecondRandomCard();
  }
  userCard.innerHTML = selectedSecondCard.value + selectedSecondCard.suit;
  if (selectedFirstCard.value > selectedSecondCard.value) {
    textDisplay.innerHTML = "Has acertado! Has conseguido 1 punto";
    userPoints++;
  } else if (selectedFirstCard.value < selectedSecondCard.value) {
    textDisplay.innerHTML = "Has fallado!";
    userPoints++;
  }
};

higherValueButton.addEventListener("click", higherGuessCheck);
lowerValueButton.addEventListener("click", lowerGuessCheck);
startButton.addEventListener("click", playGame);
