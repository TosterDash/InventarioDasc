<?php 
    //crear conexion
    include ('conexion.php');

    //value recibe si el articulo es equipo o consumible
    $value = $_POST["value"];
    if($value == "Equipo"){
        //si el objeto es equipo
        //Guardar variables obtenidas de js
        $category = $_POST["category"];
        $name = $_POST["name"];
        $desc = $_POST["desc"];
        $resp = $_POST["resp"];
        $lastMant = $_POST["lastMant"];
        $nextMant = $_POST["nextMant"];
        //Query de insert
        $insert=("INSERT INTO objeto (Nombre, Descripcion, Cantidad, lastMant, nextMant, mantResp, idTipoCategoria) VALUES ('$name', '$desc', 0,'$lastMant', '$nextMant', '$resp',null)")
    }else if($value == "Consumible"){
        //si el objeto es equipo
        //Guardar variables obtenidas de js
        $name = $_POST["name"];
        $desc = $_POST["desc"];
        $cant = $_POST["cant"];
        //Query de insert
        $insert=("INSERT INTO objeto (Nombre, Descripcion, Cantidad, lastMant, nextMant, mantResp, idTipoCategoria) VALUES ('$name', '$desc', '$cant', null, null, null, null)")
    }
    //Insertar a la base de datos
    $result = mysqli_query($conexion, $insert);
?>