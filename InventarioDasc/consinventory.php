<html>
    <head>
        <link rel="stylesheet" href="../styles/normalize.css">
        <link rel="stylesheet" href="../styles/inventario.css">
        <title>Inventario</title>
        <?php include ('header.html');?>
        
    </head>
    <body>
        <div id="inv-cons" class="consultar">
            <div>
                <input type="text" id="consult_search" name="consult_search">
                <input type="button" id="consult_group1" name="consult_group1" value="agrupar">
                <input type="button" id="consult_group2" name="consult_group2" value="agrupar">
                <input type="button" id="consult_add" name="consult_add" value="agregar">
            </div>
            <div>
                <table>
                    <tr>
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