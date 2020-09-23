var nombre
class Edificio {
    constructor(idEdificio,nombre,poly){
        this.idEdificio = idEdificio;
        this.nombre = nombre;
        this.poly = poly;

        
        
    }

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

    
    
}