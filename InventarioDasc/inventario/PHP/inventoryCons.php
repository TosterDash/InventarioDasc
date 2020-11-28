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
            $idTipoReferencia = $_POST["idTipoReferencia"];
            $result = mysqli_query($conexion, "SELECT `tipoproducto`.`idTipoProducto`,`tipoproducto`.`producto` from tipoproducto 
                                    where `tipoproducto`.`idTipoClasificacion` = '$idTipoReferencia' ");

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

        case "edificio":
            $result = mysqli_query($conexion, "SELECT `edificio`. * from `edificio`");
            if(!$result){
                echo die("error");     
            }else{
                $json = array();
                while ($row = mysqli_fetch_array($result)) {
                    # code...
                    $json[] = array(
                        'idEdificio' => $row['idEdificio'],
                        'Nombre' => $row['Nombre'],
                        'option' => "edificio",

                    );
                }
                $jsonString = json_encode($json);

                echo $jsonString;
            }
        break;

        case "aula":
            $idTipoReferencia = $_POST["idTipoReferencia"];
            $result = mysqli_query($conexion, "SELECT `aula`. * from `aula` where `aula`.`idEdificio`='$idTipoReferencia'");
            if(!$result){
                echo die("error");     
            }else{
                $json = array();
                while ($row = mysqli_fetch_array($result)) {
                    # code...
                    $json[] = array(
                        'idAula' => $row['idAula'],
                        'nombreAula' => $row['nombreAula'],
                        'option' => "aula",

                    );
                }
                $jsonString = json_encode($json);

                echo $jsonString;
            }
        break;

        
        
        case "consumible":
            //Crear consulta
            $result = mysqli_query($conexion, "SELECT `objeto`.*,`tipoproducto`.`producto` from objeto,tipoproducto where `tipoproducto`.`idTipoClasificacion`=2 and `objeto`.`idTipoProducto`=`tipoproducto`.`idTipoProducto`");
            if(!$result){
                echo die("error");     
            }else{
                //Crear json
                $json = array();
                //Realizar consulta
                while($row = mysqli_fetch_array($result)){//Mientras tu variable fila este dentro de la cantidad de registros de consulta
                    $json []= array(
                        'id' => $row['idObjeto'],
                        'idUabcs' => $row['idUabcs'],
                        'nombre' => $row['nombre'],
                        'descripcion' => $row['descripcion'],
                        'cantidad' => $row['cantidad'],
                        'producto' => $row['producto'],
                        'img' => base64_encode($row['img']),
                    );
                }
                $jsonstring = json_encode($json);
                echo $jsonstring;
            }
            
        break;

        case "equipo":
            //Crear consulta
            $result = mysqli_query($conexion, "SELECT `objeto`.*, concat(`objeto`.`idUabcs`, `objeto`.`idObjeto`) as etiqueta,`tipoproducto`.`producto`, DATE_FORMAT(objeto.lastMant, '%d-%m-%Y') as lastMant, DATE_FORMAT(objeto.nextMant, '%d-%m-%Y') as nextMant   from objeto,tipoproducto where `tipoproducto`.`idTipoClasificacion`=1 and `objeto`.`idTipoProducto`=`tipoproducto`.`idTipoProducto`");
            if(!$result){
                echo die("error");     
            }else{
                //Crear json
                $json = array();
                //Realizar consulta
                while($row = mysqli_fetch_array($result)){//Mientras tu variable fila este dentro de la cantidad de registros de consulta
                    $json []= array(
                        'idObjeto' => $row['idObjeto'],
                        'idUabcs' => $row['idUabcs'],
                        'etiqueta' => $row['etiqueta'],
                        'nombre' => $row['nombre'],
                        'descripcion' => $row['descripcion'],
                        'prestamo' => $row['prestamo'],
                        'mantenimiento' => $row['mantenimiento'],
                        'lastMant' => $row['lastMant'],
                        'nextMant' => $row['nextMant'],
                        'mantResp' => $row['mantResp'],
                        'producto' => $row['producto'],
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
            $result = mysqli_query($conexion, "SELECT `objeto`.*, concat(`objeto`.`idUabcs`, `objeto`.`idObjeto`), DATE_FORMAT(objeto.lastMant, '%d-%m-%Y') as lastMant, DATE_FORMAT(objeto.nextMant, '%d-%m-%Y') as nextMant as etiqueta,`tipoproducto`.`producto` from objeto,tipoproducto where `tipoproducto`.`idTipoClasificacion`=1 and `objeto`.`idTipoProducto`=`tipoproducto`.`idTipoProducto` and `objeto`.`idObjeto`='$idObjeto'");
            if(!$result){
                echo die("error");     
            }else{
                //Crear json
                $json = array();
                //Realizar consulta
                while($row = mysqli_fetch_array($result)){//Mientras tu variable fila este dentro de la cantidad de registros de consulta
                    $json []= array(
                        'idObjeto' => $row['idObjeto'],
                        'idUabcs' => $row['idUabcs'],
                        'etiqueta' => $row['etiqueta'],
                        'nombre' => $row['nombre'],
                        'descripcion' => $row['descripcion'],
                        'prestamo' => $row['prestamo'],
                        'mantenimiento' => $row['mantenimiento'],
                        'lastMant' => $row['lastMant'],
                        'nextMant' => $row['nextMant'],
                        'mantResp' => $row['mantResp'],
                        'producto' => $row['producto'],
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
            $result = mysqli_query($conexion, "SELECT `objeto`.*,`tipoproducto`.`producto` from objeto,tipoproducto where `tipoproducto`.`idTipoClasificacion`=2 and `objeto`.`idTipoProducto`=`tipoproducto`.`idTipoProducto` and `objeto`.`idObjeto` = '$idObjeto' ");
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
                        'descripcion' => $row['descripcion'],
                        'cantidad' => $row['cantidad'],
                        'producto' => $row['producto'],
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
            $editInput = $_POST["editInput".$idObjeto];
            $mod = ("UPDATE objeto SET idTipoProducto = '$editInput' WHERE idObjeto = '$idObjeto'");
            $result = mysqli_query($conexion,$mod);
            if(!$result){
                echo die("error");
            }

        break;

        case "editNombre":
            $idObjeto = $_POST['idObjeto'];
            $editInput = $_POST['editInput'];
            $mod = ("UPDATE objeto SET nombre = '$editInput' WHERE idObjeto = '$idObjeto'");
            $result = mysqli_query($conexion,$mod);
            if(!$result){
                echo die("error");
            }
            echo $result;
        break;

        case "editDescripcion":
            $idObjeto = $_POST['idObjeto'];
            $editInput = $_POST['editInput'];
            $mod = ("UPDATE objeto SET descripcion = '$editInput'  WHERE idObjeto = '$idObjeto'");
            $result = mysqli_query($conexion,$mod);
            if(!$result){
                echo die("error");
            }
        break;

        case "editCantidad":
            $idObjeto = $_POST['idObjeto'];
            $editInput = $_POST['editInput'];
            $mod = ("UPDATE objeto SET cantidad = '$editInput'  WHERE idObjeto = '$idObjeto'");
            $result = mysqli_query($conexion,$mod);
            if(!$result){
                echo die("error");
            }
        break;

        case "editMantenimiento":
            $optionMantenimiento = $_POST['optionMantenimiento'];
            $idObjeto = $_POST['idObjeto'];
            $editInput = $_POST['editInput'];
            $editInput3 = $_POST['editInput3'];
    
            switch($optionMantenimiento){
                case "editMantenimiento":
                    $mod = ("UPDATE objeto SET mantenimiento = 'true', nextMant = '$editInput3', mantResp = '$editInput' WHERE idObjeto = '$idObjeto'");
                    $result = mysqli_query($conexion,$mod);
                    if(!$result){
                        echo die("error");
                    }
                break;

                case "cancelMantenimiento":
                    $mod = ("UPDATE objeto SET mantenimiento = 'false', nextMant = '', mantResp = '$editInput' WHERE idObjeto = '$idObjeto'");
                    $result = mysqli_query($conexion,$mod);
                    if(!$result){
                        echo die("error");
                    }
                break;
            }


           
            
        break;
        
        case "editPrestamo":
            $idObjeto = $_POST['idObjeto'];
            $isChecked = $_POST['isChecked'];
            $mod = ("UPDATE objeto SET prestamo = '$isChecked' WHERE idObjeto = '$idObjeto'");
                    $result = mysqli_query($conexion,$mod);
                    if(!$result){
                        echo die("error");
                    }
        break;

        case "mantenimientoHecho":
            $idObjeto = $_POST["idObjeto"];
            $lastMant = $_POST["lastMant"];
            $mod = ("UPDATE objeto SET mantenimiento = 'false',lastMant = '$lastMant', nextMant = '' WHERE idObjeto = '$idObjeto'");
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
            error_reporting(0);
            //mandar añadir objeto
            $clasificacion = $_POST["col-1-combobox-category"];
            $producto = $_POST["col-1-combobox-product"];
            $nombre = $_POST["col-2-text-name"];
            $desc = $_POST["col-2-text-desc"];
            $checkboxMant = $_POST["checkboxMant"];
            $checkboxPrestamo = $_POST["checkboxPrestamo"];
            $idAula = $_POST["col-2-combobox-aulas"];

            $respMant = $_POST["col-2-text-mantResp"];
            $nextMant = $_POST["col-2-date-nextMant"];
            $cant = $_POST["col-2-number-cant"];
            $img = addslashes(file_get_contents($_FILES["item_file"]["tmp_name"]));
            
            switch($clasificacion){
                //caso para Equipos
                case "1":
                    $insert = ("INSERT INTO objeto(idUabcs,nombre,descripcion,cantidad,prestamo,mantenimiento,lastMant,nextMant,mantResp,idTipoProducto,img)
                    VALUES ('UABCS-','$nombre','$desc', null, '$checkboxPrestamo', '$checkboxMant', '', '$nextMant', '$respMant','$producto', '$img') ");
                    $result = mysqli_query($conexion, $insert);
                    echo $idAula;
                    
                break;
                //caso para consumibles
                case "2":
                    $insert = ("INSERT INTO objeto(idUabcs,nombre,descripcion,cantidad,prestamo,mantenimiento,lastMant,nextMant,mantResp,idTipoProducto,img)
                    VALUES (null,'$nombre','$desc', '$cant', null , null , null, null, null,'$producto', '$img') ");
                    $result = mysqli_query($conexion, $insert);
                    echo $idAula;
                    
                break;
                //Error
                default:
                    echo die("error");
                break;
            }
        break;

        case "addObjetoHasAula":
            $idAula = $_POST["idAula"];
            $result = mysqli_query($conexion, "INSERT INTO aula_has_objeto(idAula,idObjeto) VALUES ($idAula, (SELECT idObjeto from objeto ORDER BY idObjeto DESC LIMIT 1 )) ");
            if(!$result){
                echo die("error");
            }
            echo $result;          
        break;

        case "deleteProducto":
            $productVal = $_POST["productVal"];
            $result = mysqli_query($conexion,"DELETE FROM objeto WHERE idTipoProducto = '$productVal' ");
            if(!$result){
                //echo die("error");
            }
            $result = mysqli_query($conexion,"DELETE FROM tipoproducto WHERE idTipoProducto = '$productVal' ");
            if(!$result){
                //echo die("error");
            }
            
        break;

        case "addProducto":
            $productVal = $_POST["productVal"];
            $clasificacionVal = $_POST["clasificacionVal"];
            $result = mysqli_query($conexion,"INSERT INTO tipoproducto(producto,idTipoClasificacion) VALUES ('$productVal','$clasificacionVal') ");
            if(!$result){
                //echo die("error");
            }
        break;

        

        case "getDate":
            $select = ("SELECT `objeto`.`idObjeto`, concat(objeto.idUabcs, objeto.idObjeto) as etiqueta  ,`objeto`.`lastMant`,`objeto`.`nextMant`,`objeto`.`mantResp`,`tipoproducto`.`producto`, 
                        DATE_FORMAT(objeto.lastMant, '%d-%m-%Y') as lastMant, DATE_FORMAT(objeto.nextMant, '%d-%m-%Y') as nextMantfrom objeto, tipoproducto where `objeto`.`mantenimiento` = 'true' and `tipoproducto`.`idTipoProducto`=`objeto`.idTipoProducto");
            $result = mysqli_query($conexion, $select);
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
                        'producto' => $row['producto'],
                        'lastMant' => $row['lastMant'],
                        'nextMant' => $row['nextMant'],
                        'mantResp' => $row['mantResp'],
                        'tipoNotificacion' => "mantenimiento",
                    );
                }
                $jsonstring = json_encode($json);
                echo $jsonstring;
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
