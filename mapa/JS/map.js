$(document).ready(function(){
	var containMap = "mapid"
	createMap(containMap,true);
	//Combobox Planta
	getComboboxMap("map-piso","idPlanta","planta","planta");
	//combobox Edificio
	getComboboxMap("map-edificio","idEdificio","Nombre","edificio","-Todos-");

	$("#map-piso").on('change',function(){
		showAulas($("#map-edificio").val(),$("#map-piso").val());
	})

	$("#map-edificio").on('change',function(){
		setView($("#map-edificio").val());
		showAulas($("#map-edificio").val(),$("#map-piso").val());
		updateInfo($("#map-edificio").find("option:selected").text() , $("#map-piso").find("option:selected").text(), "----");
	})

});








