<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>

<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">

<script src="jquery-1.11.1.min.js"></script>
<link href="bootstrap.min.css" rel="stylesheet">
<!-- Bootstrap core CSS -->
<!-- <link href="classifiche.css" rel="stylesheet">	-->
<!-- Custom styles for this template -->
<title>Classifiche</title>

<!-- Importa il menu -->
<link href="navbar.css" rel="stylesheet">
<!-- Custom styles for this template -->
<script>
	$(function() {
		$("#includedMenu").load("menu.html");
	});
</script>


</head>


<body>
	<div id="includedMenu"></div>

	<div class="container">

		<div class="panel panel-default">
			<div class="panel-body">
				<h2 align="center">Classifiche</h2>
			</div>
		</div>

		<div class="panel panel-default">
			<div class="panel-body">
				<h4>Classifica di giornata</h4>
				<div class="panel-body">
					<!-- Table -->
					<table class="table table-striped">
						<tbody>
							<tr>
								<td>Posizione</td>
								<td>Giocatore</td>
								<td>Punteggio</td>
							</tr>

							<tr>
								<td>1</td>
								<td>Pippo</td>
								<td>159</td>
							</tr>

							<tr>
								<td>2</td>
								<td>Gianfilippo</td>
								<td>129</td>
							</tr>

							<tr>
								<td>3</td>
								<td>CiaoBelli</td>
								<td>110</td>
							</tr>

							<tr>
								<td>4</td>
								<td>ClaudioErMatto</td>
								<td>59</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>



		<div class="panel panel-default">
			<div class="panel-body">
				<h4>Classifica generale</h4>
				<!-- Table -->
				<table class="table table-striped">
					<tbody>
						<tr>
							<td>Posizione</td>
							<td>Giocatore</td>
							<td>Punteggio</td>
						</tr>

						<tr>
							<td>1</td>
							<td>Pippo</td>
							<td>867</td>
						</tr>

						<tr>
							<td>2</td>
							<td>Gianfilippo</td>
							<td>765</td>
						</tr>

						<tr>
							<td>3</td>
							<td>ClaudioErMatto</td>
							<td>482</td>
						</tr>

						<tr>
							<td>4</td>
							<td>CiaoBelli</td>
							<td>159</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>

</body>
</html>