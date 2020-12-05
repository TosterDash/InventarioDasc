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
     
    <div class="barra-size">
         <!--Barra de busqueda-->
        <div class="disp-flexCol cons-nav-bar">
            <div class="row-form cons-col-size  search-box"> 
                <label>Buscar por:</label>
                <select  name="combobox-search" id="combobox-search">
                    <option value="identificador">Identificador</option>
                </select>
            </div >
            <div class="row-form cons-col-size search-box">
                <div class="disp-flexRow">
                    <input type="text" placeholder="Buscar..." id="search" class="search-input">
                </div>
            </div>
            <div class=" row-form cons-col-size search-box">
                <label>Mostrar por:</label>
                <div class="disp-flexWrap" style="width: 100%">
                    <input style="width: 10%" type="radio" id="mostrar-radio-entregados" name="mostrar-radio" value="true" />
                    <label>Entregados</label>
                </div>

                <div class="disp-flexWrap" style="width: 100%">
                    <input style="width: 10%" type="radio" id="mostrar-radio-noentregados" name="mostrar-radio" checked="true" value="false">
                    <label>No entregados</label>
                </div>   
            </div>
        </div>
        <!--Barra de busqueda-->
    
        <div id="card-container" class="disp-flexWarp consultar">
            <!--INICIO DE UN CUADRITO DE PRESTAMO-->
            
            <!--FIN DE UN CUADRITO DE PRESTAMO-->

        </div>
    </div>
    </body>
</html>