<?php 
    include ('../../baseConexion/conexion.php');
    $option = $_POST['option'];
    switch($option){
        case 'login':
            $username = $_POST["username"];
            $password = $_POST["password"];
            $result = mysqli_query($conexion,"SELECT * from usuario WHERE nombre = '$username' AND usuario.Password = '$password'");
            if(!$result){
                echo die("error");     
            }else{
                $json = array();
                while ($row = mysqli_fetch_array($result)) {
                    # code...
                    $json[] = array(
                        'usuario' => $row['Nombre'],
                        'password' => $row['Password']
                        
                    );
                }
                $jsonString = json_encode($json);

                echo $jsonString;
            }
        break;
    }
?>