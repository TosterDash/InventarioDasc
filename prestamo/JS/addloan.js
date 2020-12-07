$(document).ready(function(){

    getIdUsuario();
    getComboboxMap("loan-add-edif","idEdificio","Nombre","edificio","-Seleccionar-");
    getTablePrestamo("loan-tbody");

    

    //Evento on change cb edificio
    $(document).on('change', '#loan-add-edif',function(){

        getComboboxMap("loan-add-clasroom","idAula","nombreAula","aula",undefined,"idEdificio",$("#loan-add-edif").val()); 
    });

    //Evento on click agregar
    $(document).on('click', '#loan-add-add',function(e){
        var building = $('#loan-add-edif').val();
        var classroom = $('#loan-add-clasroom').val();
        var exitDate = $('#loan-add-datetime').val();
        var returnDate = $('#loan-add-datetime-return').val();
        var objects = [];
        var validarFechaRetorno = validarFecha(returnDate);

        for(var i = 0;i<idUsuarioArray.length;i++){
            var disponible;
            if(idUsuarioArray[i].prestamoActivo == "false"){
                disponible = true;
            }else{
                disponible = false;
            }
           
            if(validarFechaRetorno){
                if($("#input-id-user").val()==idUsuarioArray[i].id){
                    var numUsuario = idUsuarioArray[i].idUserPrestamo;
                    if(exitDate==""){
                        alertify.warning("Campo fecha salida esta vacia");
                        
                        break;
                     }else{
                         if(returnDate==""){
                             alertify.warning("Campo fecha retorno esta vacia");
                             
                             break;
                         }else{
                             if(building==""){
                                 alertify.warning("Campo edificio esta vacia");
                                 
                                 break;
                             }else{
                                 
                                 for(var i = 0;i<listPrestamoId.length;i++){
                                     if($("#"+listPrestamoId[i]).prop('checked')){
                                         objects[i] = listPrestamoId[i];
                                         
                                     }
                                 }
                                 
                                 if(objects.length == 0){
                                     alertify.warning("No hay ningun objeto seleccionado");
                                     break;
                                 }else{
                                    
                                    if(disponible){
                                        borrarCampos();
                                        addPrestamo(numUsuario,building,classroom,exitDate,returnDate,objects);
                                        
                                        break;
                                    }else{
                                        alertify.error("Este usuario tiene un prestamo activo!");
                                        break;
                                    }
                                     
                                 }
                                 
                                 
                             }
                         }
                     }
                }else{
                    if(i==idUsuarioArray.length-1){
                        alertify.error("No existe el numero de usuario");
                    }
                }
            }else{
                alertify.warning("La fecha de retorno tiene que ser mayor a la fecha actual");
                break;
            }
        }

 
        
        
        
        
        
        
       
    });
    function validarFecha(nextMant){
        var valDate = new Date (nextMant);
        var dateNow = new Date();
        if(valDate.getTime()>=dateNow.getTime()){
            return true;
        }else{
            return false;
        }
    }

    function borrarCampos(){
        $("#input-id-user").val("");
        $("#loan-add-edif").val("");
        $("#loan-add-clasroom").val("");
        $("#loan-add-datetime").val("");
        $("#loan-add-datetime-return").val("");
    }

    
});