<?php
    include ('../../baseConexion/conexion.php');
    //Crear variables
    $building = $_POST["building"];
    echo $building;
    $classroom = $_POST["clasroom"];
    echo $classroom;
    $exitDate = $_POST["exitDate"];
    echo $exitDate;
    $returnDate = $_POST["returnDate"];
    echo $returnDate;
    //Crear query de insert
    $insert=("INSERT INTO prestamo (edificio, aula, exitDate, returnDate) VALUES ('$building', '$classroom', '$exitDate','$returnDate')");
    $result = mysqli_query($conexion, $insert);
    echo $result;
    
    $objects = $_POST["objects"];
    //for que recorre el arreglo de objetos que estaran en el prestamo
    for($i; i<$objects.length){
        //consulta la tabla prestamo para obtener el registro que se acaba de crear
        $idprestamo = mysqli_query($conexion, "SELECT TOP 1 idPrestamo from prestamo ORDER by idPrestamo DESC");
        //$insert=("INSERT INTO objeto_has_prestamo (idobjeto, idprestamo)
        $insert=("INSERT INTO objeto_has_prestamo (idprestamo, idobjeto) VALUES ('$idprestamo', '$objects[i]')")
        $result = mysqli_query($conexion, $insert);
        echo $result;
    }
    
    //Insertar a la base de datos
    //
?>