
$(document).ready(function(){
    var rutaAjax = "login/PHP/login.php"
    var option;


    $('#login-form').submit(function (e){
		e.preventDefault();
        var username = $('#username').val();
        var password = $('#password').val();
        $.ajax({
            url: rutaAjax,
            type: 'POST',
            data: {username,password},
            success: function(response){
                switch(response){
                    case "error":
                        alertify.error("Ha ocurrido un error...");
                    break;

                    case "incorrecto":
                        alertify.error("Datos incorrectos");
                    break;

                    case "success":
                        location.href = "../index.php";
                    break;

                    default:
                        console.log(response);
                    break;
                }
                
            }
        })
       
    });
    $('#login-cancel').on('click',function(){
        location.href = "../index.php";
    });


    
    
});

