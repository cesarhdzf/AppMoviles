//Funcion flecha
//1. *********************************/
function mifuncion (a,b){
    return a+b;
}

console.log(mifuncion(2,3));

//2. *********************************/
//estructura de funcion flecha
let salu2 = () => {};

//3. *********************************/
let saludo = (nombre) => {
    return 'Saludos' + nombre;
}

console.log(saludo ('Juan'));

//4. *********************************/
let saludar = nombre => 'Saludos' + nombre;
console.log(saludar ('Ashi'));


//5. *************** pasar parametros ******************/
let suma = (a,b) => a+b;
console.log(suma(5,8));

//6. ************ crear objeto en funcion flecha *********************/
let obj = () => ({nombre: 'Arturo', edad:18})

//llamamos al objeto y accedemos a la propiedad
//let persona = obj ().nombre;
console.log(obj().nombre);

//7. *** arreglos ****
let arrFunc = () => [1,2,3,4,5];

//accediendo a todo el array
console.log (arrFunc());

//accediendo al arreglo
console.log(arrFunc()[4]);