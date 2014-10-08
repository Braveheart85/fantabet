function SendBetModel() {
	
	var amount = 0;
	var bettedMatches = {}; //It is a map matchId+bet - odds

	
	this.init = function(){
	}
	
	
	this.getBet = function(){
		return bettedMatches;
	}
	
	this.get = function(k) {
		return bettedMatches[k];
	}

	this.updateBet = function(eventId, singleBetId, singleBetOdd) {
		//Remove previous bet on the current match
		for ( var key in bettedMatches) {
			if (bettedMatches.hasOwnProperty(key)) {
				if (eventId == key) {
					delete bettedMatches[key];
				}
			}
		}
		
		//Add the new bet
		singleBet = { 
						"id" : singleBetId,
						"odd" : singleBetOdd
					};
		
		bettedMatches[eventId] = singleBet;
	} 
	
	
	this.getWinAmount = function() {
		var winAmount = 1;
		for ( var key in bettedMatches) {
			if (bettedMatches.hasOwnProperty(key)) {
				winAmount = winAmount * bettedMatches[key].odd;
			}
		}
		return Math.round(100 * winAmount) / 100;
	}


}