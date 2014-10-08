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
		$.ajax({
			url : 'test',
			data :	data,
			type : 'get',
			success : callback.onSuccess,
			error:	callback.onFailure
			
		})
	}
		
		
		
		
		
		
		
		
		
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