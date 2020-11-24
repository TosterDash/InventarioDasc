<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <?php include ('header.html');?>
    <script
    src="Jquery/Jquery.js">
    </script>
    <script src="../styles/popper.js"></script>
    <script src="../styles/bootstrap-4.5.3-dist/css/bootstrap.min.js"></script>
    <link rel="stylesheet" href="../styles/bootstrap-4.5.3-dist/css/bootstrap.min.css">
    <script 
        src="../styles/bootstrap-4.5.3-dist/js/bootstrap.min.js">
    </script>
    <link rel="stylesheet" href="../styles/normalize.css">
    <link rel="stylesheet" href="../styles/generalStyle.css">
    <link rel="stylesheet" href="../styles/loanStyle.css">
    <script 
        src="prestamo/JS/addloan.js">
    </script>
    <title></title>
</head>
    <body class="background-img">
        
        <!--Form para agregar a inventario-->
        <form id="loan-add-form">
            <div class="form-background">
                <h1 class="center-title" >AÑADIR PRÉSTAMO</h1>
                <hr class="divider-hor">
                <div class="loan-container disp-flexRow">          
                    <div class="disp-flexCol row-form round-border">
                        <label class="" >Identificador</label>
                        <input class="" type="number" value="">
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
                        <input class="input-margin" id="loan-add-datetime" type="datetime-local">
                        <label class="input-margin" >Fecha retorno</label>
                        <input class="input-margin" id="loan-add-datetime-return" type="datetime-local">
                    </div>
                
                    <!--Tabla donde puedes seleccionar todos los objetos que vas a pedir-->
                    <div class="disp-flexCol row-form  table-scroll">
                        <label>Selecciona los materiales a prestar</label>
                        <table id="loan-table" class="">
                            <tbody id="loan-tbody"></tbody>
                            <!--fila-->
                        </table>
                        <p>ESTE TEXTO ES SOLO PARA VER SI JALA BIEN EL SCROLL OWO stie, est a fermentum consequat, nunc eros scelerisque quam, non lacinia lacus lorem non odio. Nulla sit amet iaculis magna, id iaculis ipsum. Nullam tincidunt tempor venenatis. In ut laoreet sapien. Vivamus sed urna eu nisi facilisis scelerisque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent congue mauris nisl, quis tincidunt arcu rhoncus et. Nam scelerisque tincidunt erat eu faucibus. Donec in eros id risus porttitor accumsan nec id ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel magna vitae lacus mattis euismod nec a felis. Vestibulum pretium ex sapien, in maximus lectus auctor sed. Ut lectus orci, mattis non nibh quis, consequat sodales risus. Sed molestie, est a fermentum consequat, nunc eros scelerisque quam, non lacinia lacus lorem non odio. Nulla sit amet iaculis magna, id iaculis ipsum. Nullam tincidunt tempor venenatis. In ut laoreet sapien. Vivamus sed urna eu nisi facilisis scelerisque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent congue mauris nisl, quis tincidunt arcu rhoncus et. Nam scelerisque tincidunt erat eu faucibus. Donec in eros id risus porttitor accumsan nec id ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel magna vitae lacus mattis euismod nec a felis. Vestibulum pretium ex sapien, in maximus lectus auctor sed. Ut lectus orci, mattis non nibh quis, consequat sodales risus. Sed molestie, est a fermentum consequat, nunc eros scelerisque quam, non lacinia lacus lorem non odio. Nulla sit amet iaculis magna, id iaculis ipsum. Nullam tincidunt tempor venenatis. In ut laoreet sapien. Vivamus sed urna eu nisi facilisis scelerisque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent congue mauris nisl, quis tincidunt arcu rhoncus et. Nam scelerisque tincidunt erat eu faucibus. Donec in eros id risus porttitor accumsan nec id ante.</p>
                    </div> 
                </div>
                <div class="addloan-btn">
                    <!--Boton para cancelar el prestamo-->
                    <button >Cancelar</button>
                    <!--Boton para agregar el prestamo-->
                    <button id="loan-add-add"> Agregar</button>
                </div>
            </div>
        </form> 
    </body>
</html>