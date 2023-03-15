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

		if (this.isAuto)
			setInterval(() => { this.earn() }, 1000);
	}

	earn() {
		let currentIncome = this.incomePerUnit * this.quantity;
		if (currentIncome > 0)
		{
			addBeer(currentIncome);
			this.totalIncome += currentIncome;
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
			return true;
		}
		else
			return false;
	}
}