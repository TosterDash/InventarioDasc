<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!--P5 LIBRARY-->
	
	<!-- /<script src="sketch.js"></script> -->
    <!--JQUERY SCRIPT REFRESCAR PAGINA-->
    <script
      src="https://code.jquery.com/jquery-3.5.1.js"
      integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc="
      crossorigin="anonymous">
    </script>
	
	<!--MAP RESOURCES-->
	<link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css" integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="crossorigin=""/>
	<script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js" integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew=="crossorigin=""></script>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet.draw/0.4.2/leaflet.draw.css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet.draw/0.4.2/leaflet.draw.js"></script>
    
	<!--SITE STYLE SHEETS-->
	<link rel="stylesheet" href="../styles/normalize.css">
    <link rel="stylesheet" href="../styles/editMapStyle.css">
    
    <title>AÑADIR AL MAPA</title>
    <?php include ('header.html');?>
</head>
<body>
    <div class="master-box">
        <!--CAJA DEL FORM-->
        <div class="add-field-box">
            <!--FORM CON CAMPOS-->
            
            <form action="" class="add-field-box" id="form-edit">
                    
                    <div id="accion-combobox">
                        <label for="">ACCIÓN</label>
                            <select id="accion-select">
                                <option value="">SELECCIONE UNA ACCIÓN</option>
                                <option value="add">Agregar Edificio</option>
                                <option value="delete">Eliminar Edificio</option>
                                <option value="mod">Modificar Edificio</option>
                            </select>
                        
                    </div>

                    <div id="nombre-placeholder">
                    <label id= "nombre-label" for="">NOMBRE</label>
                    <input type="text" id="nombre-map" placeholder="Escriba un nombre para Edificio/Aula">
                    </div>

                    <div id="tipo-combobox">
                    <!--comboboggs-->
                    <label for="">TIPO</label>
                    <select id="tipo-select">
                        <option value="">SELECCIONE UNA OPCIÓN</option>
                        <option value="edificio">EDIFICIO</option>
                        <option value="aula">AULA</option>
                    </select>
                    </div>

                    <div id="planta-combobox">
                    <!--comboboggs-->
                    <label for="">PLANTA</label>
                    <select id="planta-select" placeholder="baja, alta">
                        <option value="BAJA">BAJA</option>
                        <option value="ALTA">ALTA</option>
                    </select>
                    </div>


                    <div id="edificio-combobox">
                    <!--comboboggs llenarlos con la bdd?-->
                    <label for="" id="label-edificio">EDIFICIO</label>
                    
                    <select id="edificio-select" placeholder="En que edificio">
                        <option value="" >SELECCIONE UNA OPCIÓN</option>
                    </select>
                    </div>

                    <label id= "descripcion-label" for="">Seleccione un poligono para eliminarlo</label>

                    <!--BOTON ACEPTAR-->
                    <input type="submit" name="" id="boton-edificioPlanta" value="Insertar Poligono">

                    
            </form> 

        </div>
        <!--CAJA DEL MAPA-->
        
        <div id="edit-map-box" class="edit-map-box">
            <div id="edit-map-container" class="edit-map-container">
            
            </div>
        </div>
        <script src="JS/classAula.js"></script>
        <script src="JS/classEdificio.js"></script>
        <script src="JS/editorMap.js"></script>
        
    </div>
</body>

</html>