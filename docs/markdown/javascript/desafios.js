"use strict"
// Hacer un programa que salude
/* console.log("hola")
document.write("hola") */

// Hacer un programa que reciba un nombre por parte del usuario, si existe nombre saludar por nombre de otra manera saludar 'Hola'.
/*  const nombreUsuario = prompt ("Ingrese su nombre");
if (nombreUsuario) {
  document.write("Hola, " + nombreUsuario + "!")
} else {
    document.write("hola") 
} */

// Hacer un programa que pida aparte nombre y apellido y muestre el nombre completo.
/* const nombre = prompt("ingrese su nombre");
const apellido = prompt('ingrese su apellido');
console.log(nombre + ' ' + apellido)
//document.write(nombre + ' ' + apellido);
// Interpolacion de variables 
document.write('Su nombre completo es:${nombre} ${apellido}'); */

// Hacer un programa que pida 2 numeros al usuario y los sume.
/* const numero1 = Number(prompt('Ingrese el primer numero'));
const numero2 = Number(prompt('Ingrese el segundo numero'));
console.log(numero1 + numero2);
document.write(numero1 + numero2);
document.write(`La suma de ${numero1} y ${numero2} es ${numero1 + numero2}`); */

//Hacer un prgorama que reciba del usuario un numero y muestre si el numero ingresado es cero, de otra manera que muestre si es positivo o si es negativo.
let numero = Number(prompt('Ingrese su numero'));
//console.log(numero);
console.log(numero)
if (isNaN(numero)) {
 document.write('El valor ingresado no es un numero'); 
} else {
  if (numero == 0){
    document.write('El numero ingresado es cero');
  } else if (numero < 0){
    document.write('El numero ingresado es positivo');
  } else {
    document.write('El numero ingresado es negativo');
  }
}

//Hacer un programa que reciba del usuario dos numeros y muestre cual es el numero mayor y cual es el numero menor.