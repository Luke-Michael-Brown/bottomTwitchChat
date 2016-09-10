// Constants
var WIDTH_THRESHOLD = 767;
var INTERVAL_TIME = 100;

// Vars
var interval;
var right_col;
var main_col;

// Main
var main = function() {
	if (!right_col || !main_col) {
		right_col = document.getElementById("right_col");
		main_col = document.getElementById("main_col");
	}

	if (right_col && main_col) {
		var width = window.innerWidth;
		var height = window.innerHeight;

		var player_height = Math.floor(width * 9 / 16);
		var chat_height = height - player_height;

		if (width <= WIDTH_THRESHOLD) {
			right_col.style.height = chat_height + "px";
			main_col.style.height = (height - chat_height) + "px";
		} else {
			right_col.style.height = "initial";
			main_col.style.height = "100%";
		}

		clearInterval(interval);
	}
}

// Call main often until it finshed once
interval = setInterval(main, INTERVAL_TIME);

// Recall main every time there is a window resize
window.onresize = main;
