bettedMatches = {}; //It is a map matchId+bet - odds

//odds -> quota
//amount -> somma
//match -> partita

function colorButton(id) {
	//var color = '#' + color3;
	var color1 = "white";
	var color2 = "lightblue";

	document.getElementById(id.toString().charAt(0) + 1).style.background = color1;
	document.getElementById(id.toString().charAt(0) + 2).style.background = color1;
	document.getElementById(id.toString().charAt(0) + 3).style.background = color1;
	document.getElementById(id).style.background = color2;
}

function initAmount() {
	document.getElementById("amount").value = 0;
}

function getWinAmount() {
	var winAmount = 1;
	for ( var key in bettedMatches) {
		if (bettedMatches.hasOwnProperty(key)) {
			winAmount = winAmount * bettedMatches[key];
		}
	}
	return Math.round(100 * winAmount) / 100;
}

function get(k) {
	return bettedMatches[k];
}

//Remove previous bet on the current match
//Add the new bet
function put(k, v) {
	for ( var key in bettedMatches) {
		if (bettedMatches.hasOwnProperty(key)) {
			if (k.toString().charAt(0) == key.toString().charAt(0)) {
				delete bettedMatches[key];

			}
		}
	}

	bettedMatches[k] = v;
}

function calculateTotal(id) {

	colorButton(id);

	var currentOdds = document.getElementById(id).value;

	/*alert("matchId: " + matchId)
	alert("currentOdds: " + currentOdds)
	alert("oldSumValue: " + oldSumValue)
	alert("newSumValue: " + newSumValue) */

	put(id, currentOdds.toString());

	winAmount = getWinAmount();
	document.getElementById("amount").value = winAmount;

	//printArray(bettedMatches);

}

function printArray(bettedMatches) {

	for ( var key in bettedMatches) {
		if (bettedMatches.hasOwnProperty(key)) {
			alert(key + " -> " + bettedMatches[key]);
		}
	}
}

function sendBet() {

}
