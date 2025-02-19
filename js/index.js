import { slotMachine } from "./slotMachine.js";

function init() {
	// TODO: log the document using console.log to test if you can get access to it
	// TODO: log the submit button. If that works, store that button in a variable
	// TODO: attach an event listener to that button and show a log "button clicked"
	// TODO: if the submit button is clicked, the lever is pulled (= call that function)
	console.log("Init");
	console.log(document.querySelector("#button"));

	document.querySelector("#button").addEventListener("click", function () {
		console.log("Button clicked");
		pullLever();
	});
}

function pullLever() {
	// TODO: reset the machine (you may skip this step for now, and focus on getting the machine to work first)
	// TODO: spin the slot machine
	// TODO: show slots and win status
	slotMachine.reset();
	slotMachine.spin();
	showSlots();
	showGameResult();
}

function showSlots() {
	let results = "";
	// TODO: show the slot symbols in HTML
	for (let i = 0; i < slotMachine.slotsAmount; i++) {
		results = results + slotMachine.slots[i];
		document.querySelector("#result").innerHTML = results;
	}
}

function showGameResult() {
	let iWon = "You Win!";
	let iLost = "You Lose!";
	// TODO: show a win or lose message in HTML
	if (slotMachine.didIwin == true) {
		console.log("BIG WWWWWWWWWWWWWWWWWWWWWWWW");
		document.querySelector("#status").innerHTML = iWon;
	} else if (slotMachine.didIwin == false) {
		console.log("BIG LLLLLLLLLLLLLLLLLLLLLLLL");
		document.querySelector("#status").innerHTML = iLost;
	}

	iWon = "";
	iLost = "";
}

init();
