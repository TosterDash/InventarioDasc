<?php
    include ('../../baseConexion/conexion.php');
    //prestamo usuario salon fechapedido fechaentrega
    $result = mysqli_query($conexion, "SELECT prestamo.idPrestamo, DATE_FORMAT(prestamo.exitDate, '%d-%m-%Y') as exitDate, DATE_FORMAT(prestamo.returnDate, '%d-%m-%Y') as returnDate, aula.nombreAula from prestamo, aula WHERE prestamo.idAula = aula.idAula");
    if(!$result){
        echo die("error");     
    }else{
        //Crear json
        $json = array();
        //Realizar consulta
        while($row = mysqli_fetch_array($result)){//Mientras tu variable fila este dentro de la cantidad de registros de consulta
            $json []= array(
                'idPrestamo' => $row['idPrestamo'],
                'exitDate' => $row['exitDate'],
                'returnDate' => $row['returnDate'],
                'aula' => $row['nombreAula'],
            );
        }
        $jsonstring = json_encode($json);
        echo $jsonstring;
    }
?>