<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <?php include ('header.html');?>
        <link rel="stylesheet" href="../styles/normalize.css">
        <link rel="stylesheet" href="../styles/bootstrap.min.css">
        <link rel="stylesheet" href="../styles/inventario.css">
        <link rel="stylesheet" href="alertify/css/alertify.css">
        <title>Inventario</title>
        
        <script src="alertify/alertify.js"></script>
               <script
        src="Jquery/Jquery.js">
        </script>
        <script src="../styles/popper.js"></script>
        <script src="../styles/bootstrap-4.5.3-dist/css/bootstrap.min.js"></script>
        <link rel="stylesheet" href="../styles/bootstrap-4.5.3-dist/css/bootstrap.min.css">
        <script 
            src="../styles/bootstrap-4.5.3-dist/js/bootstrap.min.js">
        </script>
        <script src="inventario/JS/consinventory.js"></script>
        
    </head>

    <body>
        <div id="inv-cons" class="consultar"><!--Realizar la consulta-->
            
            <!--Barra de busqueda y filtros-->
            <div>
                <!--Barra de busqueda-->
                <nav class="navbar ">
                  <div class="form-inline">
                    <input class="form-control mr-sm-2" type="text" placeholder="Search" id="search">
                    <button class="btn btn-success" type="button">Search</button>
                  </div>
                <label>Buscar por:</label>
                <select class="" name="combobox-category" id="combobox-search">
                    <option values="Nombre">Nombre</option>
                    <option values="Descripcion">Descripción</option>
                </select>
                <label>Mostrar por:</label>
                <select  class="" name="combobox-category" id="combobox-category">
                </select>
                </nav>
                <!--Barra de busqueda-->
                
                
            
                
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