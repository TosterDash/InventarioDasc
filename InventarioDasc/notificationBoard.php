<!DOCTYPE html>
<html>
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<?php include ('header.html');?>
	<script src="inventario/JS/notificationBoard.js"></script>
	<link rel="stylesheet" href="../styles/normalize.css">
	<link rel="stylesheet" href="../styles/hover.css">
	<link rel="stylesheet" href="../styles/generalStyle.css">
	<link rel="stylesheet" href="../styles/notificationBoardStyle.css">
	<title>NOTIFICACIONES | INVENTARIO</title>
<head>
</head>
<body>
	
	<div class="disp-flexRow">
         <!--Barra de busqueda-->
        <div class="disp-flexCol cons-nav-bar">
            <div class="row-form cons-col-size"> 
                <label>Mostrar:</label>
                <select  name="combobox-search" id="combobox-search">
                    <option value="mantenimientoN">Mantenimiento</option>
                    <option value="prestamoN">Préstamos</option>
                    <option value="inventarioN">Productos</option>
                </select>
            </div >
        </div>
        <!--Barra de busqueda-->

        <div class="disp-flexWrap">
            <!--Template de una notificación-->
            <div class="single-notif disp-flexRow">
                <table>
                    <tr>
                        <th>Asunto</th>
                    </tr>   
                    <tr>
                        <td class="table-data">
                            Mantenimiento
                            <a class="show-info">
                                <img src="../resources/info_icon.png">
                            </a>
                            <a>
                                <img src="../resources/confirm.png">
                            </a>
                        </td>
                    </tr>
                </table>
                <div id="info-notif" class="info-notif">
                    información de la notifiación. el boton verde es para decir "SI WEY YA SE HIZO YA YA ALCH"
                </div>
            </div>
            <!--Template de una notificación-->
            
        </div>
        <script>
            $(function() {
                // DOM ready
                $('.show-info').hover(
                  function () {
                      $('.info-notif').show();
                  }, 
                  function () {
                      $('.info-notif').hide();
                  });
            });
        </script>
        

    </div>
</body>
</html>

