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
        <link rel="stylesheet" href="alertify/css/alertify.css">
        <link rel="stylesheet" href="../styles/generalStyle.css">
        <link rel="stylesheet" href="../styles/inventory.css">  
        
    
        <script src="inventario/JS/consinventory.js"></script>
        <title>CONSULTA | Inventario</title>
        
    </head>
    <body>
        <h1 id="" class="center-title">CONSULTAR INVENTARIO</h1>
        <!--Realizar la consulta-->
        
            <!--Barra de busqueda y filtros-->
                <!--Barra de busqueda-->
                <div class="disp-flexRow cons-nav-bar">
                    <div class="row-form cons-col-size"> 
                        <label>Buscar por:</label>
                        <select  name="combobox-search" id="combobox-search">
                            <option values="Nombre">Nombre</option>
                            <option values="Descripcion">Descripción</option>
                        </select>
                    </div >
                    <div class="row-form cons-col-size">
                        <label>Buscar:</label>
                        <div class="disp-flexRow">
                            <img class="icon-size" src="../resources/icons/search_icon.png">
                            <input type="text" placeholder="Buscar..." id="search">
                        </div>
                    </div>
                    <div class=" row-form cons-col-size">
                        <label>Mostrar por:</label>
                        <select name="combobox-category" id="combobox-category">
                        </select>
                    </div>
                </div>
                <!--Barra de busqueda-->
        <div id="inv-cons" class="consultar">
             <div id="div-table"><!--Tabla de consulta-->
                    <table id="table-equipo" class="table">
                        <thead class="thead-light">
                            <tr>
                                <th>Equipo</th>
                                <th>ID Producto</th>
                                <th>Producto</th>
                                <th>Nombre</th>
                                <th>Descripcion</th>
                                <th>Responsable</th>
                                <th>Ultimo mantenimiento (año/mes/dia)</th>
                                <th>Proximo mantenimiento (año/mes/dia)</th>
                                <th>Prestamo Disponible</th>
                                <th></th>
                                
                            </tr>
                        </thead>
                        
                        <tbody id="tbody-equipo">

                        </tbody>
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
                        <tbody id="tbody-consumible">
                        </tbody>
                    </table>
                
            </div>

        </div>
    </body>
</html>