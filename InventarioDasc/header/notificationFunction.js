var rowTableNotification = [];
var mantenimientoNotification = [];
var prestamoNotification = [];
var cantidadNotification = [];
//numero de notificaciones en la barra de notificaciones
var totalNotification = 0;
var notificacionPrestamo = 0;
var notificacionMantenimiento = 0;
//ruta para hacer consultas
var rutaAjax = "inventario/PHP/inventoryCons.php";
// titulo de la pagina
var titlePage = "NOTIFICACIONES | INVENTARIO";

//Clases--------------------------------------------------------------------------------
class rowNotification{
    constructor(id,etiqueta,producto,nombreRol,nextMant,nombreEdificio,nombreAula,tipoNotificacion){
        this.id = id;
        this.etiqueta = etiqueta;
        this.producto = producto;
        this.nombreRol = nombreRol;
        this.nextMant = nextMant;
        this.nombreEdificio = nombreEdificio;
        this.nombreAula = nombreAula;
        this.tipoNotificacion = tipoNotificacion;
        this.template = "";
    }
    generateCardMant(){
        
        var mant = new Date(this.nextMant)
        var day = mant.getDate( );
        var month = mant.getMonth( )+1;
        var year = mant.getFullYear( );
        mant = day + 1 +'-'+ month + '-' +year;
        

        this.template = `<div id="single-notif-`+this.tipoNotificacion+this.id+`" class="single-notif disp-flexRow">
                            <table>
                                <tr>
                                    <th>Asunto</th>
                                </tr>   
                                <tr>
                                    <td class="table-data">
                                        `+this.tipoNotificacion+`
                                        <a class="show-info" id="`+this.tipoNotificacion+this.id+`">
                                            <img src="../resources/info_icon.png">
                                        </a>
                                        <a>
                                            <img id="confirm-`+this.tipoNotificacion+this.id+`" src="../resources/confirm.png">
                                        </a>
                                    </td>
                                </tr>
                            </table>
                            <div id="info-`+this.tipoNotificacion+this.id+`" class="info-notif">
                                `+this.etiqueta+` `+this.producto+ ` Necesita mantenimiento desde `+mant+` por `+this.nombreRol+`.
                                 El producto debe estar ubicado en el edificio `+this.nombreEdificio+` en el aula `+this.nombreAula+`. 
                            </div>
                        </div>`
        
    }

    generateCardPrestamo(){
        var mant = new Date(this.nextMant)
        var day = mant.getDate( );
        var month = mant.getMonth( )+1;
        var year = mant.getFullYear( );
        mant = day + 1 +'-'+ month + '-' +year;

        this.template = `<div id="single-notif-`+this.tipoNotificacion+this.id+`" class="single-notif disp-flexRow">
                            <table>
                                <tr>
                                    <th>Asunto</th>
                                </tr>   
                                <tr>
                                    <td class="table-data">
                                        `+this.tipoNotificacion+`
                                        <a class="show-info" id="`+this.tipoNotificacion+this.id+`">
                                            <img src="../resources/info_icon.png">
                                        </a>
                                        
                                    </td>
                                </tr>
                            </table>
                            <div id="info-`+this.tipoNotificacion+this.id+`" class="info-notif">
                                El prestamo del usuario `+this.nombreAula+` con el identificador `+this.nombreEdificio+` ha caducado!.
                            </div>
                        </div>`
    }

    enablePopUp(){
        var tipo = this.tipoNotificacion;
        var id = this.id;
        $(function() {
            // DOM ready
            $('#'+tipo+id).hover(
              function () {
                  $('#info-'+tipo+id).show();
              }, 
              function () {
                  $('#info-'+tipo+id).hide();
              });
        });
    }

    optionHechoMant(){
        var id = this.id;
        var tipoNotificacion = this.tipoNotificacion;
        var nextMant = this.nextMant;
        var etiqueta = this.etiqueta;
        $(document).on('click',"#confirm-"+tipoNotificacion+id,function(){
            
            $.when(mantenimientoHecho(id,nextMant)).done(function(){
                alertify.success(etiqueta+": Mantenimiento realizado");
            
            })
                   
                
        });
    }
}
//FUNCIONES--------------------------------------------------------------------------------
function disableButtons(){
    for(var i = 0;i<mantenimientoNotification.length;i++){
        $(document).off('click',"#confirm-"+mantenimientoNotification[i].tipoNotificacion+mantenimientoNotification[i].id);
     
    }   
    mantenimientoNotification = [];
}






