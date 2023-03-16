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
upgrades.manuals.push(new Upgrade("Waiter", "A skillful waiter.", 1, 10, false, "imgs/waiter.jpg", 1));
upgrades.automatics.push(new Upgrade("Drunk Regular", "A drunk customer.", 2, 50, true, "imgs/regular.jpg"));
upgrades.automatics.push(new Upgrade("Bardenter", "A friendly bartender.", 5, 250, true, "imgs/bartender.jpg"));
upgrades.automatics.push(new Upgrade("Brewery", "A productive brewery.", 25, 500, true, "imgs/brewery.jpg"))
upgrades.automatics.push(new Upgrade("Bard", "A cheerful bard.", 100, 1000, true, "imgs/bard.jpg"));
upgrades.automatics.push(new Upgrade("King", "A supporting king.", 500, 5000, true, "imgs/king.jpg"));



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