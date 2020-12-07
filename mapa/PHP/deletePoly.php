<?php
    include("conexion.php");
    $idEdificio = $_POST["idEdificio"];
    $idAula = $_POST["idAula"];
    $op = $_POST["op"];
    switch($op){
        case "edificio":
            $delete = ("DELETE FROM aula WHERE idEdificio='$idEdificio'");
            $result = mysqli_query($conexion, $delete);
        

            $delete = ("DELETE FROM edificio WHERE idEdificio='$idEdificio'");
            $result = mysqli_query($conexion, $delete);
        break;

        case "aula":
            $delete = ("DELETE FROM aula WHERE idAula='$idAula'");
            $result = mysqli_query($conexion, $delete);
        break;
    }
	
    






?>