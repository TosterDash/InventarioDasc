$(document).ready(function(){
    //Crear tabla de objetos
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
                                <th id="nombre${task.idObjeto}">${task.nombre}</th>
                               </div>
                                <th id="option${task.idObjeto}">
                                    <div class="btn-group">
                                    <input type="checkbox">
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


    $(document).on('click', '#loan-add-add',function(){
        var building = $('#loan-add-edif').val();
        var clasroom = $('#loan-add-clasroo').val();
        var exitDate = $('#loan-add-datetime').val();
        var returnDate = $('#loan-add-datetime').val();
        returnDate.setDate(returnDate.getDate()+15);
        //Se debe convertir en arreglo que reciba la tabla de objetos
        var objeto = $('#loan-add-datetime').val();

    })

})