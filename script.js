// 1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.
let edad = parseInt(prompt("Ingresa tu edad: "));

if (edad >=21) {
    alert("Ya puedes conducir, pero tenes vencido el carnet")
 } else {
    Number.isNaN(edad);
 }

//2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

let nota = prompt("Ingresa una nota (del 0 al 10):");
let mensaje;

if (isNaN(nota)) {
  mensaje = "Introduce un número válido";
} else {
  nota = parseFloat(nota);

  if (nota >= 0 && nota <= 2) {
    mensaje = "Muy deficiente";
  } else if (nota >= 3 && nota <= 4) {
    mensaje = "Insuficiente";
  } else if (nota >= 5 && nota <= 6) {
    mensaje = "Suficiente";
  } else if (nota === 7) {
    mensaje = "Bien";
  } else if (nota >= 8 && nota <= 9) {
    mensaje = "Notable";
  } else if (nota === 10) {
    mensaje = "Sobresaliente";
  } else {
    mensaje = "Ingrese un número que sea menor a 10";
  }
}

alert(mensaje);


//3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”
let cadenas = [];

while (true) {
  let texto = prompt("Ingresa una cadena de texto:");

  if (texto === null) {
    break;
  }

  cadenas.push(texto);
}

let resultado = cadenas.join("-");
console.log("Texto escrito: " + resultado);

//4 Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
let suma = 0;

while (true) {
  let input = prompt("Ingresa un número:");

  if (input === null) {
    break;
  }
  let numero = parsefloat(input);
  if (isNaN(numero)) {
    alert("¡Debe ingresar un número válido!");
  }
  suma += numero;
}
alert("La suma total de los números es: " + suma);

//5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

while (true) {
  let dni = prompt("Ingresa tu número de DNI:");

  if (dni === null) {
    break;
  }

  if (isNaN(dni)) {
    alert("No es un número válido");
  }

  let numeroDNI = parseInt(dni);
  let letrasDNI = "TRWAGMYFPDXBNJZSQVHLCKE";
  let indiceLetra = numeroDNI % 23;
  let letra = letrasDNI.charAt(indiceLetra);

  alert("La letra del número de DNI " + numeroDNI + " es: " + letra);
}
     

//6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :
for (let i = 1; i < 30; i++) {
  let line = i + "";
  console.log(line.repeat(i));
}

//7.-Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).*
let num1 = parseInt(prompt("Ingresa un número (no mayor de 50): "));

if (num1 <= 50) {
  for (let i = 1; i >= 0; i--) {
    console.log(i.toString().repeat(i));
  }
} else {
  console.log("error");
}


//8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 
let num = parseInt(prompt("Ingresa un número (no mayor de 50):"));

if (num <= 50) {
  let piramide = "";
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
      piramide += j;
    }
    piramide += "\n";
  }
  console.log(piramide);
} else {
  console.log("El número ingresado es mayor a 50. Por favor, ingresa un número válido.");
}
//9- Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :
for (let i = 1; i <= 500; i++) {
  let msj = i.toString();

  if (i % 4 === 0) {
    msj += " (Múltiplo de 4)";
  } else if (i % 9 === 0) {
    msj += " (Múltiplo de 9)";
  }

  console.log(msj);

  if (i % 5 === 0) {
    console.log("—————————————————————");
  }
}
//10- Realiza un script que pida número de filas y columnas y escriba una tabla.
let filas = parseInt(prompt("Ingresa el número de filas:"));
let columnas = parseInt(prompt("Ingresa el número de columnas:"));

let numero = filas * columnas;

document.write("<table>");

for (let i = 1; i <= filas; i++) {
  document.write("<tr>");
  for (let j = 1; j <= columnas; j++) {
    document.write("<td>" + numero + "</td>");
    numero--;
  }
  document.write("</tr>");
}

document.write("</table>");

//11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *
let edades = [];
let nombres = [];

for (let i = 1; i <= 3; i++) {
  let nombre = prompt("Ingresa el nombre " + i + ":");
  let edad = parseInt(prompt("Ingresa la edad de " + nombre + ":"));

  nombres.push(nombre);
  edades.push(edad);
}

let indiceMayorEdad = edades.indexOf(Math.max(...edades));
let nombreMayorEdad = nombres[indiceMayorEdad];

console.log("La persona de mayor edad es: " + nombreMayorEdad);

//12- Realiza un script que genere un número aleatorio entre 1 y 99
let numeroAleatorio = Math.floor(Math.random() * 99) + 1;
console.log(numeroAleatorio);

//13- Realiza un script que pida un texto y lo muestre en mayúsculas.
let texto = prompt("Ingresa un texto:");
console.log(texto.toUpperCase());

//14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo*/
let texto = prompt("Ingresa una cadena de texto:");
let resultado = "";

for (let i = 0; i < texto.length; i++) {
  resultado += texto[i];
  
  if (i !== texto.length - 1) {
    resultado += "-";
  }
}

console.log(resultado);

//15- Realiza un script que cuente el número de vocales que tiene un texto.
let texto = prompt("Contador de vocales:");
let contador = 0;

for (let i = 0; i < texto.length; i++) {
  let caracter = texto[i].toLowerCase();
  if (caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u') {
    contador++;
  }
}

console.log("El texto tiene " + contador + " vocales.");

//16.-Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.
let texto = prompt("Ingresa una cadena de texto:");
let textoReverso = "";

for (let i = texto.length - 1; i >= 0; i--) {
  textoReverso += texto[i];
}

console.log("Texto original: " + texto);
console.log("Texto al revés: " + textoReverso);
*/
//17.-
let texto = prompt("Ingresa un texto con vocales:");
let posicion = -1;

for (let i = 0; i < texto.length; i++) {
  let caracter = texto[i].toLowerCase();
  if (caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u') {
    posicion = i + 1;
    break;
  }
}

if (posicion !== -1) {
  console.log("La primera vocal está en la posición " + posicion);
} else {
  console.log("No se encontró ninguna vocal en el texto.");
}