
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
	<?php include ('header.html');?>
	<!--SITE STYLE SHEETS-->
	<link rel="stylesheet" href="../styles/normalize.css">
	<link rel="stylesheet" href="../styles/indexStyle.css">
	<link rel="stylesheet" href="../styles/generalStyle.css">
	<title>INICIO</title>
<head>
		
</head>
<body>
	<div class="slider">
		<ul>
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
	</div>
	<div class="btn-container" >
			<a href="map.php"><img src="../resources/1x/mapa_icon.png"></a> 
			<a href="inventario.php"><img src="../resources//1x/inven_icon.png"></a>
			<a href="prestamo-cons.php"><img src="../resources//1x/prest_icon.png"></a>	
		</div>	
</body>
</html>

