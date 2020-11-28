/*DOCUMENTACION DE ESTE SCRIPT

*/
//variables importantes para el funcionamiento de ciertos sectores
//arreglos para las tablas de consinventory
var rowTableEquipo = [];
var rowTableConsumible = [];
//arreglos para la tabla notificaciones
var rowTableNotification = [];
//numero de notificaciones en la barra de notificaciones
var totalNotification = 0;
//ruta para hacer consultas
var rutaAjax = "inventario/PHP/inventoryCons.php";
//-------------------------------------------------------------------------------------------------------
//CLASES-------------------------------------------------------------------------------------------------


class rowTable{
    constructor(idObjeto,clasificacion,idTipoClasificacion){
        this.idObjeto = idObjeto;
        this.clasificacion = clasificacion;
        this.idTipoClasificacion = idTipoClasificacion;
    }

    deleteOption(){
        var idObjeto = this.idObjeto;

        //BOTON DELETE-----------------------------------
    $(document).on('click',"#delete"+idObjeto,function(){
            var option = "delete";


    alertify.confirm(`Se eliminará de forma permanente ¿Eliminar de todas formas?`,function(e){
        if(e) {
            $.ajax({
                url: rutaAjax ,
                type: "POST" ,
                data: {option,idObjeto},
                async: false,

            }).done(function(e){
                switch(e){
                    case "error":
                        alertify.error("No se pudo eliminar. Intente de nuevo");
                    break;
    
                    default:
                        $('#fila'+idObjeto).remove();
                        alertify.success("Se eliminó correctamente");
                    break;
                }
            }).fail(function(e){
                alertify.error("No se pudo eliminar. Intente de nuevo");
            })
        }
    })
    })
    }
    editImg(){
        //imagen
        var idObjeto = this.idObjeto;
        var clasificacion = this.clasificacion;
        $(document).on('click',"#editImg"+idObjeto,function(){
            
            var templateImg = ` <form method="POST" id="formSend`+idObjeto+`" enctype="multipart/form-data">
                                <input type="file" class="form-control-file" name="img"></input>
                                <image style="height: 30px;" src="../resources/confirm.png" id="confirmEdit`+idObjeto+` name="confirmar"></image>
                                <image style="height: 30px;" src="../resources/cancel.png" id="confirmEdit`+idObjeto+` name="cancelar" onClick="window.location.reload();"></image>
                                </form>`;
            $("#img"+idObjeto).html(templateImg);

            optionsEquipo("hide");
            optionsConsumible("hide");

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
                }).done(function(){
                    alertify.success("Imagen modificada correctamente");
                    $("#option"+idObjeto).show();
                    console.log(clasificacion);
                    switch(clasificacion){
                        //1-EQUIPOS
                        case "Equipo":
                            updateFileEquipo(idObjeto);
                            
                           
                        break;
            
                        case "Consumible":
                        //2-CONSUMIBLES
                            updateFileConsumible(idObjeto);
                            
                        break;
            
                    }
                    
                });
            })
        })
    }
    editProducto(){
        var idObjeto = this.idObjeto;
        var clasificacion = this.clasificacion;
        var idTipoClasificacion = this.idTipoClasificacion;
        $(document).on('click',"#editProducto"+idObjeto,function(){
            var template = ` <form method="POST" id="formSend`+idObjeto+`">
                                <select class="form-control-file" name="editInput`+idObjeto+`" id="editInput`+idObjeto+`"></select>
                                <image style="height: 30px;" src="../resources/confirm.png" id="confirmEdit`+idObjeto+` name="confirmar"></image>
                                <image style="height: 30px;" src="../resources/cancel.png" id="confirmEdit`+idObjeto+` name="cancelar" onClick="window.location.reload();"></image>
                                </form>`;
            $("#producto"+idObjeto).html(template);
            optionsEquipo("hide");
            optionsConsumible("hide");
           
            switch(clasificacion){
                case "Equipo":
                    getCombobox( "editInput"+idObjeto , "producto",idTipoClasificacion);
                break;

                case "Consumible":
                    getCombobox( "editInput"+idObjeto , "producto",idTipoClasificacion);
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
                    alertify.success("Producto modificado correctamente");
                    $("#option"+idObjeto).show();
                    switch(clasificacion){
                        //1-EQUIPOS
                        case "Equipo":
                            updateFileEquipo(idObjeto);
                           
                           
                        break;
            
                        case "Consumible":
                        //2-CONSUMIBLES
                            updateFileConsumible(idObjeto);
                            
                        break;
            
                    }
                    
                });
            })
        })
    }
    editNombre(){
        var idObjeto = this.idObjeto;
        var clasificacion = this.clasificacion;
        $(document).on('click',"#editNombre"+idObjeto,function(){
            console.log("-.-------------------------");
            var template = ` <form method="POST" id="formSend`+idObjeto+`">
                                <input type="text" class="form-control-file" name="editInput" id="editInput" required></input>
                                <image style="height: 30px;" src="../resources/confirm.png" id="confirmEdit`+idObjeto+` name="confirmar"></image>
                                <image style="height: 30px;" src="../resources/cancel.png" id="confirmEdit`+idObjeto+` name="cancelar" onClick="window.location.reload();"></image>
                                </form>`;
            $("#nombre"+idObjeto).html(template);
            optionsEquipo("hide");
            optionsConsumible("hide");
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
                }).done(function(){
                    
                    alertify.success("Nombre modificado correctamente");
                    $("#option"+idObjeto).show();
                    switch(clasificacion){
                        //1-EQUIPOS
                        case "Equipo":
                            updateFileEquipo(idObjeto);
                           
                           
                        break;
            
                        case "Consumible":
                        //2-CONSUMIBLES
                            updateFileConsumible(idObjeto);
                            
                        break;
            
                    }
                    
                });
            })
        })
        
    }
    editDescripcion(){
        var idObjeto = this.idObjeto;
        var clasificacion = this.clasificacion;
        $(document).on('click',"#editDescripcion"+idObjeto,function(){
       
            var template = ` <form method="POST" id="formSend`+idObjeto+`">
                                <input type="text" class="form-control-file" name="editInput" id="editInput" required></input>
                                <image style="height: 30px;" src="../resources/confirm.png" id="confirmEdit`+idObjeto+` name="confirmar"></image>
                                <image style="height: 30px;" src="../resources/cancel.png" id="confirmEdit`+idObjeto+` name="cancelar" onClick="window.location.reload();"></image>
                                </form>`;
            $("#descripcion"+idObjeto).html(template);
            optionsEquipo("hide");
            optionsConsumible("hide");
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
                    alertify.success("Descripcion modificada correctamente");
                    $("#option"+idObjeto).show();
                    switch(clasificacion){
                        //1-EQUIPOS
                        case "Equipo":
                            updateFileEquipo(idObjeto);
                           
                           
                        break;
            
                        case "Consumible":
                        //2-CONSUMIBLES
                            updateFileConsumible(idObjeto);
                            
                        break;
            
                    }
                    
                });
            })
        })
    }
    editCantidad(){
        var idObjeto = this.idObjeto;
        var clasificacion = this.clasificacion;
        $(document).on('click',"#editCantidad"+idObjeto,function(){
       
            var template = ` <form method="POST" id="formSend`+idObjeto+`">
                                <input type="number" class="form-control-file" name="editInput" id="editInput" required></input>
                                <image style="height: 30px;" src="../resources/confirm.png" id="confirmEdit`+idObjeto+` name="confirmar"></image>
                                <image style="height: 30px;" src="../resources/cancel.png" id="confirmEdit`+idObjeto+` name="cancelar" onClick="window.location.reload();"></image>
                                </form>`;
            $("#cantidad"+idObjeto).html(template);
            optionsEquipo("hide");
            optionsConsumible("hide");
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
                    alertify.success("Cantidad modificada correctamente");
                    $("#option"+idObjeto).show();
                    switch(clasificacion){
                        //1-EQUIPOS
                        case "Equipo":
                            updateFileEquipo(idObjeto);
                           
                           
                        break;
            
                        case "Consumible":
                        //2-CONSUMIBLES
                            updateFileConsumible(idObjeto);
                            
                        break;
            
                    }
                    
                });
            })
        })
    }
    editMantenimiento(){
        var idObjeto = this.idObjeto;
        var clasificacion = this.clasificacion;
        $(document).on('click',"#editMantenimiento"+idObjeto,function(){
            console.log("-.-------------------------");
            var template = `<form method="POST" id="formSend`+idObjeto+`">
                                <input type="text" class="form-control-file" name="editInput" id="editInput" required></input>
                                <image style="height: 30px;" src="../resources/confirm.png" id="confirmEdit`+idObjeto+` name="confirmar"></image>
                                <image style="height: 30px;" src="../resources/cancel.png" id="confirmEdit`+idObjeto+` name="cancelar" onClick="window.location.reload();"></image>
                                <button type="button" class="btn" id="cancelEdit`+idObjeto+`">Dejar sin mantenimiento</button>
                            </form>`;
            $("#mantResp"+idObjeto).html(template);
            template = `
                        <input type="datetime-local" class="form-control-file" name="editInput3" id="editInput3" required></input>
                        `;
            $("#nextMant"+idObjeto).html(template);
            optionsEquipo("hide");
            optionsConsumible("hide");
            $(document).on('submit',"#formSend"+idObjeto,function(e){
                e.preventDefault();
                if(validarFecha($("#editInput3").val())){
                    if($("#editInput3").val()==""){
                        alertify.warning("El campo fecha de mantenimiento esta vacio");
                    }else{
                        var form = document.querySelector('form');
                        var formData = new FormData(form);
                        formData.append("idObjeto",idObjeto);
                        formData.append("editInput3",$("#editInput3").val());
                        formData.append("option","editMantenimiento");
                        formData.append("optionMantenimiento","editMantenimiento");
                        $.ajax({
                            url: rutaAjax,
                            type: "POST",
                            dataType: "HTML",
                            data: formData,
                            cache: false,
                            contentType: false,
                            processData: false
                        }).done(function(){
                            alertify.success("Mantenimiento modificado correctamente");
                            $("#option"+idObjeto).show();
                            switch(clasificacion){
                                //1-EQUIPOS
                                case "Equipo":
                                    updateFileEquipo(idObjeto);
                                break;
                    
                                case "Consumible":
                                //2-CONSUMIBLES
                                    updateFileConsumible(idObjeto);
                                break;
                            }
                            
                        });
                    }
                }else{
                    alertify.warning("La fecha del mantenimiento debe ser mayor a la fecha actual");
                }
            })//fin de evento submit

            $(document).on('click',"#cancelEdit"+idObjeto,function(){
                var option = "editMantenimiento";
                $("#editInput2").val("")
                $("#editInput2").val("")
                $("#editInput2").val("")
                var editInput2 = $("#editInput2").val()
                var editInput3 =$("#editInput2").val()
                var editInput =$("#editInput2").val()
                var optionMantenimiento = "cancelMantenimiento";
                $.ajax({
                    url: rutaAjax,
                    type: "POST",
                    data: {idObjeto,optionMantenimiento,editInput2,editInput3,editInput,option},
                }).done(function(e){
                    console.log(e);
                    alertify.success("Se ha dejado sin mantenimiento");
                    $("#option"+idObjeto).show();
                    switch(clasificacion){
                        //1-EQUIPOS
                        case "Equipo":
                            updateFileEquipo(idObjeto);
                        break;
            
                        case "Consumible":
                        //2-CONSUMIBLES
                            updateFileConsumible(idObjeto);
                        break;
                    }
                    
                });
            })
            
        })
    }
    editPrestamo(){
        
        var idObjeto = this.idObjeto;
        var clasificacion = this.clasificacion;
        $(document).on('click',"#editPrestamo"+idObjeto,function(){
            var template = ` <form method="POST" id="formSend`+idObjeto+`">
            <input type="checkbox" class="form-control-file" name="editInput" id="editInput"></input>
            <image style="height: 30px;" src="../resources/confirm.png" id="confirmEdit`+idObjeto+` name="confirmar"></image>
            <image style="height: 30px;" src="../resources/cancel.png" id="confirmEdit`+idObjeto+` name="cancelar" onClick="window.location.reload();"></image>
            </form>`;
            $("#prestamo"+idObjeto).html(template);
            optionsEquipo("hide");
            optionsConsumible("hide");
            $(document).on('submit',"#formSend"+idObjeto,function(e){
                e.preventDefault();
                var isChecked;
                var option ="editPrestamo";
                if($("#editInput").prop('checked')){
                    console.log("true");
                    isChecked ="true";
                }else{
                    isChecked="false";
                }
                $.ajax({
                    url: rutaAjax,
                    type: "POST",
                    data: {idObjeto,isChecked,option},
                }).done(function(){
                    alertify.success("Disponibilidad modificada correctamente");
                    $("#option"+idObjeto).show();
                    switch(clasificacion){
                        //1-EQUIPOS
                        case "Equipo":
                            updateFileEquipo(idObjeto);
                           
                           
                        break;
            
                        case "Consumible":
                        //2-CONSUMIBLES
                            updateFileConsumible(idObjeto);
                            
                        break;
            
                    }
                    
                });
            })
        })
    }

}

