// operadores de asiganción

let x = 5;
let y = 2;


// operadores aritméticos

let suma = x + y;
let resta = x - y;
let producto = x * y;
let division = x / y;
let modulo = x % y;

console.log(suma);
console.log(resta);
console.log(producto);
console.log(division);
console.log(modulo);

let portal = '1D';
console.log('calle mayor, ' + portal);

// operador asignación de adición

x = x + 15;
console.log(x);
x++;
console.log(x);

// operadores de comparación

let a = 5;
let b = 8;

console.log(a == b);
console.log(a != b);
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);


// === vs ==
console.log('=== vs ==');
console.log('1' == 1, 'con un doble igual ==');
console.log('1' === 1, 'con un triple igual ===');


// operadores lógicos
// || or
// && and
let w = 5;
let z = 10;
console.log(w > 3 && z < 20); // true
console.log(w > 3 || z < 20); // true

// negación
const isGreatherThan3 = w > 3;
console.log(!isGreatherThan3);// false

// exercice
// Determinar si la multiplicación de estos números es igual al valorFinal?
const numero1 = 20;
const numero2 = 5; 
const valorFinal = 120;

// Usar operador aritméticos

let multiplicacion = numero1 * numero2;
console.log((numero1 * numero2) === valorFinal);

// Usar operador lógicos
console.log(multiplicacion)
// mostrar con console.log


