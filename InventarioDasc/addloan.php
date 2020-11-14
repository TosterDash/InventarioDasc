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
    <link rel="stylesheet" href="../styles/generalStyle.css">
    <link rel="stylesheet" href="../styles/loanStyle.css">
    <script 
        src="prestamo/JS/addloan.js">
    </script>
    <title></title>
</head>
    <body>
        <h1 class="center-title" >AÑADIR PRÉSTAMO</h1>
        <!--Form para agregar a inventario-->
        <form enctype="multipart/form-data">
            <div class="loan-container">
                <div class="loan-data float-left round-border">
                    <label class="input-margin" >ID de alumno o maestro</label>
                    <input class="input-margin" type="number" value="">
                    <!--Edificio-->
                    <label class="input-margin" >Edificio</label>
                    <select class="input-margin" name="loan-add-edif" id="loan-add-edif">
                        <option value="Macro">Macro</option>
                        <option value="DASC">Dasc</option>
                    </select>
                    <!--Salon-->
                    <label class="input-margin" >Salón</label>
                    <select class="input-margin" name="loan-add-clasroom" id="loan-add-clasroom">
                        <option value="CS1">CS1</option>
                        <option value="CS2">CS2</option>
                        <option value="CS3">CS3</option>
                    </select>
                    <!--Fecha del prestamo-->
                    <label class="input-margin" >Fecha salida</label>
                    <input class="input-margin" id="loan-add-datetime" type="datetime-local">
                    <label class="input-margin" >Fecha retorno</label>
                    <input class="input-margin" id="loan-add-datetime" type="datetime-local">
                </div>
            
                <!--Tabla donde puedes seleccionar todos los objetos que vas a pedir-->
                <div class="float-left">
                    <label>Selecciona todos los materiales que necesites</label>
                    <table class="">
                        <!--fila-->
                        <tr class="table-row">
                            <th>
                                <input type="checkbox" name="articleCheck">
                                <label>ARTICULO</label>
                            </th>
                        </tr>

                    </table>
                    <div>
                        <!--Boton para cancelar el prestamo-->
                        <a href="consloan.php" class="button">Cancelar</a>
                        <!--Boton para agregar el prestamo-->
                        <button id="loan-add-add"> Agregar</button>
                    </div>
                </div> 
            </div>
        </form> 
    </body>
</html>