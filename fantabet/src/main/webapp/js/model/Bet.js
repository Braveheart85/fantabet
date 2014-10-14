function Bet(data) {
	
		
	this.bettableEvents = data.bettableEvents;
	this.userId = data.userId;
	this.championshipDayId = data.championshipDayId;
	this.championshipDayName = data.championshipDayName;
	
//	this.init = function(data){
//		for (var i = 0, len = data.bettableEvents.length; i < len; i++) {
//			var bettableEventVO = data.bettableEvents[i];
//			var bettableEvent = new Event();
//			bettableEvent.init(bettableEventVO);
//			bettableEvents[i] = bettableEvent;
//		}
//			
//		userId = data.userId;
//		championshipDayId = data.championshipDayId;
//		championshipDayName = data.championshipDayName;
//		
//	}
	
	
//	this.getBettableEvents = function(){
//		return bettableEvents;
//	}
//	this.setBettableEvents = function(data){
//		bettableEvents = data;
//	}
//
//	
//	this.getBettableEvents = function(){
//		return bettableEvents;
//	}
//	this.setBettableEvents = function(data){
//		bettableEvents = data;
//	}
//	
//	
//	this.getUserId = function(){
//		return userId;
//	}
//	this.setUserId = function(data){
//		this.userId = data;
//	}
//	
//	
//	this.getChampionshipDayId = function(){
//		return championshipDayId;
//	}
//	this.setChampionshipDayId = function(data){
//		championshipDayId = data;
//	}
//	
//	
//	this.getChampionshipDayName = function(){
//		return championshipDayName;
//	}
//	this.setChampionshipDayName = function(data){
//		championshipDayName = data;
//	}
	
	
//	this.toJSON = function() {
//	    
//		var bettableEventsString =  [];
//		for (var i = 0, len = bettableEvents.length; i < len; i++) {
//			bettableEventsString[i] = bettableEvents[i].toJSON();
//		}
//	    var result = JSON.stringify({
//			userId: userId,
//			championshipDayId: championshipDayId,
//			championshipDayName: championshipDayName
//	        
//	      
//		});
//	    
//		result = result.substring(0, result.length-1);
//		result += ',\n  "bettableEvents" : [ ' + bettableEventsString + " ] ";
//		result += " } "
//
//		return result;
//	    
//	}
//	
	
}