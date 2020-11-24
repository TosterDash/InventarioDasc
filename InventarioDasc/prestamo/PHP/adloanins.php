<?php
    include ('../../baseConexion/conexion.php');
    //Crear variables
    $building = $_POST["building"];
    $classroom = $_POST["classroom"];
    $exitDate = $_POST["exitDate"];
    $returnDate = $_POST["returnDate"];
    $idPrestamo = 0;

    $query = mysqli_query($conexion, "SELECT idEdificio from edificio where Nombre  = '$building'");
    if($query){
        $result = mysqli_fetch_array($query);
        $idbld = $result['idEdificio'];
        
    }else{
        echo "error";
    }
    
    

    $query = mysqli_query($conexion, "SELECT idAula from aula where nombreAula  = '$classroom'");
    if($query){
        
        $result = mysqli_fetch_array($query);
        $idcls = $result['idAula'];
        echo $idbld;
    }else{
        echo "error";
    }
   
    $result = mysqli_query($conexion, "INSERT INTO prestamo (building,classroom,exitDate,returnDate) VALUES ('$idbld','$idcls','$exitDate','$returnDate')");
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