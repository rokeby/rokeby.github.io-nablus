$(document).ready(function () {

var gas = new Array("assets/img/gas1.jpg")

var gasNumber = 2; 
var gasTotal = 24;

while (gasNumber < gasTotal) {
	gasNumber++;
	// console.log(gasNumber);
	gas.push("assets/img/gas" + gasNumber + ".jpg")
}

var max = gas.length;
var currentImage = $("img").attr("src");
var currentID = currentImage.replace(/.*\.*\.jpg/, '$1');
var currentIndex = 0

while (currentIndex < max) {
	if (gas[currentIndex] == currentID) {
		break;
	}
	currentIndex++;
}

	$(function() {
		$("img").click(function(){
			currentIndex = (currentIndex + 1) % max;
			$("img").attr('src', gas[currentIndex]);
		});
	});

function timer() {
		setInterval( function() {
			currentIndex = (currentIndex + 1) % max;
			$("img").attr('src', gas[currentIndex]);
		}, 4000)
		clearTimeout();
	}

window.onload=timer();

});
