/*
$(document).ready(function(){
    var tableRow = [];
    class tableClass{
        //Declaracion de variables
        constructor(idObjeto,delId,editId,filaId,nombre,descripcion,nextMant,lastMant){
            this.idObjeto = idObjeto,
            this.delId = delId,
            this.editId = editId,
            this.filaId = filaId,
            this.nombre = nombre,
            this.descripcion = descripcion,
            this.lastMant = lastMant,
            this.nextMant = nextMant
            this.flagEdit = false;
        }   

        deleteButton(){//Logica del boton delete
            var nombre = this.nombre;
            var filaId = this.filaId;
            var deleteId = this.delId;
            var idObjeto = this.idObjeto;
            $(document).on('click','#'+deleteId,function(){
                var confirmed = confirm("Estas seguro que desea eliminar el objeto "+nombre+"?");

                if(confirmed){
                    $.post('inventario/PHP/deleteConsInventory.php',{idObjeto} ,function(response){
                        $('#'+filaId).remove();
                        alertify.notify('Se ha eliminado con exito!', 'success', 5);
                  });
                }
            })
            
        }

        editButton(){//Logica del boton edit
            var flagEdit = this.flagEdit;
            var nombre = this.nombre;
            var des = this.descripcion;
            var lastMant = this.lastMant;
            var nextMant = this.nextMant;
            var filaId = this.filaId;
            var editId = this.editId;
            var idObjeto = this.idObjeto;
            var template;
            $(document).on('click','#'+editId,function(){
                
               if(flagEdit){
                    nombre = $('#nombre'+idObjeto).val();
                    des = $('#descripcion'+idObjeto).val();
                    lastMant = $('#lastMant'+idObjeto).val();
                    nextMant = $('#nextMant'+idObjeto).val();

                        $.post('inventario/PHP/modConsInventory.php',{idObjeto,nombre,des,lastMant,nextMant} ,function(response){
                            console.log(response);
                            $('#delete'+idObjeto).attr("disabled",false);
                            alertify.notify(nombre+' se ha modificado con exito!', 'success', 5);
                            console.log("ENTRO AQUI EN FLAGEDIT");
                            refresh();
                            table();
                            flagEdit = false;
                            
                        });

                    //template = '<th>'+nombre+'</th> <th>'+des+'</th> <th>aaa</th> <th>'+lastMant+'</th> <th>'+nextMant+'</th> <th><button id="edit'+idObjeto+'">Edit</button></th> <th><button id="delete'+idObjeto+'">Delete</button></th> ';
                    //$('#'+filaId).html(template);
                    

               }else{
                console.log("ENTRO AQUI EN FLAGEDIT false");
                template = '<th><input type="text" id="nombre'+idObjeto+'"></th> <th><input type="text" id="descripcion'+idObjeto+'"></th> <th>aaa</th> <th><input type="date" id="lastMant'+idObjeto+'"></th> <th><input type="date" id="nextMant'+idObjeto+'"></th> <th><button id="edit'+idObjeto+'">Confirmar</button></th> <th><button id="delete'+idObjeto+'">Delete</button></th> ';

                $('#'+filaId).html(template);

                $('#nombre'+idObjeto).val(nombre);
                $('#descripcion'+idObjeto).val(des);
                $('#lastMant'+idObjeto).val(lastMant);
                $('#nextMant'+idObjeto).val(nextMant);
                $('#delete'+idObjeto).attr("disabled",true);
                flagEdit = true;
               }
            })
        }

    }

   

   function refresh(){

    for(var i = 0;i<tableRow.length; i++){
        $(document).off("click",'#'+tableRow[i].editId);
        $(document).off("click",'#'+tableRow[i].delId);
    }
    tableRow = [];
    

   }

    function table(){
        var cons = $('#consult_search').val();
        $.ajax({
            url: 'inventario/PHP/consinventory.php',
            type: 'POST',
            data: {cons},
            success: function(response){
                var cons = JSON.parse(response);
                console.log(cons);
                var template = `<tr>
                                    <th>Nombre</th>
                                    <th>Descripcion</th>
                                    <th>Mantenimiento</th>
                                    <th>Ultimo mantenimiento</th>
                                    <th>Proximo mantenimiento</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>`
                var editId, deleteId, filaId, cont=0;
                cons.forEach(task =>{
                    
                    template += `<tr id="fila${task.idObjeto}">
                                    <th>${task.Nombre}</th>
                                    <th>${task.Descripcion}</th>
                                    <th>---------</th>
                                    <th>${task.lastMant}</th>
                                    <th>${task.nextMant}</th>
                                    <th><button id="edit${task.idObjeto}">Edit</button></th>
                                    <th><button id="delete${task.idObjeto}">Delete</button></th>
                                </tr>`
                    $('#cons-table').html(template);
                    filaId = `fila${task.idObjeto}`;
                    editId = `edit${task.idObjeto}`;
                    deleteId = `delete${task.idObjeto}`
                    tableRow[cont] = new tableClass(`${task.idObjeto}`,deleteId,editId,filaId,`${task.Nombre}`,`${task.Descripcion}`,`${task.nextMant}`,`${task.lastMant}`,);

                   tableRow[cont].deleteButton();
                   tableRow[cont].editButton();
                    
                    
                    cont++;
                })
            }
        })
    }
    table();

    $(document).on('keyup','#consult_search',function(){
        refresh();
        table(); 
    })


});
*/

