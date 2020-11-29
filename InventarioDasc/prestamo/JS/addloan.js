$(document).ready(function(){

    
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
 
        if(exitDate==""){
           alertify.warning("Campo fecha salida esta vacia");
        }else{
            if(returnDate==""){
                alertify.warning("Campo fecha retorno esta vacia");
            }else{
                if(building==""){
                    alertify.warning("Campo edificio esta vacia");
                }else{
                    for(var i = 0;i<listPrestamoId.length;i++){
                        if($("#"+listPrestamoId[i]).prop('checked')){
                            objects[i] = listPrestamoId[i];
                            
                        }
                    }
                    
                    addPrestamo(building,classroom,exitDate,returnDate,objects);
                }
            }
        }
        
        
        
        
        
       
    });


    

    
});