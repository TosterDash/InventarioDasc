var rutaAjaxPrestamo = "prestamo/PHP/prestamoCons.php";
var listPrestamoId = [];
var cardLoanArray = [];

class cardLoan{
    constructor(id){
        this.id = id;
    }
}

function getLoanCard(cardName){
    var option = "getLoanCard";
    $.ajax({
        url: rutaAjaxPrestamo,
        type: 'POST',
        data: {option},
        success: function(response){
            console.log(response);
            var cons = JSON.parse(response);
            var template = ``; 
            var cont = 0;
            var idLoan;
            var lastIdLoan;
            cons.forEach(task=>{
                console.log(task.usuario)
                idLoan = task.idPrestamo;
                cardLoanArray[cont] = new cardLoan(task.idPrestamo);
                if(idLoan != lastIdLoan){
                    
                    template += `
                                <div class="single-loan">
                                    <div class="loan-head">
                                        <label>#${task.idPrestamo} DE PRÉSTAMO</label>
                                    </div>
                                    <hr class="divider-hor">
                                    <div class="loan-body disp-flexRow">
                                        <div class="loan-info disp-flexCol">
                                            <label class="label-clas">No. de usuario: 
                                                <label class="label-answ"> ${task.idUsuario} </label>
                                            </label>
                                            <label class="label-clas">Nombre de usuario: 
                                                <label class="label-answ"> ${task.nombreUsuario} </label>
                                            </label>
                                            <label class="label-clas">Salón 
                                                <label class="label-answ"> ${task.nombreAula} </label>
                                            </label>
                                            <label class="label-clas">fecha pedido: 
                                                <label class="label-answ"> ${task.exitDate} </label>
                                            </label>
                                            <label class="label-clas">fecha de regreso: 
                                                <label class="label-answ"> ${task.returnDate} </label>
                                            </label>
                                        </div>
                                        <hr class="divider-ver">
                                        <div class="loan-table disp-flexCol">
                                            <table id=loan-card-${task.idPrestamo}>
                                                
                                            </table>
                                        </div>
                                    </div>
                                    <div class="loan-foot">
                                        <button>Entregar</button>
                                    </div>
                                </div>
                                        `;
                }
                lastIdLoan = idLoan;
                console.log(cardLoanArray[cont].id)
                cont++;              

            })
            $("#"+cardName).html(template);
            
            cons.forEach(task=>{
                
                var template1 = ``;
                for(var i = 0;i<cardLoanArray.length;i++){
                    
                    if(task.idPrestamo == cardLoanArray[i].id){
                        //console.log(task.etiqueta);
                        template1 += `<tr>
                                        <td>${task.etiqueta}</td>
                                        <td>${task.producto}</td>
                                        
                                    </tr>`;
                    }
                }
                $("#loan-card-"+task.idPrestamo).html(template1);
            })
        }
    })
}


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
                template += `<th><input type="checkbox" id="${task.idObjeto}" ></input></th>`;
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
                disableDisponible(objects,i);
                addPrestamoHasObjeto(objects,i);
            }
        }
    })

    function disableDisponible(objects,i){
        var option = "disableDisponible";
        $.ajax({
            url: rutaAjaxPrestamo,
            type:'POST',
            data:{option,objects,i},
            success: function(response){
              
            }
        })
    }

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