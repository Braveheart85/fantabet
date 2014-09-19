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