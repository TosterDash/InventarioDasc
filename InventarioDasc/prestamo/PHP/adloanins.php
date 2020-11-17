<?php
    //Crear variables
    $building = $_POST["building"];
    $classroom = $_POST["clasroom"];
    $exitDate = $_POST["exitDate"];
    $returnDate = $_POST["returnDate"];
    //Crear query de insert
    $insert=("INSERT INTO objeto (edificio, aula, exitDate, returnDate) VALUES ('$building', '$classroom', '$exitDate','$returnDate')")
    $result = mysqli_query($conexion, $insert);

    
    $objects = $_POST["objects"];
    //for que recorre el arreglo de objetos que estaran en el prestamo
   /for(var i; i<$objects.length){
       //consultar la tabla de objetos donde el id del objeto sea igual al id en la posicion i del arreglo
        $idobjeto = mysqli_query($conexion, "SELECT idobjeto from objeto where idObjeto LIKE '%$objetos[i]%'");
        //consulta la tabla prestamo para obtener el registro que se acaba de crear
        //COMO HAGO ESTO?
        $idprestamo = mysqli_query($conexion, "SELECT idprestamo from prestamo where Nombre LIKE '%$objetos[i]%' ");
        //$insert=("INSERT INTO objeto_has_prestamo (idobjeto, idprestamo)
    }
    
    //Insertar a la base de datos
    //
?>