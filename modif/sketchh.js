//Se inicia el script en este documento PHP del dibujado del mapa

var accessTokenMB = 'pk.eyJ1IjoicGlzaDE4IiwiYSI6ImNrYjB4emxpZjAwYTgycnA5amx1Y2kyd2YifQ.Vdrd_nUcSXNPCN8Rv_STcg';
//Un array para guardar los edificios y mostrarlos en los POP UPS
var edificiosArray = [];
//esta variable se utiliza en el inicio de este script, sirve para guardar la consulta de los edificios
var edificio1;



//Ajax traer datos de edificio, en cuanto se inicia este script se ejecuta este pedazo de codigo, haciendo que se guarden los edificios en un arreglo
$.ajax({
	url: 'PHP/getEdificios.php',
	type: 'GET',
	success: function(response){
		console.log(response);
		edificio1 = JSON.parse(response);
		let i =0;
		edificio1.forEach(task => {	
            edificiosArray[i] =  `${task.Nombre}`    
            i++;
        });
    }
})



function setup() { 
//LEAFLET MAP 
	var mapUabcs = L.map('map-container')/*,{scrollWheelZoom: false})*/.setView([24.102931, -110.316239], 18);
	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 40,
    id: 'mapbox/streets-v11',
    tileSize: 512,
	zoomOffset: -1,
    accessToken: accessTokenMB
}).addTo(mapUabcs);

//rectangles

//var myLayer = L.geoJSON().addTo(mapUabcs);
	//polygons
	var dascCoord= [[24.102931, -110.316239],
				[24.102901, -110.316016],
				[24.102629, -110.316068],
				[24.102661, -110.316288]];

	var macroCoord = [[24.102576,-110.316352],
					[24.102544,-110.316151],
					[24.102366,-110.316183],
					[24.102398,-110.316387]];
	var edif1 = L.polygon(dascCoord, {color: 'grey'}).addTo(mapUabcs);
	var edif2 = L.polygon(macroCoord, {color: 'grey'}).addTo(mapUabcs);

//polygons

	//var planta = L.polygon(dascCoord, {color: 'grey'}).addTo(mapUabcs);
	//Layers

	//TILES
	L.GridLayer.DebugCoords = L.GridLayer.extend({
	createTile: function (coords) {
			var tile = document.createElement('div');
			tile.innerHTML = [coords.x, coords.y, coords.z].join(', ');
			tile.style.outline = '1px solid red';
			return tile;
		}
	});
	//TILES
	L.gridLayer.debugCoords = function(opts) {
		return new L.GridLayer.DebugCoords(opts);
	};
	//mapUabcs.addLayer(L.gridLayer.debugCoords());
	//Layer


	//icons
	var LeafIcon = L.Icon.extend({
		options: {
			iconSize:     [60,60],
			iconAnchor:   [0,0],
			popupAnchor:  [0,10]
		}
	});

	var dascIcon = new LeafIcon({iconUrl: '../resources/code.png'});
	
	L.marker([24.102794, -110.316159], {icon: dascIcon}).addTo(mapUabcs);
	L.marker([24.102476, -110.316291], {icon: dascIcon}).addTo(mapUabcs);

	edif1.on('mouseover', function(event){
		
	});
	edif2.on('mouseover', function(event){
		
	});
	//icons

	//functions


//Al presionar los edificios se mostrara un POPUP en donde mostrara los nombres de los edificios de la base de datos proveniente de la variable $edificiosArray
edif1.on('click', function(event){
    edif1.bindPopup("Edificio "+edificiosArray[1]).openPopup();
    if (edif1.isPopupOpen()) {
    	getTable(2);
  	}//if
});

edif2.on('click', function(event){
    edif2.bindPopup("Edificio "+edificiosArray[0]).openPopup();
	if (edif2.isPopupOpen()) {
    	getTable(1);
    }
});

//----------------------------------------FUNCIONES--------------------------------------------------

