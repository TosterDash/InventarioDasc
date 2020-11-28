$(document).ready(function(){

    
    getComboboxMap("loan-add-edif","idEdificio","Nombre","edificio","-Seleccionar-");
    
    getTablePrestamo("loan-tbody");

    console.log($("#loan-add-clasroom").val());

    //Evento on change cb edificio
    $(document).on('change', '#loan-add-edif',function(){
        getComboboxMap("loan-add-clasroom","idAula","nombreAula","aula",undefined,"idEdificio",$("#loan-add-edif").val()); 
    });

    //Evento on click agregar
    $(document).on('click', '#loan-add-add',function(e){
        e.preventDefault();
        var building = $('#loan-add-edif').val();
        var classroom = $('#loan-add-clasroom').val();
        var exitDate = $('#loan-add-datetime').val();
        var returnDate = $('#loan-add-datetime-return').val();
        var objects = [];

        for(var i = 0;i<listPrestamoId.length;i++){
            if($("#"+listPrestamoId).prop('checked')){
                objects[i] = listPrestamoId[i];
            }
        }
        console.log(objects);
        addPrestamo(building,classroom,exitDate,returnDate,objects);
        
       
    });


    

    
});