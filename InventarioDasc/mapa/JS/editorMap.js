
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


//variables de inputs html
var labelOptionAction = "#label-option";
var comboboxOptionAction = "#accion-select";

var blockNombre = "#nombre-placeholder";
var textNombre = "#nombre-map";

var blockTipo = "#tipo-combobox";
var comboboxTipo = "#tipo-select";

var blockPlanta = "#planta-combobox";
var comboboxPlanta = "#planta-select";

var blockEdificio = "#edificio-combobox";
var comboboxEdificio = "#edificio-select"

var mensaje = "#descripcion-label";

var buttonSumbit = "#boton-edificioPlanta";

var formHtml = "#form-edit";



//--------------------------------------TERMINA LA FUNCION DEL MAPA-------------------------------------------
//AL INICIAR LA PAGINA SE OBTIENE TODOS LOS EDIFICIOS Y AULAS CREADOS EN EL MOMENTO
createMap("mapid",false);

getComboboxMap("planta-select","idPlanta","planta","planta","Seleccione una planta");
getComboboxMap("edificio-select","idEdificio","Nombre","edificio","Seleccione un edificio");

$(blockNombre).hide(); $(blockTipo).hide(); $(blockPlanta).hide(); $(blockEdificio).hide();  $(buttonSumbit).hide();

$(comboboxOptionAction).on('change',function(){
    
    switch($(comboboxOptionAction).val()){
        case "add":
            removeAll();
            getEdificios(true,false);
            $(buttonSumbit).show();
            editTool();
            $(blockNombre).show();
            $(blockTipo).show();
            $(comboboxTipo).on('change',function(){
                switch($(comboboxTipo).val()){
                    case "edificio":
                        $(blockPlanta).hide();
                        $(blockEdificio).hide();
                    break;

                    case "aula":
                        $(blockPlanta).show();
                        $(blockEdificio).show();
                        $(comboboxPlanta).on('change',function(){
                            getAula("showAulaPorPiso",$(comboboxPlanta).val(),"delete");
                        })
                    break;

                    default:
                        $(blockPlanta).hide();
                        $(blockEdificio).hide();
                    break;
                }
            })
            $(formHtml).on('submit',function(e){
                console.log(xyCoord.length);
                e.preventDefault();
                var tipo = verificarTipo();
                if(tipo){
                    var ComboAula = verificarComboAula();
                    if(ComboAula){
                        var flagSizePoly = verificarSizePoly();
                        if(flagSizePoly){
                            var nombre = $("#nombre-map").val();
                            var seleccionTipo = $("#tipo-select").val();
                            var plantaMap = $("#planta-select").val();
                            var edificioMap = $("#edificio-select").val();
                            addPoly(nombre,seleccionTipo,plantaMap,edificioMap);
                        }else{
                            alertify.warning("Necesita añadir un poligono en el mapa")
                        }
                    }else{
                        alertify.warning("Seleccione un edificio al aula")
                    }
                }else{
                    alertify.warning("Seleccione un tipo de poligono");
                }
                
            })
        break;

        case "mod":
            vaciarCampos();
            removeAll();
            $(formHtml).off('submit')
            $(comboboxTipo).off('change');
        break;
        
        case "delete":
            vaciarCampos();
            removeAll();
            removeEditTool();
            $(blockPlanta).show();
            $(mensaje).html("<label>Seleccione un poligono para eliminar</label>");
            $(formHtml).off('submit')
            $(comboboxTipo).off('change');
            getEdificios(true,"clickDelete");
            
            
            $(comboboxPlanta).on('change',function(){
                getAula("showAulaPorPiso",$(comboboxPlanta).val(),"delete");
            })
            
        break;

        default:

            vaciarCampos();
            removeAll();
        break;
    }
})

function addPoly(nombre,seleccionTipo,plantaMap,edificioMap){
    var option = "addPoly";
    $.ajax({
        url: rutaAjaxMapa,
        type: "POST",
        data: {option,xyCoord,nombre,seleccionTipo,plantaMap,edificioMap},
    
    }).done(function(response){
        //console.log(response);
        xyCoord = [];
        //removeAll();
        removeLayer();
        getComboboxMap("planta-select","idPlanta","planta","planta","Seleccione una planta");
        getComboboxMap("edificio-select","idEdificio","Nombre","edificio","Seleccione un edificio");    
        $(textNombre).val("");
        alertify.success("Poligono creado!");
        switch($(comboboxTipo).val()){
            case "edificio":
                getEdificios(true);
            break;

            case "aula":
                getEdificios(true);
                getAula("showAulaPorPiso",$(comboboxPlanta).val(),"delete");
            break;

            default:
                
            break;
        }
    });

    function removeLayer(){
        mapUabcs.removeLayer(capaEdit);
    }
}

function verificarTipo(){
    if($(comboboxTipo).val()==""){
        return false;
    }else{
        return true;
    }
}

function verificarComboAula(){
    if($(comboboxTipo).val()=="aula"){
        if($(comboboxEdificio).val()==""){
            return false;
        }else{
            return true;
        }
    }else{
        return true;
    }
}

function verificarSizePoly(){
    if(xyCoord.length  != 0 && xyCoord.length == 8){
        return true;
    }else{
        return false;
    }
}

function vaciarCampos(){
    $(comboboxTipo).val("");
    $(comboboxPlanta).val("");
    $(comboboxEdificio).val("");
   
}

function removeAll(){
    $(mensaje).html("<label></label>");
    //vaciarCampos();
    removeAllAula();
    removeAllEdificio();
    $(comboboxPlanta).off('change');
    $(comboboxTipo).off('change');
    $(blockNombre).hide(); $(blockTipo).hide(); $(blockPlanta).hide(); $(blockEdificio).hide(); $(buttonSumbit).hide();
    removeEditTool();
}


//EMPIEZA LA EJECUCION DE JQUERY-----------------
//Esconder las plantas y edificios mientras se selecciona una opcion
/*
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
            removeEditTool();
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
*/

