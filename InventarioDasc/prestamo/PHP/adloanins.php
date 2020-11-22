<?php
    include ('../../baseConexion/conexion.php');
    //Crear variables
    $building = $_POST["building"];
    $classroom = $_POST["classroom"];
    $exitDate = $_POST["exitDate"];
    $returnDate = $_POST["returnDate"];
    $idPrestamo = 0;

    $result = mysqli_query($conexion, "INSERT INTO prestamo (building,classroom,exitDate,returnDate) VALUES ('$building','$classroom','$exitDate','$returnDate')");
    //Insertar a la base de datos
    $result = mysqli_query($conexion, "SELECT idPrestamo FROM prestamo ORDER BY idPrestamo DESC LIMIT 1");
    
    if(!$result){
        echo die("error");     
    }else{
        //Realizar consulta
        while($row = mysqli_fetch_array($result)){//Mientras tu variable fila este dentro de la cantidad de registros de consulta
            $idPrestamo = $row['idPrestamo'];
        }
        
    }

    //$object = array()
    $object = $_POST["objects"];
    $length  = count($object);
    echo $length;
    for($i = 0; $i<$length; $i++){
        echo $i;
        $result = mysqli_query($conexion, "INSERT INTO prestamo_has_objeto (idPrestamo,idObjeto) VALUES ('$idPrestamo','$object[$i]')");
    }
?>