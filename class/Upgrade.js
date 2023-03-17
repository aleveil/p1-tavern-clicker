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
			updateHiddenUpgrades();
			return true;
		}
		else
			return false;
	}

	createUpgradeElement(parentElement) {
		// create elements
		const container = document.createElement("div");

		const profileContainer = document.createElement("div")
		const image = document.createElement("img");

		const infosContainer = document.createElement("div");
		const title = document.createElement("h3");
		const income = document.createElement("p");
		const incomePerUnit = document.createElement("p");
		const totalIncome = document.createElement("p");

		const buyButton = document.createElement("button");
	
		// assign class/id
		container.classList.add("upgrade-container");

		profileContainer.classList.add("upgrade-profile-container")
		image.classList.add("upgrade-image");
		infosContainer.classList.add("upgrade-infos-container");
		title.classList.add("upgrade-title");
		income.classList.add("upgrade-income");
		incomePerUnit.classList.add("upgrade-income-per-unit");
		totalIncome.classList.add("upgrade-totalIncome");

		buyButton.classList.add("upgrade-buy-button");
		
		image.src = this.imagePath;

		// append elements

		container.appendChild(profileContainer);
		profileContainer.appendChild(image);

		profileContainer.appendChild(infosContainer);
		infosContainer.appendChild(title);
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
			income: income,
			incomePerUnit: incomePerUnit,
			totalIncome: totalIncome,
			buyButton: buyButton
		};

		parentElement.appendChild(container);
		this.updateUpgradeElement();
	}

	updateUpgradeElement() {
		this.elementData.title.innerHTML = `${this.title}`;
		this.elementData.income.innerHTML = `<span class="important-data">${this.quantity} ${this.title}${this.quantity > 1 ? "s": ""}</span> produce <span class="important-data">${this.quantity * this.incomePerUnit}🍺</span>`;
		this.elementData.income.innerHTML += this.isAuto ? "/sec." : "/click." ;
		this.elementData.incomePerUnit.innerHTML = `Each <span class="important-data">${this.title}</span> produce <span class="important-data">${this.incomePerUnit}🍺</span>`;
		this.elementData.incomePerUnit.innerHTML += this.isAuto ? "/sec." : "/click." ;
		this.elementData.totalIncome.innerHTML = `<span class="important-data">${this.totalIncome}🍺</span> produced so far.`;
		this.elementData.buyButton.innerHTML = `<span class="important-data">BUY<br />Cost ${this.price}🍺</span>`;
	}
}
