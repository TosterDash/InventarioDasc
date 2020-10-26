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
        mantForm.style.display = this.checked ? 'block' : 'none';
    });

    $(document).on('click', '#inv-add-btn',function(){
        var value = $('#tipo_objeto').val();

        if(value ==  "Equipo"){
            var category = $('#catalogue').val();
            var name = $('#name-form-equip').val();
            var desc = $('#desc-form-equip').val();
            var resp = $('#resp-form').val();
            var lastMant = $('#lastMant-form').val();
            var nextMant = $('#nextMant-form').val();
            $.post('inventario/PHP/addinventory.php',{value, category, name, desc, resp, lastMant, nextMant} ,function(response){});
        }else if(value ==  "Consumible"){
            var name = $('#name-form-equip').val();
            var desc = $('#desc-form-equip').val();
            var cant = $('#cant-form-cons').val();
            $.post('inventario/PHP/addinventory.php',{value, name, desc, cant} ,function(response){});
        }
    })

})