//Esta funcion sirve para mandar informacion al archivo getInfo.php esto para recolectar datos de todos los objetos de cierto edificio
function getTable(numEdificio){
		let template;
    	$.ajax({
		url: 'PHP/getInfo.php',
		data: {numEdificio},
		type: 'POST',
		success: function(response){
			const tasks = JSON.parse(response);
			tasks.forEach(task => {

				
				 template += `
                  <tr>
                  <td>${task.Nombre}</td>
                  <td>${task.Marca}</td>
                  <td>${task.Modelo}</td>
                  <td>${task.Mantenimiento}</td>
                  <td><a>${task.Descripcion}</a></td>
                 
                  </tr>
                `
          
        	});
			$('#info-row').html(template);
			}

		})
}





//rectangles

/*
//GEOJSON
//creation
var myLayer = L.geoJSON().addTo(mapUabcs);
var edificio = [{
	"type": "Feature",
		"geometry": {
			"type": "Polygon",
			"coordinates": [
				[[-110.316229,24.102937],
				[-110.316016,24.102901], 
				[-110.316068,24.102629],
				[-110.316288,24.102661]]
			]
		},
		"style": {
            weight: 2,
            color: "#999",
            opacity: 1,
            fillColor: "#B0DE5C",
            fillOpacity: 0.8
        }
}];
var edificio2 = [{
	"type": "Feature",
	"geometry": {
		"type": "Polygon",
		"coordinates": [
			[[-110.316352,24.102576],
			[-110.316151,24.102544],
			[-110.316183,24.102366],
			[-110.316387,24.102398]]
		]
	},
		"style": {
            weight: 2,
            color: "#999",
            opacity: 1,
            fillColor: "#B0DE5C",
            fillOpacity: 0.8
        }
}];

//features addition
myLayer.addData(edificio);
myLayer.addData(edificio2);*/
//GEOJSON

//LEAFLET MAP 

}//setup

function draw() {
	
}



/*function setup() {
//PROPIEDADES DEL CANVAS
	
//PROPIEDADES DEL CANVAS


function edificio(x1, y1, x2, y2) {
	this.x1=x1;
	this.y1=y1;
	this.x2=x2;
	this.y2=y2;
	rectMode(CORNERS);

	this.draw = function() {
		rect(x1, y1, x2, y2);
	};
}

//MAPBOX
	var mapContainer = document.getElementById('map-container');
	mapboxgl.accessToken = 'pk.eyJ1IjoicGlzaDE4IiwiYSI6ImNrYjB4emxpZjAwYTgycnA5amx1Y2kyd2YifQ.Vdrd_nUcSXNPCN8Rv_STcg';
	var map = new mapboxgl.Map({
	container: mapContainer,
	style: 'mapbox://styles/mapbox/streets-v11',
	center: [-110.316, 24.1028],
	zoom:20
	});
	map.addControl(new mapboxgl.NavigationControl());
	map.overlay(mapCanvas);


//MAPOX

map.on('load', function() {
	map.addSource('canvas-cont', {
	type: 'canvas',
	canvas: 'mapCanvas',
	coordinates: [
	[-110.316229, 24.102934],
	[-110.316016, 24.102903], 
	[ -110.316277, 24.102666], 
	[-110.316063, 24.102646]  
	]
	});
	
	map.addLayer({
	id: 'canvas-layer',
	type: 'raster',
	source: 'canvas-container'
	});
});


}//SETUP
*/


/*
function setup(){
	var mapBoxHeight = document.getElementById('map-container').clientHeight;
	var mapBoxWidth = document.getElementById('map-container').clientWidth;
	//para centrar el canvas deberia tener una var para hacerlo dinamico pero no se de donde sacar el calculo x2
	//var mapBoxWidth = ((windowWidth - width) / 2);//+150;
	//para jalar el 60 deberia hacer un document para hacerlo dinamico pero no se de donde sacar el calculo x2
  	//var mapBoxHeight = (windowHeight - height)/2;// -60;
	var mapCanvas = createCanvas(mapBoxWidth, mapBoxHeight);
	//mapCanvas.parent('map-container');
	mapCanvas.background('blue');
}
*/

