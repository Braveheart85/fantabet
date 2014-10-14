function Event(data) {
	
	this.homeTeam = data.homeTeam;
	this.awayTeam = data.awayTeam;
	this.id = data.id;
	this.singleBets = data.singleBets;
	this.bet = data.bet;

//	this.init = function(data){
//		for (var i = 0, len = data.singleBets.length; i < len; i++) {
//			var singleBetVO = data.singleBets[i];
//			var singleBet = new SingleBet();
//			singleBet.init(singleBetVO);
//			singleBets[i] = singleBet;
//		}
//		homeTeam = data.homeTeam;
//		awayTeam = data.awayTeam;
//		id = data.id;
//		bet = data.bet;
//	}
//
//	this.getHomeTeam = function(){
//		return homeTeam;
//	}
//	this.setHomeTeam = function(data){
//		homeTeam = data;
//	}
//	
//	
//	this.getAwayTeam = function(){
//		return awayTeam;
//	}
//	this.setAwayTeam = function(data){
//		awayTeam = data;
//	}
//	
//	
//	this.getId = function(){
//		return id;
//	}
//	this.setId = function(data){
//		id = data;
//	}
//	
//	
//	this.getSingleBets = function(){
//		return singleBets;
//	}
//	this.setSingleBets = function(data){
//		singleBets = data;
//	}
//	
//	
//	this.getBet = function(){
//		return bet;
//	}
//	this.setBet = function(data){
//		bet = data;
//	}
//	
//	
//	this.toJSON = function() {
//	    
//		var singleBetsString =  [];
//		for (var i = 0, len = singleBets.length; i < len; i++) {
//			singleBetsString[i] = singleBets[i].toJSON();
//		}
//	        	
//		var result = JSON.stringify({
//	        homeTeam: homeTeam,
//	        awayTeam: awayTeam,
//	        id: id
//	      
//		})
//
//		result = result.substring(0, result.length-1);
//		result += ',\n "bet" :  ' + bet.toJSON() + " , ";
//		
////		result += "bet : {" + bet.toJSON() + "}";
//
//		//result += "singleBets : [" + singleBetsString + "]";
//		
//		result += ' "singleBets" : [ ' + singleBetsString + " ] ";
//		result += " } "
//		
//		
//		return result;
//	    
//	}
	
	
}