//id del combobox, tipo de consulta en PHP, (solo si el tipo de combobox es producto) id de clasificacion
function getCombobox(idCombobox,tipoCombobox,idTipoReferencia){
    var option = tipoCombobox;
    $.ajax({
        url: rutaAjax ,
        type:"POST" ,
        data: {option,tipoCombobox,idTipoReferencia},
    }).done(function(e){
       
        switch(e){
            case "error":
                alertify.error("Error al crear el Combobox");
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

                        case "edificio":
                            template+= `<option value="${task.idEdificio}">${task.Nombre}</option>`;
                        break;

                        case "aula":
                            template+= `<option value="${task.idAula}">${task.nombreAula}</option>`;
                        break;

                        default:
                            
                        break;
                    }
                })
                $("#"+idCombobox).html(template);
            break;
        }
    }).fail(function(){
        alertify.error("Error de ruta en combobox")
    })
}
//funciones de tablas------------------------

//(ruta para hacer post) Obtener valores de clasificacion y categoria en combobox


function updateFileEquipo(idObjeto){
    
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
                //owo1
                template = `
                            <h5 class="center-title">Equipo</h5>
                            <th id="etiqueta${task.idObjeto}">${task.etiqueta}</th> 
                            <th id="img${task.idObjeto}"><img height="70px" src="data:image/jpg;base64,${task.img}"/></th>
                            <th id="producto${task.idObjeto}">${task.producto}</th>
                            <th id="nombre${task.idObjeto}">${task.nombre}</th>
                            <th id="descripcion${task.idObjeto}">${task.descripcion}</th>`

                            if(`${task.mantenimiento}`=="true"){
                                if(`${task.mantResp}`==""){
                                    template += `<th id="mantResp${task.idObjeto}">Sin responsable</th>`
                                }else{
                                    template += `<th id="mantResp${task.idObjeto}">${task.mantResp}</th>`
                                }
                                if(`${task.lastMant}`=="0000-00-00 00:00:00" || `${task.lastMant}`=="" || `${task.lastMant}`== null){
                                    template += `<th id="lastMant${task.idObjeto}">Sin fecha</th>`
                                }else{
                                    template += `<th id="lastMant${task.idObjeto}">${task.lastMant}</th>`
                                }
                                if(`${task.nextMant}`=="0000-00-00 00:00:00" || `${task.nextMant}`=="" || `${task.nextMant}`== null){
                                    template += `<th id="nextMant${task.idObjeto}">Sin fecha</th>`
                                }else{
                                    template += `<th id="nextMant${task.idObjeto}">${task.nextMant}</th>`
                                }
                            }else{
                                template += `<th id="mantResp${task.idObjeto}">No hay mantenimiento</th>`;
                                if(`${task.lastMant}`=="0000-00-00 00:00:00" || `${task.lastMant}`=="" || `${task.lastMant}`== null){
                                    template += `<th id="lastMant${task.idObjeto}">Sin fecha</th>`
                                }else{
                                    template += `<th id="lastMant${task.idObjeto}">${task.lastMant}</th>`
                                }
                                template += `<th id="nextMant${task.idObjeto}">Sin mantenimiento</th>`;
                            }
                            //prestamo IF
                            if(`${task.prestamo}`=="true"){
                                template += `<th id="prestamo${task.idObjeto}"><label id="prestamo${task.idObjeto}"> Disponible</label></th>`;
                
                            }else{
                                template += `<th id="prestamo${task.idObjeto}"><label id="prestamo${task.idObjeto}"> No disponible</label></th>`;
                            
                            }

                            template += 
                            `<th id="option${task.idObjeto}">
                                    <div class="btn-group">
                                        <image src="../resources/delete.png" style="height:30px" id="delete${task.idObjeto}"></image>
                                            
                                            <image src="../resources/edit.png" style="height:30px" class="dropdown-toggle" data-toggle="dropdown" id="edit${task.idObjeto}"></image> 
                                            <div class="dropdown-menu">
                                                <a class="dropdown-item" id="editImg${task.idObjeto}">Imagen</a>
                                                <a class="dropdown-item" id="editProducto${task.idObjeto}">Producto</a>
                                                <a class="dropdown-item" id="editNombre${task.idObjeto}">Nombre</a>
                                                <a class="dropdown-item" id="editDescripcion${task.idObjeto}">Descripcion</a>
                                                <a class="dropdown-item" id="editCantidad${task.idObjeto}">cantidad</a>
                                            
                                            </div>
                                        </div>
                                    </div>
                                </th>`;                
                $('#fila'+idObjeto).html(template);
            })
        }
    })
    $(document).off('submit',"#formSend"+idObjeto);
    $(document).off('click',"#cancelEdit"+idObjeto);
    optionsEquipo("show");
    optionsConsumible("show");
}

