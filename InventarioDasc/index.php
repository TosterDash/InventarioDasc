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
	<div class="menu-container">
		<div class="start-icons">
			<a href="map.php" class="space"><img src="../resources/Mapa_icono.png"></a>
		 	<a href="inventario.html" class="space"><img src="../resources/Inventario_icono.png"></a>
		 	<a href="index.php" class="space"><img src="../resources/Prestamo_icono.png"></a>
		</div>
		<div class="start-titles">
			<h3 class="space">INVENTARIO</h3>
			<h3 class="space">INVENTARIO</h3>
			<h3 class="space">INVENTARIO</h3>
		</div>
	</div>
</body>
</html>