<?php
    include('conexion.php');
    $idObjeto = $_POST["idObjeto"];
    

    $delete = ("DELETE FROM objeto WHERE idObjeto='$idObjeto'");
    $result = mysqli_query($conexion,$delete);

    echo $idObjeto;

?>