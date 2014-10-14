function ServerRequestExecutor() {
	
	this.executeRequestSimple = function(callback){
		console.log("Richiesta al server");
		$.ajax({
			url : 'test',
			data : {},
			type : 'get',
			success : callback.onSuccess,
			error:	callback.onFailure

		})
	}

	this.executeRequestWithData = function(data, callback){
		console.log("Richiesta al server");
//		var data2 = {
//				"data" : data
//		}
//		console.log(JSON.stringify(data2))
		var jsonData = JSON.stringify(data);
		
		$.ajax({
			url : 'test',
			data :	{"data" : jsonData},
			type : 'get',
			success : callback.onSuccess,
			error:	callback.onFailure
			
		})
	}
		
		
		
//	var myJsonParse = function(data){
//		var result = "";
//		for(var propertyName in data) {
//			var method = propertyName;
//			if (method.substring(0,3)=="get"){
//				
//				
//				
//				var part = data[propertyName].call()
//				
//				
//				if (typeof part !== "string" && 
//					typeof part !== "boolean" &&
//					typeof part !== "numeric"){
//					
//					console.log("str\n")
//					result += propertyName.substring(3, propertyName.length) + " : " + part + ",";
//				}
//				
//				else if (part instanceof Array){
//					console.log("arr\n")
//					for (var i = 0, len = part.length; i < len; i++) {
//						result += myJsonParse(part[i]);
//					}
//				}
//				else { 
//					console.log("obj\n")
//					result += myJsonParse(part);
//				}
//			}
//		}
//		console.log(result)
//	}	
		
		
		
		
		
//		this.executeRequestSimple = function(credentials, uri, callback){
//		$.ajax({
//			url : uri,
//			type: "GET",
//			username: credentials.username,
//			password: credentials.password,
//			mimeType: "json",
//			dataType: "json",
//			success : callback.onSuccess,
//			error:	callback.onFailure
//		});
//	}
    
    
}