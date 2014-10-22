function SendBetModel() {
	
	
	var bet;
	var amount = 0;
	
	this.init = function(){
	}
	
	
	this.getBet = function(){
		return bet;
	}
	
	this.setBet = function(data){
		bet = data
	}
	
	this.setSingleBet = function(eventId, singleBetId) {
		var bettableEvents = bet.bettableEvents;
		for (var i = 0, len = bettableEvents.length; i < len; i++) {
			var event = bettableEvents[i];
			if (event.id == eventId){
				var singleBets = event.singleBets;
				for (var j = 0, len2 = singleBets.length; j < len2; j++) {
					singleBet = singleBets[j];
					if (singleBet.id == singleBetId){
						event.bet = singleBet;
					}
				}
			}
		}
	}
	
	
	this.getWinAmount = function() {
		var winAmount = 1;
		var bettableEvents = bet.bettableEvents;
		
		for (var i = 0, len = bettableEvents.length; i < len; i++) {
			var event = bettableEvents[i];
			var singleBet = event.bet;
			if (singleBet !== undefined){
				winAmount = winAmount * singleBet.odd;
			}
		}
		return Math.round(100 * winAmount) / 100;
	}

}