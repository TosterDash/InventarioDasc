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
    <?php include ('header.php');?>

	<!--MAP RESOURCES-->
	<link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css" integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="crossorigin=""/>
	<script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js" integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew=="crossorigin=""></script>
	<!--SITE STYLE SHEETS-->
	<link rel="stylesheet" href="../styles/headerFooterStyle.css">
	<link rel="stylesheet" href="../styles/normalize.css">
	<link rel="stylesheet" href="../styles/generalStyle.css">
	<link rel="stylesheet" href="../styles/mapStyle.css">
	
	
<head>
<script src="mapa/JS/map.js"></script>	
</head>
<body>
	<!--MENU Y BARRA DE BUSQUEDA-->
	<div  class="map-container">
			<!--Barra de busqueda-->
            <div class="disp-flexCol cons-nav-bar row-cons">
               <div class="resp-disp">
		           	<div class="row-form search-col"> 
		                <label>Edificio:</label>
		                <select id="map-edificio" placeholder="Planta">
							
						</select>
						<label>Planta:</label>
		                <select id="map-piso" placeholder="Planta">
							
						</select>
		            </div >
		            <div class="row-form search-col">
		                <div class="disp-flexRow">
		                    <input type="text" placeholder="Buscar..." id="search" class="search-input">
		                </div>
		            </div>
               </div>
                
                <div class=" row-form search-col">
                    <label>Mostrar por:</label>
                    <select name="combobox-category" id="combobox-category">
                    </select>
                </div>
            </div>
            <!--Barra de busqueda-->

	       	<div class="map-container">
				<!--CAJA DEL MAPA-->
				<div class="map-container" >
					<div class="map-size">
						<div class="row-form" id="map-box" class="center-text map-box">
							<div id="mapid"></div>
						</div>
					</div>
				<!--CAJA DEL MAPA-->

				<!--CAJA DE INFORMACIÓN-->
					<div class="info-size">
						<div class="background-c">
							<div class="disp-flexRow">
								<h2 class="center-title">Edificio: </h2>
								<h2 class="map-title center-title" id="name-edif"> </h2>
							</div>
							
							<div class="disp-flexRow">
								<h2 class="center-title">Planta: </h2>
								<h2 class="map-title center-title" id="name-planta"> </h2>	
							</div>
							
							<div class="disp-flexRow">
								<h2 class="center-title">Aula: </h2>
								<h2 class="map-title center-title" id="name-aula"> </h2>	
							</div>
							
							<div >
								<table class="map-table">
										<tr class="map-tableTitle">
										    <th>Nombre</th>
										    <td>Laptop acer</td>
										</tr>
										<tr class="map-tableTitle">
										   <th>Descripción</th>
										   <td>Laptop acer</td>
										</tr>
										<tr class="map-tableTitle">
										   <th>Cantidad</th>
										   <td>Laptop acer</td>
										</tr>

								</table>
							</div>

						</div>
						
					</div>
					<!--CAJA DE INFORMACIÓN-->
				</div>
				<div class="table-container">
				
			</div>
			</div>

			
	</div>
</body>

<script src="header/mapFunction.js"></script>
</html>



<!-- 

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
-->
