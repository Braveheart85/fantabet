<!DOCTYPE html>
<html lang="en">
    <head>
        <title>SO question 4112686</title>
        <script src="http://code.jquery.com/jquery-latest.min.js"></script>
		<script>
/* 		$(function() {
		    $.ajaxSetup({
		        error: function(jqXHR, exception) {
		            if (jqXHR.status === 0) {
		                alert('Not connect.\n Verify Network.');
		            } else if (jqXHR.status == 404) {
		                alert('Requested page not found. [404]');
		            } else if (jqXHR.status == 500) {
		                alert('Internal Server Error [500].');
		            } else if (exception === 'parsererror') {
		                alert('Requested JSON parse failed.');
		            } else if (exception === 'timeout') {
		                alert('Time out error.');
		            } else if (exception === 'abort') {
		                alert('Ajax request aborted.');
		            } else {
		                alert('Uncaught Error.\n' + jqXHR.responseText);
		            }
		        }
		    });
		}); */

			var stringa = "ciao mamma";

			var lista = new Array();
			lista[0] = "ciao 0";
			lista[1] = "ciao 1";
			var listaString = JSON.stringify(lista);

			$(document).ready(function() { // When the HTML DOM is ready loading, then execute the following function...
				$('#somebutton').click(function() {
					$.ajax({
						url : 'test',
						data : {
							"stringa" : stringa,
							"lista" : listaString
						},

						type : 'get',
						success : function(data) {
							alert("ciao");
							
							console.log(data);
							console.log(data.a);
							console.log(data.list);
							console.log(data["map"]);
							
						},
						error : function(data, status) {
							console.log(status);
							console.log(data);
						}
		
					});
				});
			});

			function toString(object) {
				var output = '';
				for ( var property in object) {
					output += property + ': ' + object[property] + '; ';
				}
				return output;
			}
		</script>
</head>
    <body>
        <button id="somebutton">press here</button>
        <div id="somediv"></div>
    </body>
</html>