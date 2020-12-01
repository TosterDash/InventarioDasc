<?php
include ('conexion.php');
$option = $_POST['option'];

switch($option){
    case "getComboboxMap":
        error_reporting(0);
        $nameCombo = $_POST["nameCombo"];
        $nombreTabla = $_POST["nombreTabla"];
        $idNombreRow = $_POST["idNombreRow"];
        $nombreRow = $_POST["nombreRow"];
        $nombreRowReferencia = $_POST["nombreRowReferencia"];
        $idReferencia = $_POST["idReferencia"];
        
        if($nombreRowReferencia == ""){
            
            $result = mysqli_query($conexion,"SELECT * from $nombreTabla");
        }else{
            
            $result = mysqli_query($conexion,"SELECT * from $nombreTabla where $nombreRowReferencia = $idReferencia");
        }
        $json = array();
        while ($row = mysqli_fetch_array($result)) {
   
        $json[] = array(
                'id' => $row[$idNombreRow],
                'info' => $row[$nombreRow],
               
                
            );
        }
        //se hace un encode para que la variable sea un string
        $jsonString = json_encode($json);

        echo $jsonString;
    break;

    case "getIdUsuario":
        $result = mysqli_query($conexion,"SELECT * from userprestamo");
        if(!$result){
            echo die("error");     
        }else{
            //Crear json
            $json = array();
            //Realizar consulta
            while($row = mysqli_fetch_array($result)){//Mientras tu variable fila este dentro de la cantidad de registros de consulta
                $json []= array(
                    'id' => $row['idUserPrestamo'],
                    'identificador' => $row['identificador'],
                    'nombre' => $row['nombre'],
                    'prestamoActivo' => $row['prestamoActivo'],
                );
            }
            $jsonstring = json_encode($json);
            echo $jsonstring;
        }
    break;

    case "getTablePrestamo":
        
        $result = mysqli_query($conexion,
        "SELECT `objeto`.`idObjeto`, concat(`objeto`.`idUabcs`,`objeto`.`idObjeto`) as `etiqueta`, `objeto`.`nombre`, `objeto`.`img`, `tipoproducto`.`producto` from `tipoproducto`,`objeto` where `objeto`.`idTipoProducto` = `tipoproducto`.`idTipoProducto` and `objeto`.`prestamo` = 'true'  ");
        
        if(!$result){
            echo die("error");     
        }else{
            //Crear json
            $json = array();
            //Realizar consulta
            while($row = mysqli_fetch_array($result)){//Mientras tu variable fila este dentro de la cantidad de registros de consulta
                $json []= array(
                    'idObjeto' => $row['idObjeto'],
                    'etiqueta' => $row['etiqueta'],
                    'nombre' => $row['nombre'],
                    'producto' => $row['producto'],
                    'img' => base64_encode($row['img']),
                );
            }
            $jsonstring = json_encode($json);
            echo $jsonstring;
        }

    break;

    case "addPrestamo":
        $numUsuario = $_POST["numUsuario"];
        $building = $_POST["building"];
        $classroom = $_POST["classroom"];
        $exitDate = $_POST["exitDate"];
        $returnDate = $_POST["returnDate"];
   
        //2016082681
        $insert = mysqli_query($conexion,"INSERT INTO prestamo(idEdificio,idAula,idUserprestamo,exitDate,returnDate,entregado)
        VALUES ('$building','$classroom','$numUsuario','$exitDate','$returnDate','false') ");
        
        if(!$insert){
            echo die("error");     
        }else{
            
        }
        

    break;

    case "disableDisponible":
        $objects = $_POST["objects"];
        $i = $_POST["i"];
        $mod = mysqli_query($conexion,"UPDATE objeto SET prestamo = 'false' where idObjeto = '$objects[$i]'");
    break;

    case "disableDisponibleUser":
        $numUsuario = $_POST["numUsuario"];
        $mod = mysqli_query($conexion,"UPDATE userprestamo SET prestamoActivo = 'true' where idUserPrestamo = '$numUsuario'");
        
    break;


    case "addPrestamoHasObjeto":
        $objects = $_POST["objects"];
        $i = $_POST["i"];
         $insert = mysqli_query($conexion,"INSERT INTO prestamo_has_objeto(idPrestamo,idObjeto)
        VALUES ( (SELECT idPrestamo from prestamo ORDER BY idPrestamo DESC LIMIT 1 ), $objects[$i]) ");
    break;


    case "entregarPrestamo":
        $idPrestamo = $_POST["idPrestamo"];
        $idUsuario = $_POST["idUsuario"];

        $mod = mysqli_query($conexion,"UPDATE `prestamo`,`objeto`,`userprestamo`, `prestamo_has_objeto`
        SET `prestamo`.`entregado` = 'true', `objeto`.`prestamo` = 'true', `userprestamo`.`prestamoActivo` = 'false'
        WHERE `prestamo`.`idPrestamo` = '$idPrestamo' 
        and `userprestamo`.`identificador` = '$idUsuario' 
        and `prestamo_has_objeto`.`idObjeto` = `objeto`.`idObjeto` 
        and `prestamo_has_objeto`.`idPrestamo` = '$idPrestamo' ");
        echo $mod;
    break;

    case "removePrestamoHas":
        $idPrestamo = $_POST["idPrestamo"];
        $delete = mysqli_query($conexion, "DELETE FROM prestamo_has_objeto where idPrestamo = '$idPrestamo'");
    break;

    case "getLoanCard":
        $typeEntregado = $_POST["typeEntregado"];
        $result = mysqli_query($conexion, "SELECT 
                                                `prestamo_has_objeto`.`idPrestamo`, 
                                                concat(`objeto`.`idUabcs`,`objeto`.idObjeto) as etiqueta ,
                                                `objeto`.`nombre`, `tipoproducto`.`producto`,
                                                `aula`.`nombreAula`,
                                                `edificio`.`Nombre`,
                                                `prestamo`.`exitDate`,
                                                `prestamo`.`returnDate`,
                                                `userprestamo`.`identificador`,
                                                `userprestamo`.`nombre`
                                            from 
                                                tipoproducto, 
                                                objeto, 
                                                aula,edificio, 
                                                prestamo, 
                                                prestamo_has_objeto,
                                                userprestamo
                                               
                                            where `prestamo_has_objeto`.`idPrestamo` = `prestamo`.`idPrestamo` 
                                                and `prestamo_has_objeto`.`idObjeto` = `objeto`.`idObjeto`  
                                                and `prestamo`.`idEdificio` = `edificio`.`idEdificio` 
                                                and `prestamo`.`entregado` = '$typeEntregado' 
                                                and `prestamo`.`idAula` = `aula`.`idAula` 
                                                and `objeto`.`idTipoProducto` = `tipoproducto`.`idTipoProducto`
                                                and `prestamo`.`idUserprestamo` = `userprestamo`.`idUserPrestamo`
                                                
                                                
        ");
        if(!$result){
            echo die("error");     
        }else{
            //Crear json
            $json = array();
            //Realizar consulta
            while($row = mysqli_fetch_array($result)){//Mientras tu variable fila este dentro de la cantidad de registros de consulta
                $json []= array(
                    'idPrestamo' => $row['idPrestamo'],
                    'etiqueta' => $row['etiqueta'],
                    'nombre' => $row['nombre'],
                    'producto' => $row['producto'],
                    'nombreAula' => $row['nombreAula'],
                    'nombreEdificio' => $row['Nombre'],
                    'exitDate' => $row['exitDate'],
                    'returnDate' => $row['returnDate'],
                    'idUsuario' => $row['identificador'],//atributo temporal
                    'nombreUsuario' => $row['nombre']//atributo temporal
                );
            }
            $jsonstring = json_encode($json);
            echo $jsonstring;
        }

    break;


    /*
    case "entregarPrestamo":
        
    break;
    */


}



?>