
$(document).ready(function(){
  var rutaAjax = "prestamo/PHP/consloan.php";

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
            template += ``
            cont++;
        
        })
        $("#loan-tbody").html(template)
    }
  })
})
