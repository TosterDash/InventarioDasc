$("#tipoObjeto").on('change', function(){
    console.log("W")
    var value = $('#tipoObjeto').val();
    if(value ==  "Equipo"){
        $("#tipoObjeto").hide();
        document.getElementsByClassName("equip").style.display = block;
    }else{
        document.getElementsByClassName("equip").style.display = none;
    }
});

$("#tipoObjeto").on('change',function () {
    var value = $('#tipoObjeto').val();
    console.log(value);
})

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