<?php
	error_reporting(0);
	session_start();

	$nombre = $_SESSION['user'];

	if(!isset($_SESSION['user']))
	{
		
		header("Location: loginRegistro.php");
		die();
	}

?>
<!--SITE STYLE SHEETS-->
<!DOCTYPE html>
<html>
<head>
	
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	
	<link rel="stylesheet" type="text/css" href="styles/bootstrap.min.css">
	<script src="Jquery/Jquery.js"></script>
	<script type="text/javascript" src="styles/popper.js"></script>
	<script type="text/javascript" src="styles/bootstrap.min.js"></script>

	<link rel="stylesheet" href="styles/normalize.css">
	<link rel="stylesheet" href="styles/headerFooterStyle.css">
	<link rel="stylesheet" href="styles/generalStyle.css">

	<link rel="stylesheet" href="alertify/css/alertify.css">
	<script src="alertify/alertify.js"></script>
	
	<script src="header/notificationFunction.js"></script>

	<script type="text/javascript" src="inventario/JS/inventoryFunction.js"></script>
	

	<link rel="stylesheet" href="styles/normalize.css">
	<link rel="stylesheet" href="styles/headerFooterStyle.css">
	<link rel="stylesheet" href="styles/generalStyle.css">
	<link rel="stylesheet" href="alertify/css/alertify.css">
	<script src="alertify/alertify.js"></script>
	

</head>
<body>
	<div class="header-style">
		<div>
			<a id="pc-img" href="index.php"><img src="resources/uabcs_pc_img.png" class="" alt=""></a>
			<a id="tablet-img" href="index.php"><img src="resources/uabcs_mobile_img.png" class="mobile-size" alt=""></a>
		</div>
		<div id="menuHeader" class="header-menu">
			<a id="home-menu" class="menu-list item-menu" href="index.php">INICIO</a>

			<!--item de menu-->
			<div class="">
			    <a id="inventory-menu" class="menu-list dropdown-toggle item-menu" data-toggle="dropdown">INVENTARIO</a>
			    <div class="dropdown-menu">
				    <a class="dropdown-item" href="consinventory.php">CONSULTAR INVENTARIO</a>
				    <a class="dropdown-item" href="addInventory.php">ADMINISTRAR INVENTARIO</a>
			    </div>
			</div>
	    <!--item de menu-->
	    <!--item de menu-->
	    <div class=" ">
		    <a id="loan-menu" class="menu-list dropdown-toggle item-menu" data-toggle="dropdown">PRÉSTAMO</a>
		    <div class="dropdown-menu">
			    <a class="dropdown-item" href="consloan.php">CONSULTAR PRÉSTAMOS</a>
			    <a class="dropdown-item" href="addloan.php">ADMINISTRAR PRÉSTAMOS</a>
		    </div>
		</div>
	    <!--item de menu--> 

	    <!--item de menu-->
		<div class=" ">
		    <a id="map-menu" class="menu-list dropdown-toggle item-menu" data-toggle="dropdown">MAPA</a>
		    <div class="dropdown-menu">
		    <a class="dropdown-item" href="map.php">CONSULTAR MAPA</a>
		    <a class="dropdown-item" href="editMap.php">ADMINISTRAR MAPA</a>
		    </div>
		</div>
	    <!--item de menu--> 
	     <script>
			$(document).ready(function(){

			getNotificationNum(true);
			});
			
		</script>
	    <!--item de menu-->
	     <div class="notification" id="notification">
		    <a class="menu-list dropdown-toggle item-menu" data-toggle="dropdown"><img style="height: 30px;" src="resources/notif_icon.png"></a>
		    <div class="dropdown-menu notification-dropdown">
                <div class="notification-area">
                	
                </div>
		    </div>
		</div>
	    <!--item de menu-->  
	    <!--item de menu-->
			<div class="">
			    <a id="inventory-menu" class="menu-list dropdown-toggle item-menu" data-toggle="dropdown"><img style="height: 30px;" src="resources/login_icon.png"></a>
			    <div class="dropdown-menu">
				    <a class="dropdown-item" href="login/PHP/cerrar.php">SALIR</a>
			    </div>
			</div>
	    <!--item de menu-->

		</div>
	</div>

	
	<script src="header/header.js"></script>
</body>
</html>


