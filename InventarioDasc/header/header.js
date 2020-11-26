

if (document.URL.includes("consinventory.php") || document.URL.includes("addInventory.php") ) {
	console.log("patopipon");
	document.getElementById("inventory-menu").style.color = "#bfcbe0";

}else if(document.URL.includes("consloan.php")||document.URL.includes("addloan.php")){
	console.log("patopipon");
	document.getElementById("loan-menu").style.color = "#d9e7ff";

}else if(document.URL.includes("map.php")||document.URL.includes("editMap.php")){
	console.log("patopipon");
	document.getElementById("map-menu").style.color = "#d9e7ff";
}
else if(document.URL.includes("index.php")){
	document.getElementById("home-menu").style.color = "#bfcbe0";
	
}
