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
        <div class="add-container form-format">
            <div class="form-container">
                <label>Responsable</label>
                <input type="text" class="input" id="resp">
                <label>Último mantenimiento</label>
                <input type="datetime-local" class="input" id="lastMant">
                <label>Siguiente mantenimiento</label>
                <input type="datetime-local" class="input" id="lastMant">
            </div>
        </div>
    </div> 
</body>

</html>
