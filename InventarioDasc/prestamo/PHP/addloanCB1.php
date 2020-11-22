<?php 
    
    include ('../../baseConexion/conexion.php');
    
    //Obtener datos para crear tabla 
    //Crear consulta
    $result = mysqli_query($conexion, "SELECT Nombre from edificio");
    if(!$result){
        echo die("error");     
    }else{
        //Crear json
        $json = array();
        //Realizar consulta
        while($row = mysqli_fetch_array($result)){//Mientras tu variable fila este dentro de la cantidad de registros de consulta
            $json []= array(
                'Nombre' => $row['Nombre'],
            );
        }
        $jsonstring = json_encode($json);
        echo $jsonstring;
    }
?>