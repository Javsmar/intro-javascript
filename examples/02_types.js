// typeof: nos muestra el tipo de elemento

let resultado = 10;
console.log(typeof(resultado));

resultado = true;
console.log(typeof(resultado));

let precio = 19000.99;
let cantidad = Infinity;

console.log(typeof precio);
console.log(typeof cantidad);


// type null y undefined

let varibleNula = null;
let  variableUndefined;

console.log(typeof varibleNula);
console.log(typeof variableUndefined);

/*--------------------------------------------*/

// Template string
//para combinar varables en una variable

let portal = "5A";

let direccion = `Calle mayor, ${portal}`;

console.log("---direccion---")
console.log(typeof direccion); 
console.log(direccion);


// Exercice

let years = 35;
let jugador = "Jordan";
let dorsal = 23;
let perteneceAlSalonDeLaFama = "si";
let equipoActual = "ninguno";

let mensage = `soy ${jugador} tengo ${years} años, ahora mi equipo actual es: 
${equipoActual} y ${perteneceAlSalonDeLaFama} pertenesco al salon de la fama.`;

console.log(mensage);