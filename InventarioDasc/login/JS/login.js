var rutaAjax = "login/PHP/login.php"
var option;

$(document).ready(function(){

    $('#login-form').submit(function (e){
        option = "login"
		e.preventDefault();
	    var username = $('#username').val();
        var password = $('#password').val();
        if(username==""  || password == ""){
            console.log("Rellena los campos");
            
        }else{
            console.log(username+password)
            $.ajax({
                url: rutaAjax,
                type: 'POST',
                data: {option,username,password},
                success: function(response){
                    console.log(response);
                    var cons = JSON.parse(response);
                    var template = ``;
                    var cont = 0;
                    if(response == "[]"){
                        console.log("no hay coincidncias");
                        $('#login-form').trigger('reset');
                    }else{
                        cons.forEach(task =>{
                            template += ``;
                            console.log("Usuario "+task.usuario + " password "+ task.password);
                            cont++;
                        })
                        
                    }
                    
                   
                }
            })
        }
        

    });
    $('#login-cancel').on('click',function(){
        location.href = "index.php";
    });
    
});