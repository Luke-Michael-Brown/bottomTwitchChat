// Constants
var WIDTH_THRESHOLD = 750;
var HEIGHT_THRESHOLD = 400;

var HEIGHT_MAX_RATIO = 0.75;
var CHAT_HEIGHT_MULTIPLIER = 300;
var INTERVAL_TIME = 100;

// Vars
var right_col;
var main_col;
var interval;

// Main
var main = function() {
	if (!right_col || !main_col) {
		right_col = document.getElementById("right_col");
		main_col = document.getElementById("main_col");
	}

	if (right_col && main_col) {
		var width = window.innerWidth;
		var height = window.innerHeight;
		var chat_height = Math.min(Math.floor(CHAT_HEIGHT_MULTIPLIER * height / width), height * HEIGHT_MAX_RATIO);

		if (width <= WIDTH_THRESHOLD) {
			right_col.style.height = chat_height + "px";
			main_col.style.height = (height - chat_height) + "px";
		} else {
			if (height <= HEIGHT_THRESHOLD) {
				right_col.style.height = "0px";
				main_col.style.height = "100%";
			} else {
				right_col.style.height = "initial";
				main_col.style.height = "100%";
			}
		}

		clearInterval(interval);
	}
}

// Call main often until it finshed once
interval = setInterval(main, INTERVAL_TIME);

// Recall main every time there is a window resize
window.onresize = main;
