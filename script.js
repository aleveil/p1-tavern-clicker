// query elements
const mainButton = document.querySelector(".main-button");
const beerCounterElement = document.querySelector(".counter");

let beers = 0;

function updateBeersDisplay() {
	beerCounterElement.innerText = beers > 1 ? `${beers} Beers` : `${beers} Beer`;
}

function addBeer(amount) {
	beers += amount;
	updateBeersDisplay();
}

const upgradeManual = new Upgrade("Serveur", "Un serveur efficace.", 1, 10, false, 1);

mainButton.addEventListener("click", () => {
	upgradeManual.earn();
});

// update display on start
updateBeersDisplay();