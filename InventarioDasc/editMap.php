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
    
    <title>Mapa | Administrar</title>
</head>
<body class="background-img">
    <div class="master-box">
        <!--CAJA DEL FORM-->
        <div class="row-form form-background">
            <!--FORM CON CAMPOS-->
            <form action="" class="add-field-box" id="form-edit">
                    <label for="" id="label-option">Opciones de gestión</label>
                    <select id="accion-select" name="accion-select">
                        <option disabled selected hidden value="">Seleccionar</option>
                        <option value="add">Agregar</option>
                        <option value="delete">Eliminar</option>
                        
                    </select>

                <div id="tipo-combobox">
                    <!--comboboggs-->
                    <label for="">Tipo</label>
                    <select id="tipo-select" name="tipo-select">
                        <option disabled selected hidden value="">Seleccionar</option>
                        <option value="edificio">Edificio</option>
                        <option value="aula">Aula</option>
                    </select>
                </div>

                <div id="nombre-placeholder">
                    <label id= "nombre-label" for="">Nombre</label>
                    <input type="text" id="nombre-map" name="nombre-map" placeholder="" require>
                </div>
                
                <div id="planta-combobox">
                    <!--comboboggs-->
                    <label for="">Planta</label>
                    <select id="planta-select" name="planta-select" placeholder="baja, alta">
                        <option value="BAJA">Baja</option>
                        <option value="ALTA">Alta</option>
                    </select>
                    </div>
                    <div id="edificio-combobox">
                    <!--comboboggs llenarlos con la bdd?-->
                    <label for="" id="label-edificio">Edificio</label>
                    
                    <select id="edificio-select" name="edificio-select" placeholder="En que edificio">
                        <option value="" disabled selected hidden >Seleccionar</option>
                    </select>
                    </div>
                    <div  id= "descripcion-label">
                    
                    </div>

                    <!--BOTON ACEPTAR-->
                    <input type="submit" name="boton-edificioPlanta" id="boton-edificioPlanta" value="Añadir">
            </form> 
        </div>
        <!--CAJA DEL MAPA-->
            <div class="disp-flexRow" >
                <div class="editmap-size">
                    <div class="row-form" id="map-box" class="center-text map-box">
                        <div class="editmap" id="mapid"></div>
                    </div>
                </div>
            </div>
    </div>
    <script src="mapa/JS/classAula.js"></script>
    <script src="mapa/JS/classEdificio.js"></script>
    <script src="mapa/JS/editorMap.js"></script>
</body>

</html>