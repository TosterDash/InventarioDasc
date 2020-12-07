<?php

include("conexion.php");

if (isset($_POST["username"]) && isset($_POST["password"])) {
   # code...
   $Usuario= $_POST["username"];
   $Password= $_POST["password"];
}
else{
   echo "Error no sirve";
}



$result = mysqli_query($conexion, "SELECT Nombre, Password FROM usuario WHERE Nombre = '$Usuario' AND Password = '$Password'");



if ($result) {
	# code...
	if($result->num_rows>0){
      while($fila=$result->fetch_assoc()){

      	session_start();

         $user = $fila['Nombre'];
         $pass = $fila['Password'];
         

         $_SESSION['nombre'] = $user;
         $_SESSION['password'] = $pass;
         
         echo $_SESSION['nombre'];


            
         
         
      }
   }

}else{
	echo "error";
	
}





?>
