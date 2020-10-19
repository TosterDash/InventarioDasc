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

    delete(tableRow,cont){

        $("#boton-edificioPlanta").click(function(e){
            e.preventDefault();
           
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
                
                template = `<tr>
                            <th>${task.Nombre}</th>
                            <th>${task.descripcion}</th>
                            <th>syu</th>
                            <th>${task.lastMant}</th>
                            <th>${task.nextMant}</th>
                            <th><button id=edit${task.idObjeto}>Edit</button></th>
                            <th><button id=delete${task.idObjeto}>Delete</button></th>
                            </tr>
                            `
                editId = "edit"+tableRow[cont].idObjeto;
                delId = "delete"+tableRow[cont].idObjeto;
                console.log(editId);
                console.log(delId);
                $('#cons-table').append(template);
                tableRow[cont].delete();
                cont++;
            })
        }


    });
}