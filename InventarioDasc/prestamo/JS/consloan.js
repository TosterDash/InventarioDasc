
$(document).ready(function(){
  var rutaAjax = "prestamo/PHP/consloan.php";
  var rutaAjax2 = "prestamo/PHP/consloanobj.php";

  $.ajax({
    url: rutaAjax,
    type: 'GET',
    //data: {option},
    success: function(response){
        console.log(response)
        var cons = JSON.parse(response);
        var template = ``;
        var cont=0;

        cons.forEach(task =>{
            template += `
            <div class="single-loan">
                <div class="loan-head">
                      <label># DE PRÉSTAMO</label>
                </div>
                <hr class="divider-hor">
                <div class="loan-body disp-flexRow">
                    <div class="loan-info disp-flexCol">
                        <label class="label-clas">No. de usuario: 
                            <label class="label-answ"> 2016082757 </label>
                        </label>
                        <label class="label-clas">Nombre de usuario: 
                            <label class="label-answ"> Juan carlos bodoque </label>
                        </label>
                        <label class="label-clas">Salón 
                            <label class="label-answ"> ${task.aula} </label>
                        </label>
                        <label class="label-clas">fecha pedido: 
                            <label class="label-answ"> ${task.exitDate} </label>
                        </label>
                        <label class="label-clas">fecha pedido: 
                            <label class="label-answ"> ${task.returnDate} </label>
                        </label>
                    </div>
                    <hr class="divider-ver">
                    <div class="loan-table disp-flexCol">
                        <table id=loan-card-${cont}>
                            
                        </table>
                    </div>
                </div>
                <div class="loan-foot">
                    <button>Entregar</button>
                </div>
            </div>
            `
            var table = "#loan-card-"+cont+"";
            var loan = task.idPrestamo;
            console.log(loan);
            $.ajax({
                url: rutaAjax2,
                type: 'GET',
                data: {loan},
                success: function(response){
                    console.log(response)
                    var cons = JSON.parse(response);
                    var template = ``;
                    var cont=0;
            
                    cons.forEach(task =>{
                        console.log(cont)
                        template += `
                            <tr>
                                <td>${task.nombre}</td>
                            </tr>
                        `
                        
                        cont++;
                    
                    })
                    $(table).html(template)
                }
              })
            cont++;
        
        })
        $("#card-container").html(template)
    }
  })
})


/*
TEMPLATE

<!--INICIO DE UN CUADRITO DE PRESTAMO-->
            <div class="single-loan">
                <div class="loan-head">
                      <label># DE PRÉSTAMO</label>
                </div>
                <hr class="divider-hor">
                <div class="loan-body disp-flexRow">
                    <div class="loan-info disp-flexCol">
                        <label class="label-clas">No. de usuario: 
                            <label class="label-answ"> 2016082757 </label>
                        </label>
                        <label class="label-clas">Nombre de usuario: 
                            <label class="label-answ"> Juan carlos bodoque </label>
                        </label>
                        <label class="label-clas">Salón 
                            <label class="label-answ"> salon oshenta </label>
                        </label>
                        <label class="label-clas">fecha pedido: 
                            <label class="label-answ"> ayer </label>
                        </label>
                        <label class="label-clas">fecha pedido: 
                            <label class="label-answ"> hoy </label>
                        </label>
                    </div>
                    <hr class="divider-ver">
                    <div class="loan-table disp-flexCol">
                        <table>
                            <tr>
                                <td>CAUTÍN PEDORRO</td>
                                <td>FOTO DELKAUTIN</td>
                            </tr>
                            <tr>
                                <td>CAUTÍN PEDORRO</td>
                                <td>FOTO DELKAUTIN</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div class="loan-foot">
                    <button>Entregar</button>
                </div>
            </div>
            <!--FIN DE UN CUADRITO DE PRESTAMO-->

*/