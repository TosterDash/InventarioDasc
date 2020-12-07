<?php
include("conexion.php");
$nomEdificio = $_POST["tempEdif"];
$piso = $_POST["valorPiso"];


$result = mysqli_query($conexion, "SELECT idEdificio FROM edificio WHERE Nombre = '$nomEdificio'");
if($result->num_rows>0){
    while($fila=$result->fetch_assoc()){
        $idEdificio = $fila['idEdificio'];
        

    }
}
$result = mysqli_query($conexion, "SELECT idPlanta FROM planta WHERE planta = '$piso'");
if($result->num_rows>0){
    while($fila=$result->fetch_assoc()){
        $idPlanta = $fila['idPlanta'];
        

    }
}


$result = mysqli_query($conexion, "SELECT nombreAula FROM aula WHERE idEdificio = '$idEdificio' AND idPlanta = '$idPlanta'");
$json = array();
	while ($row = mysqli_fetch_array($result)) {
   # code...
	   $json[] = array(
	   		'nombreAula' => $row['nombreAula']
	   		
	      


   );
}
$jsonString = json_encode($json);

echo $jsonString;

?>