

function select() {
    console.log("h")
    $.ajax({
         type: "POST",
         url: '../addinventory.php',
         data:{action:'call_this'},
         success:function(html) {
            value = document.getElementById(tipoObjeto)
            if(value ==  "Equipo"){
                document.getElementsByClassName("equip").style.display = block;
            }else{
                document.getElementsByClassName("equip").style.display = none;
            }
         }

    });
}