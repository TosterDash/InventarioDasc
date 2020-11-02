$(document).ready(function(){
    $(document).on('click', '#loan-add-add',function(){
        var building = $('#loan-add-edif').val();
        var clasroom = $('#loan-add-clasroo').val();
        var exitDate = $('#loan-add-datetime').val();
        var returnDate = $('#loan-add-datetime').val();
        returnDate.setDate(returnDate.getDate()+15);
        //Se debe convertir en arreglo que reciba la tabla de objetos
        var objetos = []

    })

})