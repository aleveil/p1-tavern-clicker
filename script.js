// query elements
const mainButton = document.querySelector(".main-button");
const beerCounterElement = document.querySelector(".counter");

const manualUpgradesContainer = document.querySelector("#manual-column");
const autoUpgradesContainer = document.querySelector("#auto-column");

// manage upgrades

const upgrades = {
	manuals: [],
	automatics: []
}

upgrades.manuals.push(new Upgrade(1, "Serveur", "Un habile serveur.", 1, 10, false, 1));
upgrades.automatics.push(new Upgrade(2, "Habitué", "Un client ivre.", 2, 50, true));
upgrades.automatics.push(new Upgrade(3, "Barman", "Un barman accueillant.", 5, 250, true));

// create upgrades elements
upgrades.manuals.forEach(upgrade => {upgrade.createElement(manualUpgradesContainer)});
upgrades.automatics.forEach(upgrade => {upgrade.createElement(autoUpgradesContainer)});

// manage beers
let beers = 0;

function updateBeersDisplay() {
	beerCounterElement.innerText = beers > 1 ? `${beers} Beers` : `${beers} Beer`;
}

function addBeer(amount) {
	beers += amount;
	updateBeersDisplay();
}

// update beers display on start
updateBeersDisplay();

// main click button event
mainButton.addEventListener("click", () => {
	upgrades.manuals.forEach(upgrade => {upgrade.earn()});
});