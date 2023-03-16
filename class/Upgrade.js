class Upgrade {

	constructor(_title, _description, _incomePerUnit, _price, _isAuto, _imagePath, _quantity = 0) {
		this.title = _title;
		this.description = _description;

		this.quantity = _quantity;

		this.incomePerUnit = _incomePerUnit;
		this.totalIncome = 0;

		this.price = _price;
		this.priceMultiplicator = 1.5;

		this.isAuto = _isAuto;

		this.elementData = null;
		this.imagePath = _imagePath;

		if (this.isAuto)
			setInterval(() => { this.earn() }, 1000);
	}

	earn() {
		let currentIncome = this.incomePerUnit * this.quantity;
		if (currentIncome > 0)
		{
			addBeer(currentIncome);
			this.totalIncome += currentIncome;
			this.updateUpgradeElement();
		}
	}

	isBuyable() {
		return beers >= this.price;
	}

	tryToBuy() {
		if (this.isBuyable()) {
			addBeer( -(this.price) );
			this.price = Math.ceil(this.price * this.priceMultiplicator);
			this.quantity++;
			this.updateUpgradeElement();
			return true;
		}
		else
			return false;
	}

	createUpgradeElement(parentElement) {
		// create elements
		const container = document.createElement("div");

		const image = document.createElement("img");

		const infosContainer = document.createElement("div");
		const title = document.createElement("h3");
		const quantity = document.createElement("p");
		const income = document.createElement("p");
		const incomePerUnit = document.createElement("p");
		const totalIncome = document.createElement("p");

		const buyButton = document.createElement("button");
	
		// assign class/id
		container.classList.add("upgrade-container");

		image.classList.add("upgrade-image");
		infosContainer.classList.add("upgrade-infos-container");
		title.classList.add("upgrade-title");
		quantity.classList.add("upgrade-quantity");
		income.classList.add("upgrade-income");
		incomePerUnit.classList.add("upgrade-incomePerUnit");
		totalIncome.classList.add("upgrade-totalIncome");

		buyButton.classList.add("upgrade-buy-button");
		
		image.src = this.imagePath;

		// append elements
		container.appendChild(image);

		container.appendChild(infosContainer);
		infosContainer.appendChild(title);
		infosContainer.appendChild(quantity);
		infosContainer.appendChild(income);
		infosContainer.appendChild(incomePerUnit);
		infosContainer.appendChild(totalIncome);

		container.appendChild(buyButton);
		
		// buy button event
		buyButton.addEventListener("click", () => {this.tryToBuy()});

		// create and assign elementData object
		this.elementData = {
			container: container,
			image: image,
			title: title,
			quantity: quantity,
			income: income,
			incomePerUnit: incomePerUnit,
			totalIncome: totalIncome,
			buyButton: buyButton
		};

		parentElement.appendChild(container);
		this.updateUpgradeElement();
	}

	updateUpgradeElement() {
		this.elementData.title.innerText = this.title;
		this.elementData.quantity.innerText = `Quantity : ${this.quantity}`;
		this.elementData.income.innerText = `Income : ${this.quantity * this.incomePerUnit}🍺`;
		this.elementData.incomePerUnit.innerText = `Income/Unit : ${this.incomePerUnit}🍺`;
		this.elementData.totalIncome.innerText = `Total Income : ${this.totalIncome}🍺`;
		this.elementData.buyButton.innerHTML = `BUY<br />Cost ${this.price}🍺`;
	}
}
