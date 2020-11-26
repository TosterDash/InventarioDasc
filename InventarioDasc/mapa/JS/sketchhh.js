//Se inicia el script en este documento PHP del dibujado del mapa

var accessTokenMB = 'pk.eyJ1IjoicGlzaDE4IiwiYSI6ImNrYjB4emxpZjAwYTgycnA5amx1Y2kyd2YifQ.Vdrd_nUcSXNPCN8Rv_STcg';
//Un array para guardar los edificios y mostrarlos en los POP UPS
var edificiosArray = [];
var aulasArray = [];
var aulasIdPlanta = [];
var aulasIdEdificio = [];
//esta variable se utiliza en el inicio de este script, sirve para guardar la consulta de los edificios
var edificio1;
//variable coordenadas
var edificioCoord = [];
var edificioUabcs = [];
var aulaUabcs = [];
var edif = [];
let aula = [];
var dascCoord;
var macroCoord;
var mapUabcs;
var flagDraw = false;
var contDraw = 0;
var aulaPopup= [];
var valorPiso = "";



$(document).ready(function() {

//----------------------FUNCIONES GETEDIFICIOS, GETAULAS-------------------------------------------------------------------
function getEdificios(mapUabcs){
		//Ajax traer datos de aula, en cuanto se inicia este script se ejecuta este pedazo de codigo, haciendo que se guarden los edificios en un arreglo

	$.ajax({
		url: 'PHP/getEdificios.php',
		type: 'GET',
		success: function(response){
			
			edificio1 = JSON.parse(response);
			var template;
            template += `<option value="" >SELECCIONE UN EDIFICIO</option> `
            template += `<option value="TODOS" >TODOS LOS EDIFICIOS</option> `
			var cont = 0;
			edificio1.forEach(task => {	
				
	            edificiosArray[cont] =  `${task.Nombre}` 
	           	edificioUabcs[cont] = [[`${task.x1}`, `${task.y1}`],
							[`${task.x2}`, `${task.y2}`],
							[`${task.x3}`, `${task.y3}`],
							[`${task.x4}`, `${task.y4}`]];
	            
				template += `<option value="${task.Nombre}" >${task.Nombre}</option> `
				$('#map-edificio').html(template);
	
	            
	            
	            
	            cont++;
	            
	        });
	      	//console.log( edificiosArray[cont]);
	        
	    }
	})
}

function getAulas(mapUabcs){
	$.ajax({
		url: 'PHP/getAula.php',
		type: 'GET',
		success: function(response){
			
			//console.log(response);
			edificio1 = JSON.parse(response);
			var cont = 0;
			edificio1.forEach(task => {	
				aulasIdPlanta[cont] = `${task.idPlanta}`
				aulasIdEdificio[cont] = `${task.idEdificio}`
				aulasArray[cont] = `${task.nombreAula}`

				aulaUabcs[cont] = [[`${task.x1}`, `${task.y1}`],
							[`${task.x2}`, `${task.y2}`],
							[`${task.x3}`, `${task.y3}`],
							[`${task.x4}`, `${task.y4}`]];



			    //aula[cont] = L.polygon(aulaUabcs[cont] , {color: 'red'}).addTo(mapUabcs);
			    
			    //console.log(aula[cont]);
			    

	           cont++;
	        });
	      
	        
	    }
	})
}

//Esta funcion sirve para mandar informacion al archivo getInfo.php esto para recolectar datos de todos los objetos de cierto edificio
function getTable(aulasArray,i,mapUabcs){
    var tempAula = aulasArray[i];
    let template;
  
    $.ajax({
        url: 'PHP/getInfo.php',
        data: {tempAula},
        type: 'POST',
        success: function(response){
            console.log(response);
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

function popAula(i,mapUabcs,cont){
    console.log("cont: "+cont);
    aula[cont] = L.polygon(aulaUabcs[i] , {color: 'red'}).addTo(mapUabcs);
    aula[cont].on('click',function(event){
        aula[cont].bindPopup("Aula "+ aulasArray[i]).openPopup();
        getTable(aulasArray,i,mapUabcs);
    });
	
    
}
function popEdificio(l,edificiosArray,mapUabcs){
    edif[l].on('click', function(event){
        for(var i = 0; i<aula.length;i++){
       
            console.log(i);
            mapUabcs.removeLayer(aula[i]);
            
            
        }
        
        //mapUabcs.removeLayer(edif[l]);
        
        //hideAula(mapUabcs);
        edif[l].bindPopup("Edificio "+edificiosArray[l]).openPopup();
        var tempEdif = edificiosArray[l];
        $.ajax({
            url: 'PHP/getAulaVerificar.php',
            data: {tempEdif,valorPiso},
            type: 'POST',
            success: function(response){
                console.log(response);
                const tasks = JSON.parse(response);
                var cont = 0;
                tasks.forEach(task => {
                    for(var i = 0;i<aulasArray.length;i++){
                        if(`${task.nombreAula}`==aulasArray[i]){
							popAula(i,mapUabcs,cont);
                            cont++;
                        }
                    }
               });
               console.log(aula.length);
            }
        
        })
    });
}




//------------------------------------------------------FIN FUNCIONES------------------------------------------------------------
$("#map-piso").on('change', function(){
    valorPiso = $('#map-piso').val();
    
});


$("#map-edificio").on('change',function(){
		
    var seleccion = $('#map-edificio').val();

    if(seleccion == "TODOS"){
        
        for(var l = 0; l<edificioUabcs.length;l++){
            //console.log(l);
            edif[l] = L.polygon(edificioUabcs[l] , {color: 'grey'}).addTo(mapUabcs);
            popEdificio(l,edificiosArray,mapUabcs);
            
            
            
        }
    }
    
    
    
});

//LEAFLET MAP 
	mapUabcs = L.map('map-container')/*,{scrollWheelZoom: false})*/.setView([24.102931, -110.316239], 18);
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
getEdificios(mapUabcs);
getAulas(mapUabcs);
	
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
	
	/*
	edif1.on('mouseover', function(event){
		
	});
	edif2.on('mouseover', function(event){
		
	});
	//icons
	*/
	//functions

	/*
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
*/
//----------------------------------------FUNCIONES--------------------------------------------------



});

//rectangles







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

