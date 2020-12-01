
$(document).ready(function(){
    var typeBuscar = $("#combobox-search").val()
    getLoanCard("card-container","false",typeBuscar);

    $("#mostrar-radio-entregados").on('change',function(){
        if($("#mostrar-radio-entregados").prop('checked')){
            getLoanCard("card-container","true",typeBuscar,"","");
        }
    })

    $("#mostrar-radio-noentregados").on('change',function(){
        if($("#mostrar-radio-noentregados").prop('checked')){
            getLoanCard("card-container","false",typeBuscar,"","");
        }
    })

    $("#search").on('keyup',function(){
        var typeBuscar = $("#combobox-search").val();
        var text = $("#search").val();
        var typeMostrar = $('input:radio[name = mostrar-radio]:checked').val();
        console.log("campobusqueda = "+typeBuscar);
        
        if(text == ""){
            getLoanCard("card-container",typeMostrar,typeBuscar,"","");
        }else{
            switch(typeBuscar){
                case "identificador":
                   getLoanCard("card-container",typeMostrar,typeBuscar,text,"userprestamo","");
                break;
    
                case "idPrestamo":
                    getLoanCard("card-container",typeMostrar,typeBuscar,text,"prestamo","");
                break;
            }
        }
    })

    $("#combobox-search").on('change',function(){
        var typeBuscar = $("#combobox-search").val();
        var typeMostrar = $('input:radio[name = mostrar-radio]:checked').val();
        console.log("Combobox = "+typeBuscar);
        getLoanCard("card-container",typeMostrar,typeBuscar,"","");
    })
    
   
})

