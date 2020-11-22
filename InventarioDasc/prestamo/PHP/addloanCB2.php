<?php 
    
    include ('../../baseConexion/conexion.php');
    
    //Obtener datos para crear tabla 
    //Crear consulta
    $result = mysqli_query($conexion, "SELECT nombreAula from aula");
    if(!$result){
        echo die("error");     
    }else{
        //Crear json
        $json = array();
        //Realizar consulta
        while($row = mysqli_fetch_array($result)){//Mientras tu variable fila este dentro de la cantidad de registros de consulta
            $json []= array(
                'nombreAula' => $row['nombreAula'],
            );
        }
        $jsonstring = json_encode($json);
        echo $jsonstring;
    }
?>