

$(document).ready(function(){
    var comboboxClasification = "#combobox-category";
    //codigo principal-----------------Invocar funciones
    
    getCombobox("combobox-category","idTipoClasificacion","clasificacion","tipoclasificacion","Todos");
    getTableObjeto("equipo","tbody-equipo",false);
    getTableObjeto("consumible","tbody-consumible");
    //getTableConsumible();

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
        var buscarPor = $("#combobox-search").val()
        var stringSearch = $("#search").val() 
        search(buscarPor,stringSearch);
    })

    
})


