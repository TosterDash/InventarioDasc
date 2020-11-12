/*DOCUMENTACION DE ESTE SCRIPT
-clase rowTable(id del objeto): clase para las filas de tablas producto y categoria
-getComboboxCategory(nombre del combobox,url de inventoryCons,nombre de la opcion para el switch de inventoryCons, la id de clasificacion (opcional para poner el combobox producto))
-updateFileEquipo(url de inventoryCons,id del objeto): actualizar las filas de tablas para equipo
-updateFileConsumible(url inventoryCons, id del objeto): actualizar las filas de la tabla consumible
-getTableEquipo(url inventoryCons): obtener la tabla de equipo
-getTableConsumible(url inventoryCons): obtener la tabla de consumible
-search(url inventoryCons, opcion para seleccionar que buscar(entre nombre y descripcion),string del buscador): Funcionalidad de la barra de busqueda 

>ESTRUCTURA PARA LA TABLA HTML-----------------------------------------

<div id="inv-cons" class="consultar"><!--Realizar la consulta-->
            
            <!--Barra de busqueda y filtros-->
            <div>
                <!--Barra de busqueda-->
                <nav class="nav-style">
                    <div>
                        <label>Buscar por:</label>
                        <select class="round-border" name="combobox-category" id="combobox-search">
                            <option values="Nombre">Nombre</option>
                            <option values="Descripcion">Descripción</option>
                        </select>
                    </div>
                
                <div class="form-inline">
                    <img class="icon-size" src="../resources/icons/search_icon.png">
                    <input  class="round-border" type="text" placeholder="Buscar..." id="search">
                </div>
                <div>
                    <label>Mostrar por:</label>
                    <select  class="round-border" 
                    name="combobox-category" id="combobox-category">
                    </select>
                </div>
                
                </nav>
                <!--Barra de busqueda-->
            </div>
            <div id="div-table"><!--Tabla de consulta-->
                <table id="table-consumible" class="table">
                    <thead class="thead-light">
                        <tr>
                            <th>Imagen</th>
                            <th>Producto</th>
                            <th>Nombre</th>
                            <th>Descripcion</th>
                            <th>Cantidad</th>
                            <th></th>
                            
                        </tr>
                    </thead>

                    <tbody id="tbody-consumible">

                    </tbody>
                    
                    
                </table>
                <table id="table-equipo" class="table">
                    <thead class="thead-light">
                        <tr>
                            <th>Imagen</th>
                            <th>Producto</th>
                            <th>Nombre</th>
                            <th>Descripcion</th>
                            <th>Responsable</th>
                            <th>Ultimo mantenimiento</th>
                            <th>Proximo mantenimiento</th>
                            <th></th>
                            
                        </tr>
                    </thead>
                    
                    <tbody id="tbody-equipo">

                    </tbody>
                    
                </table>
            </div>
        </div>






*/
//variables importantes para el funcionamiento de ciertos sectores
var numNotification = 0;
var dateMant = [];
var rutaAjax = "inventario/PHP/inventoryCons.php";

