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
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!--JQUERY SCRIPT REFRESCAR PAGINA-->
	<script
	  src="https://code.jquery.com/jquery-3.5.1.js"
	  integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc="
	  crossorigin="anonymous">
	</script>

	<!--SITE STYLE SHEETS-->
	<link rel="stylesheet" href="../styles/login.css">
	<link rel="stylesheet" href="../styles/normalize.css">
<head>
<?php include ('header.html');?>
</head>

<body>
<div>
	<div class="form-style"> 
		<h1 class="center-text" >LOGIN</h1>
			<form class="login-style" id="login-form"> 
				<label for="username">USUARIO</label><br>
				<input type="text" name="username" id="username">
				<label for="username">CONTRASEÑA</label><br>
				<input type="password" name="password" id="password">
				<input type="submit" name="" id="login-submit">
				<div id="error" name="error"></div>
			</form>
			<a href="" class="center-text">¿No tienes una cuenta? Crea una</a>
	</div>
</div>
    
</body>
	
</html>

<script type="text/javascript">
	$(document).ready(function() {


	$('#login-form').submit(function (e){
		e.preventDefault();
	  
	    var username = $('#username').val();
	    var password = $('#password').val();
	  
	  $.post('PHP/login.php',{username,password} ,function(response){
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


});
</script>