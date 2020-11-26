
    //Se inicia el script en este documento PHP del dibujado del mapa
    var accessTokenMB = 'pk.eyJ1IjoicGlzaDE4IiwiYSI6ImNrYjB4emxpZjAwYTgycnA5amx1Y2kyd2YifQ.Vdrd_nUcSXNPCN8Rv_STcg';
    //Un array de edificios y aulas en el cual se guardaran todos los objetos de tipo Edificio
    var edificiosArray = [];
    var aulasArray = [];
    //variable coordenadas de poligonos
    var edificioUabcs = [];
    var aulaUabcs = [];
    //ruta
    var rutaAjaxMapa = 'mapa/PHP/mapaCons.php';
    

    var mapUabcs;
    class polygon{
        constructor(idPolygon,nombre, typePoly ,poly, idPlanta, idEdificio){
            this.idPolygon = idPolygon;
            this.nombre = nombre;
            this.typePoly = typePoly;
            this.poly = poly;
            this.idPlanta = idPlanta;
            this.idEdificio = idEdificio;
        }
        enablePopUp(){ 
            var typePoly = this.typePoly;
            console.log(typePoly)
            switch(typePoly){
                case "edificio":
                    this.poly.bindPopup("Edificio "+this.nombre);
                    document.getElementById("name-edif").innerHTML = this.nombre;
                break;

                case "aula":
                    this.poly.bindPopup("Aula "+this.nombre);
                    document.getElementById("name-aula").innerHTML = this.nombre;
                break;
            }
            
        }
        edificioClick(){
            var idPolygon = this.idPolygon;
            console.log(idPolygon);
            this.poly.on('click',function(e){
                removeAllAula();
                for(var i = 0;i<aulasArray.length;i++){
                    if(idPolygon==aulasArray[i].idEdificio && $("#map-piso").val()==aulasArray[i].idPlanta){
                        aulasArray[i].poly.addTo(mapUabcs);
                        aulasArray[i].aulaClick();
                        aulasArray[i].enablePopUp();
                        
                        
                    }
                }
            })
        }
        aulaClick(){
            var thisPoly = this.poly;
            var idAula = this.idPolygon;
            this.poly.on('click',function(){
                for(var i = 0;i<aulasArray.length;i++){
                    aulasArray[i].poly.setStyle({color: 'black'});
                }
                thisPoly.setStyle({color: 'green'});
                createTable(idAula);
                
            })
        }
        


    }


  



    //funciones----------------------------------------------------------
    function removeAllAula(){
        for(var i = 0;i<aulasArray.length;i++){
            aulasArray[i].poly.setStyle({color: 'black'});
            aulasArray[i].poly.off();
            mapUabcs.removeLayer(aulasArray[i].poly);
        }
    }

    function createMap(mapId){
        //Inicializa el mapa en el contenedor edit-map-container en editMap.php
        mapUabcs = L.map(mapId).setView([24.102931, -110.316239], 18);
        L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
        maxZoom: 40,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: accessTokenMB
        }).addTo(mapUabcs);
        getAula();
        getEdificios();

        function getEdificios(){
            var option = "getEdificios";
            $.ajax({
                url: rutaAjaxMapa,
                type: 'POST',
                data: {option},
                success: function(response){
                    
                    edificio1 = JSON.parse(response);
                    var cont = 0;
                    edificio1.forEach(task => {	
                        
                        
                        edificiosArray[cont] =  new polygon(`${task.idEdificio}`,`${task.Nombre}`,"edificio",null); 
        
        
                        edificioUabcs[cont] = [[`${task.x1}`, `${task.y1}`],
                                                [`${task.x2}`, `${task.y2}`],
                                                [`${task.x3}`, `${task.y3}`],
                                                [`${task.x4}`, `${task.y4}`]];
        
                        edificiosArray[cont].poly = L.polygon(edificioUabcs[cont] , {color: 'red'}).addTo(mapUabcs);
                        edificiosArray[cont].enablePopUp();
                        edificiosArray[cont].edificioClick();
                        cont++;
                        
                    });
                      
                    
                }
            })
        }
        function getAula(){
            var option = "getAula";
            $.ajax({
                url: rutaAjaxMapa,
                type: 'POST',
                data: {option},
                success: function(response){
                    
                    aula1 = JSON.parse(response);
                    //console.log(aula1);
                    var cont = 0;
                    aula1.forEach(task => {	
                        
                        
                        aulasArray[cont] =  new polygon(`${task.idAula}`,`${task.nombreAula}`,"aula",null,`${task.idPlanta}`,`${task.idEdificio}`); 
        
        
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
    }

    function createTable(idAula){
    var option = "getTable";
    $.ajax({
        url: rutaAjaxMapa,
        type: 'POST',
        data: {idAula,option},
        success: function(response){
            var cons = JSON.parse(response);
            var template = "";
            var cont=0;
            cons.forEach(task =>{
                rowTableEquipo[cont] = new rowTable(`${task.idObjeto}`,"Equipo",1);
                template += ``;
                
                
                cont++;
            
            })
            $('#tbody-info').html(template);
            
        }
    })
    }

/*
 <tr>
    <th id="etiqueta${task.idObjeto}">${task.etiqueta}</th>
    <th id="producto${task.idObjeto}">${task.producto}</th>
    <th id="nombre${task.idObjeto}">${task.nombre}</th>
    <th id="descripcion${task.idObjeto}">${task.descripcion}</th>
</tr>
*/