function RankingModel() {
	
	
	var completeRanking;
	var lastFantaBetDayRanking;
	
	this.init = function(){
	}
	
	
	this.getCompleteRanking = function(){
		return completeRanking;
	}
	
	this.setCompleteRanking = function(data){
		completeRanking = data
	}
	
	this.getLastFantaBetDayRanking = function(){
		return lastFantaBetDayRanking;
	}
	
	this.setLastFantaBetDayRanking = function(data){
		lastFantaBetDayRanking = data
	}
	
}