function updateFileConsumible(idObjeto){
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
                //owo2
                template = `
                    <th id="producto${task.idObjeto}">${task.producto}</th>
                    <th id="img${task.idObjeto}"><img height="70px" src="data:image/jpg;base64,${task.img}"/></th>
                    <th id="nombre${task.idObjeto}">${task.nombre}</th>
                    <th id="descripcion${task.idObjeto}">${task.descripcion}</th>
                    <th id="cantidad${task.idObjeto}">${task.cantidad}</th>
                
                    <th id="option${task.idObjeto}">
                        <div class="btn-group">
                             <image src="../resources/delete.png" style="height:30px" id="delete${task.idObjeto}"></image>
                                
                            <div class="btn-group">       
                                <image src="../resources/edit.png" style="height:30px" class="dropdown-toggle" data-toggle="dropdown" id="edit${task.idObjeto}"></image> 
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" id="editImg${task.idObjeto}">Imagen</a>
                                    <a class="dropdown-item" id="editProducto${task.idObjeto}">Producto</a>
                                    <a class="dropdown-item" id="editNombre${task.idObjeto}">Nombre</a>
                                    <a class="dropdown-item" id="editDescripcion${task.idObjeto}">Descripcion</a>
                                    <a class="dropdown-item" id="editCantidad${task.idObjeto}">cantidad</a>
                                
                                </div>
                            </div>
                            </div>
                        </div>
                    </th>
                `
                $('#fila'+idObjeto).html(template);

            })
        }
    })
    $(document).off('submit',"#formSend"+idObjeto);
    $(document).off('click',"#cancelEdit"+idObjeto);
    optionsEquipo("show");
    optionsConsumible("show");
}