function getNotificationNum(enableCrear){
    mantenimientoNotification = [];
    $.when(getDate(),getPrestamoDate()).done(function(respDate,respPrest){
        var totalNotification = getCantidadMantenimiento(respDate[0],enableCrear);
        totalNotification += getCantidadPrestamo(respPrest[0],enableCrear)
        console.log(totalNotification);
        // console.log(totalNotification);
        if (totalNotification == 0) {
            //comente esto para ver el pinshi tenplei c:
        $("#notification").html(`<a class="menu-list dropdown-toggle item-menu" data-toggle="dropdown"><img style="height: 30px;" src="../resources/notif_icon.png"></a>
                                        <div class="dropdown-menu notification-dropdown">
                                            <div class="notification-area">
                                                <a href="notificationBoard.php"><span>
                                                    No hay notificaciones
                                                </span></a>
                                            </div>
                                        </div>`);
        }
        else{
            $("#notification").html(`<span class="badge">`+totalNotification+`</span></a>
                                    <a class="menu-list dropdown-toggle item-menu" data-toggle="dropdown"><img style="height: 30px;" src="../resources/notif_icon.png"></a>
                                        <div class="dropdown-menu notification-dropdown">
                                            <div class="notification-area">
                                                <a href="notificationBoard.php"><span>
                                                    Haz click para ver las `+totalNotification+` notificaciones
                                                </span></a>
                                            </div>
                                        </div>`);
        }
        
            
    })
     
    
}
//funciones get para saber que se necesita hacer (ligadas a getNotificationNUM)
function getCantidadMantenimiento(response,enableCrear){
    var cons = JSON.parse(response);
    var cont = 0;
    var template = ``;
    var dateNow = new Date();
    var dateMant;
    cons.forEach(task =>{
        dateMant = new Date(`${task.nextMant}`);
   
        
        if(dateNow.getTime() > dateMant.getTime()){
            mantenimientoNotification[cont] = new rowNotification(`${task.idObjeto}`,`${task.etiqueta}`,`${task.producto}`,`${task.nombreRol}`,`${task.nextMant}`,`${task.Nombre}`,`${task.nombreAula}`,`${task.tipoNotificacion}`);
            if(document.title==titlePage && enableCrear){
                
    
                mantenimientoNotification[cont].generateCardMant();
                mantenimientoNotification[cont].optionHechoMant();
    
                template += mantenimientoNotification[cont].template;
                
            }
            cont++;
        }

        
        
        

    })
    if(document.title==titlePage && enableCrear && mantenimientoNotification.length != 0){
        $("#disp-flexWrap").html(template);
        for(var i=0;i<mantenimientoNotification.length;i++){
            mantenimientoNotification[i].enablePopUp();
        }
    }
    
    
    
    return mantenimientoNotification.length;
}


function getCantidadPrestamo(respPrest,enableCrear){
    var cons = JSON.parse(respPrest);
    var cont = 0;
    var template = ``;
    var dateNow = new Date();
    var dateMant;
    cons.forEach(task =>{
        dateMant = new Date(`${task.returnDate}`);
        if(dateNow.getTime() >= dateMant.getTime()){
            prestamoNotification[cont] = new rowNotification(`${task.idPrestamo}`,null,null,`${task.userName}`,`${task.returnDate}`,`${task.idUser}`,null,`${task.tipoNotificacion}`);
            if(document.title==titlePage && enableCrear){
                
    
                prestamoNotification[cont].generateCardPrestamo();
    
                template += prestamoNotification[cont].template;
                
            }
            cont++;
        }

        
        
        

    })
    if(document.title==titlePage && enableCrear && prestamoNotification !=0){
        $("#disp-flexWrap").append(template);
        for(var i=0;i<prestamoNotification.length;i++){
            prestamoNotification[i].enablePopUp();
        }
    }

    return prestamoNotification.length;
}
//funciones get
function getDate(){
    var option = "getDate";
    return $.ajax({url: rutaAjax, type: 'POST',data:{option}})
           
}

function getPrestamoDate(){
    var option = "getPrestamoDato";
    return $.ajax({url: rutaAjax, type: 'POST',data:{option}})
}

function getConsumibleCant(){

}

//funciones POST table notificaciones
function mantenimientoHecho(id,lastMant){
    var option = "mantenimientoHecho";
    var nextMant = new Date(lastMant);
    var year = nextMant.getMonth()+6 >= 11 ? nextMant.getFullYear()+1: nextMant.getFullYear();
    var month = nextMant.getMonth()+6 >= 11 ? nextMant.getMonth()-5: nextMant.getMonth()+7;
    var day = nextMant.getDate();
    var hrs = nextMant.getHours();
    var mins = nextMant.getMinutes();
    var secs = nextMant.getSeconds() == 0 ? "00": nextMant.getSeconds();

    //nextMant as a string (YYYY-MM-DD HH:MM:SS)
    var nextMant = year+"-"+month+"-"+day+"";

    //nextMant as a date object (Tue May 25 2021 23:55:00 GMT-0600 (hora de verano del Pacífico de México))
    //nextMant = nextMant.setMonth(nextMant.getMonth()+6);
    //nextMant = new Date(nextMant)
    console.log("lastMant = " + lastMant + " nextMant = " + nextMant)
    $.ajax({
        url: rutaAjax,
        type: 'POST',
        data: {id,option,lastMant, nextMant},
        success: function(response){
            disableButtons();
            getNotificationNum(true);
        }
    })
    
    
}



/*********HOVERS DE NOTIFICATIONBOARD.PHP***********/
