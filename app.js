//Funcion para obtener lista de tareas
function obtenerListaTareas(){
    var todos = new Array;
    
    //Trae la lista de todos que esta en memoria
    var todos_str = localStorage.getItem('todo');

    if(todos_str !== null){
        todos = JSON.parse(todos_str);
    }
    return todos;
}

//Funcion par agregar item
function agregar(){
    //Aqui obtemos lo que escribe el usuairo
    var task = document.getElementById('task').value;

    var todos = obtenerListaTareas();

    //Graba la tarea en el array
    todos.push(task);
    //Almacena en memoria
    localStorage.setItem('todo', JSON.stringify(todos));

    mostrar();
    clearDefault();
    return false; //avoids any futher action with click event
}

//clear the task value from input box
function clearDefault(){
    document.getElementById('task').value = '';
};

function eliminar(){
    
    //Obtiene el identicador de la tarea
    var id = this.getAttribute('id');

    var todos = obtenerListaTareas();

    //Eliminamos el pendiente con su ID 
    todos.splice(id, 1);

    localStorage.setItem('todo', JSON.stringify(todos));

    mostrar();

    return false; //avoids further action with click event
}

function mostrar(){

    var todos = obtenerListaTareas();

    //Se crea el UL con la lista de pendientes
    var html = '<ul>';
    for(var i = 0; i < todos.length; i++){
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">Borrar</button> </li>';
    };
    html += '</ul>';
    document.getElementById('todos').innerHTML = html;


    var buttons = document.getElementsByClassName('remove');
    for(var i=0; i < buttons.length; i++){
        //AÑadimos accion borrar a cada boton
        buttons[i].addEventListener('click', eliminar);
    };
}
//Se le asigna el mostrar al boton añadir
document.getElementById('add').addEventListener('click', agregar);

mostrar();