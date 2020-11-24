<?php 
    //Conectar a la base de datos
    include ('conexion.php');
    //Crear variables
    $building = $_POST["building"];
    $classroom = $_POST["clasroom"];
    $exitDate = $_POST["exitDate"];
    $returnDate = $_POST["returnDate"];
    //Crear query de insert
    $query = mysqli_query($conexion, "SELECT idEdificio from edificio where Nombre  = '$building'");
    $result = mysqli_fetch_array($query);
    $idbld = $result['idEdificio'];
    

    $result = mysqli_query($conexion, "SELECT idAula from aula where nombreAula  = '$classroom'");
    $result = mysqli_fetch_array($query);
    $idcls = $result['idAula'];

    $insert=("INSERT INTO objeto (edificio, aula, exitDate, returnDate) VALUES ('$idbld', '$idcls', '$exitDate','$returnDate')")
    $objetos = $_POST["objetos"];
    
    //Insertar a la base de datos
    $result = mysqli_query($conexion, $insert);
?>
