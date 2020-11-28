var rutaAjaxPrestamo = "prestamo/PHP/prestamoCons.php";
var listPrestamoId = [];

function getComboboxMap(nameCombo,idNombreRow,nombreRow,nombreTabla,capaInicial,nombreRowReferencia,idReferencia){
    var option = "getComboboxMap"
    $.ajax({
        url: rutaAjaxPrestamo,
        type: 'POST',
        data: {option,idNombreRow,nameCombo,nombreTabla,nombreRow,nombreRowReferencia,idReferencia},
        success: function(response){
            console.log(response);
           var cons = JSON.parse(response);
           var template = ``;
           var cont = 0;
            if(capaInicial != undefined ){
                template = `<option value="">`+capaInicial+`</option>`;
            }
           cons.forEach(task =>{
            
               template += `<option value="${task.id}">${task.info}</option>`;
               cont++;
           })
           $("#"+nameCombo).html(template);
        }
    })
}

function getTablePrestamo(nameTable){
    var option = "getTablePrestamo";
    $.ajax({
        url: rutaAjaxPrestamo,
        type: 'POST',
        data: {option},
        success: function(response){
            console.log(response);
            var cons = JSON.parse(response);
            var template = ``;
            var cont = 0;

            cons.forEach(task=>{
                template += `<tr file${task.idObjeto}>`;
                template += `<th><input type="checkbox" id="${task.idObjeto}"></input></th>`;
                template += `<th><img height="70px" src="data:image/jpg;base64,${task.img}"/></th>`;
                template += `<th>${task.etiqueta}</th>`;
                template += `<th>${task.nombre}</th>`;
                template += `<th>${task.producto}</th>`;
                template += `</tr>`;
                listPrestamoId[cont] = `${task.idObjeto}`;
                cont++;
            })
            $("#"+nameTable).html(template);
        }
    })

}

function addPrestamo(building,classroom,exitDate,returnDate,objects){
    var option = "addPrestamo";
    $.ajax({
        url: rutaAjaxPrestamo,
        type:'POST',
        data:{option,building,classroom,exitDate,returnDate},
        success: function(response){
            console.log(response);
            for(var i = 0;i<objects.length;i++){
                addPrestamoHasObjeto(objects,i);
            }
        }
    })

    function addPrestamoHasObjeto(objects,i){
        var option = "addPrestamoHasObjeto";
        $.ajax({
            url: rutaAjaxPrestamo,
            type:'POST',
            data:{option,objects,i},
            success: function(response){
              
            }
        })
    }
}