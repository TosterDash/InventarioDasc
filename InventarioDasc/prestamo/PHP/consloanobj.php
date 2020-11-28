<?php
    include ('../../baseConexion/conexion.php');
    $loan = $_GET["loan"];
    $result = mysqli_query($conexion, "SELECT objeto.nombre, objeto.img from prestamo, objeto, prestamo_has_objeto WHERE prestamo_has_objeto.idObjeto = objeto.idObjeto AND prestamo_has_objeto.idPrestamo = prestamo.idPrestamo AND prestamo.idPrestamo = $loan");
    if(!$result){
        echo die("error");     
    }else{
        //Crear json
        $json = array();
        //Realizar consulta
        while($row = mysqli_fetch_array($result)){//Mientras tu variable fila este dentro de la cantidad de registros de consulta
            $json []= array(
                'nombre' => $row['nombre']
            );
        }
        $jsonstring = json_encode($json);
        echo $jsonstring;
    }
?>