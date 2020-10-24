<!--
-----CODIGO GENERAL----
código identado

--COMENTARIOS--
comentarios arriba y son para explicar para que sirve cada variable,
libreria, métodos.

-----HTML/CSS---
clases se identifican con un guion entre palabras y todo en minúsculas: mi-clase
identificadores se identifican con un guion entre palabras y todo en minúsculas: mi-id
clase y ID deben tener el mismo nombre
multimedia van en la carpeta "resources"
hojas de estilo van en carpeta "styles"

----JAVASCRIPT----
nombres de variables, métodos y clases con camelCase si es mas de una palabra
describir cada método
-->

<!DOCTYPE html>
<html>
	<title>MAPA</title>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!--JQUERY SCRIPT REFRESCAR PAGINA-->
	<script
	  src="https://code.jquery.com/jquery-3.5.1.js"
	  integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc="
	  crossorigin="anonymous">
	</script>
	<!--P5 LIBRARY	<script src="../libraries/p5.js"></script>
	<script src="../libraries/p5.dom.js"></script>
	<script src="../libraries/p5.sound.js"></script> -->

	
	<!--MAP RESOURCES-->
	<link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css" integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="crossorigin=""/>
	<script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js" integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew=="crossorigin=""></script>
	<!--SITE STYLE SHEETS-->
	<link rel="stylesheet" href="../styles/headerFooterStyle.css">
	<link rel="stylesheet" href="../styles/normalize.css">
	<link rel="stylesheet" href="../styles/mapPageStyle.css">
	
<head>
	<?php include ('header.html');?>
</head>
<body>
	<!--MENU Y BARRA DE BUSQUEDA-->
	<div class="master-box">
		<!--CAJA DEL MENÚ-->
		<div class="info-box center-text" >
			<h3>INFORMACIÓN</h3>
			
			<select id="map-piso" placeholder="En que piso">
				
				<option value="BAJA" >PLANTA BAJA</option>
				<option value="ALTA" >PLANTA ALTA</option>
			</select>
			
				<div id="display-info-box" class="display-info-box ">
				  <!--tr= filas, td=columnas td=???-->
				  <!--PRODUCTO UNICO-->
				<table id="info-table" class="info-table">
					<thead>
              			<tr>
                			<td>Nombre</td>
                			<td>Marca</td>
                			<td>Modelo</td>
                			<td>Mantenimiento</td>
                			<td>Descripcion</td>
              			</tr>
            		</thead>
            		<tbody id="info-row"></tbody>
					
					
				</table>
				<br>
				
			  	</div>
		</div>

		<!--CAJA DEL MAPA-->
		<div id="map-box" class="center-text map-box">
			<h3>EDIFICIO</h3>
			<div id="map-container" class="map-container">
				
			</div>
	
		</div>
	</div>
</body>
	<script src="JS/classEdificio.js"></script>
	<script src="JS/classAula.js"></script>
	<script src="JS/map.js"></script>
</html>
