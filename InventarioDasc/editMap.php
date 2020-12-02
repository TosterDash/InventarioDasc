<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <?php include ('header.html');?>

    <!--MAP RESOURCES-->
	<link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css" integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="crossorigin=""/>
	<script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js" integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew=="crossorigin=""></script>
	
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet.draw/0.4.2/leaflet.draw.css"/>
<script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet.draw/0.4.2/leaflet.draw.js"></script>
   
	<!--SITE STYLE SHEETS-->
	<link rel="stylesheet" href="../styles/normalize.css">
    <link rel="stylesheet" href="../styles/mapStyle.css">
    <link rel="stylesheet" href="../styles/generalStyle.css">

 <!--   <script src="header/mapFunction.js"></script>-->
    
    <title>AÑADIR AL MAPA</title>
</head>
<body class="background-img">

    <div class="disp-flexRow">
        <!--Barra de busqueda-->
        <div class="disp-flexCol cons-nav-bar row-cons">
            <div class="row-form cons-col-size"> 
                <label for="">Opciones de gestión</label>
                <select id="accion-select">
                    <option value="">SELECCIONE UNA ACCIÓN</option>
                    <option value="add">Agregar Edificio</option>
                    <option value="delete">Eliminar Edificio</option>
                    <option value="mod">Modificar Edificio</option>
                </select>
            </div >
        </div>
        <!--Barra de busqueda-->
    <div class="">
        <form action="" class="add-field-box" id="form-edit"> 
            <div class="form-background">
                <label id= "nombre-label" for="">NOMBRE</label>
                <input type="text" id="nombre-map" placeholder="Escriba un nombre para Edificio/Aula">
                <label for="">TIPO</label>
                <select id="tipo-select">
                    <option value="">SELECCIONE UNA OPCIÓN</option>
                    <option value="edificio">EDIFICIO</option>
                    <option value="aula">AULA</option>
                </select>

                <label for="">PLANTA</label>
                <select id="planta-select" placeholder="baja, alta">
                    <option value="BAJA">BAJA</option>
                    <option value="ALTA">ALTA</option>
                </select>
                
                <label for="" id="label-edificio">EDIFICIO</label>
                
                <select id="edificio-select" placeholder="En que edificio">
                    <option value="" >SELECCIONE UNA OPCIÓN</option>
                </select>

                <label id= "descripcion-label" for="">Seleccione un poligono para eliminarlo</label>

                <!--BOTON ACEPTAR-->
                <input type="submit" name="" id="boton-edificioPlanta" value="Insertar Poligono">
            </div>
        </form> 

        <!--CAJA DEL MAPA-->  
        <div class=" " >
            <div style="background-color: pink; " class="map-size">
                <div class="row-form" id="map-box" class="center-text map-box">
                    <div id="mapid"></div>
                </div>
            </div>
        </div>
        <!--CAJA DEL MAPA-->
        </div>
    </div>    
        
        

    </div>

  
    <script src="mapa/JS/classAula.js"></script>
    <script src="mapa/JS/classEdificio.js"></script>
    <script src="mapa/JS/editorMap.js"></script>
</body>

</html>