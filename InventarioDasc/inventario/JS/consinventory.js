function tables(){
    $ajax({
        url: '../php/consinventory.php', 
        type: 'GET',
        success: function(response){
            var cons = JSON.parse(response);
            cons.forEach(task => {
                var template += 
                `<tr>
                    <th>${task.Nombre}</th>
                    <th>${task.descripcion}</th>
                    <th>syu</th>
                    <th>${task.lastMant}</th>
                    <th>${task.nextMant}</th>
                    <th><button>Edit</button></th>
                    <th><button>Delete</button></th>
                </tr>`
            })
        }


    });
}