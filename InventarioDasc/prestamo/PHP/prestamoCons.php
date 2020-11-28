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
        $building = $_POST["building"];
        $classroom = $_POST["classroom"];
        $exitDate = $_POST["exitDate"];
        $returnDate = $_POST["returnDate"];
        

        $insert = mysqli_query($conexion,"INSERT INTO prestamo(idEdificio,idAula,exitDate,returnDate,entregado)
        VALUES ('$building','$classroom','$exitDate','$returnDate',null) ");

        echo $insert;

    break;

    case "addPrestamoHasObjeto":
        $objects = $_POST["objects"];
        $i = $_POST["i"];
         $insert = mysqli_query($conexion,"INSERT INTO prestamo_has_objeto(idPrestamo,idObjeto)
        VALUES ( (SELECT idPrestamo from prestamo ORDER BY idPrestamo DESC LIMIT 1 ), $objects[$i]) ");
    break;


}



?>