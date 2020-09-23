<?php
/*session_start();

$nombre = $_SESSION['nombre'];

if(!isset($_SESSION['nombre']))
{
	
	header("Location:http://localhost/colection/InventarioDasc/login-registro.php");
	

}
*/

?>



<!DOCTYPE html>
<html>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<!--SITE STYLE SHEETS-->
	<link rel="stylesheet" href="../styles/normalize.css">
	<link rel="stylesheet" href="../styles/indexStyle.css">
	<title>INICIO</title>
<head>
	<?php include ('header.html');?>
</head>
<body>
	<div class="start-icons">
		<div>
			<a href="map.php"><img src="../resources/Mapa_icono.png"></a>
	 	<a href="inventario.html"><img src="../resources/Inventario_icono.png"></a>
	 	<a href="index.php"><img src="../resources/Prestamo_icono.png"></a>
	 	</div>
	</div>
</body>
</html>