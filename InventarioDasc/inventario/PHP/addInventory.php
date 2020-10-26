<?php 
    include ('conexion.php');

    $value = $_POST["value"];
    if($value == "Equipo"){
        $category = $_POST["category"];
        $name = $_POST["name"];
        $desc = $_POST["desc"];
        $resp = $_POST["resp"];
        $lastMant = $_POST["lastMant"];
        $nextMant = $_POST["nextMant"];
    }else if($value == "Consumible"){
        $name = $_POST["name"];
        $desc = $_POST["desc"];
        $cant = $_POST["cant"];
    }
    
?>