<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <?php include ('header.html');?>
    
    <link rel="stylesheet" href="../styles/normalize.css">
    
	<title></title>
</head>
<body>
	<h1 class="cntrTitle">AÑADIR PRÉSTAMO</h1>
	<div >
		<div class="basic-form-container">
			<form class="form-container">
				<label>Identificador</label>
				<input type="text" name="id-loan">
				<label>Fecha préstamo</label>
				<input type="datetime-local" id="birthdaytime" name="birthdaytime">
				<label>Fecha entrega</label>
				<input type="datetime-local" id="birthdaytime" name="birthdaytime">
				<div class="submit-btns">
					<input type="submit" name="loanSubmt">
					<button id="cancelLoanBtn">Cancelar</button>
				</div>
			</form>
		</div>
		<div>
			<table>
				<input type="checkbox" name="">
			</table>
		</div>
	</div>
</body>
</html>