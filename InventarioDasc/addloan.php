<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <?php include ('header.html');?>
    <script
    src="Jquery/Jquery.js">
    </script>
    <script src="../styles/popper.js"></script>
    <script src="../styles/bootstrap-4.5.3-dist/css/bootstrap.min.js"></script>
    <link rel="stylesheet" href="../styles/bootstrap-4.5.3-dist/css/bootstrap.min.css">
    <script 
        src="../styles/bootstrap-4.5.3-dist/js/bootstrap.min.js">
    </script>
    <link rel="stylesheet" href="../styles/normalize.css">
    
    <title></title>
</head>
    <body>
        <form><!--Form para agregar a inventario-->
            <label for="loan-add-ident">Identificador:</label><br><!--Identificador del prestamo-->
            <input type="text" id="loan-add-ident" name="loan-add-ident" value=""><br>
            <select name="loan-add-edif" id="loan-add-edif"><!--Edificio-->
                <option value="Macro">Macro</option>
                <option value="DASC">Dasc</option>
            </select>
            <select name="loan-add-clasroom" id="loan-add-clasroom"><!--Salon-->
                <option value="CS1">CS1</option>
                <option value="CS2">CS2</option>
                <option value="CS3">CS3</option>
            </select>
            <input id="loan-add-datetime" type="datetime-local"><!--Fecha del prestamo-->
        </form>
        <div><!--Tabla donde puedes seleccionar todos los objetos que vas a pedir-->
            <h1>Selecciona todos los materiales que necesites</h1>
            <div>cosa lista rara</div>
        </div>
        <div>
            <button id="loan-add-cancel"> Cancelar</button><!--Boton para cancelar el prestamo-->
            <button id="loan-add-add"> Agregar</button><!--Boton para agregar el prestamo-->
        </div>
    </body>
</html>