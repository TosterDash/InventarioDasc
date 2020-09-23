<?php
	include("conexion.php");
	$popo = 0;
	if($popo == 0){

	}
	//hacer el query
	$result = mysqli_query($conexion, "SELECT * FROM aula");


	//se crea un arreglo y en el while recorrera lo que se recolecto en el query para guardarlo en la variable arreglo
	$json = array();
	while ($row = mysqli_fetch_array($result)) {
   # code...
	   $json[] = array(
	   		'idPlanta' => $row['idPlanta'],
	   		'idEdificio' => $row['idEdificio'],
		    'nombreAula' => $row['nombreAula'],
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