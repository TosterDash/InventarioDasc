<!DOCTYPE html>
<html>
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<?php include ('header.html');?>
	<script src="inventario/JS/notificationBoard.js"></script>
	<link rel="stylesheet" href="../styles/normalize.css">
	<link rel="stylesheet" href="../styles/hover.css">
	<title>NOTIFICACIONES | INVENTARIO</title>
<head>
</head>
<body>
	
	<div>
		<label>Mostrar:</label>
		<select class="" name="" id="">
			<option>Todos</option>
			<option>Solo Mantenimiento por hacer</option>
			<option>Solo Prestamos caducados</option>
			<option>Solo Consumibles por agotar</option>
		</select>
	</div>


	<div id="div-table"><!--Tabla de consulta-->
		<table id="table-notification" class="table">
			<thead class="thead-light">
				<tr>
					<th>Asunto</th>
					<th>Descripción del asunto</th>
				</tr>
			</thead>
			<tbody id="tbody-notification">
				
			</tbody>
						
		</table>
	</div>
</body>
</html>

