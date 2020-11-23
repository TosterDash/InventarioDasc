$(document).ready(function(){
    //Crear tabla de objetos
    var rutaAjax = "prestamo/PHP/addloanDB.php";
    var rutaCB1 = "prestamo/PHP/addloanCB1.php";
    var rutaCB2 = "prestamo/PHP/addloanCB2.php";
    var rutaAddLoanIns = "prestamo/PHP/adloanins.php"
    

    //Guardar variable option
    /*var option = "table";
    $.ajax({
        url: rutaOption,
        type: 'POST',
        data: {option},
        success: function(response){
            console.log(response);
        }

    })*/
    var option = "table";
    $.ajax({
        url: rutaAjax,
        type: 'GET',
        data: {option},
        success: function(response){
            console.log(response)
            var cons = JSON.parse(response);
            var template = "";
            var cont=0;

            cons.forEach(task =>{
                template += `<tr class="table-row">
                                <th>
                                    <td class="loan-cb"><input id="loan-add-cell" type="checkbox" name="articleCheck"><td>
                                    <td class="loan-id"><label>${task.idObjeto}</label><td>
                                    <td class="loan-obj"><label>${task.nombre}</label><td>
                                </th>
                            </tr>`
                cont++;
            
            })
            $("#loan-tbody").html(template)
        }
    })
    
    var option = "CB1";
        $.ajax({
            url: rutaAjax,
            type: 'GET',
            data: {option},
            success: function(response){  
            console.log(response)
                var cons = JSON.parse(response);
                var template = "";
                var cont=0;
                
            
                cons.forEach(task =>{
                    template += `<option value="${task.Nombre}">${task.Nombre}</option>`
                    cont++;
            
                })
                $("#loan-add-edif").html(template)
        }
    })

    //Evento on change cb edificio
    $(document).on('change', '#loan-add-edif',function(){
        var option = "CB2";
        var building = $('#loan-add-edif').val();
        $.ajax({
            url: rutaAjax,
            type: 'GET',
            data: {option, building},
            success: function(response){
                console.log(response)
                var cons = JSON.parse(response);
                var template = "";
                var cont=0;                        
                cons.forEach(task =>{
                    template += `<option value="${task.nombreAula}">${task.nombreAula}</option>`
                    cont++;
                
                })
                $("#loan-add-clasroom").html(template)
            }
        })

        
    
    
    
    


    

        

        
    });

    //Evento on click agregar
    $(document).on('click', '#loan-add-add',function(){
        var building = $('#loan-add-edif').val();
        var classroom = $('#loan-add-clasroom').val();
        var exitDate = $('#loan-add-datetime').val();
        var returnDate = $('#loan-add-datetime-return').val();
        var objects = [];
        
        var rows = $("#loan-tbody").find("tr");
        for(i=0; i<rows.length; i++){
            var cbCell = $(rows[i]).find(".loan-cb > input");
            var cells = $(rows[i]).find(".loan-id").text();
            var checkbox = cbCell[0].checked
            if (cbCell[0].checked){
                console.log(cells)
                objects.push(cells);
            }
            
        }
        
        
    $.ajax({
        url: rutaAddLoanIns,
        type: 'POST',
        data: {building, classroom, exitDate, returnDate, objects},
        success: function(response){
            console.log(response);
        }
    })

    });

    

    $(document).on("submit", "#loan-add-form", function(e){
        e.preventDefault();
    });
    

    
});