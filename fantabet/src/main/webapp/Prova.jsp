<!DOCTYPE html>
<html lang="en">
    <head>
        <title>SO question 4112686</title>
        
        <script src="/js/jquery-1.11.1.min.js"></script>
        <script src="/js/SendBetView.js"></script>
        <script src="/js/SendBetController.js"></script>
        <script src="/js/ServerRequestExecutor.js"></script>
        <script src="/js/Utils.js"></script>

		 <script type="text/javascript">
			var view = new SendBetView();
		 	var controller = new SendBetController();
		 	var serverRequestExecutor = new ServerRequestExecutor();
		 	
		 	view.initComponents(controller);
		 	controller.initComponents(view, serverRequestExecutor);
		 	
		 	$(function() {
		 		controller.init();
		 	});
		 	
        </script>


	</head>	
    <body>



		<div id="btngroup">
			
		</div>

	</body>
</html>