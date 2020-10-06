<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
        <?php include ('header.html');?>
        <link rel="stylesheet" href="../styles/normalize.css">
        <link rel="stylesheet" href="../styles/loanStyle.css">
        <link rel="stylesheet" href="../styles/generalStyle.css">
	<title></title>
</head>
<body>
	<div>
		<h1>AÑADIR PRÉSTAMO</h1>
	</div>
	<div>
		<form class="form-loan">
			<label>Identificador</label>
			<input type="text" name="id-loan">
			<label>Fecha préstamo</label>
			<input type="datetime-local" id="birthdaytime" name="birthdaytime">
			<label>Fecha entrega</label>
			<input type="datetime-local" id="birthdaytime" name="birthdaytime">
			<input type="submit" name="">
		</form>
	</div>
</body>
</html>