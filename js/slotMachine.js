export const slotMachine = {
	calculateStatus: function () {
		// TODO: check for three similar symbols and update 'win'-boolean
	},

	didIwin: false,
	heartsCounter: 0,
	cloverCounter: 0,
	cookieCounter: 0,
	spadesCounter: 0,

	getRandomSymbol: function () {
		// TODO: return a single random symbol
		for (let i = 0; i < this.slotsAmount; i++) {
			let r = 4 * Math.random();
			if (r < 1) {
				this.slots[i] = "♥";
				this.heartsCounter++;
			} else if (r < 2) {
				this.slots[i] = "♠";
				this.spadesCounter++;
			} else if (r < 3) {
				this.slots[i] = "♣";
				this.cloverCounter++;
			} else {
				this.slots[i] = "♦";
				this.cookieCounter++;
			}
		}

		if (
			this.heartsCounter > 2 ||
			this.cloverCounter > 2 ||
			this.spadesCounter > 2 ||
			this.cookieCounter > 2
		) {
			this.didIwin = true;
		} else {
			this.didIwin = false;
		}
	},

	reset: function () {
		this.heartsCounter = 0;
		this.cloverCounter = 0;
		this.cookieCounter = 0;
		this.spadesCounter = 0;
		this.didIwin = false;
		// TODO: Empty out the slots and reset 'win'-boolean
	},
	slotsAmount: 3,

	symbols: ["♠", "♥", "♣", "♦"],
	slots: [],

	spin: function () {
		this.getRandomSymbol();
		this.slots.push(this.symbols);
		// TODO: generate three random symbols, and add them to the slots of the slotMachine
	},
};
