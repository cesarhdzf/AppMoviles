//FUNCIONES
/*function hello(){
    console.log("Hola Js");
    console.log("Hola html");
    console.log("Hola css");
}

hello();
hello();
hello();
hello();
hello();*/

//Retorno de una funcion

/*
function hello(){
    return "hola js";
}

const result = hello();
console.log(result);
*/
//hello();
/*
function hello(){

    return "hola js";

}

//const result = hello();
console.log(hello());
*/
/*
function hello(){
    return{
        nombre:'Raul'
    }
}
console.log(hello());
*/

//funcion que retorna a otra funcion
/*function hello(){
    return function(){
        return "Hola JS"
    }
}

console.log(hello()());
*/

//========= USO PARAMETROS EN FUNCIONES ============
/*function helloconJS(name){
    return 'Hola' + name;

}
console.log('Arturo Hernandez');
console.log('Alberto');
console.log('Andres');
console.log('Armerejildo');
*/

//pasar mas de un parametro a la funcion
/*
function helloconJS(x,y){
    return x / y;
}

console.log(helloconJS(10,20));
console.log(helloconJS(10,80));
*/

//control de errores en parametros
/*function helloconJS(x,y=0){
    return x + y
}
console.log(helloconJS(10));
*/

//=== OBJETOS ====
const user = {
    nombre : 'Cesar Arturo',
    apellidoM : 'Hernandez',
    edad :18,
    edoCivil: 'de novio',
    domicilio : {
        ciudad : 'CDMX',
        calle : 'Benito Juarez',
        numero : 103303
    },
    amigos:['Moreno', 'Angel'],
    activo:true,
    sendMensaje: function(){
        return 'enviando msj'
    }
}

//alert ciudad, calle, numero..
//consola, los amigos
//alert (Activo o Dado de Baja)
//consola nombre, apellidos, estado civil...!!
//alert (estado del mensaje)

alert(`${user.domicilio.ciudad}, ${user.domicilio.calle} ${user.domicilio.numero}`)

console.log(user.amigos);

alert(user.activo)

console.log(`${user.nombre} ${user.apellidoM}, ${user.edoCivil}`);

alert(user.sendMensaje())