class rowTable{
    constructor(idObjeto,clasificacion){
        this.idObjeto = idObjeto;
       
        if(clasificacion=="null"){
            this.clasificacion = "Consumible";
           
        }else{
            this.clasificacion = "Equipo";
            
        }
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
        var clasificacion = this.clasificacion;
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
                    console.log(clasificacion);
                    switch(clasificacion){
                        //1-EQUIPOS
                        case "Equipo":
                            updateFileEquipo(rutaAjax,idObjeto);
                            
                           
                        break;
            
                        case "Consumible":
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
        var clasificacion = this.clasificacion;
        
        $(document).on('click',"#editCategoria"+idObjeto,function(){
            var template = ` <form method="POST" id="formSend`+idObjeto+`">
                                <select class="form-control-file" name="editInput`+idObjeto+`" id="editInput`+idObjeto+`"></select>
                                <button type="submit" class="btn btn-success" id="confirmEdit`+idObjeto+` name="confirmar"`+idObjeto+`>Confirmar</button>
                                </form>`;
            $("#categoria"+idObjeto).html(template);
            $("#option"+idObjeto).hide();
           
            switch(clasificacion){
                case "Equipo":
                    getComboboxCategory( "editInput"+idObjeto ,rutaAjax, "producto",1);
                break;

                case "Consumible":
                    getComboboxCategory( "editInput"+idObjeto ,rutaAjax, "producto",2);
                break;
            }
       
            
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
                    console.log(img);
                    alertify.success("Categoria Modificada");
                    $("#option"+idObjeto).show();
                    switch(clasificacion){
                        //1-EQUIPOS
                        case "Equipo":
                            updateFileEquipo(rutaAjax,idObjeto);
                           
                           
                        break;
            
                        case "Consumible":
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
        var clasificacion = this.clasificacion;
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
                    switch(clasificacion){
                        //1-EQUIPOS
                        case "Equipo":
                            updateFileEquipo(rutaAjax,idObjeto);
                           
                           
                        break;
            
                        case "Consumible":
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
        var clasificacion = this.clasificacion;
        $(document).on('click',"#editDescripcion"+idObjeto,function(){
       
            var template = ` <form method="POST" id="formSend`+idObjeto+`">
                                <input type="text" class="form-control-file" name="editInput" id="editInput" required></input>
                                <button type="submit" class="btn btn-success" id="confirmEdit`+idObjeto+` name="confirmar">Confirmar</button>
                                </form>`;
            $("#descripcion"+idObjeto).html(template);
            $("#option"+idObjeto).hide();
            $(document).on('submit',"#formSend"+idObjeto,function(e){
                e.preventDefault();
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
                    switch(clasificacion){
                        //1-EQUIPOS
                        case "Equipo":
                            updateFileEquipo(rutaAjax,idObjeto);
                           
                           
                        break;
            
                        case "Consumible":
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
        var clasificacion = this.clasificacion;
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
                    switch(clasificacion){
                        //1-EQUIPOS
                        case "Equipo":
                            updateFileEquipo(rutaAjax,idObjeto);
                           
                           
                        break;
            
                        case "Consumible":
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
        var clasificacion = this.clasificacion;
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
                    switch(clasificacion){
                        //1-EQUIPOS
                        case "Equipo":
                            updateFileEquipo(rutaAjax,idObjeto);
                           
                           
                        break;
            
                        case "Consumible":
                        //2-CONSUMIBLES
                            updateFileConsumible(rutaAjax,idObjeto);
                            
                        break;
            
                    }
                    
                });
                
            })
        })
    }
}






//funciones de tablas------------------------

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
            console.log(response);
            var cons = JSON.parse(response);
            var template = "";
            
            cons.forEach(task =>{
                
                template = `
                                <th id="img${task.idObjeto}"><img height="70px" src="data:image/jpg;base64,${task.img}"/></th>
                                <th id="categoria${task.idObjeto}">${task.producto}</th>
                                <th id="nombre${task.idObjeto}">${task.nombre}</th>
                                <th id="descripcion${task.idObjeto}">${task.descripcion}</th>
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
            
            cons.forEach(task =>{
                
                template = `
                                <th id="img${task.idObjeto}"><img height="70px" src="data:image/jpg;base64,${task.img}"/></th>
                                <th id="categoria${task.idObjeto}">${task.producto}</th>
                                <th id="nombre${task.idObjeto}">${task.nombre}</th>
                                <th id="descripcion${task.idObjeto}">${task.descripcion}</th>
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

//(ruta para hacer post)FUNCIONES PRINCIPALES PARA TABLAS---------- 
function getTableEquipo(rutaAjax,rowTableEquipo){
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
                
            
                rowTableEquipo[cont] = new rowTable(`${task.idObjeto}`,`${task.idUabcs}`);
                template += `<tr id="fila${task.idObjeto}">
                               <div id="info${task.idObjeto}">
                                <th id="img${task.idObjeto}"><img height="70px" src="data:image/jpg;base64,${task.img}"/></th>
                                <th id="categoria${task.idObjeto}">${task.producto}</th>
                                <th id="nombre${task.idObjeto}">${task.nombre}</th>
                                <th id="descripcion${task.idObjeto}">${task.descripcion}</th>
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

function getTableConsumible(rutaAjax,rowTableConsumible){
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
                
                rowTableConsumible[cont] = new rowTable(`${task.idObjeto}`,`${task.idUabcs}`);
               
                template += `<tr id="fila${task.idObjeto}">
                               <div id="info${task.idObjeto}">
                                <th id="img${task.idObjeto}"><img height="70px" src="data:image/jpg;base64,${task.img}"/></th>
                                <th id="categoria${task.idObjeto}">${task.producto}</th>
                                <th id="nombre${task.idObjeto}">${task.nombre}</th>
                                <th id="descripcion${task.idObjeto}">${task.descripcion}</th>
                                <th id="cantidad${task.idObjeto}">${task.cantidad}</th>
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


//funciones para inputs


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


//Funcion para obtener notificaciones y validar los objetos, fechas y prestamos
function getNotification(){
    
    getDate();
    
    function actualizarFechas(){
        console.log(dateMant.length);
        var dateNow = new Date();
            for(var i = 0;i<dateMant.length;i++){
                if(dateNow.getTime()>=dateMant[i][3].getTime() && dateMant[i][4]==false){

                    
                    numNotification++;
                }
            }
            $("#notification").html(`<a class="menu-list navigation-menu-listt dropdown-toggle" data-toggle="dropdown">
                                        NOTIFICACIONES
                                        <span class="badge">`+numNotification+`</span></a>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="notificationBoard.php">MANTENIMIENTO (`+numNotification+`)</a>
                                    </div>`);
        
    }
    setInterval(actualizarFechas, 60000); 
}


function getDate(){
    var option = "getDate";
    $.ajax({
        url: rutaAjax,
        type: 'POST',
        data: {option},
        success: function(response){
            var cons = JSON.parse(response);
            var cont = 0;
            
            cons.forEach(task =>{
                dateMant[cont] = [`${task.idObjeto}`,`${task.mantResp}`,new Date(`${task.lastMant}`),new Date(`${task.nextMant}`),false];
               
                cont++;
            })

            var dateNow = new Date();
            for(var i = 0;i<dateMant.length;i++){
                if(dateNow.getTime()>=dateMant[i][3].getTime() && dateMant[i][4]==false){
                    dateMant[i][4] = true;
                    numNotification++;
                }
            }
            $("#notification").html(`<a class="menu-list navigation-menu-listt dropdown-toggle" data-toggle="dropdown">
                                        NOTIFICACIONES
                                        <span class="badge">`+numNotification+`</span></a>
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item" href="notificationBoard.php">MANTENIMIENTO (`+numNotification+`)</a>
                                        </div>`);
        }
        
    })
}











