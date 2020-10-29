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

        $insert=("INSERT INTO objeto (Nombre, Descripcion, Cantidad, lastMant, nextMant, mantResp, idTipoCategoria) VALUES ('$name', '$desc', 0,'$lastMant', '$nextMant', '$resp',null)")
    }else if($value == "Consumible"){
        $name = $_POST["name"];
        $desc = $_POST["desc"];
        $cant = $_POST["cant"];
        $insert=("INSERT INTO objeto (Nombre, Descripcion, Cantidad, lastMant, nextMant, mantResp, idTipoCategoria) VALUES ('$name', '$desc', '$cant', null, null, null, null)")
    }
    
    $result = mysqli_query($conexion, $insert);
    
?>