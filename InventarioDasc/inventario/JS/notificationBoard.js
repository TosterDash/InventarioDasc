$(document).ready(function(){
	var comboboxMostrar = "#combobox-search";

	$(comboboxMostrar).on('change',function(){
		hideAll();
		switch($(comboboxMostrar).val()){
			case "mantenimiento":
				showCardMant();
			break;

			case "prestamo":
				showCardPrest();
			break;

			default:
				showAll();
			break;
		}
	})

	function showCardMant(){
		for(var i =0;i<mantenimientoNotification.length;i++){
			$("#single-notif-"+mantenimientoNotification[i].tipoNotificacion+mantenimientoNotification[i].id).show();
		}
	}
	function showCardPrest(){
		for(var i =0;i<prestamoNotification.length;i++){
			$("#single-notif-"+prestamoNotification[i].tipoNotificacion+prestamoNotification[i].id).show();
		}

	}

	function showAll(){
		for(var i =0;i<mantenimientoNotification.length;i++){
			$("#single-notif-"+mantenimientoNotification[i].tipoNotificacion+mantenimientoNotification[i].id).show();
		}
		for(var i =0;i<prestamoNotification.length;i++){
			$("#single-notif-"+prestamoNotification[i].tipoNotificacion+prestamoNotification[i].id).show();
		}
	}

	function hideAll(){
		for(var i =0;i<mantenimientoNotification.length;i++){
			$("#single-notif-"+mantenimientoNotification[i].tipoNotificacion+mantenimientoNotification[i].id).hide();
		}
		for(var i =0;i<prestamoNotification.length;i++){
			$("#single-notif-"+prestamoNotification[i].tipoNotificacion+prestamoNotification[i].id).hide();
		}
	}
});