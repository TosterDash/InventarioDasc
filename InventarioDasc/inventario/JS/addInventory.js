$(document).ready(function(){
  
    //Invocar funciones-------------------------
    //Ocultar elementos de la segunda columna
    $("#col-1-block-producto").hide();
    $("#col-2-block-mant").hide();
    $("#col-2-block-cant").hide();
    $("#col-1-block-mant").hide();
    $("#btn-producto-confirmar").hide();
    //combobox de clasificacion
    getCombobox("col-1-combobox-clasification","idTipoClasificacion","clasificacion","tipoclasificacion","Seleccionar");
    //getCombobox("col-1-combobox-clasification","clasificacion");
    //combobox de los edificios y aulas
    getCombobox("col-2-combobox-edificios","idEdificio","Nombre","edificio","Seleccionar");
    getCombobox("col-2-combobox-aulas","idAula","nombreAula","aula",undefined,"idEdificio",$("#col-2-combobox-edificios").val());
    //getCombobox("col-2-combobox-edificios","edificio");
    //getCombobox("col-2-combobox-aulas","aula",$("#col-2-combobox-edificios").val());
    getCombobox("col-2-combobox-mantResp","idMantResp","nombreRol","mantresp",undefined);

    //console.log($("#col-2-combobox-mantResp").val())

    //inicializar los eventos de botones
    //combobox clasificacion
    $("#col-1-combobox-clasification").on('change',function(){
       
        switch($("#col-1-combobox-clasification").val()){
            case "1":
                //getCombobox("col-1-combobox-product","producto", $("#col-1-combobox-clasification").val());
                getCombobox("col-1-combobox-product","idTipoProducto","producto","tipoproducto",undefined,"idTipoClasificacion",$("#col-1-combobox-clasification").val());
                //quitar otros required
                $("#col-2-number-cant").prop('required',false);
                //--------------------------------------------
                $("#col-2-number-cant").val("");
                $("#col-2-block-cant").hide();
                $("#col-1-block-mant").show();

                $("#col-1-block-producto").show();
                
            break;

            case "2":
                //getCombobox("col-1-combobox-product","producto", $("#col-1-combobox-clasification").val());
                getCombobox("col-1-combobox-product","idTipoProducto","producto","tipoproducto",undefined,"idTipoClasificacion",$("#col-1-combobox-clasification").val());
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
                vaciarCombobox("col-1-combobox-product");
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
    //combobox de edificio
    $("#col-2-combobox-edificios").on('change',function(){
        
        getCombobox("col-2-combobox-aulas","idAula","nombreAula","aula",undefined,"idEdificio",$("#col-2-combobox-edificios").val());
    })



    //checkbox de mantenimiento
    $('#col-1-checkbox-mant').on('change',function(){
        if($('#col-1-checkbox-mant').prop('checked')==true){
            
            
            $("#col-2-date-nextMant").prop('required',true);
            $("#col-2-block-mant").show();
        }else{
            //vaciarCombobox("col-2-combobox-mantResp");
            $("#col-2-date-nextMant").prop('required',false);
            $("#col-2-combobox-mantResp").val("0");       
            $("#col-2-date-nextMant").val("");
            $("#col-2-block-mant").hide();
        }
    });
    //boton añadir en producto
    $("#btn-producto-add").on('click',function(){
        var template ="";
        template += `<label>Nuevo tipo de producto</label>
        <input type="text" id="input-text-producto"></input>`;
        $("#product-input").html(template);
        $("#buttons-option-product").hide();
        $("#prod-label").hide();
        $("#btn-producto-confirmar").show();
        $("#cancel-objeto,#submit-objeto").prop("disabled", true);
    })
    //boton eliminar en producto
    $("#btn-producto-delete").on('click',function(){
        var productVal = $("#col-1-combobox-product").val()
        if(productVal!=""){
            alertify.confirm(`¿Desea eliminar este producto?`,function(e){
                if(e) {
                    deleteProducto(productVal);
                }
            })
            
            
        }else{
            alertify.warning("Seleccione algun producto si va a eliminar");
        }
    })
    //boton confirmar para producto
    $("#btn-producto-confirmar").on('click',function(){
        var option ="addProducto";
        var clasificacionVal = $("#col-1-combobox-clasification").val();
        var productVal = $("#input-text-producto").val()
        if(productVal != ""){
            var template ="";
            template += `<select class="" name="col-1-combobox-product" id="col-1-combobox-product"></select>`;
            $("#product-input").html(template);
            $("#buttons-option-product").show();
            $("#prod-label").show();
            $("#btn-producto-confirmar").hide();
            $("#btn-producto-confirmar").val("");
            $("#cancel-objeto,#submit-objeto").prop("disabled", false);
            $.ajax({
                url: rutaAjax,
                type: "POST",
                data: {option,productVal,clasificacionVal},
            }).done(function(){
                getCombobox("col-1-combobox-product","idTipoProducto","producto","tipoproducto",undefined,"idTipoClasificacion",clasificacionVal);
                alertify.success("Se añadió el producto");
            })
        }else{
            alertify.warning("Campo vacío en producto");
        }
    })


    //boton de submit para el objeto en general
    $("#formSend").on("submit",function(e){
        e.preventDefault();
        var comboboxClasification = $("#col-1-combobox-clasification").val();
        var comboboxEdificio = $("#col-2-combobox-edificios").val();
        var flagMantResp;

        if($('#col-1-checkbox-mant').prop('checked')){
             flagMantResp = verificarMantResp($("#col-2-combobox-mantResp").val());
        }


        if(comboboxClasification!=""){
            if(comboboxEdificio!=""){
                if($('#col-1-checkbox-mant').prop('checked')){
                    if(flagMantResp){
                        if(validarFecha( $("#col-2-date-nextMant").val())==true){
                            addObjeto();
                        }else{
                            alertify.warning("La fecha de mantenimiento tiene que ser mayor a la fecha actual");
                        }
                    }else{
                        alertify.warning("Seleccione algun responsable");
                    }
                }else{
                    addObjeto();
                }
            }else{
                alertify.warning("Seleccione un campo edificio");
            }
        }else{
            alertify.warning("Seleccione una clasificación");
        }
        
    });





    //funciones---------------------------
    function verificarMantResp(mantRespVal){
        if(mantRespVal == "0"){
            return false;
        }else{
            return true;
        }
    }

    function addObjeto(){
        
           
                var form = document.querySelector('form');
                var formData = new FormData(form);
                formData.append("option","addInventory");
                formData.append("checkboxMant",$('#col-1-checkbox-mant').prop('checked'));
                formData.append("checkboxPrestamo",$('#col-1-checkbox-loan').prop('checked'));
                //console.log(formData);
                
                $.ajax({
                    url: rutaAjax,
                    type: "POST",
                    dataType: "HTML",
                    data: formData,
                    cache: false,
                    contentType: false,
                    processData: false
                }).done(function(idAula){
                    //console.log(idAula);
                    addObjetoHasAula(idAula);
                    alertify.success('Se añadio el objeto'); 
                        
                        
                });
                
    }

    function addObjetoHasAula(idAula){
        var option = "addObjetoHasAula";
        $.ajax({
            url: rutaAjax,
            type: "POST",
            data: {idAula,option},
        }).done(function(response){
            vaciarCampos();
                
        });
    }
    

    function vaciarCampos(){

        $("#col-1-combobox-category").val("");
        $("#col-1-combobox-product").val("");    
        $("#col-2-text-name").val("");    
        $("#col-2-text-desc").val("");    
        //$("#col-2-text-mantResp").val("");    
        $("#col-2-date-lastMant").val("");    
        $("#col-2-date-nextMant").val("");    
        $("#col-2-number-cant").val("");    
        $("#item_file").val("");        
    }

    function deleteProducto(productVal){
        $.when(verificarPrestamos(productVal)).done(function(respPrest){
            console.log(respPrest);
            if(respPrest==0){
                
                deleteObjeto(productVal);
                getCombobox("col-1-combobox-product","idTipoProducto","producto","tipoproducto",undefined,"idTipoClasificacion",productVal);
                alertify.success("Producto eliminado");
            }else{
                alertify.error("No se puede eliminar, este producto actualmente tiene un prestamo activo!");
            }
        })
        function deleteObjeto(productVal){
            var option = "deleteProducto"
            return $.ajax({url: rutaAjax,type: 'POST',data: {option,productVal},});
        }
    
        function verificarPrestamos(){
            var option = "verificarPrestamosProducto"
            return $.ajax({url: rutaAjax,type: 'POST',data: {option,productVal},});
        }
    }

    function deleteProducto0(productVal){
        var option = "deleteProducto";
        $.ajax({
            url: rutaAjax,
            type: "POST",
            data: {option,productVal},
        }).done(function(e){
            var clasificacionVal = $("#col-1-combobox-clasification").val();
            getCombobox("col-1-combobox-product","idTipoProducto","producto","tipoproducto",undefined,"idTipoClasificacion",clasificacionVal);
            alertify.success("Se ha eliminado el producto");
        })
    }

    function addProducto(){

    }


})




