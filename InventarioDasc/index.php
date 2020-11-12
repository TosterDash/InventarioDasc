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
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<?php include ('header.html');?>
	<!--SITE STYLE SHEETS-->
	<script
        src="Jquery/Jquery.js">
    </script>
    <script src="../styles/popper.js"></script>
    <script src="../styles/bootstrap-4.5.3-dist/css/bootstrap.min.js"></script>
	<link rel="stylesheet" href="../styles/bootstrap-4.5.3-dist/css/bootstrap.min.css">
  	<script 
  		src="../styles/bootstrap-4.5.3-dist/js/bootstrap.min.js">
  	</script>

	<link rel="stylesheet" href="../styles/normalize.css">
	<link rel="stylesheet" href="../styles/indexStyle.css">
	<link rel="stylesheet" href="../styles/generalStyle.css">
	<link rel="stylesheet" href="../styles/hover.css">
	<title>INICIO</title>
<head>
</head>
<body>
	<div id="demo" class="carousel slide mt-9" data-interval="5000" data-ride="carousel">
  <!-- Indicators -->
  <ul class="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" class="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
  </ul>
  <div>
  	<!-- The slideshow -->
	  <div class="carousel-inner">
	    <div class="carousel-item active img-slider">
	      <img src="../resources/campus_mapa.jpg" alt="Campus UABCS">
	    </div>
	    <div class="carousel-item">
	      <img src="../resources/campus_mapa.jpg" alt="Campus UABCS">
	    </div>
	    <div class="carousel-item">
	      <img src="../resources/campus_mapa.jpg" alt="Campus UABCS">
	    </div>
	</div>
    <!-- The menu-->
  	<div class="menu">
		<div id="btn-cont" class="btn-container">
			<div class="menu-title hvr-float">
				<a class="center-title" href="map.php"><img src="../resources/1x/mapa_icon.png"><h2>MAPA</h2></a> 
			</div>
			<div class="menu-title hvr-float">
				<a class="center-title" href="consInventory.php"><img src="../resources/1x/inven_icon.png"><h2>INVENTARIO</h2></a>
			</div>
			<div class="menu-title hvr-float">
				<a class="center-title" href="prestamo-cons.php"><img src="../resources/1x/prest_icon.png"><h2>PRÉSTAMOS</h2></a>
			</div>				
		</div>	
	</div>
  </div>
</body>
</html>

