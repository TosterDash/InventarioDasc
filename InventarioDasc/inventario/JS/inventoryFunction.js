/*DOCUMENTACION DE ESTE SCRIPT
-clase rowTable(id del objeto): clase para las filas de tablas producto y categoria
-getComboboxCategory(nombre del combobox,url de inventoryCons,nombre de la opcion para el switch de inventoryCons, la id de clasificacion (opcional para poner el combobox producto))
-updateFileEquipo(url de inventoryCons,id del objeto): actualizar las filas de tablas para equipo
-updateFileConsumible(url inventoryCons, id del objeto): actualizar las filas de la tabla consumible
-getTableEquipo(url inventoryCons): obtener la tabla de equipo
-getTableConsumible(url inventoryCons): obtener la tabla de consumible
-search(url inventoryCons, opcion para seleccionar que buscar(entre nombre y descripcion),string del buscador): Funcionalidad de la barra de busqueda 






*/


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
            
            var templateImg = ` <form method="POST" id="formSend`+idObjeto+`" enctype="multipart/form-data">
                                <input type="file" class="form-control-file" name="img"></input>
                                <button type="submit" class="btn btn-success" id="confirmEdit`+idObjeto+` name="confirmar">Confirmar</button>
                                </form>`;
            $("#img"+idObjeto).html(templateImg);
            $("#option"+idObjeto).hide();

            $(document).on('submit',"#formSend"+idObjeto,function(e){
                e.preventDefault();
                var form = document.querySelector('form');
                var formData = new FormData(form);
                formData.append("idObjeto",idObjeto);
                $.ajax({
                    url: rutaAjax,
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
                            
                           
                        break;
            
                        case "2":
                        //2-CONSUMIBLES
                            updateFileConsumible(rutaAjax,idObjeto);
                            
                        break;
            
                    }
                    
                });
            })
        })
    }
    editCategoria(rutaAjax){
        var idObjeto = this.idObjeto;
        $(document).on('click',"#editCategoria"+idObjeto,function(){
            var template = ` <form method="POST" id="formSend`+idObjeto+`">
                                <select class="form-control-file" name="editInput" id="editInput"></select>
                                <button type="submit" class="btn btn-success" id="confirmEdit`+idObjeto+` name="confirmar">Confirmar</button>
                                </form>`;
            $("#categoria"+idObjeto).html(template);
            $("#option"+idObjeto).hide();
            getComboboxCategory( "editInput",rutaAjax, optionComboboxProducto);
            $(document).on('submit',"#formSend"+idObjeto,function(e){
                e.preventDefault();
                var form = document.querySelector('form');
                var formData = new FormData(form);
                formData.append("idObjeto",idObjeto);
                formData.append("option","editCategoria");
                $.ajax({
                    url: rutaAjax,
                    type: "POST",
                    dataType: "HTML",
                    data: formData,
                    cache: false,
                    contentType: false,
                    processData: false
                }).done(function(img){
                    alertify.success("Categoria Modificada");
                    $("#option"+idObjeto).show();
                    switch($("#combobox-category").val()){
                        //1-EQUIPOS
                        case "1":
                            updateFileEquipo(rutaAjax,idObjeto);
                           
                           
                        break;
            
                        case "2":
                        //2-CONSUMIBLES
                            updateFileConsumible(rutaAjax,idObjeto);
                            
                        break;
            
                    }
                    
                });
            })
        })
    }
    editNombre(rutaAjax){
        var idObjeto = this.idObjeto;
        
        $(document).on('click',"#editNombre"+idObjeto,function(){
            console.log("-.-------------------------");
            var template = ` <form method="POST" id="formSend`+idObjeto+`">
                                <input type="text" class="form-control-file" name="editInput" id="editInput" required></input>
                                <button type="submit" class="btn btn-success" id="confirmEdit`+idObjeto+` name="confirmar">Confirmar</button>
                                </form>`;
            $("#nombre"+idObjeto).html(template);
            $("#option"+idObjeto).hide();
            $(document).on('submit',"#formSend"+idObjeto,function(e){
                e.preventDefault();
                var form = document.querySelector('form');
                var formData = new FormData(form);
                formData.append("idObjeto",idObjeto);
                formData.append("option","editNombre");
                $.ajax({
                    url: rutaAjax,
                    type: "POST",
                    dataType: "HTML",
                    data: formData,
                    cache: false,
                    contentType: false,
                    processData: false
                }).done(function(img){
                    alertify.success("Nombre Modificado");
                    $("#option"+idObjeto).show();
                    switch($("#combobox-category").val()){
                        //1-EQUIPOS
                        case "1":
                            updateFileEquipo(rutaAjax,idObjeto);
                            
                           
                        break;
            
                        case "2":
                        //2-CONSUMIBLES
                            updateFileConsumible(rutaAjax,idObjeto);
                            
                        break;
            
                    }
                    
                });
            })
        })
        
    }
    editDescripcion(rutaAjax){
        var idObjeto = this.idObjeto;
        
        $(document).on('click',"#editDescripcion"+idObjeto,function(){
       
            var template = ` <form method="POST" id="formSend`+idObjeto+`">
                                <input type="text" class="form-control-file" name="editInput" id="editInput" required></input>
                                <button type="submit" class="btn btn-success" id="confirmEdit`+idObjeto+` name="confirmar">Confirmar</button>
                                </form>`;
            $("#descripcion"+idObjeto).html(template);
            $("#option"+idObjeto).hide();
            $(document).on('submit',"#formSend"+idObjeto,function(e){
                e.preventDefault();
                console.log("aaaaaaaaazzzz");
                var form = document.querySelector('form');
                var formData = new FormData(form);
                formData.append("idObjeto",idObjeto);
                formData.append("option","editDescripcion");
                $.ajax({
                    url: rutaAjax,
                    type: "POST",
                    dataType: "HTML",
                    data: formData,
                    cache: false,
                    contentType: false,
                    processData: false
                }).done(function(img){
                    alertify.success("Descripcion Modificada");
                    $("#option"+idObjeto).show();
                    switch($("#combobox-category").val()){
                        //1-EQUIPOS
                        case "1":
                            updateFileEquipo(rutaAjax,idObjeto);
                            
                        break;
            
                        case "2":
                        //2-CONSUMIBLES
                            updateFileConsumible(rutaAjax,idObjeto);
                            
                        break;
            
                    }
                    
                });
            })
        })
    }
    editCantidad(rutaAjax){
        var idObjeto = this.idObjeto;
        
        $(document).on('click',"#editCantidad"+idObjeto,function(){
       
            var template = ` <form method="POST" id="formSend`+idObjeto+`">
                                <input type="number" class="form-control-file" name="editInput" id="editInput" required></input>
                                <button type="submit" class="btn btn-success" id="confirmEdit`+idObjeto+` name="confirmar">Confirmar</button>
                                </form>`;
            $("#cantidad"+idObjeto).html(template);
            $("#option"+idObjeto).hide();
            $(document).on('submit',"#formSend"+idObjeto,function(e){
                e.preventDefault();
                
                var form = document.querySelector('form');
                var formData = new FormData(form);
                formData.append("idObjeto",idObjeto);
                formData.append("option","editCantidad");
                $.ajax({
                    url: rutaAjax,
                    type: "POST",
                    dataType: "HTML",
                    data: formData,
                    cache: false,
                    contentType: false,
                    processData: false
                }).done(function(img){
                    alertify.success("Cantidad Modificada");
                    $("#option"+idObjeto).show();
                    switch($("#combobox-category").val()){
                        //1-EQUIPOS
                        case "1":
                            updateFileEquipo(rutaAjax,idObjeto);
                            
                        break;
            
                        case "2":
                        //2-CONSUMIBLES
                            updateFileConsumible(rutaAjax,idObjeto);
                            
                        break;
            
                    }
                    
                });
            })
        })
    }
    editMantenimiento(rutaAjax){
        var idObjeto = this.idObjeto;
        
        $(document).on('click',"#editMantenimiento"+idObjeto,function(){
            console.log("-.-------------------------");
            var template = `<form method="POST" id="formSend`+idObjeto+`">
                                <input type="text" class="form-control-file" name="editInput" id="editInput" required></input>
                                <button type="submit" class="btn btn-success" id="confirmEdit`+idObjeto+` name="confirmar">Confirmar</button>
                            </form>`;
            $("#mantResp"+idObjeto).html(template);
            template = `
                        <input type="datetime-local" class="form-control-file" name="editInput2" id="editInput2" required></input>
                        `;
            $("#lastMant"+idObjeto).html(template);
            template = `
                        <input type="datetime-local" class="form-control-file" name="editInput3" id="editInput3" required></input>
                        `;
            $("#nextMant"+idObjeto).html(template);
            $("#option"+idObjeto).hide();
            $(document).on('submit',"#formSend"+idObjeto,function(e){
                
                e.preventDefault();
                var form = document.querySelector('form');
                var formData = new FormData(form);
                formData.append("idObjeto",idObjeto);
                formData.append("editInput2",$("#editInput2").val());
                formData.append("editInput3",$("#editInput3").val());
                formData.append("option","editMantenimiento");
                $.ajax({
                    url: rutaAjax,
                    type: "POST",
                    dataType: "HTML",
                    data: formData,
                    cache: false,
                    contentType: false,
                    processData: false
                }).done(function(img){
                    alertify.success("Mantenimiento Modificado");
                    $("#option"+idObjeto).show();
                    switch($("#combobox-category").val()){
                        //1-EQUIPOS
                        case "1":
                            updateFileEquipo(rutaAjax,idObjeto);
                            
                           
                        break;
            
                        case "2":
                        //2-CONSUMIBLES
                            updateFileConsumible(rutaAjax,idObjeto);
                            
                        break;
            
                    }
                    
                });
                
            })
        })
    }
}






