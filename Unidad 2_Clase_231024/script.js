let task = ["comprar", "Estudiar","Limpiar casa"];
console.log("Lista de tareas", task);

task.push("ir a la escuela");

task.splice(3,1)

task.push("Ir a casa");
//-----------------------usando forEach---------------------------
let tasks = ["comprar", "Estudiar","Limpiar casa","Ir a la escuela"];



tasks.forEach((tasks,index)=>{
    console.log(`Tarea  ${index} ${tasks}`);
})