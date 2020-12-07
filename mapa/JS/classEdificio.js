
class Edificio {
    constructor(idEdificio,nombre,poly){
        this.idEdificio = idEdificio;
        this.nombre = nombre;
        this.poly = poly;

        
        
    }
    //Metodo para que este poligono muestre sus aulas
    functionClick(cont,edificiosArray,aulasArray,mapUabcs){

        this.poly.on('click',function(event) {
            for(let i = 0; i<aulasArray.length;i++){
                mapUabcs.removeLayer(aulasArray[i].poly);
            }
            
            for(let i = 0; i<aulasArray.length;i++){
                if(aulasArray[i].edificio == edificiosArray[cont].idEdificio){
                    console.log("Aulas aqui: "+aulasArray[i].nombre);
                    aulasArray[i].poly.addTo(mapUabcs);
                }
            }
            
        })

    }
    //Metodo para que el poligono se elimine junto con sus aulas añadidas
    clickToDelete(cont,edificiosArray){
        this.poly.on('click',function(event) {
            
            var option = confirm("Seguro que desea eliminar el edificio "+edificiosArray[cont].nombre  +"? Se eliminarán sus aulas.");
            if(option){
                var idEdificio = edificiosArray[cont].idEdificio;
                var op = "edificio";
                $.post('mapa/PHP/deletePoly.php',{idEdificio,op} ,function(response){
                    console.log(response);
                    alert("Se ha eliminado el poligono correctamente");
                    $(location).attr('href','editMap.php');
               
              });
            }
        })
    }
    //Eliminar el evento click en el poligono
    deleteClickOnPoly(){
        this.poly.off();
    }

    
    
}