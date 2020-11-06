<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <?php include ('header.html');?>
    <!--P5 LIBRARY-->
	
	<!-- /<script src="sketch.js"></script> -->
    <!--JQUERY SCRIPT REFRESCAR PAGINA-->
    <script
    src="Jquery/Jquery.js">
    </script>
    <script src="../styles/popper.js"></script>
    <script src="../styles/bootstrap-4.5.3-dist/css/bootstrap.min.js"></script>
    <link rel="stylesheet" href="../styles/bootstrap-4.5.3-dist/css/bootstrap.min.css">
    <script 
        src="../styles/bootstrap-4.5.3-dist/js/bootstrap.min.js">
    </script>
    
	<!--SITE STYLE SHEETS-->
	<link rel="stylesheet" href="../styles/normalize.css">
    <link rel="stylesheet" href="../styles/editMapStyle.css">
    
    <title>AÑADIR AL MAPA</title>
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
        <script src="mapa/JS/classAula.js"></script>
        <script src="mapa/JS/classEdificio.js"></script>
        <script src="mapa/JS/editorMap.js"></script>
        
    </div>
</body>

</html>