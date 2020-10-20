<html>
    <head>
        <link rel="stylesheet" href="../styles/normalize.css">
        <link rel="stylesheet" href="../styles/inventario.css">
        <title>Inventario</title>
        <?php include ('header.html');?>
        <script
            src="https://code.jquery.com/jquery-3.5.1.js"
            integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc="
            crossorigin="anonymous">
        </script>
        <script src="inventario/JS/consinventory.js"></script>
        
    </head>
    <body>
        <div id="inv-cons" class="consultar">
            <div>
                <input type="text" id="consult_search" name="consult_search">
                <input type="button" id="consult_group1" name="consult_group1" value="agrupar">
                <input type="button" id="consult_group2" name="consult_group2" value="agrupar">
                <input type="button" id="consult_add" name="consult_add" value="agregar">
            </div>
            <div id="div-table">
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