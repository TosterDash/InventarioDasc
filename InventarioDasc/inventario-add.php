
<html>
    <head>
        <link rel="stylesheet" href="../styles/normalize.css">
        <link rel="stylesheet" href="../styles/inventario.css">
        <title>Inventario</title>
        <?php include ('header.html');?>
    </head>
    <body>
        <div class="agregar">
            <form action="?" method="post" id="inv-form">
                <div>
                    <label for="inv-add-name">Nombre:</label><br>
                    <input type="text" id="inv-add-name" name="inv-add-name" value=""><br>
                    <label for="desc">Descripcion:</label><br>
                    <input type="text" id="inv-add-desc" name="inv-add-desc" value="">
                </div>
                <div>
                <label for="name">Tipo:</label><br>
                    <select name="inv-add-catalogue" id="inv-add-catalogue">
                        <option value="impresora">impresora</option>
                        <option value="computador">computador</option>
                        <option value="mercedes">Mercedes</option>
                    </select>
                    <input type="checkbox" id="inv-add-mant" name="inv-add-mant" value="Mantenimiento">
                    <label for="name">Mantenimiento:</label><br>
                    <input type="checkbox" id="inv-add-disp-prest" name="inv-add-disp-prest" value="Prestamo">
                    <label for="name">Disponible para prestamo:</label><br>
                </div>
                <div>
                <label for="name">Imagen del articulo:</label><br>
                    <img src="" alt="">
                    <input type="file" name="item_file" id="item_file">
                </div>
            </form>
            <div>
                <button id="inv-add-cancel">Cancelar</button>
                <button type="submit" form="inv-form" value="Agregar" id="inv-add-add">Agregar</button>
            </div>
        </div>
    </body>

    <?php
            if(isset($_POST["inv-add-name"])){
                $nombre = $_POST["inv-add-name"];
            }

            if(isset($_POST["inv-add-desc"])){
                $desc = $_POST["inv-add-desc"];
            }

            if(isset($_POST["inv-add-catalogue"])){
                $tipo = $_POST["inv-add-catalogue"];
            }
            
            if(isset($_POST['inv-add-mant'])){
                //$stok is checked and value = 1
                $mant = true;
            }else{
                //$stok is nog checked and value=0
                $mant = false;
            }

            if(isset($_POST['inv-add-mant'])){
                //$stok is checked and value = 1
                $prest = true;
            }else{
                //$stok is nog checked and value=0
                $prest = false;
            }

            $imagen = $_POST["item_file"];
            
        
            
           
            
           
        
    ?> 


</html>