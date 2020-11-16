<?php 
    //Conectar a la base de datos
    include ('../../baseConexion/conexion.php');

    //Obtener datos para crear tabla 
    //Crear consulta
    $result = mysqli_query($conexion, "SELECT idObjeto, nombre from objeto where prestamo = 'true'");
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
