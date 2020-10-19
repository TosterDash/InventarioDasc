<?php 
    include ('conexion.php');
    $result = mysqli_query($conexion, "SELECT * from objeto");

    $json = array();

    while($row = mysqli_fetch_array($result)){
        $json []= array(
            'idObjeto' => $row['idObjeto'],
            'Nombre' => $row['Nombre'],
            'Descripcion' => $row['Descripcion'],
            'lastMant' => $row['lastMant'],
            'nextMant' => $row['nextMant'],
        );
    }
    $jsonstring = json_encode($json);
    echo $jsonstring;


?>
