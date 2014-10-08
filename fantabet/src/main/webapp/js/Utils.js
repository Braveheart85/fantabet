	function myToString(object){
		var result="";
		for(var propertyName in object) {
			result+= propertyName + ":" + object[propertyName] + "\n"
				// propertyName is what you want
			   // you can get the value like this: myObject[propertyName]
			}
		return result
	}	
	
	
	function printArray(bettedMatches) {

		for ( var key in bettedMatches) {
			if (bettedMatches.hasOwnProperty(key)) {
				alert(key + " -> " + bettedMatches[key]);
			}
		}
	}
	
	
	function getIdFromSelector(selector){
		return selector.substring(1, selector.length);
	}

	function getSelectorFromId(id){
		return "#" + id;
	}