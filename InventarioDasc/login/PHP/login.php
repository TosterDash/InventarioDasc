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
                $consCont = $result->num_rows;
                if($consCont!=0){
                    session_start();
                    $_SESSION['user'] = $username;
                    echo $consCont;
                    if(isset($_SESSION['user'])){
                        header("Location: http://localhost/colection/InventarioDasc/InventarioDasc/index.php");
                    }
                }else{
                    echo 0;
                }
                
            }
        break;
    };

?>