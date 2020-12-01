var rutaAjaxPrestamo = "prestamo/PHP/prestamoCons.php";
var listPrestamoId = [];
var cardLoanArray = [];
var idUsuarioArray = [];

class idUsuario{
    constructor(idUserPrestamo,id,nombre,prestamoActivo){
        this.idUserPrestamo = idUserPrestamo;
        this.id = id;
        this.nombre = nombre;
        this.prestamoActivo = prestamoActivo;
     
    }
}

class cardLoan{
    constructor(id,idUsuario,nombreUsuario){
        this.id = id;
        this.idUsuario = idUsuario;
        this.nombreUsuario = nombreUsuario;
        
       
    }

    entregarButton(){
        var idPrestamo = this.id;
        var idUsuario = this.idUsuario;

        $(document).on('click',"#card-loan-button-"+idPrestamo,function(){
            //console.log(idPrestamo);
            entregarPrestamo(idPrestamo,idUsuario);
        })
    }

}

function getLoanCard(cardName,typeEntregado,typeBuscar,text,tableBdd){
    var option = "getLoanCard";
    console.log("Se esta buscando " + typeBuscar)
    $.ajax({
        url: rutaAjaxPrestamo,
        type: 'POST',
        data: {option,typeEntregado,typeBuscar,text,tableBdd},
        success: function(response){
            deleteCards();
            console.log(response);
            var cons = JSON.parse(response);
            var template = ``; 
            
            var cont = 0;
            var idLoan;
            var lastIdLoan;
            cons.forEach(task=>{
                
                idLoan = task.idPrestamo;
                //console.log(idLoan);
                
                if(idLoan != lastIdLoan){
                    
                    cardLoanArray[cont] = new cardLoan(idLoan,task.idUsuario,task.nombreUsuario);
                    console.log(cardLoanArray);
                    
                    template += `
                                <div class="single-loan" id="single-loan-${task.idPrestamo}">
                                    <div class="loan-head">`;
                    if(typeEntregado=="true"){
                        template += `<label>#${task.idPrestamo} DE PRÉSTAMO | ENTREGADO</label>`;
                    }else{
                        template += `<label>#${task.idPrestamo} DE PRÉSTAMO</label>`
                    }                
                        template += `
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
                                            <table id="loan-card-${task.idPrestamo}">
                                                
                                            </table>
                                        </div>
                                    </div>
                                    <div class="loan-foot">
                                    `;
                    if(typeEntregado=="false"){
                        template += `<button id="card-loan-button-${task.idPrestamo}">Entregar</button>`;
                    }                
                    template +=  `</div></div>`;
                 
                    $("#"+cardName).html(template);
                    cardLoanArray[cont].entregarButton();
                    cont++;  
                }
               
                
                lastIdLoan = idLoan;
                            

            })
        
            template = ``;
            idLoan = 0;
            cont=0;
            cons.forEach(task=>{
                if(task.idPrestamo!=idLoan){
                    template = ``;

                }
                idLoan = task.idPrestamo;
                template += `<tr>
                                <td>${task.etiqueta}</td>
                                <td>${task.producto}</td>
                            </tr>`;
                
                $("#loan-card-"+idLoan).html(template);
                

            })
            
        }
    })

    function deleteCards(){
        
        for(var i = 0; i<cardLoanArray.length; i++){
            $(document).off('click',"#card-loan-button-"+cardLoanArray[i].id);
            $("#single-loan-"+cardLoanArray[i].id).remove();
        }
    }


}

function entregarPrestamo(idPrestamo,idUsuario){
    var option = "entregarPrestamo";
    $.ajax({
        url: rutaAjaxPrestamo,
        type: 'POST',
        data: {option,idPrestamo,idUsuario},
        success: function(response){
            console.log(response);
            $("#single-loan-"+idPrestamo).remove();
            $(document).off('click',"#card-loan-button-"+idPrestamo);
            //removePrestamoHas();
        }
    })

    function removePrestamoHas(){
        option = "removePrestamoHas";
        $.ajax({
            url: rutaAjaxPrestamo,
            type: 'POST',
            data: {option,idPrestamo},
            success: function(response){
                console.log(response);
                
                alertify.success("Se ha entregado el prestamo");
            }
        })
    }

}

function getIdUsuario(){
    var option = "getIdUsuario";
    $.ajax({
        url: rutaAjaxPrestamo,
        type: 'POST',
        data: {option},
        success: function(response){
            var cons = JSON.parse(response);
            var cont = 0;
            cons.forEach(task=>{
                idUsuarioArray[cont] = new idUsuario(task.id,task.identificador,task.nombre,task.prestamoActivo);

                cont++;
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
            //console.log(response);
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
            //console.log(response);
            var cons = JSON.parse(response);
            var template = ``;
            var cont = 0;

            cons.forEach(task=>{
                template += `<tr file${task.idObjeto}>`;
                template += `<th><input type="checkbox" id="${task.idObjeto}" " ></input></th>`;
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

function addPrestamo(numUsuario,building,classroom,exitDate,returnDate,objects){
    var option = "addPrestamo";
    console.log(numUsuario);
    $.ajax({
        url: rutaAjaxPrestamo,
        type:'POST',
        data:{option,numUsuario,building,classroom,exitDate,returnDate},
        success: function(response){
            //console.log(response);
            for(var i = 0;i<objects.length;i++){
                disableDisponible(objects,i);
                addPrestamoHasObjeto(objects,i);
                
            }
            disableDisponibleUser(numUsuario);
            alertify.success("Se creo un nuevo prestamo");
            getIdUsuario();
            getTablePrestamo("loan-tbody");
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

    function disableDisponibleUser(numUsuario){
        var option = "disableDisponibleUser";
        $.ajax({
            url: rutaAjaxPrestamo,
            type:'POST',
            data:{option,numUsuario},
            success: function(response){
              
            }
        })
    }
}