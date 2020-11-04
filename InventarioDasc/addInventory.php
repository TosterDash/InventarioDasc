<html>
    

    
    
    <title>AÑADIR ARTICULO | Inventario</title>
<head>

<head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <?php include ('header.html');?>
        <script
        src="https://code.jquery.com/jquery-3.5.1.js"
        integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc="
        crossorigin="anonymous">
        </script>

        <link rel="stylesheet" href="../styles/bootstrap.min.css">
        <link rel="stylesheet" href="../styles/normalize.css">
        <link rel="stylesheet" href="../styles/inventory.css">
        <link rel="stylesheet" href="../styles/generalStyle.css">
        <link rel="stylesheet" href="alertify/css/alertify.css">
        <script src="alertify/alertify.js"></script>
        <script src="inventario/JS/addinventory.js"></script>
    </head>

    <body>
        <form method="POST" id="formSend" enctype="multipart/form-data">
        <div class="container d-flex justify-content-center">
                <div class="row pr-5" id="col-1">
                    <div class="col-sm border">
                        <div id="col-1-content">
                            <label class="d-block">Tipo de clasificacion</label>
                            <select class="d-block form-control " name="col-1-combobox-category" id="col-1-combobox-clasification">
                                
                            </select>

                            <label class="d-block">Tipo de producto</label>
                            <select class="d-block form-control" name="col-1-combobox-product" id="col-1-combobox-product">
                                
                            </select>

                            <div id="col-1-block-mant">
                                <div>
                                    <input type="checkbox" id="col-1-checkbox-mant">Mantenimiento</input>
                                </div>
                                <div>
                                    <input type="checkbox" id="col-1-checkbox-loan">Disponible para prestamo</input>
                                </div>
                                

                            </div>

                            <div class="text-center py-5 ">
                                <button type="submit" class="btn btn-secondary" id="submit-objeto">Añadir Objeto</button>
                            </div>

                        </div>
                        
                
                    </div>
                    <!-- SEGUNDA COLUMNA DE LA PAGINA -->
                    <div class="col-sm border">
                        <div id = "col-2-content">
                            <div id="col-2-block-name">
                                <label class="d-block">Nombre</label>
                                <input type="text" name="col-2-text-name" class="form-control d-block" id="col-2-text-name" required></input>

                                <label class="d-block">Descripción</label>
                                <input type="text" name="col-2-text-desc" class="form-control d-block" id="col-2-text-desc" required></input>
                            </div>

                            <div id="col-2-block-mant">
                                <label class="d-block">Responsable del mantenimiento</label>
                                <input type="text" name="col-2-text-mantResp"  class="form-control d-block" id="col-2-text-mantResp"></input>

                                <label class="d-block">Ultimo mantenimiento</label>
                                <input type="datetime-local" name="col-2-date-lastMant" class="form-control d-block" id="col-2-date-lastMant"></input>

                                <label class="d-block">Siguiente mantenimiento</label>
                                <input type="datetime-local" name="col-2-date-nextMant" class="form-control d-block" id="col-2-date-nextMant"></input>

                            </div>

                            <div id="col-2-block-cant">
                                <label class="d-block">Cantidad del consumible</label>
                                <input type="number" name="col-2-number-cant" class="form-control d-block" id="col-2-number-cant"></input>
                            </div>

                        </div>
                        
                
                    </div>
                    <!-- TERCERA COLUMNA DE LA PAGINA -->
                    <div class="col-sm border">
                        <div id="col-3-content">  
                            <input type="file" class="form-control-file" name="item_file" id="item_file" require></input>
                        </div>
                        
                
                    </div>
                
                </div>
            </div>
        </form>     
    </body>


</html>
