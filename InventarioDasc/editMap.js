//Se inicia el script en este documento PHP del dibujado del mapa
var accessTokenMB = 'pk.eyJ1IjoicGlzaDE4IiwiYSI6ImNrYjB4emxpZjAwYTgycnA5amx1Y2kyd2YifQ.Vdrd_nUcSXNPCN8Rv_STcg';
//Un array para guardar los edificios y mostrarlos en los POP UPS
var edificiosArray = [];
//esta variable se utiliza en el inicio de este script, sirve para guardar la consulta de los edificios
var edificio1;
//variable coordenadas
var edificioCoord = [];
var edificioUabcs = [];
var edif =[];
var flagPoly = false;
var xy1;
var xy2;
var xy3;
var xy4;



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
				
	            edificiosArray[cont] =  `${task.Nombre}` 
	           
	            
	            edificioCoord[0] =    `${task.x1}`
			    edificioCoord[1] =    `${task.y1}`
			    edificioCoord[2] =    `${task.x2}`
			    edificioCoord[3] =    `${task.y2}`
			    edificioCoord[4] =    `${task.x3}`
			    edificioCoord[5] =    `${task.y3}`
			    edificioCoord[6] =    `${task.x4}`
			    edificioCoord[7] =    `${task.y4}`

			           	edificioUabcs[cont] = [[edificioCoord[0], edificioCoord[1]],
							[edificioCoord[2], edificioCoord[3]],
							[edificioCoord[4], edificioCoord[5]],
							[edificioCoord[6], edificioCoord[7]]];

							template += `<option value="${task.Nombre}" >${task.Nombre}</option> `


				edif[cont] = L.polygon(edificioUabcs[cont] , {color: 'grey'}).addTo(mapUabcs);
				$('#edificio-select').html(template);
	            
	            
	            
	            cont++;
	            
	        });
	      	console.log( edificiosArray[cont]);
	        
	    }
	})
}

function verificarComboboxTipo(seleccion,opcion,nombre,xy1,xy2,xy3,xy4,plantaMap,edificioMap){
			switch(seleccion){
				case "edificio":
					
					
					
					switch(opcion){
						case 0:
							$('#edificio-combobox').hide();
							$('#planta-combobox').hide();
						break;

						case 1:
							$.post('PHP/insertPoly.php',{nombre,seleccion,xy1,xy2,xy3,xy4} ,function(response){
							  	 console.log(response);
						      
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

						break;
					}
					

				break;

			}
}



function setup() { 
	//Esconder las plantas y edificios mientras se selecciona una opcion

	
	$('#edificio-combobox').hide();
	$('#planta-combobox').hide();

	$("#tipo-select").on('change',function(){
		
		var seleccion = $('#tipo-select').val();
		verificarComboboxTipo(seleccion,0,"");

		$("#boton-edificioPlanta").click(function(e){
			e.preventDefault();
			var nombreMap = $('#nombre-map').val();
			var plantaMap = $('#planta-select').val();
			var edificioMap = $('#edificio-select').val();


			if (nombreMap == "") {
				//$('#error-editMap').html(`<h3>Escriba un nombre</h3> `);
				alert("Campo nombre vacio, escriba un nombre");
			}else{
				
				verificarComboboxTipo(seleccion,1,nombreMap,xy1,xy2,xy3,xy4,plantaMap,edificioMap);

			}

		});

	});

	

	
    //LEAFLET MAP //,{scrollWheelZoom: false})
    var mapUabcs = L.map('edit-map-container').setView([24.102931, -110.316239], 18);
        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 40,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: accessTokenMB
    }).addTo(mapUabcs);


 // FeatureGroup is to store editable layers
 var drawnItems = new L.FeatureGroup();
 mapUabcs.addLayer(drawnItems);

 var drawControl = new L.Control.Draw({
	 edit: {
		 featureGroup: drawnItems
	 }
 });
 mapUabcs.addControl(drawControl);

 var popupEdif1 = L.popup().setContent("Edificio1 "+edificiosArray[1]);

 //polygons
 //polygons
	
	
	
	
	getEdificios(mapUabcs);
		
	

//----------------------------------------REALIZAR POLIGONO-----------------------------------------------
 mapUabcs.on(L.Draw.Event.CREATED, function (e){
 	flagPoly = true;
	var type = e.layerType,
		layer = e.layer;
	if (type === 'marker') {
	}
	// Do whatever else you need to. (save to db; add to map etc)
    mapUabcs.addLayer(layer);
  	/*  resp= layer.getLatLngs().map(function(point) {
        return [point.lat, point.lng];
    });

	*/
	arreglo=layer.getLatLngs();
	console.log(arreglo);
        
    xy1 = Object.values(arreglo[0][0]);
    xy2 = Object.values(arreglo[0][1]);
    xy3 = Object.values(arreglo[0][2]);
    xy4 = Object.values(arreglo[0][3]);




	console.log(layer.getLatLngs());
	//evento a cada layer
	layer.on('click', function(event){
        arreglo=layer.getLatLngs();
        console.log(arreglo[0][0]);
 });
});




mapUabcs.on('draw:edited', function (e) {
		  var layers = e.layers;
		  layers.eachLayer(function (layer) {
			  //do whatever you want; most likely save back to db
		  });
	});
//----------------------------------------FUNCIONES--------------------------------------------------



//rectangles


}//setup

function draw() {

}



