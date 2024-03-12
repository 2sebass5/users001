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

//Hacer un programa que reciba del usuario dos numeros y muestre cual es el numero mayor y cual es el numero menor.

const numero1 = prompt("ingrese el primero numero");
console.log("ingrese el primer numero");
const numero2 = prompt("ingrese el segundo numero");
console.log("ingrese el segundo numero");
if (numero1 < numero2){
  document.write(`los numeros ingresados se pueden clasificar como: ${numero1}
  es mayor a ${numero2}`);
}
else if (numero1 < numero2){
  document.write(`los numeros ingresados se pueden clasificar como: ${numero1} es menor a ${numero2}`);
}
if (numero1 == 0 || numero2 == 0){
  document.write("Los numeros ingresados fueron 0 y no se pueden clasificar mayor o menor")
}