function optionsEquipo(option){
    switch(option){
        case "show":
            for(var i = 0; i<rowTableEquipo.length; i ++){
                $("#option"+rowTableEquipo[i].idObjeto).show();
            }
        break;

        case "hide":
            for(var i = 0; i<rowTableEquipo.length; i ++){
                $("#option"+rowTableEquipo[i].idObjeto).hide();
            }
        break;
    }
    
}

function optionsConsumible(option){
    switch(option){
        case "show":
            for(var i = 0; i<rowTableConsumible.length; i ++){
                $("#option"+rowTableConsumible[i].idObjeto).show();
            }
        break;

        case "hide":
            for(var i = 0; i<rowTableConsumible.length; i ++){
                $("#option"+rowTableConsumible[i].idObjeto).hide();
            }
        break;
    }
    
}


//(ruta para hacer post)FUNCIONES PRINCIPALES PARA TABLAS---owo-------
//(Tipo de tabla,nombre del tbody en donde se va a imprimir,Nombre de la tabla en donde vamos a sacar informacion, array de columnas que vamos a obtener )
function getTableObjeto(typeTabla,tbodyName){
    var option = typeTabla;
    $.ajax({
        url: rutaAjax,
        type: 'POST',
        data: {option,typeTabla},
        success: function(response){
           console.log(response);
           var cons = JSON.parse(response);
           var template = "";
           var cont=0;
           cons.forEach(task =>{
            template += `<tr id="fila${task.idObjeto}">`;
            switch(typeTabla){
                case "equipo":
                    template += `<th>${task.etiqueta}</th>`;
                    template += `<th id="producto${task.idObjeto}"><img id="img${task.idObjeto}" height="70px" src="data:image/jpg;base64,${task.img}"/><label id="producto${task.idObjeto}">${task.producto}</label></th>`;
                    template += `<th id="nombre${task.idObjeto}">${task.nombre}</th>`;
                    template += `<th id="descripcion${task.idObjeto}">${task.descripcion}</th>`;
                    if(`${task.mantenimiento}`=="true"){
                        if(`${task.mantResp}`==""){
                            template += `<th id="mantResp${task.idObjeto}">Sin responsable</th>`
                        }else{
                            template += `<th id="mantResp${task.idObjeto}">${task.mantResp}</th>`
                        }
                        if(`${task.lastMant}`=="0000-00-00 00:00:00" || `${task.lastMant}`=="" || `${task.lastMant}`== null){
                            template += `<th id="lastMant${task.idObjeto}">Sin fecha</th>`
                        }else{
                            template += `<th id="lastMant${task.idObjeto}">${task.lastMant}</th>`
                        }
                        if(`${task.nextMant}`=="0000-00-00 00:00:00" || `${task.nextMant}`=="" || `${task.nextMant}`== null){
                            template += `<th id="nextMant${task.idObjeto}">Sin fecha</th>`
                        }else{
                            template += `<th id="nextMant${task.idObjeto}">${task.nextMant}</th>`
                        }
                    }else{
                        template += `<th id="mantResp${task.idObjeto}">Sin mantenimiento</th>`;
                        if(`${task.lastMant}`=="0000-00-00 00:00:00" || `${task.lastMant}`=="" || `${task.lastMant}`== null){
                            template += `<th id="lastMant${task.idObjeto}">Sin fecha</th>`
                        }else{
                            template += `<th id="lastMant${task.idObjeto}">${task.lastMant}</th>`
                        }
                        template += `<th id="nextMant${task.idObjeto}">Sin mantenimiento</th>`;
                    }
                    if(`${task.prestamo}`=="true"){
                        template += `<th id="prestamo${task.idObjeto}"><label id="prestamo${task.idObjeto}"> Disponible</label></th>`;
        
                    }else{
                        template += `<th id="prestamo${task.idObjeto}"><label id="prestamo${task.idObjeto}"> No disponible</label></th>`;
                    
                    }
                break;

                case "consumible":
                break;
            }//TERMINA EL SWITCH----------------------------------------------------
            template += `<th><div class="btn-group">
            <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
               Sony
            </button>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">Tablet</a>
              <a class="dropdown-item" href="#">Smartphone</a>
            </div>
          </div></th>`;

            cont++;
           })
           
           $("#"+tbodyName).html(template);
        }
    })
}


