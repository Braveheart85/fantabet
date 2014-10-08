function SendBetView() {
	
	var controller,
	
	
	sendBetButtonSelector = "#sendBetButton",
	sendBetButtonId = "sendBetButton",
	sendBetButtonHtml = '<a id = "' + sendBetButtonId + '" class="btn btn-lg btn-primary" role="button">Invia &raquo;</a>',

	
	
	matchListContainerId = "matchListContainer",
	matchListContainerSelector = "#matchListContainer",
	
	
	
	matchListId = "matchList",
	matchListSelector = "#matchList",
	
	winAmountTextBoxId = "winAmountTextBox",
	winAmountTextBoxSelector = "#winAmountTextBox",
	
	pageTemplate = 

	'<div class="container">' +
	
	'	<div class="panel panel-default">' +
	'		<div class="panel-body">' +
	'			<h2 align="center">Invia Giocata</h2>' +
	'		</div>' +
	'	</div>' +
	
	'	<div class="panel panel-default">' +
	'		<div class="panel-body">' +
	'			<div align="center">' +
	'				<p>Completa la giocata e inviala</p>' +
	'			</div>' +
	'		</div>' +
	'	</div>' +
	
	'	<div class="panel panel-default">' +
	'		<div class="panel-body">' +
	'			<div id = "' + matchListContainerId + '" align="center">' +
	'				<!--ELENCO DEGLI EVENTI E RELATIVE QUOTE-->' +
	
	'				<!--AMMONTARE DELLA GIOCATA-->' +
	'				<div class="input-group">' +
	'					<h3 style="align: center;">La tua giocata</h3>' +
	'					<input id="' + winAmountTextBoxId + '" type="text" class="form-control" value="0" readonly>' +
	'				</div>' +
	
	'				<!--BUTTON DI INVIO GIOCATA-->' +
	'				<p>' +
							sendBetButtonHtml + 
	'				</p>' +
	'			</div>' +
	'		</div>' +
	'	</div>';
	'</div>',




	menu = 
	'<div class="container">' +

	'	<!-- Static navbar -->' +
	'	<div class="navbar navbar-default" role="navigation">' +
	'		<div class="container-fluid">' +
	'			<div class="navbar-header">' +
	'				<button type="button" class="navbar-toggle" data-toggle="collapse"' +
	'					data-target=".navbar-collapse">' +
	'					<span class="sr-only">Toggle navigation</span>' +
	'					<span class="icon-bar"></span>' +
	'					<span class="icon-bar"></span>' +
	'					<span class="icon-bar"></span>' +
	'				</button>' +
	'				<a class="navbar-brand" href="#">Fanta Bet</a>' +
	'			</div>' +
	'			<div class="navbar-collapse collapse">' +
	'				<ul class="nav navbar-nav">' +
	'					<li><a href="inviaGiocata.jsp">Invia Giocata</a></li>' +
	'					<li><a href="classifiche.jsp">Classifiche</a></li>' +
	'					<li><a href="storicoGiocate.jsp">Storico Giocate</a></li>' +
	'					<li><a href="regolamento.html">Regolamento</a></li>' +
	'					<li><a href="pagamenti.jsp">Pagamenti</a></li>' +
	'					<li><a href="contatti.html">Contatti</a></li>' +
	'					<li><a href="bachecaInsulti.jpg">Bacheca Insulti</a></li>' +
	'				<!--<li class="dropdown"><a href="#" class="dropdown-toggle"' +
	'						data-toggle="dropdown">Dropdown <span class="caret"></span></a>' +
	'						<ul class="dropdown-menu" role="menu">' +
	'							<li><a href="#">Action</a></li>' +
	'							<li><a href="#">Another action</a></li>' +
	'							<li><a href="#">Something else here</a></li>' +
	'							<li class="divider"></li>' +
	'							<li class="dropdown-header">Nav header</li>' +
	'							<li><a href="#">Separated link</a></li>' +
	'							<li><a href="#">One more separated link</a></li>' +
	'						</ul>' +
	'					</li> -->' +
	'				</ul>' +
	'				<ul class="nav navbar-nav navbar-right">' +
	'					<li><a href="../navbar-fixed-top/">Logout</a></li>' +
	'				</ul>' +
	'			</div>' +
	'			<!--/.nav-collapse -->' +
	'		</div>' +
	'		<!--/.container-fluid -->' +
	'	</div>' +


	'</div>',







	matchListTemplate = 
	'<table class="table">' + 
	'	<tbody id ="' + matchListId + '">' + 
	'		<tr>' + 
	'			<td width="50%" align="right">' + 
	'				<p>' + 
	'					<span class="match label label-default">Partita</span>' + 
	'				</p>' + 
	'			</td>' + 
	'			<td width="50%" align="left">' + 
	'				<div class="inline"><p>' + 
	'					<span class="result label label-default">1</span>' + 
	'				</p></div>' + 
	'				<div class="inline"><p>' + 
	'					<span class="result label label-default">X</span>' + 
	'				</p></div>' + 
	'				<div class="inline"><p>' + 
	'					<span class="result label label-default">2</span>' + 
	'				</p></div>' + 
	'			</td>' + 
	'		</tr>' + 
	'		<!--EVENTO E RELATIVE QUOTE -->' + 
	'	</tbody>' + 
	'</table>',		
	
	
	
	
	
	
	
	
	


	
	this.initComponents = function(controllerParam){
		controller = controllerParam;
	}

	
	this.init = function() {
		populateSections();
		__bindSendBetButtonId();
    };
    
   
   this.mergeData = function(data){
    	console.log("merge");
    	
    }
   
   var populateSections = function(){
	   $('body').append(menu);
	   $('body').append(pageTemplate);
	   
   }
   
//	var bindButtons = function(){
//		$(sendBetButtonSelector).off();
//		$(sendBetButtonSelector).on("click", function() {
//			controller.sendBet();
//		});
//	}
   
   this.updateMatchList = function(data){
	   
	   $(matchListContainerSelector).prepend(matchListTemplate);
	   var bettableEvents = data.bettableEvents;
	   var currentEvent;
	   var currentMatchHtml;
	   for (var i = 0, len = bettableEvents.length; i < len; i++) {
		   currentEvent = bettableEvents[i];
		   currentMatchHtml = 
		   		   
				'		<tr id="' + currentEvent.eventId + '">' +
				'			<td width="50%" align="right">' +
				'				<p class="game">' + currentEvent.homeTeam + ' - ' + currentEvent.awayTeam + '</p>' +
				'			</td>' +
				'			<td width="50%" align="left">' +
								getAllSingleBetsHtml(currentEvent.singleBets, "#" + currentEvent.eventId);
				'			</td>' +
				'		</tr>';
	   
	 
		   
		   $(matchListSelector).append(currentMatchHtml);
		   
	   }
	   
   }
   
   
   
   var getAllSingleBetsHtml = function(singleBets, eventSelector){
	   var allSingleBetHtml = "";
	   var singleBetHtml
	   var singleBet;
	   
	   for (var i = 0, len = singleBets.length; i < len; i++) {
		   singleBet = singleBets[i];
		   singleBetHtml = 
			'				<button id="' + singleBet.id + '" value="' + singleBet.odd + '"' +
			'					type="button" class="btn btn-default btn-res">' + singleBet.odd + '</button>';
		   allSingleBetHtml += singleBetHtml;
		   
		   __bindSingleBetButton('#' + singleBet.id, eventSelector);
		   
	   }
	   return allSingleBetHtml;
   }
   
   
   
   var __bindSingleBetButton = function(singleBetSelector, eventSelector) {
	   $(singleBetSelector).off() 
	   $(document).on( "click", singleBetSelector, function(event, ui) {
		   var odd = $(singleBetSelector).val();
		   colorButton(singleBetSelector, eventSelector);
		   controller.calculateTotal(singleBetSelector, eventSelector);
	   });	
   }

   
   var __bindSendBetButtonId = function() {
	   $(sendBetButtonSelector).off() 
	   $(document).on( "click", sendBetButtonSelector,function(event, ui) {
		   controller.sendBet();	
	   })
   }

   var colorButton = function(singleBetSelector, eventSelector) {
		var color1 = "white";
		var color2 = "lightblue";
		var buttons = $(eventSelector + " " + "button");
		for (var i = 0, len = buttons.length; i < len; i++) {
			buttons[i].style.background = color1;
		}
		$(singleBetSelector).get(0).style.background = color2;
	}
   
   
   
   this.setWinAmount = function(winAmount){
	   $(winAmountTextBoxSelector).get(0).value = winAmount;
   }
   
   
   this.getCurrentOdd = function(buttonSelector){
	   return $(buttonSelector).get(0).value;
   }
//	PER GESTIRE PIU' DI UN BUTTON
//  document.getElementById("btngroup").addEventListener(
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