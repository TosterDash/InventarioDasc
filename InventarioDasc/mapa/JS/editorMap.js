//Se inicia el script en este documento PHP del dibujado del mapa
var accessTokenMB = 'pk.eyJ1IjoicGlzaDE4IiwiYSI6ImNrYjB4emxpZjAwYTgycnA5amx1Y2kyd2YifQ.Vdrd_nUcSXNPCN8Rv_STcg';
//Un array de edificios y aulas en el cual se guardaran todos los objetos de tipo Edificio
var edificiosArray = [];
var aulasArray = [];
//variable coordenadas de poligonos
var edificioUabcs = [];
var aulaUabcs = [];
//Guardar los lados del poligono
var xyCoord = [];
var polyArray = [];
//Limite de poligonos por creacion
var numSide = 4;
//Variable Accion para comprobar que se debe hacer en la base de datos add/delete/mod
var action = "";
//Variable para la interfaz del mapa para la creacion de poligonos
var drawControl;

//'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}'
//'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
   //LEAFLET MAP //,{scrollWheelZoom: false})
   //Inicializa el mapa en el contenedor edit-map-container en editMap.php
    var mapUabcs = L.map('edit-map-container').setView([24.102931, -110.316239], 18);
        L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
        maxZoom: 40,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: accessTokenMB
    }).addTo(mapUabcs);

    //Crea la interfaz de dibujado a la izquierda del mapa
    // FeatureGroup is to store editable layers
    var drawnItems = new L.FeatureGroup();
    mapUabcs.addLayer(drawnItems);

    drawControl = new L.Control.Draw({
        edit: {
            featureGroup: drawnItems,
            poly:{
                allowIntersection: false
            }
        }
        
    });
    
    

    //La creacion de poligonos y extraccion de coordenadas para ser procesadas
    mapUabcs.on(L.Draw.Event.CREATED, function (e){
	var type = e.layerType,
		layer = e.layer;
	if (type === 'marker') {
	}
	polyArray=layer.getLatLngs();
  	if(polyArray[0].length==numSide){
        
        mapUabcs.addLayer(layer);
        
    }else{
        alert("El poligono tiene que ser de 4 lados");
    }
    var numC = 0;
    for(let i =0; i<polyArray[0].length;i++){
        console.log(polyArray[0][i]);
        var polyArrayC = Object.values(polyArray[0][i]);
        xyCoord[numC] = polyArrayC[0];
        numC++;

        xyCoord[numC] = polyArrayC[1];
        numC++;
       
       
        
    }

    
});

//--------------------------------------TERMINA LA FUNCION DEL MAPA-------------------------------------------
//AL INICIAR LA PAGINA SE OBTIENE TODOS LOS EDIFICIOS Y AULAS CREADOS EN EL MOMENTO
getEdificios(mapUabcs);
getAula(mapUabcs);
//EMPIEZA LA EJECUCION DE JQUERY-----------------
//Esconder las plantas y edificios mientras se selecciona una opcion
$('#descripcion-label').hide();

$('#nombre-placeholder').hide();
$('#tipo-combobox').hide();

$('#edificio-combobox').hide();
$('#planta-combobox').hide();

$('#boton-edificioPlanta').hide();

$("#accion-select").on('change',function() {
    action = $('#accion-select').val();
    var planta = $('#planta-select').val();
    console.log(planta);
    switch(action){
        case "add":
            for(var i=0; i< edificiosArray.length ; i++){
                edificiosArray[i].deleteClickOnPoly();
            }
            for(var i=0; i< aulasArray.length ; i++){
                aulasArray[i].deleteClickOnPoly();
                aulasArray[i].removePolyAula(mapUabcs);
            }
            $('#boton-edificioPlanta').show();
            $('#tipo-select').val("");
            $('#descripcion-label').hide();
            $('#planta-combobox').hide();
            $('#nombre-placeholder').show();
            $('#tipo-combobox').show();
            mapUabcs.addControl(drawControl);
        break;

        case "delete":
            
            for(var i=0; i< edificiosArray.length ; i++){
                edificiosArray[i].clickToDelete(i,edificiosArray);
            }
            for(var i=0; i< aulasArray.length ; i++){
                aulasArray[i].clickToDelete(i,aulasArray);
                aulasArray[i].showPolyAulaPlanta(planta,mapUabcs);
            }
            $('#boton-edificioPlanta').hide();
            $('#nombre-placeholder').hide();
            $('#tipo-combobox').hide();

            $('#edificio-combobox').hide();
            $('#planta-combobox').show();

            $('#descripcion-label').show();

            mapUabcs.removeControl(drawControl);
    
        break;

        case "mod":

            mapUabcs.removeControl(drawControl);
           
        break;

        default:
            for(var i=0; i< edificiosArray.length ; i++){
                edificiosArray[i].deleteClickOnPoly();
            }
            for(var i=0; i< aulasArray.length ; i++){
                aulasArray[i].deleteClickOnPoly();
            }
            $('#boton-edificioPlanta').hide();
            $('#tipo-select').val("");
            $('#nombre-placeholder').hide();
            $('#tipo-combobox').hide();

            $('#edificio-combobox').hide();
            $('#planta-combobox').hide();

            $('#descripcion-label').hide();
            mapUabcs.removeControl(drawControl);
            
        break;
    }
   
})

