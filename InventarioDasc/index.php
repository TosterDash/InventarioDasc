
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
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<?php include ('header.html');?>
	<!--SITE STYLE SHEETS-->
	<link rel="stylesheet" href="../styles/normalize.css">
	<link rel="stylesheet" href="../styles/indexStyle.css">
	<link rel="stylesheet" href="../styles/hover.css">
	<link rel="stylesheet" href="../styles/generalStyle.css">
	<title>INICIO</title>
<head>
		
</head>
<body>
	<div class="slider">
		<ul class="img-slider">
			<li>
				<img src="../resources/campus_mapa.jpg" alt="">
			</li>
			<li>
				<img src="../resources/campus_mapa.jpg" alt="">
			</li>
			<li>
				<img src="../resources/campus_mapa.jpg" alt="">
			</li>
			<li>
			<img src="../resources/campus_mapa.jpg" alt="">
			</li>
		</ul>
		<div class="menu">
			<div class="btn-container">
				<div class="menu-title hvr-float">
					<a  href="map.php"><img src="../resources/1x/mapa_icon.png"><h2>MAPA</h2></a> 
				</div>
				<div class="menu-title hvr-float">
					<a  href="inventario.php"><img src="../resources/1x/inven_icon.png"><h2>INVENTARIO</h2></a>
				</div>
				<div class="menu-title hvr-float">
					<a  href="prestamo-cons.php"><img src="../resources/1x/prest_icon.png"><h2>PRÉSTAMOS</h2></a>
				</div>				
			</div>	
		</div>
	</div>
</body>
</html>

