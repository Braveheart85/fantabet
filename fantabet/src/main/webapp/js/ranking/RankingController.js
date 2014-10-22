function RankingController() {
	
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
		retrieveRanking();
	}
	
	


	var retrieveRanking = function() {
		var callback = new RetrieveRankingCallback();
		serverRequestExecutor.executeRequestSimple(callback);
	}
   
   
   var RetrieveRankingCallback = function() {
		this.onSuccess = function(data){
			console.log("CLASSIFICA RECUPERATA CON SUCCESSO");

			model.setLastFantaBetDayRanking(data.lastFantaBetDayRanking);
			model.setCompleteRanking(data.completeRanking);

			view.updateRankings(data);
		}
		this.onFailure = function(){
			console.log("Error RetrieveRankingCallback");
		}
	}
   
}