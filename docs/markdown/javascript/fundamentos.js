// Este es un comentario de JavaScript de una sola linea
/*
Este es un 
comentario de
varias lineas
*/
 
/* Metodos de interaccion */
// Entrada
/* let Entrada = prompt();
entrada = prompt("Instrucciones");
console.log(entrada); */
//Salida
/*console.log("mensaje en consola")
document.write("nebsaje en interfaz de usuario")
alert ("mensaje en ventana emergente") */

/* VARIABLES */
// Declaracion
/* saludo1 = "hola1"
var saludo2 = "hola2"
let saludo3 = "hola3"
const saludo4 = "hola4"
console.log(saludo1)
console.log(saludo2)
console.log(saludo3)
console.log(saludo4)*/

//Ambito de las variables
/* let variableGlobal = "soy variable global"
console.log(variableGlobal)
{
    let variableLocal = "soy variable local"
    console.log(variableLocal)
} */

/* cambia Valor = 1;
const noCambiarValor = 2;
cambiaValor ="1";
noCambiaValor = 2;
console.log (cambiaValor)
console.log (noCambiarValor) */

/*Modo estricto */
"use strict"
/*saludo = "hola";
console.log(saludo); */

/* Tipos de dato primitivos */
// string
let miVariable = "";
 miVariable = "este es un texto de 'ejemplo1'";
 miVariable = 'este es un texto de ejemplo 2';
 miVariable = "este es un 'texto' de ejemplo 3";
 // number
 miVariable = 10;
 miVariable = 9.5;
 miVariable = 0xFF;
  miVariable = 123e5
  miVariable = NaN; 
/*   console.log(miVariable);
  console.log(typeof miVariable); */
// boolean
  miVariable = true;
  miVariable = false;
 // undefined
 let miVariableSinAsignacion;
 //console.log(miVariableSinAsignacion);
 // null
 miVariable = null;
 //console.log(miVariable);
 
 /* Operador typeof */
 let entradaUsuario = '123';
 console.log(entradaUsuario);
 console.log(typeof entradaUsuario);
 entradaUsuario = 123;
 console.log(entradaUsuario);
 console.log(typeof entradaUsuario);

/* Conversion de tipos */

let numero1 = '1';
let numero2 = '2';
let numero3 = '3';
resultado = numero1 + numero2 + numero3;
console.log(resultado);
numero1 = Number(numero1);
numero2 = parseInt(numero2);
numero3 = +numero3;
let resultado = numero1 + numero2 + numero3;
console.log(resultado);

let numeroDecimal1 = '1.5';
let numeroDecimal2 = '2.5';
let numeroDecimal3 = '3.5';
resultado = numeroDecimal1 + numeroDecimal2 + numeroDecimal3
console.log(resultado);
numeroDecimal1 = parseFloat(numeroDecimal1);
numeroDecimal2 = parseFloat(numeroDecimal2);
numeroDecimal3 = Number(numeroDecimal3)
resultado = numeroDecimal1 + numeroDecimal2 + numeroDecimal3;
console.log(resultado)

let telefono = 555;
let codigoPais = 57;
console.log(telefono);
console.log(typeof telefono);
console.log(codigoPais);
console.log(typeof codigoPais)
telefono = String(telefono);
console.log(telefono);
console.log(typeof telefono);
codigoPais = codigoPais.toString
console.log(codigoPais)
console.log(typeof codigoPais)
console.log('Numero completo:' , codigoPais + telefono);

/* Expresiones booleanas */
// Turthy o verdaderos
/*console.log(true)
console.log(1)
console.log(-1)
console.log("a")*/
// Falsy o falsos
/*console.log(0)
console.log("")
console.log(undefined)
console.log(null)*/

/* Control de flujo */
// Condicionales
/* if (true) {
  console.log("se cumple la condicion 1")
}

if (false) {
  console.log("se cumple la condicion 2")
} else {
  console.log("no se cumple la condicion 2")
}

if (false) {
  console.log("se cumple la condicion 3 a")
} else if (true) {
  console.log("no se cumple la condicion 3 b")
} else {
  console.log("no se cumple la condicion 3")
}

if (false) {
  console.log("se cumple la condicion 4")
}
if (true) {
  console.log("se cumple la condicion 5")
} */

const perfil = "profesor"
switch (perfil){
  case "estudiante":
    console.log("eres un estudiante")
    break;
    case "profesor":
    console.log ("perfil no permitido")
    break;
    default:
    console.log ("perfil no permitido")
    break;
}

/* Operadores*/
// Concentracion
//console.log('pepita' + ' ' + 'Perez');
// Aritmeticos
/* console.log(8 + 4);
console.log(8 - 4);
console.log(8 * 4);
console.log(8 / 4);
console.log(8 % 4);
console.log(10 % 3);
console.log(2 ** 3); */

/* miVariable = 3
console.log(miVariable); */
// Incremento
/* miVariable++;
console.log(miVariable); */
//Decrement
/* miVariable--;
console.log(miVariable) */

// Asignacion =
/* let numero1 = 8;
let numero2 = 4;
let resultado = numero1 + numero2;
resultado += 3;
resultado -=5;
resultado *=2;
resultado /= 2;
resultado %= 3;
resultado **= 2;
console.log(resultado);  */
 
// Comparacion
/* console.log(8 == 4);
console.log(8 === 4);
console.log(8 == 8);
console.log(8 === 8);
console.log(8 == "8");
console.log(8 === "8");
console.log('8' == '8');
console.log('pepita' === 'Pepita');
console.log(8 != 4);
console.log(8 != '8');
console.log(8 !== '8');
console.log(8 > 4);
console.log(8 < 4);
console.log(8 >= 4);
console.log(8 <= 4); */

// Logicos
/* console.log(true && true);
console.log(true && false);
console.log(false && false);
console.log(true || false);
console.log(true || false);
console.log(false || false);
console.log(!true);
console.log(!false); */

