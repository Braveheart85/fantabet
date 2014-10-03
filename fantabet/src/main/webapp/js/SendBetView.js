function SendBetView() {
	
	var controller,
	
	
	buttonsGroupSelector = "#btngroup",
	buttonsGroupHtml = "<div id='btngroup'></div>",
	
	
	sendBetButtonSelector = "#sendBetButton",
	sendBetButtonHtml = "<button id='sendBetButton'>Invia giocata</button>";

	
	this.initComponents = function(controllerParam){
		controller = controllerParam;
	}

	
	
	var betTemplate = "Template della sezione dedicata alla visualizzazione delle partite";

	this.init = function() {
		populateSections();
		
		bindButtons();
		
    	
    	
    };
    
   
   this.mergeData = function(data){
    	console.log("merge");
    	
    }
   
   var populateSections = function(){
	   $(buttonsGroupSelector).append(sendBetButtonHtml);
   }
   
	var bindButtons = function(){
		$(sendBetButtonSelector).off();
		$(sendBetButtonSelector).on("click", function() {
			controller.sendBet();
		});
	}
   
   this.getBet = function(){
	   return "La bet è questa";
	   
   }
   
   
   //PER GESTIRE PIU' DI UN BUTTON
//   document.getElementById("btngroup").addEventListener(
//		   "click", 
//		   function (event) {
//	   			switch (event.srcElement.id) {
//	   				case "btn1": handleClick();
//	   				break; 
//	   				default: handleClick; 
//	   			}
//	   		}, 
//	   		false); // type, listener, useCapture (true=beginning, false=end)
//   
   
    
}