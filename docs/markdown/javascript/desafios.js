"use strict"
// Hacer un programa que salude
/* console.log("hola")
document.write("hola") */

// Hacer prgorama que salude por nombre, si no recibe nombre solo saludar hola
 const nombreUsuario = prompt ("Ingrese su nombre");
if (nombreUsuario) {
  document.write("Hola, " + nombreUsuario + "!")
} else {
    document.write("hola") 
}