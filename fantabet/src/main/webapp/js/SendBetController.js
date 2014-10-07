function SendBetController() {
	
	var view,
		serverRequestExecutor;
	
	this.initComponents = function(viewParam, serverRequestExecutorParam){
		view = viewParam;
		serverRequestExecutor = serverRequestExecutorParam;
	}
	
	
	
	this.init = function(){
		view.init()
		retrieveOdds();
	}
	
	
   var retrieveOdds = function(){
	   var callback = new RetrieveOddsCallback();
	   serverRequestExecutor.executeRequestSimple(callback);
   }
   
   
   this.sendBet = function(data){
	   var bet = view.getBet();
	   var callback = new SendBetCallback();
	   serverRequestExecutor.executeRequestWithData(bet, callback);
   }
   
   
   var RetrieveOddsCallback = function() {
		this.onSuccess = function(data){
			console.log("QUOTE RECUPERATE CON SUCCESSO")
			view.updateMatchList(data);
		}
		this.onFailure = function(){
			console.log("Error RetrieveOddsCallback")
		}
	}
   
   var SendBetCallback = function() {
		this.onSuccess = function(){
			console.log("GIOCATA INVIATA CON SUCCESSO")
		}
		this.onFailure = function(){
			console.log("Error SendBetCallback")
		}
	}
    
}