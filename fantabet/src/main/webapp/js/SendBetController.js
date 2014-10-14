function SendBetController() {
	
	var view,
		model,
		serverRequestExecutor;
	
	this.initComponents = function(viewParam, modelParam, serverRequestExecutorParam){
		view = viewParam;
		model = modelParam;
		serverRequestExecutor = serverRequestExecutorParam;
	}
	

	this.init = function() {
		view.init()
		model.init()
		retrieveOdds();
	}
	
	


	var retrieveOdds = function() {
		var callback = new RetrieveOddsCallback();
		serverRequestExecutor.executeRequestSimple(callback);
	}
   
   

	   
   this.sendBet = function(data) {
		var bet = model.getBet();
		console.log("sendBet");
		var callback = new SendBetCallback();
		serverRequestExecutor.executeRequestWithData(bet, callback);
	}
   
   
   var RetrieveOddsCallback = function() {
		this.onSuccess = function(data){
			console.log("QUOTE RECUPERATE CON SUCCESSO");
			//console.log("sendBet" + JSON.stringify(data))
			model.setBet(data);
			
//			console.log((bet.getBettableEvents()[0].getSingleBets()[0].getOdd()))
//			console.log((bet.getBettableEvents()[0].getSingleBets()[1].getOdd()))
//			console.log((bet.getBettableEvents()[0].getSingleBets()[2].getOdd()))
//			console.log((bet.getBettableEvents()[1].getSingleBets()[0].getOdd()))
//			console.log((bet.getBettableEvents()[1].getSingleBets()[1].getOdd()))
//			console.log((bet.getBettableEvents()[1].getSingleBets()[2].getOdd()))
			
			
			
			
			
			view.updateMatchList(data);
		}
		this.onFailure = function(){
			console.log("Error RetrieveOddsCallback");
		}
	}
   
   var SendBetCallback = function() {
		this.onSuccess = function(){
			console.log("GIOCATA INVIATA CON SUCCESSO");
		}
		this.onFailure = function(){
			console.log("Error SendBetCallback");
		}
	}
   
   
   
   


	this.calculateTotal = function(singleBetSelector, eventSelector) {
		//var currentOdd = view.getCurrentOdd(singleBetSelector);
//		console.log("singleBetSelector: " + singleBetSelector + " - " + "eventSelector: " + eventSelector)
//		console.log("getIdFromSelector(eventSelector): " + getIdFromSelector(eventSelector) + " - " + "getIdFromSelector(singleBetSelector): " + getIdFromSelector(singleBetSelector))
		model.setSingleBet(getIdFromSelector(eventSelector), getIdFromSelector(singleBetSelector));
//		alert("calculateTotal")
		var winAmount = model.getWinAmount();
		view.setWinAmount(winAmount);
		

	}
   
   
   
}