$("#planta-select").on('change',function () {
    var planta = $('#planta-select').val();
    for(var i = 0; i<aulasArray.length; i++){
        aulasArray[i].showPolyAulaPlanta(planta,mapUabcs);
    }
})



$("#tipo-select").on('change',function(){
    var planta = $('#planta-select').val();
    var seleccion = $('#tipo-select').val();
    switch(seleccion){
        case "edificio":
            $('#edificio-combobox').hide();
            $('#planta-combobox').hide();
        break;

        case "aula":
            $('#edificio-combobox').show();
            $('#planta-combobox').show();
            for(var i = 0; i<aulasArray.length; i++){
                aulasArray[i].showPolyAulaPlanta(planta,mapUabcs);
            }
        break;

        default:
            $('#edificio-combobox').hide();
            $('#planta-combobox').hide();
        break;
    }

    

});
$("#boton-edificioPlanta").click(function(e){
    e.preventDefault();
    var seleccion = $('#tipo-select').val();
    var nombreMap = $('#nombre-map').val();
    var plantaMap = $('#planta-select').val();
    var edificioMap = $('#edificio-select').val();

    verificar(seleccion,nombreMap,plantaMap,edificioMap);

});


//LISTA DE FUNCIONES-----------------------------
function verificar(seleccion,nombreMap,plantaMap,edificioMap){
    switch(action){
        case "add":
            if(polyArray.length != 0){
                if(nombreMap==null || nombreMap==""){
                    alert("El campo nombre del edificio esta vacio, favor de poner uno");
                }else{
                    switch(seleccion){
                        case "edificio":
                            $.post('PHP/insertPoly.php',{nombreMap,seleccion,xyCoord} ,function(response){
                                console.log(response);
                                alert("Se ha insertado el edificio correctamente");
                                $(location).attr('href','editMap.php');
                           
                          });
            
                        break;
                
                        case "aula":
                            $.post('PHP/insertPoly.php',{seleccion,plantaMap,edificioMap,nombreMap,xyCoord} ,function(response){
                                console.log(response);
                                alert("Se ha insertado el aula correctamente");
                                $(location).attr('href','editMap.php');
                           
                          });
                            
                        break;
            
                        default:
                            alert("Favor de seleccionar un tipo Edificio/Aula");
                        break;
                
                    }
                }
            }else{
                alert("No existe un poligono, favor de crear uno");
            }
        break;

        case "delete":
            
        break;

        case "mod":
        break;

        default:
            alert("Seleccione una acción añadir/eliminar/modificar");
        break;
    }
    

  
}


function getEdificios(mapUabcs){
	//Ajax traer datos de edificio, en cuanto se inicia este script se ejecuta este pedazo de codigo, haciendo que se guarden los edificios en un arreglo
	$.ajax({
		url: 'PHP/getEdificios.php',
		type: 'GET',
		success: function(response){
			
			edificio1 = JSON.parse(response);
			var cont = 0;
			var template;
			edificio1.forEach(task => {	
				
                
                edificiosArray[cont] =  new Edificio(`${task.idEdificio}`,`${task.Nombre}`,null); 


			    edificioUabcs[cont] = [[`${task.x1}`, `${task.y1}`],
							            [`${task.x2}`, `${task.y2}`],
							            [`${task.x3}`, `${task.y3}`],
							            [`${task.x4}`, `${task.y4}`]];

				template += `<option value="${task.Nombre}" >${task.Nombre}</option> `


				edificiosArray[cont].poly = L.polygon(edificioUabcs[cont] , {color: 'red'}).addTo(mapUabcs);
				$('#edificio-select').html(template);
	            
	            
	            
	            cont++;
	            
	        });
	      	
	        
	    }
	})
}

function getAula(mapUabcs) {
    $.ajax({
		url: 'PHP/getAula.php',
		type: 'GET',
		success: function(response){
			
			aula1 = JSON.parse(response);
			var cont = 0;
			
			aula1.forEach(task => {	
				
                
                aulasArray[cont] =  new Aula(`${task.idAula}`,`${task.nombreAula}`,`${task.idPlanta}`,`${task.idEdificio}`,null); 


			    aulaUabcs[cont] = [[`${task.x1}`, `${task.y1}`],
							            [`${task.x2}`, `${task.y2}`],
							            [`${task.x3}`, `${task.y3}`],
							            [`${task.x4}`, `${task.y4}`]];

				


				aulasArray[cont].poly = L.polygon(aulaUabcs[cont] , {color: 'black'});
				
	            
	            
	            
	            cont++;
	            
	        });
	      	
	        
	    }
	})
}




         







