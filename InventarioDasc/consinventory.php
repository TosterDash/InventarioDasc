<html>
    <head>
        <link rel="stylesheet" href="../styles/normalize.css">
        <link rel="stylesheet" href="../styles/inventario.css">
        <link rel="stylesheet" href="alertify/css/alertify.css">
        <title>Inventario</title>
        <?php include ('header.html');?>
        
        <script src="alertify/alertify.js"></script>
        <script src="Jquery/Jquery.js"></script>
        <script src="inventario/JS/consinventory.js"></script>
        
    </head>
    <body>
        <div id="inv-cons" class="consultar"><!--Realizar la consulta-->
            <div><!--Barra de busqueda y filtros-->
                <input type="text" id="consult_search" name="consult_search">
                <input type="button" id="consult_group1" name="consult_group1" value="agrupar">
                <input type="button" id="consult_group2" name="consult_group2" value="agrupar">
                <input type="button" id="consult_group3" name="consult_add" value="agregar">
                
            </div>
            <div id="div-table"><!--Tabla de consulta-->
                <table id="cons-table">
                    <tr id="cons-tr-table">
                        <th>Nombre</th>
                        <th>Descripcion</th>
                        <th>Mantenimiento</th>
                        <th>Ultimo mantenimiento</th>
                        <th>Proximo mantenimiento</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    
                </table>
            </div>
        </div>
    </body>
</html>