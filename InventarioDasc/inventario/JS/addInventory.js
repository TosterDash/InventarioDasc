$(document).ready(function(){
    $('.cons').hide();
    $('.equip').hide();
    $(document).on('change','#tipo_objeto',function(){
        var value = $('#tipo_objeto').val();
       if(value ==  "Equipo"){
            $('.cons').hide();
            $('.equip').show();
            $('#mantForm').hide();
            $('#mantCB').prop('checked', false);
       }else if(value ==  "Consumible"){
            $('.cons').show();
            $('.equip').hide();
       }
    })

    $('#mantCB').on('change',function(){
        console.log("ASD");
        mantForm.style.display = this.checked ? 'block' : 'none';
    });
})




