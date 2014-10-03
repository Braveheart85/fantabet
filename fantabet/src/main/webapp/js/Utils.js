	function myToString(object){
		var result="";
		for(var propertyName in object) {
			result+= propertyName + ":" + object[propertyName] + "\n"
				// propertyName is what you want
			   // you can get the value like this: myObject[propertyName]
			}
		return result
	}	