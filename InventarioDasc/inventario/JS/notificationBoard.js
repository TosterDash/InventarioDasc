$(document).ready(function(){
	$.when(getDate()).done(function(response){
		getTableNotification(response);
	})
});