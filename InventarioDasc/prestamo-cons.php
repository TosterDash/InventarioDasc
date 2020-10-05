<html>
    <head>
        <meta charset="utf-8">
        <?php include ('header.html');?>
        <link rel="stylesheet" href="../styles/normalize.css">
        <link rel="stylesheet" href="../styles/loanStyle.css">
        <link rel="stylesheet" href="../styles/generalStyle.css">
        
        <title>Inventario</title>
    </head>
    <body>
        <div class="button-container">
            <div class="add-button link-button">
                <a class="" href="loanAdd.php">AÑADIR PRÉSTAMO</a>
            </div>
        </div>
        <div id="loan-card" class="loan-card">
            <div class="single-loan">
                <div id="header-card" class="header-card"> 
                nombre carrera salon
                </div>
                <h1 id="loan-name"></h1>
                <h1>Fecha y hora pedido</h1>
                <h1 id="loan-date-enter"></h1>
                <h1>Fecha y hora devolucion</h1>
                <h1 id="loan-date-exit"></h1>
                <button>Devolver</button>
            </div>
            <div class="single-loan">
                <div id="header-card" class="header-card"> 
                nombre carrera salon
                </div>
                <h1 id="loan-name"></h1>
                <h1>Fecha y hora pedido</h1>
                <h1 id="loan-date-enter"></h1>
                <h1>Fecha y hora devolucion</h1>
                <h1 id="loan-date-exit"></h1>
                <button>Devolver</button>
            </div>
        </div>
    </body>
</html>