
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
	<title>INICIO</title>
<head>
	<?php include ('header.html');?>
</head>
<body>
	<div>
		<button>
			MAPA
		</button>
		<button>
			INVENTARIO
		</button>
		<button>
			PRESTAMOS
		</button>
	</div>
</body>
	
</html>