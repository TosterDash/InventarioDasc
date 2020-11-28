var rowTableNotification = [];
//numero de notificaciones en la barra de notificaciones
var totalNotification = 0;
//ruta para hacer consultas
var rutaAjax = "inventario/PHP/inventoryCons.php";
//Clases--------------------------------------------------------------------------------
class rowNotification{
    constructor(idObjeto,etiqueta,producto,nextMant,mantResp,tipoNotificacion){
        this.idObjeto = idObjeto;
        this.etiqueta = etiqueta;
        this.producto = producto;
        this.nextMant = nextMant;
        this.mantResp = mantResp;
        this.tipoNotificacion = tipoNotificacion;
        this.template = "";
    }
    generateRow(){
        this.template = `<tr id="fila`+this.idObjeto+`">
                        <th>`+this.tipoNotificacion+`</th>
                        <th>`+this.etiqueta+`: El producto `+this.producto+` necesita mantenimiento desde `+this.nextMant+` por el responsable `+this.mantResp+`</th>
                        <th><button type="button" class="btn btn-success" id="notifDelete`+this.idObjeto+`">Hecho</button></th>
                        </tr>`
        
    }

    optionHecho(){
        var idObjeto = this.idObjeto
        var tipoNotificacion = this.tipoNotificacion;
        var nextMant = this.nextMant;
        var etiqueta = this.etiqueta;
        $(document).on('click',"#notifDelete"+idObjeto,function(){
            console.log(idObjeto);
            switch(tipoNotificacion){
                case "mantenimiento":
                    $.when(mantenimientoHecho(idObjeto,nextMant)).done(function(){
                        actualizarFechas();
                        alertify.success(etiqueta+": Mantenimiento realizado");
                    
                    })
                break;
            }
        });
    }
}
//FUNCIONES--------------------------------------------------------------------------------
function getTableNotification(responseDate){
    var template="";
    var date = JSON.parse(responseDate);
    var cont = 0;
    var dateNow = new Date();
    date.forEach(task=>{
        var nextMant = new Date(task.nextMant);
        if(dateNow.getTime()>=nextMant.getTime()){
            $(document).off('click',"#notifDelete"+task.idObjeto);
            rowTableNotification[cont] = new rowNotification(`${task.idObjeto}`,`${task.etiqueta}`,`${task.producto}`,`${task.nextMant}`,`${task.mantResp}`,`${task.tipoNotificacion}`);
            rowTableNotification[cont].generateRow();
            rowTableNotification[cont].optionHecho();
            template += rowTableNotification[cont].template;
        }
        
        cont++;
    })
    $("#tbody-notification").html(template);
}

function actualizarFechas(){
    $.when(getDate()).done(function(responseDate){
        getNotificationNum(responseDate);
        if(document.title=="NOTIFICACIONES | INVENTARIO"){
            getTableNotification(responseDate);
        }
    })
    
    
}

/*
hacer que las notificaciones de mantenimiento 
*/
    

function getNotificationNum(response){
    var totalNotification = getMantenimientoToDo(response);
    $("#notification").html(`<a class="menu-list navigation-menu-listt dropdown-toggle" data-toggle="dropdown">
                                        NOTIFICACIONES
                                        <span class="badge">`+totalNotification+`</span></a>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="notificationBoard.php">MANTENIMIENTO (`+totalNotification+`)</a>
                                        <a class="dropdown-item" href="notificationBoard.php">PRÉSTAMOS (`+totalNotification+`)</a>
                                        <a class="dropdown-item" href="notificationBoard.php">PRODUCTOS (`+totalNotification+`)</a>
                                    </div>`);
                                    
       
}
//funciones get para saber que se necesita hacer (ligadas a getNotificationNUM)
function getMantenimientoToDo(response){
    var cons = JSON.parse(response);
    var cont = 0;
    var notificationMantenimiento=0;
    var dateNow = new Date();
    var dateMant = [];
    cons.forEach(task =>{
        dateMant[cont] = new Date(`${task.nextMant}`);
        if(dateNow.getTime()>=dateMant[cont].getTime()){
            notificationMantenimiento++;
        }
        cont++;

    })
    return notificationMantenimiento;
}

//funciones get
function getDate(){
    var option = "getDate";
    return $.ajax({url: rutaAjax, type: 'POST',data:{option}})
           
}

function getPrestamoDate(){

}

function getConsumibleCant(){

}

//funciones POST table notificaciones
function mantenimientoHecho(idObjeto,lastMant){
    var option = "mantenimientoHecho";
    var nextMant = new Date(lastMant);
    var year = nextMant.getMonth()+6 >= 11 ? nextMant.getFullYear()+1: nextMant.getFullYear();
    var month = nextMant.getMonth()+6 >= 11 ? nextMant.getMonth()-5: nextMant.getMonth()+7;
    var day = nextMant.getDate();
    var hrs = nextMant.getHours();
    var mins = nextMant.getMinutes();
    var secs = nextMant.getSeconds() == 0 ? "00": nextMant.getSeconds();

    //nextMant as a string (YYYY-MM-DD HH:MM:SS)
    var nextMant = year+"-"+month+"-"+day+" "+hrs+":"+mins+":"+secs;

    //nextMant as a date object (Tue May 25 2021 23:55:00 GMT-0600 (hora de verano del Pacífico de México))
    //nextMant = nextMant.setMonth(nextMant.getMonth()+6);
    //nextMant = new Date(nextMant)
    console.log("lastMant = " + lastMant + " nextMant = " + nextMant)
    //$.ajax({url: rutaAjax, type: 'POST',data:{idObjeto,option,lastMant, nextMant}});
}