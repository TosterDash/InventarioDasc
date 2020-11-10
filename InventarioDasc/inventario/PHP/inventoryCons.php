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
                        'clasificacion' => $row['clasificacion'],
                        'option' => "clasificacion"
                        
                    );
                }
                $jsonString = json_encode($json);

                echo $jsonString;
            }
        break;

        case "producto":
            $idClasificacion = $_POST["idClasificacion"];
            $result = mysqli_query($conexion, "SELECT * from tipoproducto where idTipoClasificacion = '$idClasificacion' ");

            if(!$result){
                echo die("error");     
            }else{
                $json = array();
                while ($row = mysqli_fetch_array($result)) {
                    # code...
                    $json[] = array(
                        'idProducto' => $row['idTipoProducto'],
                        'producto' => $row['producto'],
                        'option' => "producto"
                        
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

        case "updateFileEquipo":
            //Crear consulta
            $idObjeto = $_POST['idObjeto'];
            $result = mysqli_query($conexion, "SELECT `objeto`.* , `tipocategoria`.`categoria` from objeto, tipocategoria where  `objeto`.`idTipoClasificacion` = 1 and `tipocategoria`.`idTipocategoria` = `objeto`.`idTipocategoria` and `objeto`.`idObjeto`= '$idObjeto' ");
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

        case "updateFileConsumible":
            //Crear consulta
            $idObjeto = $_POST['idObjeto'];
            $result = mysqli_query($conexion, "SELECT `objeto`.* , `tipocategoria`.`categoria` from objeto, tipocategoria where  `objeto`.`idTipoClasificacion` = 2 and `tipocategoria`.`idTipocategoria` = `objeto`.`idTipocategoria` and `objeto`.`idObjeto`= '$idObjeto' ");
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
                        'cantidad' => $row['Cantidad'],
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

        case "editCategoria":
            $idObjeto = $_POST["idObjeto"];
            $editInput = $_POST["editInput"];
            $mod = ("UPDATE objeto SET idTipoCategoria = '$editInput' WHERE idObjeto = '$idObjeto'");
            $result = mysqli_query($conexion,$mod);
            if(!$result){
                echo die("error");
            }

        break;

        case "editNombre":
            $idObjeto = $_POST['idObjeto'];
            $editInput = $_POST['editInput'];
            $mod = ("UPDATE objeto SET Nombre = '$editInput' WHERE idObjeto = '$idObjeto'");
            $result = mysqli_query($conexion,$mod);
            if(!$result){
                echo die("error");
            }
        break;

        case "editDescripcion":
            $idObjeto = $_POST['idObjeto'];
            $editInput = $_POST['editInput'];
            $mod = ("UPDATE objeto SET Descripcion = '$editInput'  WHERE idObjeto = '$idObjeto'");
            $result = mysqli_query($conexion,$mod);
            if(!$result){
                echo die("error");
            }
        break;

        case "editCantidad":
            $idObjeto = $_POST['idObjeto'];
            $editInput = $_POST['editInput'];
            $mod = ("UPDATE objeto SET Cantidad = '$editInput'  WHERE idObjeto = '$idObjeto'");
            $result = mysqli_query($conexion,$mod);
            if(!$result){
                echo die("error");
            }
        break;

        case "editMantenimiento":
            $idObjeto = $_POST['idObjeto'];
            $editInput = $_POST['editInput'];
            $editInput2 = $_POST['editInput2'];
            $editInput3 = $_POST['editInput3'];
           
            $mod = ("UPDATE objeto SET lastMant = '$editInput2', nextMant = '$editInput3', mantResp = '$editInput' WHERE idObjeto = '$idObjeto'");
            $result = mysqli_query($conexion,$mod);
            if(!$result){
                echo die("error");
            }
            
        break;

        case "search":
            $option = $_POST['option'];
            $buscarPor = $_POST['buscarPor'];
            $stringSearch = $_POST['stringSearch'];
            $select = ("SELECT `objeto`.`idObjeto` from objeto where `objeto`. `$buscarPor` LIKE '%$stringSearch%' ");
            $result = mysqli_query($conexion,$select);
            if(!$result){
                echo die("error");
            }else{
                //Crear json
                $json = array();
                //Realizar consulta
                while($row = mysqli_fetch_array($result)){//Mientras tu variable fila este dentro de la cantidad de registros de consulta
                    $json []= array(
                        'idObjeto' => $row['idObjeto'],
                    );
                }
                $jsonstring = json_encode($json);
                echo $jsonstring;
            }

        break;

        case "addInventory":
            //mandar añadir objeto
            $clasificacion = $_POST["col-1-combobox-category"];
            $producto = $_POST["col-1-combobox-product"];
            $nombre = $_POST["col-2-text-name"];
            $desc = $_POST["col-2-text-desc"];
            $checkboxMant = $_POST["checkboxMant"];
            $checkboxPrestamo = $_POST["checkboxPrestamo"];

            $respMant = $_POST["col-2-text-mantResp"];
            $lastMant = $_POST["col-2-date-lastMant"];
            $nextMant = $_POST["col-2-date-nextMant"];
            $cant = $_POST["col-2-number-cant"];
            $img = addslashes(file_get_contents($_FILES["item_file"]["tmp_name"]));
            
            switch($clasificacion){
                //caso para Equipos
                case "1":
                    $insert = ("INSERT INTO objeto(idUabcs,nombre,descripcion,cantidad,prestamo,mantenimiento,lastMant,nextMant,mantResp,idTipoProducto,img)
                    VALUES (null,'$nombre','$desc', null, '$checkboxPrestamo', '$checkboxMant', '$lastMant', '$nextMant', '$respMant','$producto', '$img') ");


                    $result = mysqli_query($conexion, $insert);
                    echo $result;    
                break;
                //caso para consumibles
                case "2":
                    $insert = ("INSERT INTO objeto(idUabcs,nombre,descripcion,cantidad,prestamo,mantenimiento,lastMant,nextMant,mantResp,idTipoProducto,img)
                    VALUES (null,'$nombre','$desc', '$cant', null , null , null, null, null,'$producto', '$img') ");


                    $result = mysqli_query($conexion, $insert);
                    echo $result;
                break;
                //Error
                default:
                    echo die("error");
                break;
            }

            

            
        break;


        //default siempre para las imagenes
        default:
            //Insertar imagen
            $idObjeto = $_POST["idObjeto"];
            $img = addslashes(file_get_contents($_FILES["img"]["tmp_name"]));
            $mod = ("UPDATE objeto SET img = '$img' WHERE idObjeto = '$idObjeto'");
            $result = mysqli_query($conexion,$mod);
            if(!$result){
                echo die("error");
            }
            
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
