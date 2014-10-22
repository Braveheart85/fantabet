function RankingView() {
	
	var controller,
	
	lastFantaBetDayRankingContainerId = "lastFantaBetDayRankingContainer",
	lastFantaBetDayRankingContainerSelector = "#lastFantaBetDayRankingContainer",
	
	completeRankingContainerId = "completeRankingContainer",
	completeRankingContainerSelector = "#completeRankingContainer",
	
	lastFantaBetDayRankingId = "lastFantaBetDayRanking",
	lastFantaBetDayRankingSelector = "#lastFantaBetDayRanking",
	completeRankingId = "completeRanking",
	completeRankingSelector = "#completeRanking",

	pageTemplate = 
'		<div class="container">' +
	
'			<div class="panel panel-default">' +
'				<div class="panel-body">' +
'					<h2 align="center">Classifiche</h2>' +
'				</div>' +
'			</div>' +

'			<div class="panel panel-default">' +
'				<div class="panel-body">' +
'					<div id = "' + lastFantaBetDayRankingContainerId + '" align="center">' +
'						<h4>Classifica di giornata</h4>' +
'						<!-- Table -->' +

'					</div>' +
'				</div>' +
'			</div>' +



'			<div class="panel panel-default">' +
'				<div class="panel-body">' +
'					<div id = "' + completeRankingContainerId + '" align="center">' +
'						<h4>Classifica generale</h4>' +
'						<!-- Table -->' +

'					</div>' +
'				</div>' +
'			</div>' +
'		</div>',


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
	'					<li><a href="inviaGiocata.html">Invia Giocata</a></li>' +
	'					<li><a href="classifiche.html">Classifiche</a></li>' +
	'					<li><a href="storicoGiocate.html">Storico Giocate</a></li>' +
	'					<li><a href="regolamento.html">Regolamento</a></li>' +
	'					<li><a href="pagamenti.html">Pagamenti</a></li>' +
	'					<li><a href="contatti.html">Contatti</a></li>' +
	'					<li><a href="bachecaInsulti.html">Bacheca Insulti</a></li>' +
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


	lastFantaBetDayRankingTemplate = 
'		<table class="table table-striped">' +
'			<tbody id ="' + lastFantaBetDayRankingId + '">' +
'				<tr>' +
'					<td>Posizione</td>' +
'					<td>Giocatore</td>' +
'					<td>Punteggio</td>' +
'				</tr>' +

'				<!-- RIGA DELLA CLASSIFICA -->'					
'			</tbody>' +
'		</table>	',

	
	completeRankingTemplate = 
		'		<table class="table table-striped">' +
		'			<tbody id ="' + completeRankingId + '">' +
		'				<tr>' +
		'					<td>Posizione</td>' +
		'					<td>Giocatore</td>' +
		'					<td>Punteggio</td>' +
		'				</tr>' +
		
		'				<!-- RIGA DELLA CLASSIFICA -->'					
		'			</tbody>' +
		'		</table>	';
		
		
	this.initComponents = function(controllerParam){
		controller = controllerParam;
	}

	
	this.init = function() {
		populateSections();
    };
    
   
   this.mergeData = function(data){
    	console.log("merge");
    	
    }
   
   var populateSections = function(){
	   $('body').append(menu);
	   $('body').append(pageTemplate);
	   
   }
   
   var updateRanking = function(data, rankingTemplate, rankingContainerSelector, rankingSelector){
	   $(rankingContainerSelector).append(rankingTemplate);
	 
	   var rows = data.rows;
	   var currentRow;
	   var currentRowHtml;
	   
	   for (var i = 0, len = rows.length; i < len; i++) {
		   currentRow = rows[i];
		   currentRowHtml = 
	   		   
				'		<tr id="' + currentRow.playerId + '">' +
				
				'			<td>' + currentRow.position + '</td>' +
				'			<td>' + currentRow.player + '</td>' +
				'			<td>' + currentRow.score + '</td>' +
				
				'		</tr>';
		   $(rankingSelector).append(currentRowHtml);
	   }
	   
   }
   
   
   
   this.updateRankings = function(data){
	   updateRanking(data.lastFantaBetDayRanking, lastFantaBetDayRankingTemplate, lastFantaBetDayRankingContainerSelector, lastFantaBetDayRankingSelector)
	   updateRanking(data.completeRanking, completeRankingTemplate, completeRankingContainerSelector, completeRankingSelector)
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
   
   
}