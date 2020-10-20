//Array para guardar las celdas
var tableRow = [];
class tableButton{
    constructor(idObjeto,Nombre,descripcion,buttonDel,buttonMod){
        this.idObjeto = idObjeto;
        this.Nombre = Nombre;
        this.descripcion = descripcion;
        this.buttonDel = buttonDel;
        this.buttonMod = buttonMod;
    }

    buttons(idObjeto,cont,editId,delId,tableId){

        $("#"+delId).click(function(e){
            var option = confirm("¿Seguro que desea eliminar el objeto "+tableRow[cont].Nombre+"?");
            if(option){
                
                
                $.post('inventario/PHP/deleteconsinventory.php',{idObjeto} ,function(response){
                    console.log(tableId);
                    $('#'+tableId).remove(); 
               
                });
                
                
                
            }
           
        });

        $("#"+editId).click(function(e){
            
            console.log(tableRow[cont].Nombre);
           
        });
    }
    
}





function tables(){
    $.ajax({
        url: 'inventario/PHP/consinventory.php', 
        type: 'GET',
        success: function(response){
            var cons = JSON.parse(response);
            var cont;
            var editId;
            var delId;
            var template;
            cons.forEach(task => {
                tableRow[cont] = new tableButton(`${task.idObjeto}`,`${task.Nombre}`,`${task.descripcion}`,null,null);
                
                template = `<tr id=table${task.idObjeto}>
                            <th>${task.Nombre}</th>
                            <th>${task.Descripcion}</th>
                            <th>syu</th>
                            <th>${task.lastMant}</th>
                            <th>${task.nextMant}</th>
                            <th><button id=edit${task.idObjeto}>Edit</button></th>
                            <th><button id=delete${task.idObjeto}>Delete</button></th>
                            </tr>
                            `
                tableId = "table"+tableRow[cont].idObjeto;
                editId = "edit"+tableRow[cont].idObjeto;
                delId = "delete"+tableRow[cont].idObjeto;
                //console.log(editId);
                //console.log(delId);
                $('#cons-table').append(template);
                tableRow[cont].buttons(tableRow[cont].idObjeto,cont,editId,delId,tableId);
                cont++;
            })
        }


    });
}

tables();