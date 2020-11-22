<?php
    include ('../../baseConexion/conexion.php');
    //Crear variables
    $building = $_POST["building"];
    echo $building;
    $classroom = $_POST["classroom"];
    echo $classroom;
    $exitDate = $_POST["exitDate"];
    echo $exitDate;
    $returnDate = $_POST["returnDate"];
    echo $returnDate;


    $result = mysqli_query($conexion, "INSERT INTO prestamo (building,classroom,exitDate,returnDate) VALUES ('$building','$classroom','$exitDate','$returnDate')");
    //Insertar a la base de datos
    $result = mysqli_query($conexion, "SELECT TOP 1 idPrestamo from prestamo ORDER BY idPrestamo DESC");
    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
          $idPrestamo = ["idPrestamo"];
        }
      } else {
        echo "0 results";
      }

    $object = [];
    $object = $_POST["objects"];
    for($i = 0; $i<$object.length; $i++){
        $result = mysqli_query($conexion, "INSERT INTO prestamos_has_objeto (idPrestamo,idObjeto) VALUES ('$idPrestamo','$object[$i]')");
    }
?>