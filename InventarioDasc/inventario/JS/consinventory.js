

$(document).ready(function(){
    var rowTableEquipo = [];
    var rowTableConsumible = [];
    //codigo principal-----------------Invocar funciones
    
    getCombobox("combobox-category","clasificacion")
    getTableEquipo(rowTableEquipo);
    getTableConsumible(rowTableConsumible);

    //getTableEquipo(rutaAjax,rowTableEquipo);
    //getTableConsumible(rutaAjax,rowTableConsumible);
    //getComboboxCategory( "combobox-category",rutaAjax, optionComboboxClasificacion);

    //iniciar los eventos
    $("#combobox-category").on('change',function(){
        
        switch($("#combobox-category").val()){
            //1-EQUIPOS
            case "1":
                $("#table-consumible").hide();
                $("#table-equipo").show();
                
            break;

            case "2":
            //2-CONSUMIBLES
                $("#table-consumible").show();
                $("#table-equipo").hide();
                
            break;

            default:
                $("#table-consumible").show();
                $("#table-equipo").show();
            break;
        }
    })

    $("#search").on('keyup',function(){
        search(rutaAjax);
    })

    
})


