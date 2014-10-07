function SendBetView() {
	
	var controller,
	
	
//	buttonsGroupSelector = "#btngroup",
//	buttonsGroupHtml = "<div id='btngroup'></div>",
	
	
	
	
	sendBetButtonSelector = "#sendBetButton",
	sendBetButtonHtml = '<a id = "sendBetButton" class="btn btn-lg btn-primary" onclick="sendBet()" role="button">Invia &raquo;</a>'//"<button id='sendBetButton'>Invia giocata</button>";

	
	
	matchListContainerId = "matchListContainer"
	matchListContainerSelector = "#matchListContainer"
	
	
	
	
	
	
	
	pageTemplate = 


'	<div class="container">' +

'		<div class="panel panel-default">' +
'			<div class="panel-body">' +
'				<h2 align="center">Invia Giocata</h2>' +
'			</div>' +
'		</div>' +

'		<div class="panel panel-default">' +
'			<div class="panel-body">' +
'				<div align="center">' +
'					<p>Completa la giocata e inviala</p>' +
'				</div>' +
'			</div>' +
'		</div>' +

'		<div class="panel panel-default">' +
'			<div class="panel-body">' +
'				<div id = "' + matchListContainerId + '" align="center">' +

'					<div class="input-group">' +
'						<h3 style="align: center;">La tua giocata</h3>' +
'						<input type="text" class="form-control" value="0" id="amount" readonly>' +
'					</div>' +
'					<p>' +
						sendBetButtonHtml + 
'					</p>' +
'				</div>' +
'			</div>' +
'		</div>';
'	</div>',




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
	'	<tbody>' + 
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
	'		<!--QUI VA LA SINGOLA PARTITA PIU QUOTE -->' + 
	'	</tbody>' + 
	'</table>',		
	
	
	
	matchTemplate = 
	'		<tr>' +
	'			<td width="50%" align="right">' +
	'				<p class="game">Roma - Lazio</p>' +
	'			</td>' +
	'			<td width="50%" align="left">' +
	'				<button id="11" onclick="calculateTotal(11)" value="10.5"' +
	'					type="button" class="btn btn-default btn-res">10.5</button>' +
	'				<button id="12" onclick="calculateTotal(12)" value="5"' +
	'					type="button" class="btn btn-default btn-res">5</button>' +
	'				<button id="13" onclick="calculateTotal(13)" value="1.08"' +
	'					type="button" class="btn btn-default btn-res">1.08</button>' +
	'			</td>' +
	'		</tr>';
	
	
	
	

	
	
	
	
	
	
	
	
	
	
	
	
	
	


	
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
	   $('body').append(menu);
	   $('body').append(pageTemplate);
//	   $('body').append(matchListTemplate);
//	   $(buttonsGroupSelector).append(sendBetButtonHtml);
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
   
   
   this.updateMatchList = function(data){
	   console.log(myToString(data));
	   
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