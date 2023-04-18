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

const selectFirstRandomCard = () => {
  randomPosition = Math.floor(Math.random() * frenchDeck.length);
  selectedFirstCard = frenchDeck[randomPosition];
};

const selectSecondRandomCard = () => {
  randomPosition = Math.floor(Math.random() * frenchDeck.length);
  selectedSecondCard = frenchDeck[randomPosition];
};

const playGame = () => {
  selectFirstRandomCard();
  alert(
    `Bienvenido, la carta elegida aleatoriamente es ${selectedFirstCard.rank} de ${selectedFirstCard.suit}`
  );
  selectSecondRandomCard();

  const userGuessCheck = () => {
    if (selectedSecondCard.value === selectedFirstCard.value) {
      selectSecondRandomCard();
    }

    userGuess = prompt("¿Crees que la siguiente carta será mayor o menor?");

    if (userGuess.toLowerCase() === "mayor") {
      if (selectedFirstCard.value < selectedSecondCard.value) {
        alert(
          "Correcto! El valor de la nueva carta es mayor que el anterior, has conseguido 1 punto :)"
        );
        userPoints++;
      } else {
        alert(
          `Se ha equivocado! La siguiente carta era ${selectedSecondCard.rank} de ${selectedSecondCard.suit} `
        );
      }
    }

    if (userGuess === "menor") {
      if (selectedFirstCard.value > selectedSecondCard.value) {
        alert(
          "Correcto! El valor de la nueva carta es mayor que el anterior, has conseguido 1 punto :)"
        );
        userPoints++;
      } else {
        alert(
          `Se ha equivocado! La siguiente carta era ${selectedSecondCard.rank} de ${selectedSecondCard.suit} `
        );
      }
    }
  };
  userGuessCheck();

  const rePlay = () => {
    reply = confirm("¿Quiere volver a jugar?");
    if (!reply) {
      alert(`Has conseguido ${userPoints} puntos. \nHasta pronto!`);
    } else {
      playGame();
    }
  };
  rePlay();
};
playGame();
