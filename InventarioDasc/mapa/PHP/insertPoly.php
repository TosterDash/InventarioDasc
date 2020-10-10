<?php
	include("conexion.php");
	$nombre = $_POST["nombreMap"];
	$xyCoord = $_POST["xyCoord"];
	$seleccionTipo = $_POST["seleccion"];
	$plantaMap = $_POST["plantaMap"];
	$edificioMap = $_POST["edificioMap"];

	switch ($seleccionTipo) {
		case "edificio":
			# code...
				
				
				
				
				$insertar = ("INSERT INTO edificio(Nombre,x1,y1,x2,y2,x3,y3,x4,y4) VALUES 
				('$nombre','$xyCoord[0]','$xyCoord[1]', '$xyCoord[2]', '$xyCoord[3]', '$xyCoord[4]', '$xyCoord[5]', '$xyCoord[6]', '$xyCoord[7]')");
				
				$result = mysqli_query($conexion, $insertar);
				
				echo "El edificio se ha insertado correctamente";
			break;
		
		case "aula":
			# code...

			$result = mysqli_query($conexion, "SELECT idPlanta FROM planta WHERE planta = '$plantaMap'");
			if($result->num_rows>0){
		   		while($fila=$result->fetch_assoc()){
		   			$idPlanta = $fila['idPlanta'];
		   			
		    
		   		}
			}

			$result = mysqli_query($conexion, "SELECT idEdificio FROM edificio WHERE Nombre = '$edificioMap'");
			if($result->num_rows>0){
		   		while($fila=$result->fetch_assoc()){
		   			$idEdificio = $fila['idEdificio'];
		   			
		    
		   		}
			}


			$insertar = ("INSERT INTO aula(idPlanta,idEdificio,nombreAula,x1,y1,x2,y2,x3,y3,x4,y4) VALUES ('$idPlanta','$idEdificio','$nombre','$xyCoord[0]','$xyCoord[1]', '$xyCoord[2]', '$xyCoord[3]', '$xyCoord[4]', '$xyCoord[5]', '$xyCoord[6]', '$xyCoord[7]')");
				$result = mysqli_query($conexion, $insertar);
				echo "el aula se ha insertado correctamente";



			break;
	}
	
	//echo $seleccionTipo;

?>