//funciones------------------------

//(ruta para hacer post) Obtener valores de clasificacion y categoria en combobox
function getComboboxCategory(idCombobox,rutaAjax, option, idClasificacion){
    var idCombobox = idCombobox;
    //OPCION categoria PARA CATEGORIA
    var option = option;
    //ajax para combobox clasificacion
    $.ajax({
        url: rutaAjax ,
        type:"POST" ,
        data: {option,idClasificacion},

    }).done(function(e){
       
        switch(e){
            case "error":
                alertify.error("Error consInventory.PHP-combobox");
            break;

           
            default:
                var jsonInfo = JSON.parse(e);
               
                var template = `<option value="">--seleccionar--</option>`;

                jsonInfo.forEach(task=>{
                    
                    switch(task.option){
                        case "clasificacion":
                            template+= `<option value="${task.idClasificacion}">${task.clasificacion}</option>`;
                        break;

                        case "producto":
                            template+= `<option value="${task.idProducto}">${task.producto}</option>`;
                        break;

                        default:
                            
                        break;
                    }
                    $("#"+idCombobox).html(template);

                })

                
                
               
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
    $(document).off('submit',"#formSend"+idObjeto);
}

function updateFileConsumible(rutaAjax,idObjeto){
    var option = "updateFileConsumible";
    //deleteButtons(idObjeto);
    $.ajax({
        url: rutaAjax,
        type: 'POST',
        data: {option,idObjeto},
        success: function(response){
            var cons = JSON.parse(response);
            var template = "";
            
            $("#table-consumible").show();
            $("#table-equipo").hide();
            cons.forEach(task =>{
                
                template = `
                                <th id="img${task.idObjeto}"><img height="70px" src="data:image/jpg;base64,${task.img}"/></th>
                                <th id="categoria${task.idObjeto}">${task.categoria}</th>
                                <th id="nombre${task.idObjeto}">${task.Nombre}</th>
                                <th id="descripcion${task.idObjeto}">${task.Descripcion}</th>
                                <th id="cantidad${task.idObjeto}">${task.cantidad}</th>
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
                                        <a class="dropdown-item" id="editCantidad${task.idObjeto}">Cantidad</a>
                                    
                                    </div>
                                </div>
                            </div>`
                $('#option'+idObjeto).html(template);
                
        
            })
        }
    })
    $(document).off('submit',"#formSend"+idObjeto);
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
                rowTableEquipo[cont].editCategoria(rutaAjax);
                rowTableEquipo[cont].editNombre(rutaAjax);
                rowTableEquipo[cont].editDescripcion(rutaAjax);
                rowTableEquipo[cont].editMantenimiento(rutaAjax);
                $('#tbody-equipo').html(template);
                cont++;
            })
        }
    })
}

