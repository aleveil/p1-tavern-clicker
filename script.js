// query elements
const mainButton = document.querySelector(".main-button");
const beerCounterElement = document.querySelector(".counter");
const beerCounterSecondElement = document.querySelector(".counter-seconds");


const manualUpgradesContainer = document.querySelector("#manual-column");
const autoUpgradesContainer = document.querySelector("#auto-column");

// manage upgrades

const upgrades = {
	manuals: [],
	automatics: []
}

// create upgrades and store into arrays
upgrades.manuals.push(new Upgrade("Serveur", "Un habile serveur.", 1, 10, false, 1));
upgrades.automatics.push(new Upgrade("Habitué", "Un client ivre.", 2, 50, true));
upgrades.automatics.push(new Upgrade("Barman", "Un barman accueillant.", 5, 250, true));

// create upgrades elements (Display DOM element)
upgrades.manuals.forEach(upgrade => {upgrade.createUpgradeElement(manualUpgradesContainer)});
upgrades.automatics.forEach(upgrade => {upgrade.createUpgradeElement(autoUpgradesContainer)});

// manage beers
let beers = 0;

function updateBeersDisplay() {
	beerCounterElement.innerText = `${beers} 🍺`;
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

// update counter/sec
function updateCounterSecond() {
	let totalPerSecond = 0;
	upgrades.automatics.forEach(upgrade => {
		totalPerSecond += upgrade.quantity * upgrade.incomePerUnit;
	});
	beerCounterSecondElement.innerHTML = `${totalPerSecond} 🍺/sec`;
}

setInterval(updateCounterSecond, 1000);