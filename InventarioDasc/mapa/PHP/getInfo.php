<?php

//Incluir la conexion para conectar a la base de datos
include("conexion.php");
$tempAula = $_POST["tempAula"];


$result = mysqli_query($conexion, "SELECT idAula FROM aula WHERE nombreAula = '$tempAula'");
if($result->num_rows>0){
    while($fila=$result->fetch_assoc()){
        $idAula = $fila['idAula'];
        

    }
}


$result = mysqli_query($conexion, "SELECT * FROM objeto WHERE Ubicacion = '$idAula'");
$json = array();
while ($row = mysqli_fetch_array($result)) {
   # code...
   $json[] = array(
      'Nombre' => $row['Nombre'],
      'Marca' => $row['Marca'],
      'Modelo' => $row['Modelo'],
      'Mantenimiento' => $row['Mantenimiento'],
      'Descripcion' => $row['Descripcion']
      


   );
}


//se hace un encode para que la variable sea un string
$jsonString = json_encode($json);

echo $jsonString;

/*
//Obtener el numEdificio para colocar en la tabla todos los productos del edificio
$numEdificio = $_POST['numEdificio'];


//hacer el query
$result = mysqli_query($conexion, "SELECT * FROM objeto WHERE Ubicacion = '$numEdificio'");

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
      'Nombre' => $row['Nombre'],
      'Marca' => $row['Marca'],
      'Modelo' => $row['Modelo'],
      'Mantenimiento' => $row['Mantenimiento'],
      'Descripcion' => $row['Descripcion']
      


   );
}
//se hace un encode para que la variable sea un string
$jsonString = json_encode($json);

echo $jsonString;



   */


?>


