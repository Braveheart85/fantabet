<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
	
		<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
		
		<script src="/js/jquery-1.11.1.min.js"></script>
		<script src="/js/common.js"> </script>
		<script src="/js/inviaGiocata.js"> </script>
		
		<link href="/css/inviaGiocata.css" rel="stylesheet">
		<link href="/css/bootstrap.min.css" rel="stylesheet">
		<link href="/css/navbar.css" rel="stylesheet">
		
		
		<title>Invia Giocata</title>
	
		
	
	</head>
<body onload="initAmount();">
	<div id="includedMenu"></div>

	<div class="container">

		<div class="panel panel-default">
			<div class="panel-body">
				<h2 align="center">Invia Giocata</h2>
			</div>
		</div>

		<div class="panel panel-default">
			<div class="panel-body">
				<div align="center">
					<p>Completa la giocata e inviala</p>

					<table class="table">
						<tbody>
							<tr>
								<td width="50%" align="right">
									<p>
										<span class="match label label-default">Partita</span>
									</p>
								</td>
								<td width="50%" align="left">
									<div class="inline"><p>
										<span class="result label label-default">1</span>
									</p></div>
									<div class="inline"><p>
										<span class="result label label-default">X</span>
									</p></div>
									<div class="inline"><p>
										<span class="result label label-default">2</span>
									</p></div>
								</td>
							</tr>
							<tr>
								<td width="50%" align="right">
									<p class="game">Roma - Lazio</p>
								</td>
								<td width="50%" align="left">
									<button id="11" onclick="calculateTotal(11)" value="10.5"
										type="button" class="btn btn-default btn-res">10.5</button>
									<button id="12" onclick="calculateTotal(12)" value="5"
										type="button" class="btn btn-default btn-res">5</button>
									<button id="13" onclick="calculateTotal(13)" value="1.08"
										type="button" class="btn btn-default btn-res">1.08</button>
								</td>
							</tr>
							<tr>
								<td width="50%" align="right">
									<p class="game">Sampdoria - Sambenedettese</p>
								</td>
								<td width="50%" align="left">
									<button id="21" onclick="calculateTotal(21)" value="1.7"
										type="button" class="btn btn-default btn-res">1.7</button>
									<button id="22" onclick="calculateTotal(22)" value="3.5"
										type="button" class="btn btn-default btn-res">3.5</button>
									<button id="23" onclick="calculateTotal(23)" value="4.5"
										type="button" class="btn btn-default btn-res">4.5</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>




		<div class="panel panel-default">
			<div class="panel-body">
				<div align="center">

					<div class="input-group">
						<h3 style="align: center;">La tua giocata</h3>
						<input type="text" class="form-control" value="0" id="amount"
							readonly>
					</div>
					<p>
						<a class="btn btn-lg btn-primary" onclick="sendBet()"
							role="button">Invia &raquo;</a>
					</p>
				</div>
			</div>
		</div>




	</div>
</body>
</html>