function getTableConsumible(rutaAjax){
    var option = "consumible";
    $.ajax({
        url: rutaAjax,
        type: 'POST',
        data: {option},
        success: function(response){
            var cons = JSON.parse(response);
            var template = "";
            var cont=0;
            
            cons.forEach(task =>{
                rowTableConsumible[cont] = new rowTable(`${task.idObjeto}`);
                template += `<tr id="fila${task.idObjeto}">
                               <div id="info${task.idObjeto}">
                                <th id="img${task.idObjeto}"><img height="70px" src="data:image/jpg;base64,${task.img}"/></th>
                                <th id="categoria${task.idObjeto}">${task.categoria}</th>
                                <th id="nombre${task.idObjeto}">${task.Nombre}</th>
                                <th id="descripcion${task.idObjeto}">${task.Descripcion}</th>
                                <th id="cantidad${task.idObjeto}">${task.Cantidad}</th>
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
                                                <a class="dropdown-item" id="editCantidad${task.idObjeto}">cantidad</a>
                                            
                                            </div>
                                        </div>
                                    </div>
                                </th>
                            </tr>`
                            rowTableConsumible[cont].deleteOption(rutaAjax);
                            rowTableConsumible[cont].editImg(rutaAjax);
                            rowTableConsumible[cont].editCategoria(rutaAjax);
                            rowTableConsumible[cont].editNombre(rutaAjax);
                            rowTableConsumible[cont].editDescripcion(rutaAjax);
                            rowTableConsumible[cont].editCantidad(rutaAjax);
                $('#tbody-consumible').html(template);
                cont++;
            })
        }
    })
}

function search(rutaAjax,buscarPor,stringSearch){
    var option = "search";
    var buscarPor = buscarPor;
    var stringSearch = stringSearch;
    console.log(stringSearch);

    if(stringSearch==""){
        for(var i = 0; i<rowTableEquipo.length; i++){
            $("#fila"+rowTableEquipo[i].idObjeto).show();
        }
        for(var i = 0; i<rowTableConsumible.length; i++){
            $("#fila"+rowTableConsumible[i].idObjeto).show();
        }
    }else{
        for(var i = 0; i<rowTableEquipo.length; i++){
            $("#fila"+rowTableEquipo[i].idObjeto).hide();
        }
        for(var i = 0; i<rowTableConsumible.length; i++){
            $("#fila"+rowTableConsumible[i].idObjeto).hide();
        }
        $.ajax({
            url: rutaAjax,
            type: 'POST',
            data: {option, buscarPor, stringSearch},
            success: function(response){
                console.log(response);
                var cons = JSON.parse(response);
                
                
                cons.forEach(task =>{
                    $("#fila"+task.idObjeto).show();
                })
            }
        })

    }




    
}








