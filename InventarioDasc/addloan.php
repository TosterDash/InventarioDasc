<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <?php include ('header.html');?>
    <link rel="stylesheet" href="../styles/normalize.css">
    <link rel="stylesheet" href="../styles/generalStyle.css">
    <!--<link rel="stylesheet" href="../styles/loanStyle.css">-->
    <script 
        src="header/prestamoFunction.js">
    </script>
    <script 
        src="prestamo/JS/addloan.js">
    </script>
    <title></title>
</head>
    <body class="background-img">
        
        <!--Form para agregar a inventario-->
        
            <div class="form-background">
                <h1 class="center-title" >AÑADIR PRÉSTAMO</h1>
                <hr class="divider-hor">
                <div class="loan-container disp-flexRow">          
                    <div class="disp-flexCol row-form round-border">
                        <label class="" >Identificador</label>
                        <input class="" type="number" value="" id="input-id-user">
                        <!--Edificio-->
                        <label class="input-margin" >Edificio</label>
                        <select class="input-margin" name="loan-add-edif" id="loan-add-edif">
                            <option value=>Selecciona una opcion</option>
                        </select>
                        <!--Salon-->
                        <label class="input-margin" >Salón</label>
                        <select class="input-margin" name="loan-add-clasroom" id="loan-add-clasroom">
                        </select>
                        <!--Fecha del prestamo-->
                        <label class="input-margin" >Fecha salida</label>
                        <input class="input-margin" id="loan-add-datetime" type="date" >
                        <label class="input-margin" >Fecha retorno</label>
                        <input class="input-margin" id="loan-add-datetime-return" type="date" >
                    </div>
                
                    <!--Tabla donde puedes seleccionar todos los objetos que vas a pedir-->
                    <div class="disp-flexCol row-form  table-scroll">
                        <label>Selecciona los materiales a prestar</label>
                        <table id="loan-table" class="">
                            <tbody id="loan-tbody"></tbody>
                            <!--fila-->
                        </table>
                        <p>ESTE ES UN TEXTO SOLO PARA PARTIRLE LA MADRE A LOS PINCHES CHECKBOXES QUE ME TIENEN HASTA LA MADRE OJALA SE LOS VIOLE SU TIO. pinches jotos nada mas dije eso y ya se muestran hijos de su reputisima madre. </p>
                    </div> 
                </div>
                <div class="addloan-btn">
                    <!--Boton para cancelar el prestamo-->
                    <button >Cancelar</button>
                    <!--Boton para agregar el prestamo-->
                    <button id="loan-add-add"> Agregar</button>
                </div>
            </div>
         
    </body>
</html>