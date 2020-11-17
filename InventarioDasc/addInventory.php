<html>
    <title>AÑADIR ARTICULO | Inventario</title>
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
    <link rel="stylesheet" href="alertify/css/alertify.css">
    <link rel="stylesheet" href="../styles/generalStyle.css">
    <link rel="stylesheet" href="../styles/inventory.css">

    <script src="alertify/alertify.js"></script>
    <script src="inventario/JS/inventoryFunction.js"></script>
    <script src="inventario/JS/addinventory.js"></script>
</head>

<body>
    <h1 id="title" class="center-title">AÑADIR INVENTARIO</h1>
<form class="disp-flexCol" method="POST" id="formSend" enctype="multipart/form-data">
    <div class="">
        <!--<input class="reset-btn" type="reset" value="reiniciar">-->
        <a class="a-to-btn" href="consinventory.php">Volver</a>
        <div id="col-1">
            <!-- PRIMERA COLUMNA DE LA PAGINA -->
            <div class="disp-flexCol row-form col-size" id="col-1-content" >
                <label class="">Tipo de clasificacion</label>
                <select class="" name="col-1-combobox-category" id="col-1-combobox-clasification">
                </select>
                    <label class="">Tipo de producto</label>
                <select class="" name="col-1-combobox-product" id="col-1-combobox-product">
                </select>
                <div id="col-1-block-mant">
                    <input type="checkbox" name="col-1-checkbox-mant" id="col-1-checkbox-mant">Mantenimiento</input>
                    <input type="checkbox" name="col-1-checkbox-loan" id="col-1-checkbox-loan">Disponible para prestamo</input>
                </div>
            </div>
            <!-- PRIMERA COLUMNA DE LA PAGINA -->
            <!-- SEGUNDA COLUMNA DE LA PAGINA -->
            <div class="disp-flexCol row-form col-size" id="col-2-content round-border">
                    <label class="">Nombre del producto</label>
                    <input type="text" name="col-2-text-name" class="" id="col-2-text-name" required></input>

                    <label class="">Descripción del producto</label>
                    <input type="text" name="col-2-text-desc" class="" id="col-2-text-desc" required></input>

                <div id="col-2-block-mant">
                    <label class="">Responsable del mantenimiento</label>
                    <input type="text" name="col-2-text-mantResp"  class="" id="col-2-text-mantResp"></input>
                    <label class="">Último mantenimiento</label>
                    <input type="datetime-local" name="col-2-date-lastMant" 
                    id="col-2-date-lastMant"></input>
                    <label class="d-block">Siguiente mantenimiento</label>
                    <input type="datetime-local" name="col-2-date-nextMant" class="" id="col-2-date-nextMant"></input>
                </div>
                <div id="col-2-block-cant">
                    <label class="d-block">Cantidad de consumibles</label>
                    <input type="number" name="col-2-number-cant" class="" id="col-2-number-cant"></input>
                </div>
            </div>
            <!-- SEGUNDA COLUMNA DE LA PAGINA -->
            <!-- TERCERA COLUMNA DE LA PAGINA -->
            <div class="disp-flexCol row-form col-size">
                <div id="col-3-content">  
                    <label for="myfile">Selecciona una imagen</label>
                    <input class="pic-input" type="file" class="" name="item_file" id="item_file" require></input>
                </div>
            </div>
        <!-- TERCERA COLUMNA DE LA PAGINA -->
        </div>
    </div>
    <div class="button-form">
        <div class="auto-margin">
            <button type="" class="" id="">Cancelar</button>
            <button type="submit" class="" id="submit-objeto">Añadir Objeto</button>
        </div>
    </div>
</form> 
</body>
</html>
