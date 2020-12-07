<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <?php include ('header.php');?>
        
        <link rel="stylesheet" href="../styles/normalize.css">
        <link rel="stylesheet" href="../styles/generalStyle.css">
        <link rel="stylesheet" href="../styles/inventoryStyle.css">  
        
        <script src="header/inventoryFunction.js"></script>
        <script src="inventario/JS/consinventory.js"></script>
        <title>CONSULTA | Inventario</title>
        
    </head>
    <body>
        <div class="disp-flexRow barra-size">
            <!--Barra de busqueda-->
            <div class="disp-flexCol cons-nav-bar row-cons">
                <div class="row-form cons-col-size search-box"> 
                    <label>Buscar por:</label>
                    <select  name="combobox-search" id="combobox-search">
                        <option values="Nombre">Nombre</option>
                        <option values="Descripción">Descripcion</option>
                    </select>
                </div >
                <div class="row-form cons-col-size search-box">
                    <div class="disp-flexRow">
                        <input type="text" placeholder="Buscar..." id="search" class="search-input">
                    </div>
                </div>
                <div class=" row-form cons-col-size search-box">
                    <label>Mostrar por:</label>
                    <select name="combobox-category" id="combobox-category">
                        <option hidden>Selecciona</option>
                    </select>
                </div>
            </div>
            <!--Barra de busqueda-->

            <!--Tabla de consulta-->
            <div id="inv-cons" class="consultar row-cons scroll-tabla ">
                 <div id="div-table ">

                    <table id="table-equipo" class="cons-tableRow">
                        <h2 class="center-title">EQUIPO</h2>
                        <thead class="">
                            <tr class="cons-tableTitle">
                                <th >Identificador</th>
                                <th >Producto</th>
                                <th >Nombre</th>
                                <th >Descripción</th>
                                <th >Responsable</th>
                                <th >Último mantenimiento</th>
                                <th >Próximo mantenimiento</th>
                                <th >Prestamo Disponible</th>
                                <th >Opciones</th>
                            </tr>
                        </thead>
                        <tbody id="tbody-equipo"></tbody>
                    </table>
                    <table id="table-consumible" class="cons-tableRow">
                        <h2 class="center-title">CONSUMIBLE</h2>
                        <thead class="cons-tableTitle">
                            <tr>
                                <th>Consumible</th>
                                <th>Producto</th>
                                <th>Nombre</th>
                                <th>Descripcion</th>
                                <th>Cantidad</th>
                                <th>Opciones</th>
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