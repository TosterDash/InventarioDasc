<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <?php include ('header.php');?>
        <script
        src="Jquery/Jquery.js">
        </script>
        <script 
            src="../styles/popper.js">
        </script>
        <script 
            src="../styles/bootstrap-4.5.3-dist/css/bootstrap.min.js">
        </script>
        <link rel="stylesheet" href="../styles/bootstrap-4.5.3-dist/css/bootstrap.min.css">
        <script 
            src="../styles/bootstrap-4.5.3-dist/js/bootstrap.min.js">
        </script>
        <link rel="stylesheet" href="styles/normalize.css">
        <link rel="stylesheet" href="styles/loanStyle.css">
        <link rel="stylesheet" href="styles/generalStyle.css">
        
        <title>Historial | Préstamo</title>

    </head>
    <body>
        <div class="disp-flexRow">
         <!--Barra de busqueda-->
        <div class="disp-flexCol cons-nav-bar">
            <div class="row-form cons-col-size"> 
                <label>Buscar por:</label>
                <select  name="combobox-search" id="combobox-search">
                    <option values="nombre">Identificador</option>
                    <option values="descripcion">Número de préstamo</option>
                </select>
            </div >
            <div class="row-form cons-col-size">
                <div class="disp-flexRow">
                    <input type="text" placeholder="Buscar..." id="" class="search-input">
                </div>
            </div>
            <div class=" row-form cons-col-size">
                <label>Mostrar por:</label>
                <div class="disp-flexWrap" style="width: 100%">
                    <input style="width: 10%" type="radio" onclick="window.location='loanHistory.php';" / checked="true">
                    <label>Entregados</label>
                </div>

                <div class="disp-flexWrap" style="width: 100%">
                    <input style="width: 10%" type="radio" onclick="window.location='consloan.php';" />
                    <label>No entregados</label>
                </div>
            </div>
        </div>
        <!--Barra de busqueda-->
    
        <div id="" class="disp-flexWarp">
            
        </div>
    </div>

    <script src="header/header.js"></script>
        
    </body>
</html>