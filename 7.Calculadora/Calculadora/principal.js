/**Desarrolle un programa que actue como una calculadora simple.
 * Permita al usuuario ingresar dos numeros y elegir una operacion (+, -, *, /).
 * Realice las operaciones correspondientes y muestre el resultado.
 */

import {Cl_Calculadora} from "./Cl_Calculadora.js";
import {Cl_Icalculadora} from "./Cl_ICalculadora.js";

let calculadora = new Cl_Calculadora();
let calculadora2 = new Cl_Icalculadora();

calculadora2.ingresarnumero1();
calculadora2.ingresarnumero2();
calculadora2.ingresaroperacion();
calculadora2.ingresarnumero3();
calculadora.Operacion(calculadora2);
calculadora.Mostrar();

salida = document.getElementById("salida");

salida.innerHTML = calculadora.Operacion(calculadora2);