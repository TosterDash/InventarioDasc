<html>
    <head>
        <link rel="stylesheet" href="../styles/normalize.css">
        <link rel="stylesheet" href="../styles/inventario.css">
        <title>Inventario</title>
        <?php include ('header.html');?>
    </head>
    <body>
        <div class="consultar">
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

        <div class="agregar">
            <div>
                <form>
                    <label for="name">Nombre:</label><br>
                    <input type="text" id="name" name="name" value=""><br>
                    <label for="desc">Descripcion:</label><br>
                    <input type="text" id="desc" name="desc" value="">
                </form>
            </div>
            <div>
                <form action="">
                    <label for="name">Tipo:</label><br>
                    <select name="catalogue" id="catalogue">
                        <option value="impresora">impresora</option>
                        <option value="computador">computador</option>
                        <option value="mercedes">Mercedes</option>
                    </select>
                    <input type="checkbox" id="mant" value="Mantenimiento">
                    <label for="name">Mantenimiento:</label><br>
                    <input type="checkbox" id="disp_mant" value="Mantenimiento">
                    <label for="name">Disponible para prestamo:</label><br>
                </form>
            </div>
            <div>
                <form action="">
                    <label for="name">Imagen del articulo:</label><br>
                    <img src="" alt="">
                    <input type="file" name="item_file" id="item_file">
                </form>
            </div>
            <div>
                <button id="cancel">Cancelar</button>
                <button id="add">Agrear</button>
            </div>
        </div>
    </body>
</html>