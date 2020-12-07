<?php 
    include ('../../baseConexion/conexion.php');

    $username = $_POST["username"];
    $password = $_POST["password"];

    $result = mysqli_query($conexion,"SELECT * from `usuario` WHERE `usuario`.`Nombre` = '$username' 
    AND `usuario`.`Password` = '$password'");
    if(!$result){
        echo die("error");
    }else{
        $consCont = $result->num_rows;

        if($consCont!=0){
            session_start();
            $_SESSION['user'] = $username;
            //echo die("success");;
            
        }else{
            //echo die("incorrecto");
        }
    }
    

?>