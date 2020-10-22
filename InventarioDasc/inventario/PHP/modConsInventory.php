<?php
    include("conexion.php");

    $idObjeto = $_POST["idObjeto"];
    $nombre = $_POST["nombre"];
    $des = $_POST["des"];
    $lastMant = $_POST["lastMant"];
    $nextMant = $_POST["nextMant"];

    $mod = ("UPDATE objeto SET Nombre = '$nombre', Descripcion = '$des', Cantidad = 0 ,
    lastMant = '$lastMant', nextMant = '$nextMant', idTipoCategoria = null, idTipoEquipo = null, idTipoHerramienta = null,
    idTipoConsumible = null WHERE idObjeto = '$idObjeto'");

    $result = mysqli_query($conexion,$mod);

    echo $idObjeto;



?>