//este codigo lo realice en JSFiddle
//Variables utiles 
//Precio base de la cotización, en quetzales, lo puede cambiar
var precio_base = 2000; 

// Valores de los recargos 
var edad_18 = 0.1; // 10%
var edad_25 = 0.2; // 20%
var edad_50 = 0.3; // 30%

var casado_18 = 0.1; // 10%
var casado_25 = 0.2; // 20%
var casado_50 = 0.3; // 30%

var hijos_recargo = 0.2; // 20%

//Suma de todos los recargos
var recargo_total = 0;

// Precio final 
var precio_final = 0;
var seguir_cotizando = true;
while (seguir_cotizando){

// Mensajes de alerta para ingresar datos 
var nombre = prompt("Ingrese su nombre, por favor");
var edad = prompt("¿Cuántos años tiene? Ingrese solamente números.");

var casado = prompt("¿Está casado actualmente?", "si/no");
// Comprobamos la edad del cónyuge, solamente si se está casado/a
var edad_conyuge = 0;

if ("SI" == casado.toUpperCase()) {
  edad_conyuge = prompt("¿Qué edad tiene su esposo/a?");
}

// Convirtiendo la edad del esposo/a ingresadas a números 
var edad_numero = parseInt(edad);
var edad_conyuge_numero = 0;

// Convirtiendo la edad del esposo/a si se está casado/a
if ("SI" == casado.toUpperCase()) {
  edad_conyuge_numero = parseInt(edad_conyuge);
}

var hijos = prompt("¿Tiene hijos o hijas?", "si/no");
// Comprobamos la cantidad de hijos solamente si los tienen
var cantidad_hijos = 0;

if ("SI" == hijos.toUpperCase()) {
  cantidad_hijos = prompt("¿Cuántos hijos tiene? Ingrese solamente números.");
  cantidad_hijos = parseInt(cantidad_hijos); // Convertimos la cantidad de hijos a número
}

// Aquí debe calcular el recargo total basado en las respuestas ingresadas

// Recargo por edad del asegurado 
if (edad_numero >= 18 && edad_numero < 25) {
  recargo_total += precio_base * edad_18;
} else if (edad_numero >= 25 && edad_numero < 50) {
  recargo_total += precio_base * edad_25;
} else if (edad_numero >= 50) {
  recargo_total += precio_base * edad_50;
}

// Recargo por edad del cónyuge
if ("SI" == casado.toUpperCase()) {
	//esto sera para la edad del conyuge mayor a 18 y menor que 25
  if (edad_conyuge_numero >= 18 && edad_conyuge_numero < 25) {
    recargo_total += precio_base * casado_18;
  }//esto sera para la edad del conyuge mayor que 25 y menor que 50
  else if (edad_conyuge_numero >= 25 && edad_conyuge_numero < 50) {
    recargo_total += precio_base * casado_25;
  }//esto sera para la edad del conyuge mayor a 50 años
  else if (edad_conyuge_numero >= 50) {
    recargo_total += precio_base * casado_50;
  }
}

// Recargo por cantidad de hijos 
recargo_total += cantidad_hijos * (precio_base * hijos_recargo);

// Precio final
precio_final = precio_base + recargo_total;

// Resultado
alert("Para el asegurado " + nombre);
alert("El recargo total será de: Q." + recargo_total);
alert("El precio final será de: Q." + precio_final);

seguir_cotizando = confirm("¿Deseas realizar otra cotización?");
}

alert("Vuelva Pronto")
