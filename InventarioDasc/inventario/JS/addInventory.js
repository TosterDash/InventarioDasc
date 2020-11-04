$(document).ready(function(){
    //console.log("dawdaw");
    //Ocultar elementos de la segunda columna
    $("#col-2-block-mant").hide();
    $("#col-2-block-cant").hide();
    $("#col-1-block-mant").hide();
    
    getComboboxCol1();

    $("#col-1-combobox-clasification").on('change',function(){
       
        switch($("#col-1-combobox-clasification").val()){
            case "1":
                
                //quitar otros required
                $("#col-2-number-cant").prop('required',false);
                //--------------------------------------------
                $("#col-2-number-cant").val("");
                $("#col-2-block-cant").hide();
                $("#col-1-block-mant").show();
                
            break;

            case "2":
                //required a input cantidad
                $("#col-2-number-cant").prop('required',true);
                //quitar otros required
                $("#col-2-text-mantResp").prop('required',false);
                $("#col-2-date-lastMant").prop('required',false);
                $("#col-2-date-nextMant").prop('required',false);

                //--------------------------------------------
                $("#col-2-text-mantResp").val("");    
                $("#col-2-date-lastMant").val("");    
                $("#col-2-date-nextMant").val("");
                $('#col-1-checkbox-mant').prop('checked', false);
                $("#col-2-block-cant").show();
                $("#col-1-block-mant").hide();
                $("#col-2-block-mant").hide();
            break;

            default:
                //quitar otros required
                $("#col-2-text-mantResp").prop('required',false);
                $("#col-2-date-lastMant").prop('required',false);
                $("#col-2-date-nextMant").prop('required',false);

                $("#col-2-number-cant").prop('required',false);
                //--------------------------------------------
                $("#col-2-number-cant").val("");
                $("#col-2-text-mantResp").val("");    
                $("#col-2-date-lastMant").val("");    
                $("#col-2-date-nextMant").val("");
                $('#col-1-checkbox-mant').prop('checked', false);
                $("#col-2-block-mant").hide();
                $("#col-2-block-cant").hide();
                $("#col-1-block-mant").hide();
            break;
        }
    });

    $('#col-1-checkbox-mant').on('change',function(){
        if($('#col-1-checkbox-mant').prop('checked')==true){
            //required a los inputs de mantenimiento
            $("#col-2-text-mantResp").prop('required',true);
            $("#col-2-date-lastMant").prop('required',true);
            $("#col-2-date-nextMant").prop('required',true);
            $("#col-2-block-mant").show();
        }else{
            //quitar required a los inputs
            //required a los inputs de mantenimiento
            $("#col-2-text-mantResp").prop('required',false);
            $("#col-2-date-lastMant").prop('required',false);
            $("#col-2-date-nextMant").prop('required',false);

            $("#col-2-text-mantResp").val("");    
            $("#col-2-date-lastMant").val("");    
            $("#col-2-date-nextMant").val("");
            $("#col-2-block-mant").hide();
        }
    });

    $("#formSend").on("submit",function(e){
        e.preventDefault();
        if($("#col-1-combobox-clasification").val()!=""){
            
            if($("#col-1-combobox-product").val()!=""){
                var form = document.querySelector('form');
                var formData = new FormData(form);
                
                $.ajax({
                    url: "inventario/PHP/addinventory.php",
                    type: "POST",
                    dataType: "HTML",
                    data: formData,
                    cache: false,
                    contentType: false,
                    processData: false
                }).done(function(response){
                    console.log(response);
                    vaciarCampos();
                    alertify.success('Se añadio el objeto'); 
                        
                        
                });
            }else{
                alertify.warning("No hay un producto seleccionado");
            }
        }else{
            alertify.warning("No hay una clasificacion seleccionada");
        }
    });





    //funciones---------------------------
    function getComboboxCol1(){
        //OPCION categoria PARA CATEGORIA
        var option = "clasificacion";
        //ajax para combobox clasificacion
        $.ajax({
            url:"inventario/PHP/addinventory.php" ,
            type:"POST" ,
            data: {option},

        }).done(function(e){
            //console.log(e);
            switch(e){

                case "error":
                    alertify.error("Error addinventory.PHP-clasificacion");
                break;

                default:
                    //console.log("succes");
                    var category = JSON.parse(e);
                    var template = `<option value="">--Seleccione--</option>`;
                    category.forEach(task=>{
                        template+= `<option value="${task.idClasificacion}">${task.clasificacion}</option>`
                    })

                    $("#col-1-combobox-clasification").html(template);
                break;
            }
            
        }).fail(function(e){
            console.log("FALLO POST DE GET CATEGORY");
        })

        //ajax para combobox producto
        option = "producto";
        $.ajax({
            url:"inventario/PHP/addinventory.php" ,
            type:"POST" ,
            data: {option},

        }).done(function(e){
            //console.log(e);
            switch(e){

                case "error":
                    alertify.error("Error addinventory.PHP-producto");
                break;

                default:
                    console.log("succes");
                    var category = JSON.parse(e);
                    var template = `<option value="">--Seleccione--</option>`;
                    category.forEach(task=>{
                        template+= `<option value="${task.idCategoria}">${task.categoria}</option>`
                    })

                    $("#col-1-combobox-product").html(template);
                break;
            }
            
        }).fail(function(e){
            console.log("FALLO POST DE GET CATEGORY");
        })

    }

    function vaciarCampos(){

        $("#col-1-combobox-category").val("");
        $("#col-1-combobox-product").val("");    
        $("#col-2-text-name").val("");    
        $("#col-2-text-desc").val("");    
        $("#col-2-text-mantResp").val("");    
        $("#col-2-date-lastMant").val("");    
        $("#col-2-date-nextMant").val("");    
        $("#col-2-number-cant").val("");    
        $("#item_file").val("");        
    }


})




