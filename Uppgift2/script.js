document.getElementById('drawButton').addEventListener('click', drawCard);

function drawCard() {
  fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=1")
    .then(res => res.json())
    .then(data => {
      const cardUrl = data.cards[0].image;
      displayCard(cardUrl);
    })
    .catch(err => console.log(err));
}

function displayCard(cardUrl) {
  const cardDiv = document.getElementById('cardImage');
  cardDiv.innerHTML = ''; // Clear previous card, if any

  const cardImage = document.createElement('img');
  cardImage.setAttribute('src', cardUrl);
  cardImage.setAttribute('alt', 'Drawn card');

  cardDiv.appendChild(cardImage);
}
