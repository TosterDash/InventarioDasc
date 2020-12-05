<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <?php include ('header.php');?>

    <!--MAP RESOURCES-->
	<link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css" integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="crossorigin=""/>
	<script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js" integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew=="crossorigin=""></script>
	
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet.draw/0.4.2/leaflet.draw.css"/>
<script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet.draw/0.4.2/leaflet.draw.js"></script>
   
	<!--SITE STYLE SHEETS-->
	<link rel="stylesheet" href="../styles/normalize.css">
    <link rel="stylesheet" href="../styles/mapStyle.css">
    <link rel="stylesheet" href="../styles/generalStyle.css">

  <script src="header/mapFunction.js"></script>
    
    <title>AÑADIR AL MAPA</title>
</head>
<body class="background-img">
    <div class="master-box">
        <!--CAJA DEL FORM-->
        <div class="row-form form-background">
            <!--FORM CON CAMPOS-->
            <form action="" class="add-field-box" id="form-edit">
                    <label for="" id="label-option">Opciones de gestión</label>
                    <select id="accion-select" name="accion-select">
                        <option value="">SELECCIONE UNA ACCIÓN</option>
                        <option value="add">Agregar Edificio</option>
                        <option value="delete">Eliminar Edificio</option>
                        <option value="mod">Modificar Edificio</option>
                    </select>
                <div id="nombre-placeholder">
                    <label id= "nombre-label" for="">NOMBRE</label>
                    <input type="text" id="nombre-map" name="nombre-map" placeholder="Escriba un nombre para Edificio/Aula" require>
                </div>
                <div id="tipo-combobox">
                    <!--comboboggs-->
                    <label for="">TIPO</label>
                    <select id="tipo-select" name="tipo-select">
                        <option value="">SELECCIONE UNA OPCIÓN</option>
                        <option value="edificio">EDIFICIO</option>
                        <option value="aula">AULA</option>
                    </select>
                    </div>
                <div id="planta-combobox">
                    <!--comboboggs-->
                    <label for="">PLANTA</label>
                    <select id="planta-select" name="planta-select" placeholder="baja, alta">
                        <option value="BAJA">BAJA</option>
                        <option value="ALTA">ALTA</option>
                    </select>
                    </div>
                    <div id="edificio-combobox">
                    <!--comboboggs llenarlos con la bdd?-->
                    <label for="" id="label-edificio">EDIFICIO</label>
                    
                    <select id="edificio-select" name="edificio-select" placeholder="En que edificio">
                        <option value="" >SELECCIONE UNA OPCIÓN</option>
                    </select>
                    </div>
                    <div  id= "descripcion-label">
                    
                    </div>

                    <!--BOTON ACEPTAR-->
                    <input type="submit" name="boton-edificioPlanta" id="boton-edificioPlanta" value="Insertar Poligono">
            </form> 
        </div>
        <!--CAJA DEL MAPA-->
            <div class="disp-flexRow" >
                <div style="background-color: pink;" class="map-size">
                    <div class="row-form" id="map-box" class="center-text map-box">
                        <div id="mapid"></div>
                    </div>
                </div>
            </div>
    <script src="mapa/JS/classAula.js"></script>
    <script src="mapa/JS/classEdificio.js"></script>
    <script src="mapa/JS/editorMap.js"></script>
</body>

</html>