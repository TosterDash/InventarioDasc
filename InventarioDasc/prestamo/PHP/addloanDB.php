<?php 
    //Conectar a la base de datos
    include ('conexion.php');
    
    //Obtener datos para crear tabla 
    //Crear consulta
    /*$result = mysqli_query($conexion, "SELECT idObjeto, nombre from objeto where prestamo = 'true'");
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
    }*/
    $option = $_GET['option'];
    switch($option){
        case "table":
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
        break;
        case "CB1":
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
        break;
        case "CB2":
            $building = $_GET["building"];
            $result = mysqli_query($conexion, "SELECT aula.nombreAula from aula, edificio where edificio.Nombre = '$building' AND edificio.idEdificio = aula.idEdificio");
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
    }
    
?>
