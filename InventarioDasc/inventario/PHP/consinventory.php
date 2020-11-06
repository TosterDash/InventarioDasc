<?php 
    include ('conexion.php');
    $option = $_POST['option'];

    switch($option){
        case "clasificacion":
            $result = mysqli_query($conexion, "SELECT `tipoclasificacion`. * from `tipoclasificacion`");

            if(!$result){
                echo die("error");     
            }else{
                $json = array();
                while ($row = mysqli_fetch_array($result)) {
                    # code...
                    $json[] = array(
                        'idClasificacion' => $row['idTipoClasificacion'],
                        'clasificacion' => $row['clasificacion']
                        
                    );
                }
                $jsonString = json_encode($json);

                echo $jsonString;
            }
        break;

        case "consumible":
            //Crear consulta
            $result = mysqli_query($conexion, "SELECT `objeto`.* , `tipocategoria`.`categoria` from objeto, tipocategoria where `objeto`.`idTipoClasificacion` = 2 and `tipocategoria`.`idTipocategoria` = `objeto`.`idTipocategoria`");
            if(!$result){
                echo die("error");     
            }else{
                //Crear json
                $json = array();
                //Realizar consulta
                while($row = mysqli_fetch_array($result)){//Mientras tu variable fila este dentro de la cantidad de registros de consulta
                    $json []= array(
                        'idObjeto' => $row['idObjeto'],
                        'Nombre' => $row['Nombre'],
                        'Descripcion' => $row['Descripcion'],
                        'Cantidad' => $row['Cantidad'],
                        'categoria' => $row['categoria'],
                        'img' => base64_encode($row['img']),
                    );
                }
                $jsonstring = json_encode($json);
                echo $jsonstring;
            }
            
        break;

        case "equipo":
            //Crear consulta
            $result = mysqli_query($conexion, "SELECT `objeto`.* , `tipocategoria`.`categoria` from objeto, tipocategoria where `objeto`.`idTipoClasificacion` = 1 and `tipocategoria`.`idTipocategoria` = `objeto`.`idTipocategoria`");
            if(!$result){
                echo die("error");     
            }else{
                //Crear json
                $json = array();
                //Realizar consulta
                while($row = mysqli_fetch_array($result)){//Mientras tu variable fila este dentro de la cantidad de registros de consulta
                    $json []= array(
                        'idObjeto' => $row['idObjeto'],
                        'Nombre' => $row['Nombre'],
                        'Descripcion' => $row['Descripcion'],
                        'lastMant' => $row['lastMant'],
                        'nextMant' => $row['nextMant'],
                        'mantResp' => $row['mantResp'],
                        'categoria' => $row['categoria'],
                        'img' => base64_encode($row['img']),
                    );
                }
                $jsonstring = json_encode($json);
                echo $jsonstring;
            }
            
        break;

        case "delete":
            //Crear consulta delete
            $idObjeto = $_POST['idObjeto'];
            $result = mysqli_query($conexion,"DELETE FROM objeto WHERE idObjeto = '$idObjeto'");
            if(!$result){
                echo die("error");
            }
            
        break;


        //default siempre para las imagenes
        default:
            //Insertar imagen
            $idObjeto = $_POST["idObjeto"];
            $img = addslashes(file_get_contents($_FILES["img"]["tmp_name"]));
            $mod = ("UPDATE objeto SET img = '$img' WHERE idObjeto = '$idObjeto'");
            $result = mysqli_query($conexion,$mod);
            
            
        break;

    }




/*
    //Conectar a la base de datos
    include ('conexion.php');

    $cons = $_POST["cons"];
    //Crear consulta
    $result = mysqli_query($conexion, "SELECT * from objeto where Nombre LIKE '%$cons%' ");
    //Crear json
    $json = array();
    //Realizar consulta
    while($row = mysqli_fetch_array($result)){//Mientras tu variable fila este dentro de la cantidad de registros de consulta
        $json []= array(
            'idObjeto' => $row['idObjeto'],
            'Nombre' => $row['Nombre'],
            'Descripcion' => $row['Descripcion'],
            'lastMant' => $row['lastMant'],
            'nextMant' => $row['nextMant'],
        );
    }
    $jsonstring = json_encode($json);
    echo $jsonstring;

*/





?>
