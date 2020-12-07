
$(document).ready(function(){
    
    getLoanCard("card-container","false");

    $("#mostrar-radio-entregados").on('change',function(){
        getNotificationNum(false);
        if($("#mostrar-radio-entregados").prop('checked')){
            getLoanCard("card-container","true");
        }
    })

    $("#mostrar-radio-noentregados").on('change',function(){
        if($("#mostrar-radio-noentregados").prop('checked')){
            getLoanCard("card-container","false");
        }
    })

    $("#search").on('keyup',function(){
        var typeBuscar = $("#combobox-search").val();
        var text = $("#search").val();
        var typeMostrar = $('input:radio[name = mostrar-radio]:checked').val();
        
        switch(typeBuscar){
            case "identificador":
                //searchLoanCard(typeBuscar,text,"userprestamo");
                getLoanCard("card-container",typeMostrar,typeBuscar,text,"userprestamo");
            break;

        }
        
    })
    
   
})

