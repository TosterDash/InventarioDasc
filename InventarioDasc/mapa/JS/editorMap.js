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



//--------------------------------------TERMINA LA FUNCION DEL MAPA-------------------------------------------
//AL INICIAR LA PAGINA SE OBTIENE TODOS LOS EDIFICIOS Y AULAS CREADOS EN EL MOMENTO
createMap("mapid");


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
                            $.post('mapa/PHP/insertPoly.php',{nombreMap,seleccion,xyCoord} ,function(response){
                                console.log(response);
                                alert("Se ha insertado el edificio correctamente");
                                $(location).attr('href','editMap.php');
                           
                          });
            
                        break;
                
                        case "aula":
                            $.post('mapa/PHP/insertPoly.php',{seleccion,plantaMap,edificioMap,nombreMap,xyCoord} ,function(response){
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


