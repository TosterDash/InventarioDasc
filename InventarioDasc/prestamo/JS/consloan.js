
$(document).ready(function(){
    
    getLoanCard("card-container","false");

    $("#mostrar-radio-entregados").on('change',function(){
        if($("#mostrar-radio-entregados").prop('checked')){
            getLoanCard("card-container","true");
        }
    })

    $("#mostrar-radio-noentregados").on('change',function(){
        if($("#mostrar-radio-noentregados").prop('checked')){
            getLoanCard("card-container","false");
        }
    })
    
   
})

