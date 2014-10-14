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
		//console.log("setBet\n" + myToString(data))
	}
	
	
//	
//	this.getSingleBet = function(data){
//		//alert("getSingleBet \n" + data.getResult())
//		bet.bettableEvents[data];
//		
//	}
	
	this.setSingleBet = function(eventId, singleBetId) {
		//alert("singleBet\n" + myToString(bet.getBettableEvents()));
		var bettableEvents = bet.bettableEvents;
		for (var i = 0, len = bettableEvents.length; i < len; i++) {
//			console.log("0 sono qui a mettere la single bet")
			var event = bettableEvents[i];
//			console.log("eventId: " + eventId + " - " + "event.getId(): " + event.getId())
			if (event.id == eventId){
//				console.log("1 sono qui a mettere la single bet")
				var singleBets = event.singleBets;
				for (var j = 0, len2 = singleBets.length; j < len2; j++) {
//					console.log("2 sono qui a mettere la single bet")
					singleBet = singleBets[j];
					if (singleBet.id == singleBetId){
						event.bet = singleBet;
//						console.log("3 sono qui a mettere la single bet: " + singleBet.getId())
//						console.log("3 sono qui a mettere la single bet: " + singleBet.getOdd())
//						console.log("3 sono qui a mettere la single bet: " + singleBet.getId())
					}
				}
			}
//			bettableEvents[i] = event;
		}
//		bet.setBettableEvents(bettableEvents);
//		console.log(bet.getBettableEvents())
	}
	
	
	this.getWinAmount = function() {
		var winAmount = 1;
		var bettableEvents = bet.bettableEvents;
		
		for (var i = 0, len = bettableEvents.length; i < len; i++) {
			var event = bettableEvents[i];
//			console.log("xx " + myToString(event.getBet()));
			
			var singleBet = event.bet;
			if (singleBet !== undefined){
				winAmount = winAmount * singleBet.odd;
			}
		}
		return Math.round(100 * winAmount) / 100;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
		
	
	
	
	
	
//	this.get = function(k) {
//		return bettedMatches[k];
//	}

	
	
	
//	
//	this.updateBet = function(eventId, singleBetId, singleBetOdd) {
//		//Remove previous bet on the current match
//		for ( var key in bettedMatches) {
//			if (bettedMatches.hasOwnProperty(key)) {
//				if (eventId == key) {
//					delete bettedMatches[key];
//				}
//			}
//		}
//		
//		//Add the new bet
//		singleBet = { 
//						"id" : singleBetId,
//						"odd" : singleBetOdd
//					};
//		
//		bettedMatches[eventId] = singleBet;
//	} 
//	
//	
//	this.getWinAmount = function() {
//		var winAmount = 1;
//		for ( var key in bettedMatches) {
//			if (bettedMatches.hasOwnProperty(key)) {
//				winAmount = winAmount * bettedMatches[key].odd;
//			}
//		}
//		return Math.round(100 * winAmount) / 100;
//	}


}