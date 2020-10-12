//Se inicia el script en este documento PHP del dibujado del mapa

var accessTokenMB = 'pk.eyJ1IjoicGlzaDE4IiwiYSI6ImNrYjB4emxpZjAwYTgycnA5amx1Y2kyd2YifQ.Vdrd_nUcSXNPCN8Rv_STcg';

//Un array de edificios y aulas en el cual se guardaran todos los objetos de tipo Edificio
var edificiosArray = [];
var aulasArray = [];
//variable coordenadas de poligonos
var edificioUabcs = [];
var aulaUabcs = [];


//Inicializa el mapa en el contenedor edit-map-container en editMap.php
var mapUabcs = L.map('map-container').setView([24.102931, -110.316239], 18);
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
maxZoom: 40,
id: 'mapbox/streets-v11',
tileSize: 512,
zoomOffset: -1,
accessToken: accessTokenMB
}).addTo(mapUabcs);

getAula(mapUabcs);
getEdificios(mapUabcs);



//termina funciones de mapa--------------------------------------------------------------------------------------




//FUNCIONES-----------------------------------------------------------------------------------------------------------------

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
                
                edificiosArray[cont].poly.bindPopup("Edificio "+edificiosArray[cont].nombre);
                
                edificiosArray[cont].functionClick(cont,edificiosArray,aulasArray,mapUabcs);
                

                
	            
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
            //console.log(aula1);
			var cont = 0;
			var template;
			aula1.forEach(task => {	
				
                
                aulasArray[cont] =  new Aula(`${task.nombreAula}`,`${task.idPlanta}`,`${task.idEdificio}`,null); 


			    aulaUabcs[cont] = [[`${task.x1}`, `${task.y1}`],
							            [`${task.x2}`, `${task.y2}`],
							            [`${task.x3}`, `${task.y3}`],
							            [`${task.x4}`, `${task.y4}`]];

				template += `<option value="${task.Nombre}" >${task.Nombre}</option> `


				aulasArray[cont].poly = L.polygon(aulaUabcs[cont] , {color: 'black'});
                $('#edificio-select').html(template);
                
                aulasArray[cont].poly.bindPopup("Aula "+aulasArray[cont].nombre);

                
	            
	            
	            
	            cont++;
	            
	        });
	      	
	        
	    }
	})
}













