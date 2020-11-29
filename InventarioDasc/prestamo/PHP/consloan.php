<?php
    include ('../../baseConexion/conexion.php');
    //prestamo usuario salon fechapedido fechaentrega
    $result = mysqli_query($conexion, "SELECT   prestamo.idPrestamo,
                                                DATE_FORMAT(prestamo.exitDate, '%d-%m-%Y') as exitDate, 
                                                DATE_FORMAT(prestamo.returnDate, '%d-%m-%Y') as returnDate, 
                                                aula.nombreAula, 
                                                concat(DATE_FORMAT(userprestamo.fecha, '%d%m%Y'), userprestamo.identificador) as idUsuario, 
                                                userprestamo.nombre as nombreUsuario 
                                        from prestamo, aula, userprestamo 
                                        WHERE prestamo.idAula = aula.idAula and `userprestamo`.`idUserprestamo` = `prestamo`.`idUserprestamo`");
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
                'idUsuario' => $row['idUsuario'],
                'nombreUsuario' => $row['nombreUsuario']
            );
        }
        $jsonstring = json_encode($json);
        echo $jsonstring;
    }
?>