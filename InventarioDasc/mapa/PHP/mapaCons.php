<?php
include ("../../baseConexion/conexion.php");
$option = $_POST["option"];

switch($option){
    case "getEdificios":
        //hacer el query
        $result = mysqli_query($conexion, "SELECT * FROM edificio");
        //el if comprobara si existe algun fallo en el query y lo hara saber en la consola
        if (!$result) {
        # code...
        die('Fallo en el query'.mysql_error($conexion));
        }
        //se crea un arreglo y en el while recorrera lo que se recolecto en el query para guardarlo en la variable arreglo
        $json = array();
        while ($row = mysqli_fetch_array($result)) {
        # code...
        $json[] = array(
            'idEdificio' => $row['idEdificio'],
            'Nombre' => $row['Nombre'],
            'x1' => $row['x1'],
            'y1' => $row['y1'],
            'x2' => $row['x2'],
            'y2' => $row['y2'],
            'x3' => $row['x3'],
            'y3' => $row['y3'],
            'x4' => $row['x4'],
            'y4' => $row['y4']
            


        );
        }
        //se hace un encode para que la variable sea un string
        $jsonString = json_encode($json);

        echo $jsonString;
    break;

    case "getAula":
        //hacer el query
        $result = mysqli_query($conexion, "SELECT * FROM aula");


        //se crea un arreglo y en el while recorrera lo que se recolecto en el query para guardarlo en la variable arreglo
        $json = array();
        while ($row = mysqli_fetch_array($result)) {
   
        $json[] = array(
                'idAula' => $row['idAula'],
                'idPlanta' => $row['idPlanta'],
                'idEdificio' => $row['idEdificio'],
                'nombreAula' => $row['nombreAula'],
                'x1' => $row['x1'],
                'y1' => $row['y1'],
                'x2' => $row['x2'],
                'y2' => $row['y2'],
                'x3' => $row['x3'],
                'y3' => $row['y3'],
                'x4' => $row['x4'],
                'y4' => $row['y4']
            


            );
        }
        //se hace un encode para que la variable sea un string
        $jsonString = json_encode($json);

        echo $jsonString;
    break;

    case "getTable":
        $idAula = $_POST["idAula"];
        $result = mysqli_query($conexion,
        "SELECT concat(`objeto`.`idUabcs`, `objeto`.`idObjeto`) as etiqueta,`tipoproducto`.`producto`,`objeto`.`nombre`,`objeto`.`descripcion`
         from `objeto`,`tipoproducto`,`aula_has_objeto` where `objeto`.`idObjeto`=`aula_has_objeto`.`idObjeto` and `aula_has_objeto`.`idAula` = '$idAula' and `objeto`.`idTipoProducto`=`tipoproducto`.`idTipoProducto`");

         //se crea un arreglo y en el while recorrera lo que se recolecto en el query para guardarlo en la variable arreglo
        $json = array();
        while ($row = mysqli_fetch_array($result)) {
   
        $json[] = array(
                'etiqueta' => $row['etiqueta'],
                'producto' => $row['producto'],
                'nombre' => $row['nombre'],
                'descripcion' => $row['descripcion'],
                
            );
        }
        //se hace un encode para que la variable sea un string
        $jsonString = json_encode($json);

        echo $jsonString;
    break;

    case "getComboboxMap":
        error_reporting(0);
        $nameCombo = $_POST["nameCombo"];
        $nombreTabla = $_POST["nombreTabla"];
        $idNombreRow = $_POST["idNombreRow"];
        $nombreRow = $_POST["nombreRow"];
        $nombreRowReferencia = $_POST["nombreRowReferencia"];
        $idReferencia = $_POST["idReferencia"];
        if($idReferencia == "" || $idReferencia == null){
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

    case "deletePolyAula":
        $id = $_POST["idAula"];

        $delete = mysqli_query($conexion, "DELETE FROM aula where idAula = '$id'");
    break;

    case "addPoly":
        $nombre = $_POST["nombre"];
        $xyCoord = $_POST["xyCoord"];
        $seleccionTipo = $_POST["seleccionTipo"];
        $plantaMap = $_POST["plantaMap"];
        $edificioMap = $_POST["edificioMap"];

        switch($seleccionTipo){
            case "edificio":
                $insertar = ("INSERT INTO edificio(Nombre,x1,y1,x2,y2,x3,y3,x4,y4) VALUES 
				('$nombre','$xyCoord[0]','$xyCoord[1]', '$xyCoord[2]', '$xyCoord[3]', '$xyCoord[4]', '$xyCoord[5]', '$xyCoord[6]', '$xyCoord[7]')");
				
                $result = mysqli_query($conexion, $insertar);
              
                echo $insertar;
                echo $result;
            break;

            case "aula":
                $insertar = ("INSERT INTO aula(idPlanta,idEdificio,nombreAula,x1,y1,x2,y2,x3,y3,x4,y4) VALUES 
                ('$plantaMap','$edificioMap','$nombre','$xyCoord[0]','$xyCoord[1]', '$xyCoord[2]', '$xyCoord[3]', '$xyCoord[4]', '$xyCoord[5]', '$xyCoord[6]', '$xyCoord[7]')");
				$result = mysqli_query($conexion, $insertar);
				echo $result;
            break;
        }


    break;

    


}



?>