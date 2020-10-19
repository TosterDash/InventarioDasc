<?php
//Incluir PHP conexion para conectar a la base de datos
include("conexion.php");




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






?>