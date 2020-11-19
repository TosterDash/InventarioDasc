$(document).ready(function(){
  
    //Invocar funciones-------------------------
    //Ocultar elementos de la segunda columna
    $("#col-1-block-producto").hide();
    $("#col-2-block-mant").hide();
    $("#col-2-block-cant").hide();
    $("#col-1-block-mant").hide();
    $("#btn-producto-confirmar").hide();
    
    getCombobox("col-1-combobox-clasification","clasificacion");
    



    //inicializar los eventos de botones
    $("#col-1-combobox-clasification").on('change',function(){
       
        switch($("#col-1-combobox-clasification").val()){
            case "1":
                getCombobox("col-1-combobox-product","producto", $("#col-1-combobox-clasification").val());
                //quitar otros required
                $("#col-2-number-cant").prop('required',false);
                //--------------------------------------------
                $("#col-2-number-cant").val("");
                $("#col-2-block-cant").hide();
                $("#col-1-block-mant").show();

                $("#col-1-block-producto").show();
                
            break;

            case "2":
                getCombobox("col-1-combobox-product","producto", $("#col-1-combobox-clasification").val());
                //required a input cantidad
                $("#col-2-number-cant").prop('required',true);
                //quitar otros required
                $("#col-2-text-mantResp").prop('required',false);
                $("#col-2-date-nextMant").prop('required',false);

                $("#col-1-block-producto").show();

                //--------------------------------------------
                $("#col-2-text-mantResp").val("");    
                $("#col-2-date-nextMant").val("");
                $('#col-1-checkbox-mant').prop('checked', false);
                $("#col-2-block-cant").show();
                $("#col-1-block-mant").hide();
                $("#col-2-block-mant").hide();
            break;

            default:
                $("#col-1-block-producto").hide();
                //quitar otros required
                $("#col-2-text-mantResp").prop('required',false);
                $("#col-2-date-nextMant").prop('required',false);

                $("#col-2-number-cant").prop('required',false);
                //--------------------------------------------
                $("#col-2-number-cant").val("");
                $("#col-2-text-mantResp").val("");     
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
            $("#col-2-date-nextMant").prop('required',true);
            $("#col-2-block-mant").show();
        }else{
            //quitar required a los inputs
            //required a los inputs de mantenimiento
            $("#col-2-text-mantResp").prop('required',false);
            $("#col-2-date-nextMant").prop('required',false);

            $("#col-2-text-mantResp").val("");       
            $("#col-2-date-nextMant").val("");
            $("#col-2-block-mant").hide();
        }
    });

    $("#btn-producto-add").on('click',function(){

    })
    $("#btn-producto-delete").on('click',function(){
        var productVal = $("#col-1-combobox-product").val()
        if(productVal!=""){
            var option = "deleteProducto";
            $.ajax({
                url: rutaAjax,
                type: "POST",
                data: {option,productVal},
            }).done(function(e){
                console.log(e);
            })
        }else{
            alertify.warning("Seleccione algun producto si va a eliminar");
        }
    })
    $("#btn-producto-confirm").on('click',function(){
        
    })



    $("#formSend").on("submit",function(e){
        e.preventDefault();
        if($("#col-1-combobox-clasification").val()!=""){
            
            if($("#col-1-combobox-product").val()!=""){
                if($('#col-1-checkbox-mant').prop('checked')==true){
                    if(validarFecha( $("#col-2-date-nextMant").val())==true){
                        addObjeto();
                    }else{
                        alertify.warning("La fecha de mantenimiento tiene que ser mayor a la fecha actual");
                    }
                }else{
                    addObjeto();
                }
                
            }else{
                alertify.warning("No hay un producto seleccionado");
            }
        }else{
            alertify.warning("No hay una clasificacion seleccionada");
        }
    });





    //funciones---------------------------

    function addObjeto(){
                var form = document.querySelector('form');
                var formData = new FormData(form);
                formData.append("option","addInventory");
                formData.append("checkboxMant",$('#col-1-checkbox-mant').prop('checked'));
                formData.append("checkboxPrestamo",$('#col-1-checkbox-loan').prop('checked'));
                
                $.ajax({
                    url: rutaAjax,
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




