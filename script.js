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


mainButton.addEventListener("click", () => {
	addBeer(1);
});

// update display on start
updateBeersDisplay();