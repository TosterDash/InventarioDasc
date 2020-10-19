<html>
    <meta charset="utf-8">

    
    
    <title>AÑADIR ARTICULO | Inventario</title>
<head>

<?php include ('header.html');?>
    <script
      src="https://code.jquery.com/jquery-3.5.1.js"
      integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc="
      crossorigin="anonymous">
    </script>

    <link rel="stylesheet" href="../styles/normalize.css">
    <link rel="stylesheet" href="../styles/inventory.css">
    <link rel="stylesheet" href="../styles/generalStyle.css">
    <script src="inventario/JS/addinventory.js"></script>
</head>

<body>
    <h1 id="title">INVENTARIO</h1>
    <div class="basic-form-container">
        <div class="add-container form-format selector">
            <select id="tipoObjeto">
                <option value="selecciona">--Selecciona--</option>
                <option value="impresora">Equipo</option>
                <option value="computador">Consumible</option>
            </select>
        </div>
        <div class="add-container form-format cons">
            <label>Nombre</label>
            <input type="text" class="input" id="name-form">
            <label>Descripción</label>
            <input type="text" class="input" id="desc-form">
            <label>Cantidad</label>
            <input type="text" class="input" id="cant-form">
        </div>
        <div class="add-container equip">
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
        <div class="add-container form-format equip">
            <input type="checkbox" id="mantCB" name="mant" value="Mantenimiento" onclick="mantForm.style.display = this.checked ? 'block' : 'none';">
            <label for="name">Mantenimiento:</label><br>
            <input type="checkbox" id="prestCB" name="prest" value="Prestamo">
            <label for="name">Disponible para prestamo:</label><br>
        </div>
        <div class="add-container form-format mant equip" id="mantForm" >
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

    function select(){
        if($_POST['tipoObjeto']='Equipo'){
            echo '<style type="text/css">
                    .equip{
                        display: block;
                    }

                    .cons{
                        display: none;
                    }
                </style>';
        }else if($_POST['tipoObjeto']='Consumible'){
            echo '<style type="text/css">
            .equip{
                display: none;
            }

            .cons{
                display: block;
            }
        </style>';
        }
    }
?> 

</html>
