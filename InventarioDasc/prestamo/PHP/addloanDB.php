<?php 
    //Conectar a la base de datos
    include ('conexion.php');

    //Obtener datos para crear tabla 
    //Crear consulta
    $result = mysqli_query($conexion, "SELECT * from objeto where `prestamo` = `true`");
    if(!$result){
        echo die("error");     
    }else{
        //Crear json
        $json = array();
        //Realizar consulta
        while($row = mysqli_fetch_array($result)){//Mientras tu variable fila este dentro de la cantidad de registros de consulta
            $json []= array(
                'idObjeto' => $row['idObjeto'],
                'idUabcs' => $row['idUabcs'],
                'nombre' => $row['nombre'],
                'descripcion' => $row['descripcion'],
                'prestamo' => $row['prestamo'],
                'mantenimiento' => $row['mantenimiento'],
                'lastMant' => $row['lastMant'],
                'nextMant' => $row['nextMant'],
                'mantResp' => $row['mantResp'],
                'producto' => $row['producto'],
                'img' => base64_encode($row['img']),
            );
        }
        $jsonstring = json_encode($json);
        echo $jsonstring;
    }






    //Crear variables
    $building = $_POST["building"];
    $classroom = $_POST["clasroom"];
    $exitDate = $_POST["exitDate"];
    $returnDate = $_POST["returnDate"];
    //Crear query de insert
    $insert=("INSERT INTO objeto (edificio, aula, exitDate, returnDate) VALUES ('$building', '$classroom', '$exitDate','$returnDate')")
    $objetos = $_POST["objetos"];
    //for que recorre el arreglo de objetos que estaran en el prestamo
   /* for(var i; i<$objetos.length){
       //consultar la tabla de objetos donde el nombre del objeto sea igual al objeto en la posicion i del arreglo
        $idobjeto = mysqli_query($conexion, "SELECT idobjeto from objeto where Nombre LIKE '%$objetos[i]%' ");
        //consulta la tabla prestamo para obtener el registro que se acaba de crear
        //COMO HAGO ESTO?
        $idprestamo = mysqli_query($conexion, "SELECT idprestamo from prestamo where Nombre LIKE '%$objetos[i]%' ");
        //$insert=("INSERT INTO objeto_has_prestamo (idobjeto, idprestamo)
    }*/
    
    //Insertar a la base de datos
    $result = mysqli_query($conexion, $insert);
?>
