<!DOCTYPE html>
<html lang="en">
    <head>
       	<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">


        <script src="/js/jquery-1.11.1.min.js"></script>
        <script src="/js/SendBetView.js"></script>
        <script src="/js/SendBetModel.js"></script>
        <script src="/js/SendBetController.js"></script>
        <script src="/js/ServerRequestExecutor.js"></script>
        <script src="/js/Utils.js"></script>
        <script src="/js/model/Bet.js"></script>
        <script src="/js/model/SingleBet.js"></script>
        <script src="/js/model/Event.js"></script>
        
		
		
		
		
		
		<link href="/css/inviaGiocata.css" rel="stylesheet">
		<link href="/css/bootstrap.min.css" rel="stylesheet">
		<link href="/css/navbar.css" rel="stylesheet">
        
        

		 <script type="text/javascript">
			var view = new SendBetView();
		 	var controller = new SendBetController();
		 	var model = new SendBetModel();
		 	var serverRequestExecutor = new ServerRequestExecutor();
		 	
		 	view.initComponents(controller);
		 	controller.initComponents(view, model, serverRequestExecutor);
		 	
		 	/* è la stessa cosa di mettere l'attributo onload al body 
		 	$(function() {
		 		controller.init();
		 	}); */
		 	
        </script>

		<title>Invia Giocata</title>
	</head>	
    <body onload="controller.init()">



		

	</body>
</html>