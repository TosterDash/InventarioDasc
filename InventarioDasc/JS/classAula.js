class Aula{
    constructor(idAula,nombre,planta,edificio,poly){
        this.idAula = idAula;
        this.nombre = nombre;
        this.planta = planta;
        this.edificio = edificio;
        this.poly = poly;
    }

    removePolyAula(mapUabcs){
        mapUabcs.removeLayer(this.poly);
    }

    //Metodo para mostrar las aulas dependiendo de su planta seleccionada
    showPolyAulaPlanta(planta,mapUabcs){
        mapUabcs.removeLayer(this.poly);
        switch(planta){
            case "BAJA":
                if(this.planta==1){
                    this.poly.addTo(mapUabcs);
                }
            break;

            case "ALTA":
                if(this.planta==2){
                    this.poly.addTo(mapUabcs);
                }
            break;

        }
    }

    //Metodo para que el poligono se elimine con un click
    clickToDelete(cont,aulasArray){
        this.poly.on('click',function(event) {
            var option = confirm("Seguro que desea eliminar el aula "+aulasArray[cont].nombre+"? Los edificios eliminaran las aulas que tengan.");
            if(option){
                var idAula = aulasArray[cont].idAula;
                var op = "aula";
                $.post('PHP/deletePoly.php',{idAula,op} ,function(response){
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