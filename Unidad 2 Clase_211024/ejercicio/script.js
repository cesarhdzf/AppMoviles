document.getElementById('formulario').addEventListener('submit', (e) => {
    e.preventDefault();
    const tareaInput = document.getElementById('tarea');
    const nuevaTarea = tareaInput.value.trim();

    if (nuevaTarea) {
        console.log(`Agregando tarea: ${nuevaTarea}`);
        agregarTarea(nuevaTarea);
        tareaInput.value = '';
        actualizarConsola();
    }
});

const agregarTarea = (tarea) => {
    const listaTareas = document.getElementById('lista-tareas');
    const li = document.createElement('li');
    li.textContent = tarea;

    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = '   Eliminar';
    botonEliminar.addEventListener('click', () => {
        console.log(`Eliminando tarea: ${tarea}`);
        listaTareas.removeChild(li);
        actualizarConsola();
    });

    li.appendChild(botonEliminar);
    listaTareas.appendChild(li);
    console.log(`Nueva tarea agregada ${tarea}`);
}

const actualizarConsola = () => {
    const tareas = document.querySelectorAll('#lista-tareas li');
    tareas.forEach((tarea, index) => {
        console.log(`Tarea ${index + 1}: ${tarea.textContent}`);
    });
}