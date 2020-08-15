<?php
	include("conexion.php");
	$nombre = $_POST["nombre"];
	$xy1 = $_POST["xy1"];
	$xy2 = $_POST["xy2"];
	$xy3 = $_POST["xy3"];
	$xy4 = $_POST["xy4"];
	$seleccionTipo = $_POST["seleccion"];
	$plantaMap = $_POST["plantaMap"];
	$edificioMap = $_POST["edificioMap"];


	
	switch ($seleccionTipo) {
		case "edificio":
			# code...
				
				$insertar = ("INSERT INTO edificio(Nombre,x1,y1,x2,y2,x3,y3,x4,y4) VALUES ('$nombre','$xy1[0]','$xy1[1]', '$xy2[0]', '$xy2[1]', '$xy3[0]', '$xy3[1]', '$xy4[0]', '$xy4[1]' )");
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


			$insertar = ("INSERT INTO aula(idPlanta,idEdificio,nombreAula,x1,y1,x2,y2,x3,y3,x4,y4) VALUES ('$idPlanta','$idEdificio','$nombre','$xy1[0]','$xy1[1]', '$xy2[0]', '$xy2[1]', '$xy3[0]', '$xy3[1]', '$xy4[0]', '$xy4[1]' )");
				$result = mysqli_query($conexion, $insertar);
				echo "el aula se ha insertado correctamente";



			break;
	}
	
	//echo $seleccionTipo;

?>