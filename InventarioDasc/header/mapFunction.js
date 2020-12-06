
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
    //variables para la interfaz del mapa
    var drawnItems;
    var drawControl;
    var editToolEnable = false;
    var capaEdit;

    var mapUabcs;
    class polygon{
        /*
        IdPoligon es la id ya sea de un edificio o un aula.
        Nombre pues su nombre.
        Typepoli es un string que dice si es un edificio o aula.
        Poly es la clase completa y las propiedades del poligono del mapa.

        El id planta e id edificio del final solo lo tienen las aulas
        */
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
            //console.log(typePoly)
            switch(typePoly){
                case "edificio":
                    this.poly.bindPopup("Edificio "+this.nombre);
                break;

                case "aula":
                    this.poly.bindPopup("Aula "+this.nombre);
                    
                break;
            }
            
        }
        edificioClick(){
            var idPolygon = this.idPolygon;
            
            this.poly.on('click',function(e){
                $("#map-edificio").val(idPolygon);
                updateInfo($("#map-edificio").find("option:selected").text() , $("#map-piso").find("option:selected").text(),  " ----" );
                removeAllAula();
                showAulas(idPolygon,$("#map-piso").val());
                
            })
        }
        aulaClick(){
            var thisPoly = this.poly;
            var idAula = this.idPolygon;
            var nombre = this.nombre;
            this.poly.on('click',function(){
                for(var i = 0;i<aulasArray.length;i++){
                    aulasArray[i].poly.setStyle({color: 'black'});
                }
                thisPoly.setStyle({color: 'green'});
                updateInfo($("#map-edificio").find("option:selected").text() , $("#map-piso").find("option:selected").text(),  nombre );
                createTable(idAula);
                
            })
        }

        edificioClickDelete(){
            
            var idEdificio = this.idPolygon;
            var poly = this.poly;
            this.poly.on('click',function(){
                
                var option = "deletePolyEdificio";
                $.ajax({
                    url: rutaAjaxMapa,
                    type: 'POST',
                    data: {option,idEdificio},
                    success: function(response){
                        alertify.confirm(`¿Seguro que desea eliminar este edificio?. Al eliminarlo tambien se eliminaran sus aulas`,function(e){
                            if(e) {
                                getEdificios(true,"clickDelete");
                                getAula("showAulaPorPiso",$(comboboxPlanta).val(),"delete");
                            }
                        })
                 
                        
                  

                    }
                        
                })
            })
        }

        aulaClickDelete(){
            
            var idAula = this.idPolygon;
            var poly = this.poly;
            this.poly.on('click',function(){
                alertify.confirm(`¿Seguro que desea eliminar esta aula?`,function(e){
                    if(e) {
                        var option = "deletePolyAula";
                        $.ajax({
                            url: rutaAjaxMapa,
                            type: 'POST',
                            data: {option,idAula},
                            success: function(response){
                                mapUabcs.removeLayer(poly);
                                poly.off();

                            }
                                
                        })
                    }
                })
            })
            
        }

       


    }


    //funciones----------------------------------------------------------
    function updateInfo(edificio,piso,aula){
        $("#name-edif").html(edificio)
        $("#name-planta").html(piso)
        $("#name-aula").html(aula)
    }

    function showAulas(idEdificio,piso){
        removeAllAula();
        for(var i = 0;i<aulasArray.length;i++){
            if(idEdificio==aulasArray[i].idEdificio && piso==aulasArray[i].idPlanta){
                //console.log("aulasArray");
                aulasArray[i].poly.addTo(mapUabcs);
                aulasArray[i].aulaClick();
                aulasArray[i].enablePopUp();
    
            }
            
        }
    }


    function setView(edificioVal){
        for(var i = 0;i<edificiosArray.length; i++){
            if(edificiosArray[i].idPolygon==edificioVal){
                mapUabcs.fitBounds(edificiosArray[i].poly.getBounds());
                break;
            }
        }
        
    }

    function removeAllAula(){
        for(var i = 0;i<aulasArray.length;i++){
            aulasArray[i].poly.setStyle({color: 'black'});
            aulasArray[i].poly.off();
            mapUabcs.removeLayer(aulasArray[i].poly);
        }
    }

    function removeAllEdificio(){
        for(var i = 0;i<edificiosArray.length;i++){
            edificiosArray[i].poly.setStyle({color: 'black'});
            edificiosArray[i].poly.off();
            mapUabcs.removeLayer(edificiosArray[i].poly);
        }
    }

    function createMap(mapId,generatePoly){
        //Inicializa el mapa en el contenedor edit-map-container en editMap.php
        mapUabcs = L.map(mapId).setView([24.102931, -110.316239], 18);
        L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
        minZoom: 16,
        maxZoom: 20,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: accessTokenMB
        }).addTo(mapUabcs);

        if(generatePoly){
            getAula(true);
            getEdificios(true,true);
        }
             
        
    }

    function getEdificios(visible,accionClick){
        removeAllEdificio();
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
    
                    edificiosArray[cont].poly = L.polygon(edificioUabcs[cont] , {color: 'red'})
                    edificiosArray[cont].enablePopUp();
                    
                    if(visible){
                        edificiosArray[cont].poly.addTo(mapUabcs);
                    }
                    switch(accionClick){
                        case "clickInfo":
                            edificiosArray[cont].edificioClick();
                        break;

                        case "clickDelete":
                            
                            edificiosArray[cont].edificioClickDelete();
                        break;
                        default:
                            
                        break;
                    }
                    cont++;
                    
                });
                  
                
            }
        })
    }

    function getAula(optionAula,valorPiso,accionClick){
        removeAllAula();
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
                    
                    switch(optionAula){
                        case "showAulaPorPiso":
                            
                            showAulaPorPiso(cont);
                        break;

                        default:
                            
                        break;
                    }
                    cont++;
                    
                });
                  
                
            }
        })

        function showAulaPorPiso(cont){
            if(aulasArray[cont].idPlanta==valorPiso){
                aulasArray[cont].poly.addTo(mapUabcs);
                aulasArray[cont].enablePopUp();
                switch(accionClick){
                    case "delete":
                        aulasArray[cont].aulaClickDelete();
                    break;

                    case "mod":
                    break;
                }
            }
        }
    }

    function removeEditTool(){
       if(editToolEnable){
        mapUabcs.removeControl(drawControl);
        mapUabcs.removeLayer(drawnItems);
        editToolEnable = false;
       }
    }

    function editTool(){
        editToolEnable = true;
        //Crea la interfaz de dibujado a la izquierda del mapa
        // FeatureGroup is to store editable layers
        drawnItems = new L.FeatureGroup();
        mapUabcs.addLayer(drawnItems);

        drawControl = new L.Control.Draw({
            edit: {
              featureGroup: drawnItems, // allow editing/deleting of features in this group
              edit: false // disable the edit tool (since we are doing editing ourselves)
            },
            draw: {
              circle: false, // disable circles
              marker: false, // disable polylines
              polyline: false, // disable polylines
              polygon: {
                allowIntersection: false, // polygons cannot intersect thenselves
                drawError: {
                  color: 'red', // color the shape will turn when intersects
                  message: 'No puedes realizar una intersección' 
                }
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
        capaEdit = layer;
        polyArray=layer.getLatLngs();
        if(polyArray[0].length==numSide){
            
            mapUabcs.addLayer(capaEdit);
            var numC = 0;
            for(let i =0; i<polyArray[0].length;i++){
                console.log(polyArray[0][i]);
                var polyArrayC = Object.values(polyArray[0][i]);
                xyCoord[numC] = polyArrayC[0];
                numC++;

                xyCoord[numC] = polyArrayC[1];
                numC++;
            
            
                
            }
            
        }else{
            alert("El poligono tiene que ser de 4 lados");
        }
        
        })
    }   

    function createTable(idAula){
    var option = "getTable";
    $.ajax({
        url: rutaAjaxMapa,
        type: 'POST',
        data: {idAula,option},
        success: function(response){
            var cons = JSON.parse(response);
            var template = ``;
            var cont=0;
            cons.forEach(task =>{
               template = `<tr >
                                <th >${task.etiqueta}</th>
                                <th >${task.producto}</th>
                                <th >${task.nombre}</th>
                                
                            </tr>`;
                
                
                cont++;
            
            })
            $('#map-tbody').html(template);
            
        }
    })
    }
    //(nombre del combobox, nombre de la id de la BDD, nombre del row en BDD,Nombre de la tabla en la BDD, nombre del row para la condicion where (opcional), la id para la condicion where (opcional))
    function getComboboxMap(nameCombo,idNombreRow,nombreRow,nombreTabla,capaInicial,nombreRowReferencia,idReferencia){
        var option = "getComboboxMap"
        $.ajax({
            url: rutaAjaxMapa,
            type: 'POST',
            data: {option,idNombreRow,nameCombo,nombreTabla,nombreRow,nombreRowReferencia,idReferencia},
            success: function(response){
               var cons = JSON.parse(response);
               var template = ``;
               var cont = 0;
                if(capaInicial != undefined){
                    template = `<option value="">`+capaInicial+`</option>`;
                }
               cons.forEach(task =>{
                
                   template += `<option value="${task.id}">${task.info}</option>`;
                   cont++;
               })
               $("#"+nameCombo).html(template);
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