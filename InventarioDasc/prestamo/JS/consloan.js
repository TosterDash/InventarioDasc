
$(document).ready(function(){
    
    getLoanCard("card-container","false");

    $("#mostrar-radio-entregados").on('change',function(){
        if($("#mostrar-radio-entregados").prop('checked')){
            getLoanCard("card-container","true",false);
        }
    })

    $("#mostrar-radio-noentregados").on('change',function(){
        if($("#mostrar-radio-noentregados").prop('checked')){
            getLoanCard("card-container","false",false);
        }
    })

    $("#search").on('keyup',function(){
        var typeBuscar = $("#combobox-search").val();
        var text = $("#search").val();
        var typeMostrar = $('input:radio[name = mostrar-radio]:checked').val();
        console.log(typeBuscar);
        
        if(text == ""){
            getLoanCard("card-container",typeMostrar);
        }else{
            switch(typeBuscar){
                case "identificador":
                   // getLoanCard("card-container",typeMostrar,typeBuscar,text,"userprestamo");
                break;
    
                case "idPrestamo":
                    //getLoanCard("card-container",typeMostrar,typeBuscar,text,"prestamo");
                break;
            }
        }
    })
    
   
})

