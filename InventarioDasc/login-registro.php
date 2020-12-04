<?php
	/*session_start();
	error_reporting(0);

	$nombre = $_SESSION['nombre'];

	if(isset($_SESSION['nombre']))
	{
		
		header("Location:http://localhost/colection/InventarioDasc/index.php");
		

	}
*/
?>


<html lang="en">
<html>
	<title>LOGIN|REGISTRO</title>
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <?php include ('header.html');?>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!--JQUERY SCRIPT REFRESCAR PAGINA-->
    <script
    src="Jquery/Jquery.js">
    </script>
    
    <link rel="stylesheet" type="text/css" href="../styles/bootstrap.min.css">
	<script src="Jquery/Jquery.js"></script>
	<script type="text/javascript" src="../styles/popper.js"></script>
	<script type="text/javascript" src="../styles/bootstrap.min.js"></script>
	<script src="login/JS/login.js"></script>

	<link rel="stylesheet" href="../styles/normalize.css">
	<link rel="stylesheet" href="../styles/generalStyle.css">

	<link rel="stylesheet" href="alertify/css/alertify.css">
	<script src="alertify/alertify.js"></script>
	<link rel="stylesheet" href="../styles/loginStyle.css">
<head>
</head>

<body class="background-img">

	<div class="form-background form-size"> 
		<h1 class="center-title">LOGIN</h1>
			<form class="" id="login-form"> 
				<label >USUARIO</label>
				<input type="text" name="username" id="username">
				<label >CONTRASEÑA</label>
				<input type="password" name="password" id="password">
		        <div class="button-form">
		            <div class="auto-margin">
		            	<!--Boton para cancelar el prestamo-->
                        <button id="login-cancel" >Cancelar</button>
		                <input type="submit" name="" id="login-submit">
		            </div>
		        </div>
			</form>
	</div>

    
</body>
	
</html>

<script type="text/javascript">
	/*$(document).ready(function() {


	$('#login-form').submit(function (e){
		e.preventDefault();
	  
	    var username = $('#username').val();
	    var password = $('#password').val();
	  
	  $.post('login/PHP/login.php',{username,password} ,function(response){
	  	 if (response == username) {
	  	 	console.log(response);
	  	 	$(location).attr('href','index.php');
	  	 }else{
	  	 	console.log("Datos incorrectos");
	  	 	$('#error').html(`<h2>Datos Incorrectos</h2> `);
	  	 	$('#login-form').trigger('reset');
	  	 }
	  });
	});
});*/
</script>