function getTableEquipo(){
    

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
                rowTableEquipo[cont] = new rowTable(`${task.idObjeto}`,"Equipo",1);
                //owo3
                template += `   
                <tr id="fila${task.idObjeto}">
                    <th id="etiqueta${task.idObjeto}">${task.etiqueta}</th>
                    <th id="img${task.idObjeto}"><img height="70px" src="data:image/jpg;base64,${task.img}"/></th>
                    <th id="producto${task.idObjeto}">${task.producto}</th>
                    <th id="nombre${task.idObjeto}">${task.nombre}</th>
                    <th id="descripcion${task.idObjeto}">${task.descripcion}</th>`;
                if(`${task.mantenimiento}`=="true"){
                    if(`${task.mantResp}`==""){
                        template += `<th id="mantResp${task.idObjeto}">Sin responsable</th>`
                    }else{
                        template += `<th id="mantResp${task.idObjeto}">${task.mantResp}</th>`
                    }
                    if(`${task.lastMant}`=="0000-00-00 00:00:00" || `${task.lastMant}`=="" || `${task.lastMant}`== null){
                        template += `<th id="lastMant${task.idObjeto}">Sin fecha</th>`
                    }else{
                        template += `<th id="lastMant${task.idObjeto}">${task.lastMant}</th>`
                    }
                    if(`${task.nextMant}`=="0000-00-00 00:00:00" || `${task.nextMant}`=="" || `${task.nextMant}`== null){
                        template += `<th id="nextMant${task.idObjeto}">Sin fecha</th>`
                    }else{
                        template += `<th id="nextMant${task.idObjeto}">${task.nextMant}</th>`
                    }
                }else{
                    template += `<th id="mantResp${task.idObjeto}">Sin mantenimiento</th>`;
                    if(`${task.lastMant}`=="0000-00-00 00:00:00" || `${task.lastMant}`=="" || `${task.lastMant}`== null){
                        template += `<th id="lastMant${task.idObjeto}">Sin fecha</th>`
                    }else{
                        template += `<th id="lastMant${task.idObjeto}">${task.lastMant}</th>`
                    }
                    template += `<th id="nextMant${task.idObjeto}">Sin mantenimiento</th>`;
                }
                
                if(`${task.prestamo}`=="true"){
                    template += `<th id="prestamo${task.idObjeto}"><label id="prestamo${task.idObjeto}"> Disponible</label></th>`;
    
                }else{
                    template += `<th id="prestamo${task.idObjeto}"><label id="prestamo${task.idObjeto}"> No disponible</label></th>`;
                
                }

            template += 
            `<th id="option${task.idObjeto}">
                <div class="btn-group">
                     <image src="../resources/delete.png" style="height:30px" id="delete${task.idObjeto}"></image>

                    <div class="btn-group">       
                        <image src="../resources/edit.png" style="height:30px" class="dropdown-toggle" data-toggle="dropdown" id="edit${task.idObjeto}"></image> 
                        <div class="dropdown-menu">
                            <a class="dropdown-item" id="editImg${task.idObjeto}">Imagen</a>
                            <a class="dropdown-item" id="editProducto${task.idObjeto}">Producto</a>
                            <a class="dropdown-item" id="editNombre${task.idObjeto}">Nombre</a>
                            <a class="dropdown-item" id="editDescripcion${task.idObjeto}">Descripcion</a>
                            <a class="dropdown-item" id="editCantidad${task.idObjeto}">cantidad</a>
                        
                        </div>
                    </div>
                </div>
                </th>
            </tr>`;

                rowTableEquipo[cont].deleteOption();
                rowTableEquipo[cont].editImg();
                rowTableEquipo[cont].editProducto();
                rowTableEquipo[cont].editNombre();
                rowTableEquipo[cont].editDescripcion();
                rowTableEquipo[cont].editMantenimiento();
                rowTableEquipo[cont].editPrestamo();
                $('#tbody-equipo').html(template);
                cont++;
            
            })
            
        }
    })
}

