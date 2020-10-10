<html>
    <meta charset="utf-8">
    <link rel="stylesheet" href="../styles/normalize.css">
    <link rel="stylesheet" href="../styles/inventory.css">
    <link rel="stylesheet" href="../styles/generalStyle.css">

    <title>AÑADIR ARTICULO | Inventario</title>
<head>

<?php include ('header.html');?>
</head>

<body>
    <h1 id="title">INVENTARIO</h1>
    <div class="basic-form-container">
        <div class="add-container">
            <div class="form-container form-format">
                <label>Selecciona categoría</label>
                <select name="catalogue" id="catalogue">
                    <option value="selecciona">--Selecciona--</option>
                    <option value="impresora">Impresora</option>
                    <option value="computador">Computador</option>
                    <option value="cañon">Cañón</option>
                </select>
                <label>Nombre</label>
                <input type="text" class="input" id="name">
                <label>Descripción</label>
                <input type="text" class="input" id="desc">
            </div>
        </div>
        <div>
            <input type="checkbox" id="mant" name="mant" value="Mantenimiento">
            <label for="name">Mantenimiento:</label><br>
            <input type="checkbox" id="prest" name="prest" value="Prestamo">
            <label for="name">Disponible para prestamo:</label><br>
        </div>
        <div class="add-container form-format">
            <div class="form-container">
                <label>Responsable</label>
                <input type="text" class="input" id="resp">
                <label>Último mantenimiento</label>
                <input type="datetime-local" class="input" id="lastMant" name="lastMant">
                <label>Siguiente mantenimiento</label>
                <input type="datetime-local" class="input" id="nextMant", name="nextMant">
            </div>
        </div>
        <div>
            <label for="name">Imagen del articulo:</label><br>
            <img src="" alt="">
            <input type="file" name="item_file" id="item_file">
        </div>
        <div>
            <button id="inv-add-cancel">Cancelar</button>
            <button value="Agregar" id="inv-add-add">Agregar</button>
        </div>
    </div> 
</body>

<?php
     if(isset($_POST["name"])){
        $nombre = $_POST["name"];
    }

    if(isset($_POST["desc"])){
        $desc = $_POST["desc"];
    }

    if(isset($_POST["catalogue"])){
        $tipo = $_POST["catalogue"];
    }
    
    if(isset($_POST['mant'])){
        $mant = true;
    }else{
        $mant = false;
    }

    if(isset($_POST['prest'])){
        //$stok is checked and value = 1
        $prest = true;

    }else{
        //$stok is nog checked and value=0
        $prest = false;
    }

    if(isset($_POST["lastMant"])){
        $lastMant = $_POST["lastMant"];
    }

    if(isset($_POST["nextMant"])){
        $nextMant = $_POST["nextMant"];
    }

    if(isset($_POST["item_file"])){
        $imagen = $_POST["item_file"];
    }        
?> 

</html>
