<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <?php include ('header.html');?>
        <link rel="stylesheet" href="../styles/normalize.css">
        <link rel="stylesheet" href="../styles/loanStyle.css">
        <link rel="stylesheet" href="../styles/generalStyle.css">
        

        <script 
            src="header/prestamoFunction.js">
        </script>
        <script 
            src="prestamo/JS/consloan.js">
        </script>

        <title>Prestamos</title>

    </head>
    <body>
         
        <div class="disp-flexrow">
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
                        <input type="text" placeholder="Buscar..." id="search" class="search-input">
                    </div>
                </div>
                <div class=" row-form cons-col-size">
                    <label>Mostrar por:</label>
                    <select name="combobox-category" id="combobox-category">
                    </select>
                </div>
            </div>
            <!--Barra de busqueda-->

        <div id="card-container" class="disp-flexWarp">

            
            
        </div>

        </div>
    </body>
</html>