<?php 
    //crear conexion
    include ('conexion.php');
    $option = $_POST['option'];


    switch($option){
        case "clasificacion":
            
            $result = mysqli_query($conexion, "SELECT * from tipoclasificacion");

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

        case "producto":
            $result = mysqli_query($conexion, "SELECT * from tipocategoria");

            if(!$result){
                echo die("error");     
            }else{
                $json = array();
                while ($row = mysqli_fetch_array($result)) {
                    # code...
                    $json[] = array(
                        'idCategoria' => $row['idTipoCategoria'],
                        'categoria' => $row['categoria']
                        
                    );
                }
                $jsonString = json_encode($json);

                echo $jsonString;
            }
        break;

        default:
            //mandar añadir objeto
            $clasificacion = $_POST["col-1-combobox-category"];
            $producto = $_POST["col-1-combobox-product"];
            $nombre = $_POST["col-2-text-name"];
            $desc = $_POST["col-2-text-desc"];
            $respMant = $_POST["col-2-text-mantResp"];
            $lastMant = $_POST["col-2-date-lastMant"];
            $nextMant = $_POST["col-2-date-nextMant"];
            $cant = $_POST["col-2-number-cant"];
            $img = addslashes(file_get_contents($_FILES["item_file"]["tmp_name"]));

            switch($clasificacion){
                //caso para Equipos
                case "1":
                    $insert = ("INSERT INTO objeto(Nombre,Descripcion,Cantidad,lastMant,nextMant,mantResp,idTipoCategoria,idTipoClasificacion,img)
                        VALUES ('$nombre','$desc', null, '$lastMant', '$nextMant', '$respMant', '$producto', '$clasificacion', '$img') ");

                    $result = mysqli_query($conexion, $insert);
                    echo $result;    
                break;
                //caso para consumibles
                case "2":
                    $insert = ("INSERT INTO objeto(Nombre,Descripcion,Cantidad,lastMant,nextMant,mantResp,idTipoCategoria,idTipoClasificacion,img)
                        VALUES ('$nombre','$desc', '$cant', null, null, null, '$producto', '$clasificacion', '$img') ");
                    $result = mysqli_query($conexion, $insert);
                    echo $result;
                break;
                //Error
                default:
                    echo die("error");
                break;
            }


            
        break;

    }

    



    /*
    $value = $_POST["tipo_objeto"];
    if($value == "Equipo"){
        $name = $_POST["name-form-equip"];
        $desc = $_POST["desc-form-equip"];
        $lastMant = $_POST["lastMant"];
        $nextMant = $_POST["nextMant"];
        $resp = $_POST["resp-form"];
        $category = $_POST["catalogue"];
        $img = addslashes(file_get_contents($_FILES["item_file"]["tmp_name"]));
        $insert=("INSERT INTO objeto (Nombre, Descripcion, Cantidad, lastMant, nextMant, mantResp, idTipoCategoria, img) VALUES ('$name', '$desc', 0,'$lastMant', '$nextMant', '$resp','$category','$img')");
    }else if($value == "Consumible"){
       
        $img = addslashes(file_get_contents($_FILES["item_file"]["tmp_name"]));
        $name = $_POST["name-form-cons"];
        $desc = $_POST["desc-form-cons"];
        $cant = $_POST["cant-form-cons"];
        $insert=("INSERT INTO objeto (Nombre, Descripcion, Cantidad, lastMant, nextMant, mantResp, idTipoCategoria, img) VALUES ('$name', '$desc', '$cant', null, null, null, null, '$img')");


  echo $result;
    */
    

?>