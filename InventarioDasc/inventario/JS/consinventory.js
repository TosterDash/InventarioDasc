

$(document).ready(function(){
    rowTableEquipo = [];
    rowTableConsumible = [];
    //ruta predeterminada para los POST o GET de consinventory.php
    var rutaAjax = "inventario/PHP/consinventory.php";

    //codigo principal-----------------
    getComboboxCategory( "combobox-category",rutaAjax);
    $("#table-consumible").hide();
    $("#table-equipo").hide();

    $("#combobox-category").on('change',function(){
        
        switch($("#combobox-category").val()){
            //1-EQUIPOS
            case "1":
              
                getTableEquipo(rutaAjax);
            break;

            case "2":
            //2-CONSUMIBLES
               
                getTableConsumible();
            break;

            default:
                $("#table-consumible").hide();
                $("#table-equipo").hide();
            break;
        }
    })

    //CLASES---------------------------

    class rowTable{
        constructor(idObjeto){
            this.idObjeto = idObjeto;
        }

        deleteOption(rutaAjax){
            var idObjeto = this.idObjeto;
            //BOTON DELETE-----------------------------------
            $(document).on('click',"#delete"+idObjeto,function(){
                var option = "delete";
                $.ajax({
                    url: rutaAjax ,
                    type: "POST" ,
                    data: {option,idObjeto},
        
                }).done(function(e){
                    switch(e){
                        case "error":
                            alertify.error("Error consInventory.PHP");
                        break;
        
                        default:
                            $('#fila'+idObjeto).remove();
                            alertify.success("Se elimino la fila");
                        break;
                    }
                }).fail(function(e){
                    console.log("FALLO POST DE ELIMINAR ROW");
                })
            })
        }
        editImg(rutaAjax){
            //imagen
            var idObjeto = this.idObjeto;
            $(document).on('click',"#editImg"+idObjeto,function(){
                
                var templateImg = ` <form method="POST" id="formSend" enctype="multipart/form-data">
                                    <input type="file" class="form-control-file" name="img"></input>
                                    <button type="submit" class="btn btn-success" id="confirmEdit`+idObjeto+` name="confirmar">Confirmar</button>
                                    </form>`;
                $("#img"+idObjeto).html(templateImg);
                $("#option"+idObjeto).hide();

                $(document).on('submit',"#formSend",function(e){
                    e.preventDefault();
                    var form = document.querySelector('form');
                    var formData = new FormData(form);
                    formData.append("idObjeto",idObjeto);
                    $.ajax({
                        url: "inventario/PHP/consinventory.php",
                        type: "POST",
                        dataType: "HTML",
                        data: formData,
                        cache: false,
                        contentType: false,
                        processData: false
                    }).done(function(img){
                        alertify.success("Imagen Modificada");
                        $("#option"+idObjeto).show();
                        switch($("#combobox-category").val()){
                            //1-EQUIPOS
                            case "1":
                                updateFileEquipo(rutaAjax,idObjeto);
                                //getTableEquipo();
                               
                            break;
                
                            case "2":
                            //2-CONSUMIBLES
                               
                                //getTableConsumible();
                            break;
                
                        }
                        
                    });
                })
            })
        }
        editCategoria(){
            
        }
        editNombre(){

        }
        editDescripcion(){

        }
        editCantidad(){

        }
        editMantenimiento(){

        }
    }


    



    //funciones------------------------
    //vacia todos los botones del documento
    //(ruta para hacer post) Obtener el valor de cualquier combobox, de preferencia los de categoria
    function getComboboxCategory(idCombobox,rutaAjax){
        var idCombobox = idCombobox;
        //OPCION categoria PARA CATEGORIA
        var option = "clasificacion";
        //ajax para combobox clasificacion
        $.ajax({
            url: rutaAjax ,
            type:"POST" ,
            data: {option},

        }).done(function(e){
            switch(e){
                case "error":
                    alertify.error("Error consInventory.PHP-clasificacion");
                break;

                default:
                    var category = JSON.parse(e);
                    var template = `<option value="">--Mostrar por categoria--</option>`;
                    category.forEach(task=>{
                        template+= `<option value="${task.idClasificacion}">${task.clasificacion}</option>`
                    })
                    $("#"+idCombobox).html(template);
                break;
            }
        }).fail(function(e){
            console.log("FALLO POST DE GET CATEGORY");
        })
    }

    function updateFileEquipo(rutaAjax,idObjeto){
        
        var option = "updateFileEquipo";
        //deleteButtons(idObjeto);
        $.ajax({
            url: rutaAjax,
            type: 'POST',
            data: {option,idObjeto},
            success: function(response){
                var cons = JSON.parse(response);
                var template = "";
                
                $("#table-consumible").hide();
                $("#table-equipo").show();
                cons.forEach(task =>{
                    
                    template = `
                                    <th id="img${task.idObjeto}"><img height="70px" src="data:image/jpg;base64,${task.img}"/></th>
                                    <th id="categoria${task.idObjeto}">${task.categoria}</th>
                                    <th id="nombre${task.idObjeto}">${task.Nombre}</th>
                                    <th id="descripcion${task.idObjeto}">${task.Descripcion}</th>
                                    <th id="mantResp${task.idObjeto}">${task.mantResp}</th>
                                    <th id="lastMant${task.idObjeto}">${task.lastMant}</th>
                                    <th id="nextMant${task.idObjeto}">${task.nextMant}</th>
                                    <th id="option${task.idObjeto}">
                                        
                                `
                    $('#fila'+idObjeto).html(template);

                    template = ` <div class="btn-group">
                                    <button type="button" class="btn btn-danger" id="delete${task.idObjeto}">Eliminar</button>
                                        
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" id="edit${task.idObjeto}">Editar</button>
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item" id="editImg${task.idObjeto}">Imagen</a>
                                            <a class="dropdown-item" id="editCategoria${task.idObjeto}">Producto</a>
                                            <a class="dropdown-item" id="editNombre${task.idObjeto}">Nombre</a>
                                            <a class="dropdown-item" id="editDescripcion${task.idObjeto}">Descripcion</a>
                                            <a class="dropdown-item" id="editMantenimiento${task.idObjeto}">mantenimiento</a>
                                        
                                        </div>
                                    </div>
                                </div>`
                    $('#option'+idObjeto).html(template);
                    
            
                })
            }
        })
        $(document).off('submit',"#formSend");
    }

    //(ruta para hacer post)
    function getTableEquipo(rutaAjax){
        var option = "equipo";
        $.ajax({
            url: rutaAjax,
            type: 'POST',
            data: {option},
            success: function(response){
                var cons = JSON.parse(response);
                var template = "";
                var cont=0;
                $("#table-consumible").hide();
                $("#table-equipo").show();
                cons.forEach(task =>{
                    rowTableEquipo[cont] = new rowTable(`${task.idObjeto}`);
                    template += `<tr id="fila${task.idObjeto}">
                                   <div id="info${task.idObjeto}">
                                    <th id="img${task.idObjeto}"><img height="70px" src="data:image/jpg;base64,${task.img}"/></th>
                                    <th id="categoria${task.idObjeto}">${task.categoria}</th>
                                    <th id="nombre${task.idObjeto}">${task.Nombre}</th>
                                    <th id="descripcion${task.idObjeto}">${task.Descripcion}</th>
                                    <th id="mantResp${task.idObjeto}">${task.mantResp}</th>
                                    <th id="lastMant${task.idObjeto}">${task.lastMant}</th>
                                    <th id="nextMant${task.idObjeto}">${task.nextMant}</th>
                                   </div>
                                    <th id="option${task.idObjeto}">
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-danger" id="delete${task.idObjeto}">Eliminar</button>
                                                
                                            <div class="btn-group">
                                                <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" id="edit${task.idObjeto}">Editar</button>
                                                <div class="dropdown-menu">
                                                    <a class="dropdown-item" id="editImg${task.idObjeto}">Imagen</a>
                                                    <a class="dropdown-item" id="editCategoria${task.idObjeto}">Producto</a>
                                                    <a class="dropdown-item" id="editNombre${task.idObjeto}">Nombre</a>
                                                    <a class="dropdown-item" id="editDescripcion${task.idObjeto}">Descripcion</a>
                                                    <a class="dropdown-item" id="editMantenimiento${task.idObjeto}">mantenimiento</a>
                                                
                                                </div>
                                            </div>
                                        </div>
                                    </th>
                                </tr>`
                    rowTableEquipo[cont].deleteOption(rutaAjax);
                    rowTableEquipo[cont].editImg(rutaAjax);
                    $('#tbody-equipo').html(template);
                    cont++;
                })
            }
        })
    }

    function getTableConsumible(colConsumible){

    }





})


