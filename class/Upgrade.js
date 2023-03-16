class Upgrade {

	constructor(_id, _title, _description, _incomePerUnit, _price, _isAuto, _quantity = 0) {
		this.id = _id;
		this.title = _title;
		this.description = _description;

		this.quantity = _quantity;

		this.incomePerUnit = _incomePerUnit;
		this.totalIncome = 0;

		this.price = _price;
		this.priceMultiplicator = 2;

		this.isAuto = _isAuto;

		this.elementData = null;

		if (this.isAuto)
			setInterval(() => { this.earn() }, 1000);
	}

	earn() {
		let currentIncome = this.incomePerUnit * this.quantity;
		if (currentIncome > 0)
		{
			addBeer(currentIncome);
			this.totalIncome += currentIncome;
			this.updateElement();
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
			this.updateElement();
			return true;
		}
		else
			return false;
	}

	createElement(parentElement) {
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
		container.id = `upgrade-${this.id}`;
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
		
		// buy button event
		buyButton.addEventListener("click", () => {this.tryToBuy()});

		// create and assign elementData object
		this.elementData = {
			container: container,
			title: title,
			quantity: quantity,
			income: income,
			incomePerUnit: incomePerUnit,
			totalIncome: totalIncome,
			buyButton: buyButton
		};

		parentElement.appendChild(container);
		this.updateElement();
	}

	updateElement() {
		this.elementData.title.innerText = this.title;
		this.elementData.quantity.innerText = `Quantity : ${this.quantity}🍺`;
		this.elementData.income.innerText = `Income : ${this.quantity * this.incomePerUnit}🍺`;
		this.elementData.incomePerUnit.innerText = `Income/Unit : ${this.incomePerUnit}🍺`;
		this.elementData.totalIncome.innerText = `Total Income : ${this.totalIncome}🍺`;
		this.elementData.buyButton.innerHTML = `BUY<br />[${this.price}🍺]`;
	}
}
