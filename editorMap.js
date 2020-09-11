//Se inicia el script en este documento PHP del dibujado del mapa
var accessTokenMB = 'pk.eyJ1IjoicGlzaDE4IiwiYSI6ImNrYjB4emxpZjAwYTgycnA5amx1Y2kyd2YifQ.Vdrd_nUcSXNPCN8Rv_STcg';
//Un array de edificios en el cual se guardaran todos los objetos de tipo Edificio
var edificiosArray = [];
//variable coordenadas
var edificioCoord = [];
var edificioUabcs = [];
//Guardar los lados del poligono
var xyCoord = [];
var polyArray = [];
//Limite de poligonos por creacion
var numSide = 4;

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

    var drawControl = new L.Control.Draw({
        edit: {
            featureGroup: drawnItems,
            poly:{
                allowIntersection: false
            }
        }
        
    });
    mapUabcs.addControl(drawControl);

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
        console.log("Array uni: "+ xyCoord[numC]);
        console.log("Array bi: "+polyArrayC[0]);
        numC++;

        xyCoord[numC] = polyArrayC[1];
        console.log("Array uni: "+ xyCoord[numC]);
        console.log("Array bi: "+polyArrayC[1]);
        numC++;
       
       
        //xyCoord[i][1] = Object.values(polyArray[0][i]);
    }

    
    
    
	//console.log(arreglo);
    //Se guardan en variables las coordenadas que se dibujaron para insertarlas a la base de datos
    
    //console.log(Object.values(polyArray[0][i]));
    //xyCoord = Object.values(polyArray[0][i]);
        
            
        
        
    
    
});

//--------------------------------------TERMINA LA FUNCION DEL MAPA-------------------------------------------
//EMPIEZA LA EJECUCION DE JQUERY-----------------
//Esconder las plantas y edificios mientras se selecciona una opcion

	
$('#edificio-combobox').hide();
$('#planta-combobox').hide();

$("#tipo-select").on('change',function(){
    
    var seleccion = $('#tipo-select').val();
    verificarComboboxTipo(seleccion,0,"");

    

});
$("#boton-edificioPlanta").click(function(e){
    e.preventDefault();
    var seleccion = $('#tipo-select').val();
    switch(seleccion){
        case "edificio":
            var nombreMap = $('#nombre-map').val();
            //console.log(nombreMap);
            if(polyArray.length != 0 ){
                if(nombreMap==null || nombreMap==""){
                    alert("El campo nombre del edificio esta vacio, favor de poner uno");
                }else{
                    verificarComboboxTipo(seleccion,1,nombreMap,xyCoord);
                }
            }else{
                alert("No existe un poligono, favor de crear uno");
            }
            
        break;

        case "aula":
            if(xy1!=null && xy2!=null && xy3!=null && xy4!=null){
                var nombreMap = $('#nombre-map').val();
                var plantaMap = $('#planta-select').val();
                var edificioMap = $('#edificio-select').val();
                if(nombreMap==null || nombreMap==""){
                    alert("El campo nombre del edificio esta vacio, favor de poner uno");
                        
                }else{
                    if(plantaMap == ""){
                        alert("Seleccione la planta del aula");
                    }else{
                        verificarComboboxTipo(seleccion,1,nombreMap,polyArray,plantaMap,edificioMap);
                    }
                }

                
            }else{
                alert("No existe un poligono, favor de crear uno");
            }
            
        break;

        default:
            alert("Seleccione un el tipo de poligono");
        break;
    }
    
});


//LISTA DE FUNCIONES-----------------------------
function verificarComboboxTipo(seleccion,opcion,nombre,xyCoord,plantaMap,edificioMap){
    switch(seleccion){
        case "edificio":
            switch(opcion){
                case 0:
                    $('#edificio-combobox').hide();
                    $('#planta-combobox').hide();
                break;

                case 1:
                    $.post('PHP/insertPoly.php',{nombre,seleccion,xyCoord} ,function(response){
                           console.log(response);
                           alert("Se ha insertado el edificio correctamente");
                           $(location).attr('href','editMap.php');
                      
                     });
                break;
            }
        break;

        case "aula":
            
            switch(opcion){
                case 0:
                    $('#edificio-combobox').show();
                    $('#planta-combobox').show();
                break;

                case 1:
                    $.post('PHP/insertPoly.php',{seleccion,plantaMap,edificioMap,nombre,xy1,xy2,xy3,xy4} ,function(response){
                           console.log(response);
                           alert(response);
                           $(location).attr('href','editMap.php');
                      
                     });
                break;
            }
            
        break;

        default:
            
            switch(opcion){
                case 0:
                    $('#edificio-combobox').hide();
                    $('#planta-combobox').hide();
                break;

                case 1:
                    alert("");
                break;
            }
            

        break;

    }
}


function getEdificios(mapUabcs){
	//Ajax traer datos de edificio, en cuanto se inicia este script se ejecuta este pedazo de codigo, haciendo que se guarden los edificios en un arreglo
	$.ajax({
		url: 'PHP/getEdificios.php',
		type: 'GET',
		success: function(response){
			//console.log(response);
			edificio1 = JSON.parse(response);
			var cont = 0;
			var template;
			edificio1.forEach(task => {	
				
	            
	           
	            
	            edificioCoord[0] =    `${task.x1}`
			    edificioCoord[1] =    `${task.y1}`
			    edificioCoord[2] =    `${task.x2}`
			    edificioCoord[3] =    `${task.y2}`
			    edificioCoord[4] =    `${task.x3}`
			    edificioCoord[5] =    `${task.y3}`
			    edificioCoord[6] =    `${task.x4}`
                edificioCoord[7] =    `${task.y4}`
                
                edificiosArray[cont] =  new Edificio(`${task.Nombre}`,edificioCoord,null); 
                //console.log(edificiosArray[cont].edificioCoord[0]);

			    edificioUabcs[cont] = [[edificioCoord[0], edificioCoord[1]],
							            [edificioCoord[2], edificioCoord[3]],
							            [edificioCoord[4], edificioCoord[5]],
							            [edificioCoord[6], edificioCoord[7]]];

				template += `<option value="${task.Nombre}" >${task.Nombre}</option> `


				edificiosArray[cont].poly = L.polygon(edificioUabcs[cont] , {color: 'red'}).addTo(mapUabcs);
				$('#edificio-select').html(template);
	            
	            
	            
	            cont++;
	            
	        });
	      	
	        
	    }
	})
}

//LISTA DE CLASES--------------------------------
class Edificio {
    constructor(nombre,edificioCoord,poly){
        this.nombre = nombre;
        this.edificioCoord = edificioCoord;
        this.poly = poly;
    }
}

//AL INICIAR LA PAGINA SE OBTIENE TODOS LOS EDIFICIOS CREADOS EN EL MOMENTO
getEdificios(mapUabcs);

         







