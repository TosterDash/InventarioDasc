<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link rel="stylesheet" href="../styles/normalize.css">
        <link rel="stylesheet" href="../styles/bootstrap.min.css">
        <link rel="stylesheet" href="../styles/inventario.css">
        <link rel="stylesheet" href="alertify/css/alertify.css">
        <title>Inventarioa</title>
        <?php include ('header.html');?>
        
        
        <script src="alertify/alertify.js"></script>
        <script src="Jquery/Jquery.js"></script>
        <script src="../styles/popper.js"></script>
        <script src="../styles/bootstrap.min.js"></script>
        <script src="inventario/JS/consinventory.js"></script>
        
    </head>
    <body>
        <div id="inv-cons" class="consultar"><!--Realizar la consulta-->
            <div><!--Barra de busqueda y filtros-->
                <input type="text" id="consult_search" name="consult_search">
                <select  class="" name="combobox-category" id="combobox-category">
                </select>
                
            
                
            </div>
            <div id="div-table"><!--Tabla de consulta-->
                <table id="table-consumible" class="table">
                    <thead class="thead-light">
                        <tr>
                            <th>Imagen</th>
                            <th>Producto</th>
                            <th>Nombre</th>
                            <th>Descripcion</th>
                            <th>Cantidad</th>
                            <th></th>
                            
                        </tr>
                    </thead>

                    <tbody id="tbody-consumible">

                    </tbody>
                    
                    
                </table>
                <table id="table-equipo" class="table">
                    <thead class="thead-light">
                        <tr>
                            <th>Imagen</th>
                            <th>Producto</th>
                            <th>Nombre</th>
                            <th>Descripcion</th>
                            <th>Responsable</th>
                            <th>Ultimo mantenimiento</th>
                            <th>Proximo mantenimiento</th>
                            <th></th>
                            
                        </tr>
                    </thead>
                    
                    <tbody id="tbody-equipo">

                    </tbody>
                    
                </table>
            </div>
        </div>
    </body>
</html>