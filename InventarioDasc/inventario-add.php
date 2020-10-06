<html>
    <head>
        <link rel="stylesheet" href="../styles/normalize.css">
        <link rel="stylesheet" href="../styles/inventario.css">
        <title>Inventario</title>
        <?php include ('header.html');?>
    </head>
    <body>
        <div class="agregar">
            <div>
                <form>
                    <label for="inv-add-name">Nombre:</label><br>
                    <input type="text" id="inv-add-name" name="inv-add-name" value=""><br>
                    <label for="desc">Descripcion:</label><br>
                    <input type="text" id="inv-add-desc" name="inv-add-desc" value="">
                </form>
            </div>
            <div>
                <form>
                    <label for="name">Tipo:</label><br>
                    <select name="inv-add-catalogue" id="inv-add-catalogue">
                        <option value="impresora">impresora</option>
                        <option value="computador">computador</option>
                        <option value="mercedes">Mercedes</option>
                    </select>
                    <input type="checkbox" id="inv-add-mant" value="Mantenimiento">
                    <label for="name">Mantenimiento:</label><br>
                    <input type="checkbox" id="inv-add-disp-mant" value="Mantenimiento">
                    <label for="name">Disponible para prestamo:</label><br>
                </form>
            </div>
            <div>
                <form>
                    <label for="name">Imagen del articulo:</label><br>
                    <img src="" alt="">
                    <input type="file" name="item_file" id="item_file">
                </form>
            </div>
            <div>
                <button id="inv-add-cancel">Cancelar</button>
                <button id="inv-add-add">Agrear</button>
            </div>
        </div>
    </body>
</html>