

<html>
    <meta charset="utf-8">
    <link rel="stylesheet" href="../styles/normalize.css">
    <link rel="stylesheet" href="../styles/inventory.css">
    <link rel="stylesheet" type="text/css" href="../styles/">
    <title>AÑADIR ARTICULO | Inventario</title>
<head>
    <?php include ('header.html');?>
</head>

<body>
    <div>
       <!-- <ul class="inv_list">
            <li>CONSULTAR</li>
            <li>AGREGAR</li>
            <li>MODIFICAR</li>
            <li>ELIMINAR</li>
        </ul> -->
        <h1 id="title">INVENTARIO</h1>
        <div id="consult-box" class="consult">
            <select name="catalogue" id="catalogue">
                <option value="selecciona">--Selecciona--</option>
                <option value="impresora">Impresora</option>
                <option value="computador">Computador</option>
                <option value="cañon">Cañón</option>
            </select>
            <table>
                
            </table>
        </div>
          <div class="agregar">
            <!-- <label for="catalogue">Choose a car:</label>
           <select name="catalogue" id="catalogue">
                <option value="selecciona">--Selecciona--</option>
                <option value="impresora">Impresora</option>
                <option value="computador">Computador</option>
                <option value="cañon">Cañón</option>
            </select>-->
            <form>
              <div>
                    Nombre
                    <input type="text" class="input" id="name">
                    descripcion
                    <input type="text" class="input" id="desc">
                    responsable
                    <input type="text" class="input" id="resp">
                    ultimo mantenimiento
                    <input type="datetime-local" class="input" id="lastMant">
                    <input type="datetime-local" class="input" id="lastMant">
                </div>
            </form>
        </div>
    </div>
</body>

</html>
