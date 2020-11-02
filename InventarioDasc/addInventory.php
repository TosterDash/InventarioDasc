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
     <!--Forma para agregar a inventario-->
    <h1 id="title">INVENTARIO</h1>
    <div class="basic-form-container">
        <div class="add-container form-format selector">
            <select id="tipo_objeto"><!--Combo box para definir si el objeto es equipo o Consumible-->
                <option value="selecciona">--Selecciona--</option>
                <option value="Equipo">Equipo</option>
                <option value="Consumible">Consumible</option>
            </select>
        </div>
        <div class="add-container form-format cons"><!--Si el objeto es de tipo consumible-->
            <label>Nombre</label><!--Nombre del objeto-->
            <input type="text" class="input" id="name-form-cons">
            <label>Descripción</label><!--Descripcion del objeto-->
            <input type="text" class="input" id="desc-form-cons">
            <label>Cantidad</label><!--Cantidad del ojeto-->
            <input type="text" class="input" id="cant-form-cons">
        </div>
        <div class="add-container equip"><!--Si el objeto es de tipo equipo-->
            <div class="form-container form-format">
                <label>Selecciona categoría</label>
                <select name="catalogue" id="catalogue"><!--Selecciona que tipo de equipo es-->
                    <option value="selecciona">--Selecciona--</option>
                    <option value="impresora">Impresora</option>
                    <option value="computador">Computador</option>
                    <option value="cañon">Cañón</option>
                </select>
                <label>Nombre</label><!--Nombre del objeto-->
                <input type="text" class="input" id="name-form-equip">
                <label>Descripción</label><!--Descripcion del objeto-->
                <input type="text" class="input" id="desc-form-equip">
            </div>
        </div>
        <div class="add-container form-format equip">
            <input type="checkbox" id="mantCB" name="mant" value=false>
            <label for="name">Mantenimiento:</label><br><!--Selecciona si requiere mantenimiento-->
            <input type="checkbox" id="prestCB" name="prest" value="Prestamo">
            <label for="name">Disponible para prestamo:</label><br><!--Selecciona si puede ser prestado-->
        </div>
        <div class="add-container form-format mant equip" id="mantForm" ><!--Si requiere mantenimiento-->
            <div class="form-container">
                <label>Responsable</label><!--Quien es el responsable del mantenimiento-->
                <input type="text" class="input" id="resp-form">
                <label>Último mantenimiento</label><!--Cuando fue el ultimo (o primer) mantenimiento-->
                <input type="datetime-local" class="input" id="lastMant-form" name="lastMant">
                <label>Siguiente mantenimiento</label><!--Cuando sera el siguiente mantenimiento-->
                <input type="datetime-local" class="input" id="nextMant-form", name="nextMant">
            </div>
        </div>
        <div>
            <label for="name">Imagen del articulo:</label><br>
            <img src="" alt=""><!--Selecciona la imagen del articulo-->
            <input type="file" name="item_file" id="item_file">
        </div>
        <div>
            <button id="inv-add-cancel">Cancelar</button><!--Boton para cancelar la adicion del articulo-->
            <button value="Agregar" id="inv-add-btn">Agregar</button><!--Boton para agregar el articulo-->
        </div>
    </div>
</body>


</html>
