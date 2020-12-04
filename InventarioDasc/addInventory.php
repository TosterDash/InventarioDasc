<html>
    <title>AÑADIR ARTICULO | Inventario</title>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <?php include ('header.html');?>
    
    <link rel="stylesheet" href="../styles/normalize.css">
    <link rel="stylesheet" href="../styles/generalStyle.css">
    <link rel="stylesheet" href="../styles/inventoryStyle.css">
    
    <script src="header/inventoryFunction.js"></script>
    <script src="inventario/JS/addinventory.js"></script>
</head>

<body class="background-img">
    
<form class="disp-flexCol" method="POST" id="formSend" enctype="multipart/form-data">


    <div class="form-background">
        <h1 id="title" class="center-title">AÑADIR INVENTARIO</h1>
        <hr class="divider-hor">
    <div class="disp-flexCol">
        <!--<input class="reset-btn" type="reset" value="reiniciar">
        <a class="a-to-btn" href="consinventory.php">Volver</a>-->
        <div id="col-1">
            <!-- PRIMERA COLUMNA DE LA PAGINA -->
            <div class="disp-flexCol row-form add-col-size" id="col-1-content" >
                <label class="">Tipo de clasificacion</label>
                <select class="" name="col-1-combobox-category" id="col-1-combobox-clasification">  
                </select>

                <div id="col-1-block-producto" class="">
                    <label id="prod-label">Tipo de producto</label>
                    <div>
                        <div>
                            <div id="product-input">
                                <select class="" name="col-1-combobox-product" id="col-1-combobox-product">
                                </select>
                            </div>
                            <button type="button" style="margin-left: 0px;" class="button-form" id="btn-producto-confirmar" value="confirm-add">Añadir producto</button>
                        </div>
                        

                        <div class="button-form disp-flexRow"  id="buttons-option-product">
                            <div class="disp-flexRow" style="margin-right:18px">
                                <label style="width:60px;">Añadir</label>
                                <img src="../resources/add.png" class="icon-size" id="btn-producto-add" value="add"></img>
                            </div>
                            <div class="disp-flexRow" style="margin-right:18px">
                                <label style="width:60px;">Eliminar</label>
                                <img src="../resources/delete.png" class="icon-size" id="btn-producto-delete" value="delete"></img>
                            </div>
                            
                            
                        </div>
                    </div>

                    
                </div>

                <div id="col-1-block-mant">
                    <input type="checkbox" name="col-1-checkbox-mant" id="col-1-checkbox-mant">Mantenimiento</input>
                    <input type="checkbox" name="col-1-checkbox-loan" id="col-1-checkbox-loan">Disponible para prestamo</input>
                </div>
            </div>
            <!-- PRIMERA COLUMNA DE LA PAGINA -->

            <!-- SEGUNDA COLUMNA DE LA PAGINA -->
            <div class="disp-flexCol row-form add-col-size" id="col-2-content round-border">
                    <label class="">Edificio</label>
                    <select id = "col-2-combobox-edificios" name="col-2-combobox-edificios">
                    </select>
                    <label class="">Aula</label>
                    <select id = "col-2-combobox-aulas" name="col-2-combobox-aulas">
                    </select>
                    <label class="">Nombre del producto</label>
                    <input type="text" name="col-2-text-name" class="" id="col-2-text-name" required></input>

                    <label class="">Descripción del producto</label>
                    <input type="text" name="col-2-text-desc" class="" id="col-2-text-desc" required></input>
                <div id="col-2-block-mant">
                    <label class="">Responsable del mantenimiento</label>
                    <select  name="col-2-combobox-mantResp"  class="" id="col-2-combobox-mantResp"></select>
                    <label class="d-block">Fecha de Mantenimiento</label>
                    <input type="date" name="col-2-date-nextMant" class="" id="col-2-date-nextMant"></input>
                </div>
                <div id="col-2-block-cant">
                    <label class="d-block">Cantidad de consumibles</label>
                    <input type="number" name="col-2-number-cant" class="" id="col-2-number-cant"></input>
                </div>
            </div>
            <!-- SEGUNDA COLUMNA DE LA PAGINA -->

            <!-- TERCERA COLUMNA DE LA PAGINA -->
            <div class="disp-flexCol row-form add-col-size">
                <div id="col-3-content">  
                    <label for="myfile">Selecciona una imagen</label>
                    <input class="pic-input" type="file" class="" name="item_file" id="item_file" require></input>
                </div>
            </div>
            <!-- TERCERA COLUMNA DE LA PAGINA -->
        </div>
    </div>
    <div>
        <div class="button-form">
            <div class="auto-margin">
                <button type="" class="" id="cancel-objeto">Cancelar</button>
                <button type="submit" class="" id="submit-objeto">Añadir Objeto</button>
            </div>
        </div>
    </div>
    
</div>

</form> 
</body>
</html>