function getTableConsumible(){
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
                
                rowTableConsumible[cont] = new rowTable(`${task.idObjeto}`,"Consumible",2);
               //owo4
                template += `<tr id="fila${task.idObjeto}">
                    <th id="producto${task.idObjeto}">${task.producto}</th>
                    <th id="img${task.idObjeto}"><img height="70px" src="data:image/jpg;base64,${task.img}"/></th>
                    <th id="nombre${task.idObjeto}">${task.nombre}</th>
                    <th id="descripcion${task.idObjeto}">${task.descripcion}</th>
                    <th id="cantidad${task.idObjeto}">${task.cantidad}</th>
                  
                    <th id="option${task.idObjeto}">
                        <div class="btn-group">
                            <image src="../resources/delete.png" style="height:30px" id="delete${task.idObjeto}"></image>
                            <div class="btn-group">       
                                <image src="../resources/edit.png" style="height:30px" class="dropdown-toggle" data-toggle="dropdown" id="edit${task.idObjeto}"></image> 
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" id="editImg${task.idObjeto}">Imagen</a>
                                    <a class="dropdown-item" id="editProducto${task.idObjeto}">Producto</a>
                                    <a class="dropdown-item" id="editNombre${task.idObjeto}">Nombre</a>
                                    <a class="dropdown-item" id="editDescripcion${task.idObjeto}">Descripcion</a>
                                    <a class="dropdown-item" id="editCantidad${task.idObjeto}">cantidad</a>
                                
                                </div>
                            </div>
                        </div>
                    </th>
                </tr>`
                    rowTableConsumible[cont].deleteOption();
                    rowTableConsumible[cont].editImg();
                    rowTableConsumible[cont].editProducto();
                    rowTableConsumible[cont].editNombre();
                    rowTableConsumible[cont].editDescripcion();
                    rowTableConsumible[cont].editCantidad();
                $('#tbody-consumible').html(template);
                cont++;
            })
        }
    })
}

//Funciones para la pagina de notificaciones-----------------------------------------



//Validaciones-----------------------------------------------------------------------
//funcion para verificar si una fecha se pasa o no de la fecha actual
function validarFecha(nextMant){
    var valDate = new Date (nextMant);
    var dateNow = new Date();
    if(valDate.getTime()>dateNow.getTime()){
        return true;
    }else{
        return false;
    }
}


//funciones para inputs--------------------------------------------------------------


function search(buscarPor,stringSearch){
    var option = "search";
    var buscarPor = buscarPor;
    var stringSearch = stringSearch;
    console.log(buscarPor);

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


//----------------------------------HEADER.HTML--------------------------------------------
















