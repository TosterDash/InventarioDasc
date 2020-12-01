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
     
    <div class="disp-flexRow">
         <!--Barra de busqueda-->
        <div class="disp-flexCol cons-nav-bar">
            <div class="row-form cons-col-size"> 
                <label>Buscar por:</label>
                <select  name="combobox-search" id="combobox-search">
                    <option hidden>Selecciona</option>
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
                <div class="disp-flexWrap" style="width: 100%">
                    <input style="width: 10%" type="radio" id="mostrar-radio-entregados" name="mostrar-radio" values="entregados" />
                    <label>Entregados</label>
                </div>

                <div class="disp-flexWrap" style="width: 100%">
                    <input style="width: 10%" type="radio" id="mostrar-radio-noentregados" name="mostrar-radio" checked="true" values="noentregados">
                    <label>No entregados</label>
                </div>
                
            </div>
        </div>
        <!--Barra de busqueda-->
    
        <div id="card-container" class="disp-flexWarp">
            
        </div>
    </div>
    </body>
</html>