$(document).ready(function(){
    var rowArrayConsumible = [];
    var rowArrayEquipo = [];
    class rowTable{
        constructor(idObjeto){
            this.idObjeto = idObjeto;
            //BOTON DELETE
            $(document).on('click',"#delete"+idObjeto,function(){
                console.log("boton delete: "+idObjeto);
                var option = "delete";
                $.ajax({
                    url:"inventario/PHP/consinventory.php" ,
                    type:"POST" ,
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
            //BOTON EDITimg
            $(document).on('click',"#editImg"+idObjeto,function(){
                console.log("boton editImg: "+idObjeto);
            })
            //BOTON EDIT
            $(document).on('click',"#edit"+idObjeto,function(){
                console.log("boton edit: "+idObjeto);
            })


        }
    }





    //PRINCIPAL-----------------------------
    $("#table-consumible").hide();
    $("#table-equipo").hide();
    getClasification();

    $("#combobox-category").on('change',function(){
        
        switch($("#combobox-category").val()){
            //1-EQUIPOS
            case "1":
                console.log("dawdaw");
                getTableEquipo();
            break;

            case "2":
            //2-CONSUMIBLES
                console.log("dawdaw2");
                getTableConsumible();
            break;

            default:
                $("#table-consumible").hide();
                $("#table-equipo").hide();
            break;
        }
    })

    //funciones----------------------------

    function getClasification(){
        //OPCION categoria PARA CATEGORIA
        var option = "clasificacion";
        //ajax para combobox clasificacion
        $.ajax({
            url:"inventario/PHP/consinventory.php" ,
            type:"POST" ,
            data: {option},

        }).done(function(e){
            switch(e){

                case "error":
                    alertify.error("Error consInventory.PHP-clasificacion");
                break;

                default:
                    //console.log("succes");
                    var category = JSON.parse(e);
                    var template = `<option value="">--Mostrar por categoria--</option>`;
                    category.forEach(task=>{
                        template+= `<option value="${task.idClasificacion}">${task.clasificacion}</option>`
                    })

                    $("#combobox-category").html(template);
                break;
            }
        }).fail(function(e){
            console.log("FALLO POST DE GET CATEGORY");
        })
    }

    function getTableConsumible(){
        var option = "consumible";
        $.ajax({
            url: 'inventario/PHP/consinventory.php',
            type: 'POST',
            data: {option},
            success: function(response){
                var cons = JSON.parse(response);
                console.log(cons);
                var template = "";
                var cont=0;
                $("#table-equipo").hide();
                $("#table-consumible").show();
                cons.forEach(task =>{
                    rowArrayConsumible[cont] = new rowTable(`${task.idObjeto}`);
                    template += `<tr id="fila${task.idObjeto}">
                                    <th><img height="70px" src="data:image/jpg;base64,${task.img}"/></th>
                                    <th>${task.categoria}</th>
                                    <th>${task.Nombre}</th>
                                    <th>${task.Descripcion}</th>
                                    <th>${task.Cantidad}</th>
                                    <th>
                                        <div class="btn-group btn-group-md">
                                            <button type="button" class="btn btn-secondary" id="edit${task.idObjeto}">Editar</button>
                                            <button type="button" class="btn btn-secondary" id="editImg${task.idObjeto}">Cambiar Imagen</button>
                                            <button type="button" class="btn btn-danger" id="delete${task.idObjeto}">Eliminar</button>
                                        </div>
                                    </th>
                                    
                                </tr>`
                            
                    $('#tbody-consumible').html(template);
                    
                    

                   
                    
                    
                    cont++;
                })
            }
        })
    }

    function getTableEquipo(){
        var option = "equipo";
        $.ajax({
            url: 'inventario/PHP/consinventory.php',
            type: 'POST',
            data: {option},
            success: function(response){
                var cons = JSON.parse(response);
                console.log(cons);
                var template = "";
                var cont=0;
                $("#table-consumible").hide();
                $("#table-equipo").show();
                cons.forEach(task =>{
                    rowArrayEquipo = new rowTable(`${task.idObjeto}`);
                    template += `<tr id="fila${task.idObjeto}">
                                    <th><img height="70px" src="data:image/jpg;base64,${task.img}"/></th>
                                    <th>${task.categoria}</th>
                                    <th>${task.Nombre}</th>
                                    <th>${task.Descripcion}</th>
                                    <th>${task.mantResp}</th>
                                    <th>${task.lastMant}</th>
                                    <th>${task.nextMant}</th>
                                    <th>
                                        <div class="btn-group btn-group-md">
                                            <button type="button" class="btn btn-secondary" id="edit${task.idObjeto}">Editar</button>
                                            <button type="button" class="btn btn-secondary" id="editImg${task.idObjeto}">Cambiar Imagen</button>
                                            <button type="button" class="btn btn-danger" id="delete${task.idObjeto}">Eliminar</button>
                                        </div>
                                    </th>
                                    
                                </tr>`
                    $('#tbody-equipo').html(template);
                    
                    

                   
                    
                    
                    cont++;
                })
            }
        })
    }
});
