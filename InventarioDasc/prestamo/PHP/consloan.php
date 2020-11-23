<?php
    include ('../../baseConexion/conexion.php');
    //prestamo usuario salon fechapedido fechaentrega
    $result = mysqli_query($conexion, "SELECT idObjeto, nombre from prestamo");
    if(!$result){
        echo die("error");     
    }else{
        //Crear json
        $json = array();
        //Realizar consulta
        while($row = mysqli_fetch_array($result)){//Mientras tu variable fila este dentro de la cantidad de registros de consulta
            $json []= array(
                'idObjeto' => $row['idObjeto'],
                'nombre' => $row['nombre'],
            );
        }
        $jsonstring = json_encode($json);
        echo $jsonstring;
    }
?>