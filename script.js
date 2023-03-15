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

const upgradeManual = new Upgrade(1, "Serveur", "Un serveur efficace.", 1, 10, false, 1);

mainButton.addEventListener("click", () => {
	upgradeManual.earn();
});

// update display on start
updateBeersDisplay();


const manualUpgradesContainer = document.querySelector("#manual-column");
const autoUpgradesContainer = document.querySelector("#auto-column");

function createUpgradeElement(index) {
	// create elements
	const container = document.createElement("div");
	const title = document.createElement("h3");
	const quantity = document.createElement("p");
	const income = document.createElement("p");
	const incomePerUnit = document.createElement("p");
	const totalIncome = document.createElement("p");
	const buyButton = document.createElement("button");

	// assign class/id
	container.classList.add("upgrade-container");
	container.id = `upgrade-${index}`;
	title.classList.add("upgrade-title");
	quantity.classList.add("upgrade-quantity");
	income.classList.add("upgrade-income");
	incomePerUnit.classList.add("upgrade-incomePerUnit");
	totalIncome.classList.add("upgrade-totalIncome");
	buyButton.classList.add("upgrade-buyButton");

	// append elements
	container.appendChild(title);
	container.appendChild(quantity);
	container.appendChild(income);
	container.appendChild(incomePerUnit);
	container.appendChild(totalIncome);
	container.appendChild(buyButton);

	return (container);
}

function updateUpgradeElement(upgrade) {
	const container = document.querySelector(`#upgrade-${upgrade.id}`);
	const title = document.querySelector(`#upgrade-${upgrade.id} .upgrade-title`);
	const quantity = document.querySelector(`#upgrade-${upgrade.id} .upgrade-quantity`);
	const income = document.querySelector(`#upgrade-${upgrade.id} .upgrade-income`);
	const incomePerUnit = document.querySelector(`#upgrade-${upgrade.id} .upgrade-incomePerUnit`);
	const totalIncome = document.querySelector(`#upgrade-${upgrade.id} .upgrade-totalIncome`);
	const buyButton = document.querySelector(`#upgrade-${upgrade.id} .upgrade-buyButton`);

	title.innerText = upgrade.title;
	quantity.innerText = `Quantity : ${upgrade.quantity}`;
	income.innerText = `Income : on sait po`;
	incomePerUnit.innerText = `Income/Unit : ${upgrade.incomePerUnit}`;
	totalIncome.innerText = `Total Income : ${upgrade.totalIncome}`;
	buyButton.innerText = `Buy ${upgrade.price}`;
}


manualUpgradesContainer.appendChild( createUpgradeElement(1) );
updateUpgradeElement(upgradeManual);


