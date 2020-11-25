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
        <link rel="stylesheet" href="../styles/inventoryStyle.css">  
        
    
        <script src="inventario/JS/consinventory.js"></script>
        <title>CONSULTA | Inventario</title>
        
    </head>
    <body>
        <h1 id="" class="center-title">CONSULTAR INVENTARIO</h1>

        <div class="disp-flexRow">
            <!--Barra de busqueda-->
            <div class="disp-flexCol cons-nav-bar row-cons">
                <div class="row-form cons-col-size"> 
                    <label>Buscar por:</label>
                    <select  name="combobox-search" id="combobox-search">
                        <option values="nombre">nombre</option>
                        <option values="descripcion">descripcion</option>
                    </select>
                </div >
                <div class="row-form cons-col-size">
                    <div class="disp-flexRow">
                        <input type="text" placeholder="Buscar..." id="search" class="search-input">
                    </div>
                </div>
                <div class=" row-form cons-col-size">
                    <label>Mostrar por:</label>
                    <select name="combobox-category" id="combobox-category">
                    </select>
                </div>
            </div>
            <!--Barra de busqueda-->

            <!--Tabla de consulta-->
            <div id="inv-cons" class="consultar row-cons">
                 <div id="div-table">
                    <table id="table-equipo" class="table">
                        <thead class="thead-light">
                            <tr>
                                <th>Equipo</th>
                                <th>ID Producto</th>
                                <th>Producto</th>
                                <th>Nombre</th>
                                <th>Descripcion</th>
                                <th>Responsable</th>
                                <th>Ultimo mantenimiento</th>
                                <th>Proximo mantenimiento</th>
                                <th>Prestamo Disponible</th>
                                <th></th>
                                
                            </tr>
                        </thead>
                        <tbody id="tbody-equipo"></tbody>
                    </table>
                    <table id="table-consumible" class="table">
                        <thead class="thead-light">
                            <tr>
                                <th>Consumible</th>
                                <th>Producto</th>
                                <th>Nombre</th>
                                <th>Descripcion</th>
                                <th>Cantidad</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody id="tbody-consumible"></tbody>
                    </table>
                </div>
            </div>
            <!--Tabla de consulta-->
        </div>
    </body>
</html>