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
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <?php include ('header.html');?>


	
	<!--MAP RESOURCES-->
	<link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css" integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="crossorigin=""/>
	<script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js" integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew=="crossorigin=""></script>
	<!--SITE STYLE SHEETS-->
	<link rel="stylesheet" href="../styles/headerFooterStyle.css">
	<link rel="stylesheet" href="../styles/normalize.css">
	<link rel="stylesheet" href="../styles/generalStyle.css">
	<link rel="stylesheet" href="../styles/mapStyle.css">
	
	
<head>
<script src="mapa/JS/mapFunction.js"></script>
<script src="mapa/JS/map.js"></script>	
</head>
<body>
	<!--MENU Y BARRA DE BUSQUEDA-->
	<div>
		<!--CAJA DEL MAPA-->
		<div class="row-form cons-col" id="map-box" class="center-text map-box">
			<div id="mapid" class=""></div>
		</div>
		<!--CAJA DEL MENÚ-->
		<div class="row-form cons-col">
			<select id="map-piso" placeholder="Planta">
				<option value="1" >PLANTA BAJA</option>
				<option value="2" >PLANTA ALTA</option>
			</select>
			<div id="display-info-box" class="display-info-box">
			  <!--tr= filas, td=columnas td=???-->
			  <!--PRODUCTO UNICO-->
			<table id="info-table" class="info-table">
				<thead id="table-equipo" class="table">
					<tr class="thead-light">
                        <th>ID Producto</th>
                        <th>Producto</th>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                        <th></th>
                                
                    </tr>
        		</thead>
        		<tbody id="tbody-info"></tbody>
			</table>
			</div>
		</div>
		
	</div>
</body>


</html>




