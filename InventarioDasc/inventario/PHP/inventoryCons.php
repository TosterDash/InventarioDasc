<?php 
    include ('../../baseConexion/conexion.php');
    $option = $_POST['option'];

    switch($option){
        case "getCombobox":
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
                        'idObjeto' => $row['idObjeto'],
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
            $updateFile = $_POST["updateFile"];
            
            if($updateFile=="true"){
                $idObjeto = $_POST["idObjeto"];
                
                //Crear consulta
                $result = mysqli_query($conexion, "SELECT `objeto`.*,
                concat(`objeto`.`idUabcs`, `objeto`.`idObjeto`) as etiqueta,
                `tipoproducto`.`producto`, 
                DATE_FORMAT(objeto.lastMant, '%d-%m-%Y') as lastMant,
                DATE_FORMAT(objeto.nextMant, '%d-%m-%Y') as nextMant,
                `mantresp`.`nombreRol`
            from objeto,tipoproducto,mantresp where `tipoproducto`.`idTipoClasificacion`=1 and `objeto`.`idTipoProducto`=`tipoproducto`.`idTipoProducto` and `objeto`.`idMantResp`=`mantresp`.`idMantResp` and `objeto`.`idObjeto`='$idObjeto'");
            
            }else{
                //Crear consulta
                    $result = mysqli_query($conexion, "SELECT `objeto`.*,
                    concat(`objeto`.`idUabcs`, `objeto`.`idObjeto`) as etiqueta,
                    `tipoproducto`.`producto`, 
                    DATE_FORMAT(objeto.lastMant, '%d-%m-%Y') as lastMant,
                    DATE_FORMAT(objeto.nextMant, '%d-%m-%Y') as nextMant,
                    `mantresp`.`nombreRol`
                from objeto,tipoproducto,mantresp where `tipoproducto`.`idTipoClasificacion`=1 and `objeto`.`idTipoProducto`=`tipoproducto`.`idTipoProducto` and `objeto`.`idMantResp`=`mantresp`.`idMantResp`");
                
            }
            
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
                        'nombreRol' => $row['nombreRol'],
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
            $result = mysqli_query($conexion, "SELECT `objeto`.*,
             concat(`objeto`.`idUabcs`, `objeto`.`idObjeto`) as etiqueta,
             `tipoproducto`.`producto`, 
             DATE_FORMAT(objeto.lastMant, '%d-%m-%Y') as lastMant,
              DATE_FORMAT(objeto.nextMant, '%d-%m-%Y') as nextMant,
              `mantresp`.`nombreRol`
            from objeto,tipoproducto,mantresp where `tipoproducto`.`idTipoClasificacion`=1 and `objeto`.`idTipoProducto`=`tipoproducto`.`idTipoProducto` and `objeto`.`idMantResp`=`mantresp`.`idMantResp` and `objeto`.`idObjeto`='$idObjeto'");
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
                        'nombreRol' => $row['nombreRol'],
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
            $result = mysqli_query($conexion, "SELECT `objeto`.*,`tipoproducto`.`producto` from objeto,tipoproducto where `tipoproducto`.`idTipoClasificacion`=2 and `objeto`.`idTipoProducto`=`tipoproducto`.`idTipoProducto` and `objeto`.`idObjeto` ='$idObjeto'");
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

        case "verificarPrestamos":
            $idObjeto = $_POST['idObjeto'];
            $result = mysqli_query($conexion,"SELECT `prestamo_has_objeto`.`idPrestamo` from
            prestamo_has_objeto,prestamo
            where `prestamo_has_objeto`.`idObjeto`='$idObjeto' and
            `prestamo_has_objeto`.`idPrestamo`=`prestamo`.`idPrestamo` and
            `prestamo`.`entregado`='false'");

            $filas = mysqli_num_rows($result);
            echo $filas;
        break;

        case "delete":
            //Crear consulta delete
            $idObjeto = $_POST['idObjeto'];
            $result = mysqli_query($conexion,"DELETE FROM aula_has_objeto WHERE idObjeto = '$idObjeto'");

            $result = mysqli_query($conexion,"DELETE FROM prestamo_has_objeto WHERE idObjeto = '$idObjeto'");

            $result = mysqli_query($conexion,"DELETE FROM objeto WHERE idObjeto = '$idObjeto'");
           
            
            
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
            $editInput2 = $_POST['editInput2'];
    
            switch($optionMantenimiento){
                case "editMantenimiento":
                    $mod = ("UPDATE objeto SET mantenimiento = 'true', nextMant = '$editInput2', idMantResp = '$editInput' WHERE idObjeto = '$idObjeto'");
                    $result = mysqli_query($conexion,$mod);
                    echo $mod;
                    if(!$result){
                        echo die("error");
                    }
                    
                break;

                case "cancelMantenimiento":
                    $mod = ("UPDATE objeto SET mantenimiento = 'false', nextMant = '', idMantResp = '$editInput' WHERE idObjeto = '$idObjeto'");
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
            $id = $_POST["id"];
            $lastMant = $_POST["lastMant"];
            $nextMant = $_POST["nextMant"];
            $mod = ("UPDATE objeto SET lastMant = '$lastMant', nextMant = '$nextMant' WHERE idObjeto = '$id'");
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
            $respMant = $_POST["col-2-combobox-mantResp"];
            $nextMant = $_POST["col-2-date-nextMant"];
            $cant = $_POST["col-2-number-cant"];
            $img = addslashes(file_get_contents($_FILES["item_file"]["tmp_name"]));
            
            

            switch($clasificacion){
                //EQUIPO
                case "1":
                    $insert = ("INSERT INTO 
                    objeto(idUabcs,nombre,descripcion,cantidad,prestamo,mantenimiento,lastMant,nextMant,idMantResp,idTipoProducto,img)
                    VALUES ('UABCS-','$nombre','$desc',null,'$checkboxPrestamo','$checkboxMant',null,'$nextMant','$respMant','$producto','$img')");
                    $result = mysqli_query($conexion,$insert);
                    echo $idAula;
                break;
                //Consumible
                case "2":
                    $insert = ("INSERT INTO 
                    objeto(idUabcs,nombre,descripcion,cantidad,prestamo,mantenimiento,lastMant,nextMant,idMantResp,idTipoProducto,img)
                    VALUES (null,'$nombre','$desc','$cant',null,null,null,null,0,'$producto','$img')");
                    $result = mysqli_query($conexion,$insert);
                    echo $idAula;
                break;
            }
            
            /*
            switch($clasificacion){
                //caso para Equipos
                case "1":
                    $insert = ("INSERT INTO objeto(idUabcs,nombre,descripcion,cantidad,prestamo,mantenimiento,lastMant,nextMant,mantResp,idTipoProducto,img)
                    VALUES ('UABCS-','$nombre','$desc', null, '$checkboxPrestamo', '$checkboxMant', '', '$nextMant', '$respMant','$producto', '$img') ");
                    $result = mysqli_query($conexion, $insert);
                    //echo $idAula;
                    
                break;
                //caso para consumibles
                case "2":
                    $insert = ("INSERT INTO objeto(idUabcs,nombre,descripcion,cantidad,prestamo,mantenimiento,lastMant,nextMant,mantResp,idTipoProducto,img)
                    VALUES (null,'$nombre','$desc', '$cant', null , null , null, null, null,'$producto', '$img') ");
                    $result = mysqli_query($conexion, $insert);
                    //echo $idAula;
                    
                break;
                //Error
                default:
                    echo die("error");
                break;
            }
            echo $result;
            */
        break;

        case "addObjetoHasAula":
            $idAula = $_POST["idAula"];
            $result = mysqli_query($conexion, "INSERT INTO aula_has_objeto(idAula,idObjeto) VALUES ($idAula, (SELECT idObjeto from objeto ORDER BY idObjeto DESC LIMIT 1 )) ");
            if(!$result){
                echo die("error");
            }
            echo $result;          
        break;

        case "verificarPrestamosProducto":
            $productVal = $_POST["productVal"];
            $result = mysqli_query($conexion,"SELECT `prestamo_has_objeto`.`idPrestamo` from
            prestamo_has_objeto,prestamo,objeto
            where `prestamo_has_objeto`.`idObjeto`=`objeto`.`idObjeto` and `objeto`.`idTipoProducto` = '$productVal' and
            `prestamo_has_objeto`.`idPrestamo`=`prestamo`.`idPrestamo` and
            `prestamo`.`entregado`='false'");

            $consCont = $result->num_rows;
            echo $consCont;
        break;

        case "deleteProducto":
            //Crear consulta delete
            $productVal = $_POST["productVal"];
            $result = mysqli_query($conexion,"DELETE FROM aula_has_objeto WHERE idObjeto = (SELECT idObjeto from objeto where idTipoProducto = '$productVal')");

            $result = mysqli_query($conexion,"DELETE FROM prestamo_has_objeto WHERE idObjeto = (SELECT idObjeto from objeto where idTipoProducto = '$productVal')");

            $result = mysqli_query($conexion,"DELETE FROM objeto WHERE idTipoProducto = '$productVal'");



            
        break;

        case "addProducto":
            $productVal = $_POST["productVal"];
            $clasificacionVal = $_POST["clasificacionVal"];
            $result = mysqli_query($conexion,"INSERT INTO tipoproducto(producto,idTipoClasificacion) VALUES ('$productVal','$clasificacionVal') ");
            if(!$result){
                //echo die("error");
            }
        break;

        //--------------NOTIFICACIONES--------------------

        case "getDate":
            $select = ("SELECT 
                            `objeto`.`idObjeto`, concat(`objeto`.`idUabcs`,`objeto`.`idObjeto`) as etiqueta, `tipoproducto`.`producto`,
                            `mantresp`.`nombreRol`, `objeto`.`nextMant`, `edificio`.`Nombre`, `aula`.`nombreAula`
                        from 
                            objeto,tipoproducto,mantresp,edificio,aula, aula_has_objeto 
                        where 
                            `objeto`.`mantenimiento` = 'true' and
                            `tipoproducto`.`idTipoProducto` = `objeto`.`idTipoProducto` and
                            `mantresp`.`idMantResp`=`objeto`.`idMantResp` and
                            `aula_has_objeto`.`idObjeto`=`objeto`.`idObjeto` and
                            `aula`.`idAula`=`aula_has_objeto`.`idAula` and
                            `edificio`.`idEdificio`=`aula`.`idEdificio`");
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
                        'nombreRol' => $row['nombreRol'],
                        'nextMant' => $row['nextMant'],
                        'Nombre' => $row['Nombre'],
                        'nombreAula' => $row['nombreAula'],
                        'tipoNotificacion' => "Mantenimiento",
                    );
                }
                $jsonstring = json_encode($json);
                echo $jsonstring;
            }
        break;

        case "getPrestamoDato":
            $result = mysqli_query($conexion, "SELECT `prestamo`.`idPrestamo`,`prestamo`.`returnDate`,`userprestamo`.`identificador`,`userprestamo`.`nombre`
            from `prestamo`,`userprestamo` where `prestamo`.`entregado` = 'false' and `prestamo`.`idUserprestamo` = `userprestamo`.`idUserPrestamo`  ");
            if(!$result){
                echo die("error");
            }else{
                //Crear json
                $json = array();
                //Realizar consulta
                while($row = mysqli_fetch_array($result)){//Mientras tu variable fila este dentro de la cantidad de registros de consulta
                    $json []= array(
                        'idPrestamo' => $row['idPrestamo'],
                        'returnDate' => $row['returnDate'],
                        'idUser' => $row['identificador'],
                        'userName' => $row['nombre'],
                        'tipoNotificacion' => "Prestamo",
                        
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
