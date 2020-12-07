<?php
	session_start();
	error_reporting(0);


	if(isset($_SESSION['user']))
	{
		
		header("Location: index.php");
		

	}

?>
<!--SITE STYLE SHEETS-->
<!DOCTYPE html>
<html>
<head>
	
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	
	<link rel="stylesheet" type="text/css" href="../styles/bootstrap.min.css">
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
	

	<link rel="stylesheet" href="../styles/normalize.css">
	<link rel="stylesheet" href="../styles/headerFooterStyle.css">
	<link rel="stylesheet" href="../styles/generalStyle.css">
	<link rel="stylesheet" href="alertify/css/alertify.css">
	<script src="alertify/alertify.js"></script>
</head>
<body>
	<div class="header-style">
		<div>
			<a id="pc-img" style="cursor: default;"><img src="resources/uabcs_pc_img.png" class="" alt=""></a>
			<a id="tablet-img"style="cursor: default;"><img src="resources/uabcs_mobile_img.png" class="mobile-size" alt=""></a>
		</div>
		 
	</div>

	
	<script src="header/header.js"></script>
</body>
</html>


