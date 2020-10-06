<html>
    <head>
        <link rel="stylesheet" href="../styles/normalize.css">
        <link rel="stylesheet" href="../styles/inventario.css">
        <title>Inventario</title>
        <?php include ('header.html');?>
    </head>
    <body>
        <form>
            <label for="loan-add-ident">Identificador:</label><br>
            <input type="text" id="loan-add-ident" name="loan-add-ident" value=""><br>
            <select name="loan-add-edif" id="loan-add-edif">
                <option value="Macro">Macro</option>
                <option value="DASC">Dasc</option>
            </select>
            <select name="loan-add-clasroom" id="loan-add-clasroom">
                <option value="CS1">CS1</option>
                <option value="CS2">CS2</option>
                <option value="CS3">CS3</option>
            </select>
            <input id="loan-add-datetime" type="datetime-local">
        </form>
        <div>
            <h1>Selecciona todos los materiales que necesites</h1>
            <div>cosa lista rara</div>
        </div>
        <div>
            <button id="loan-add-cancel"> Cancelar</button>
            <button id="loan-add-add"> Agregar</button>
        </div>
    </body>
</html>