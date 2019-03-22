//Alerta
function longitud() {
	var frase = prompt("Porfavor introduce tu nombre");
	var largo = frase.length;
	alert("el tamaño de tu nombre es: " + largo + "caracteres");

}

// Funciones  Posicion

function posicion() {
	var palabra = prompt("Porfavor introduce una palabra");
	var largo = palabra.length;
	var numero = prompt ("introduce un numero del 1 al " + largo);
	var numeroposicion = palabra.charAt(numero -1);
	alert("el caracter, que se encuentra en la posicion: " + numero +  " es; " + numeroposicion);
}


// Funciones indice de caracter

function caractercode() {
	var letra = prompt("Porfavor introduce un caracter");
	var numerocode = letra.charCodeAt(0);
	alert("el número de la letra: " + letra +  " es; " + numerocode);
}


function fromcaractercode() {
	var numero = prompt("Porfavor introduce un numero del 32 al 126");
	var entero = parseInt(numero);
	var tipo = typeof(entero);
	var code = String.fromCharCode(entero);
	alert ("La letra con el numero " + entero + " es; " + code);
}


function Mayus() {
	var letras = prompt("Porfavor introduce un nombre");
    var res = letras.toUpperCase();
	alert ("Tu nombre cambia a; " + res);
}


function Minusculas() {
	var letras = prompt("Porfavor introduce un nombre");
    var res = letras.toLowerCase();
	alert ("Tu nombre cambia a; " + res);
}

function Concatenadas() {
	var palabra1 = prompt ("Introduce tu nombre");
	var palabra2 = prompt ("Introduce tu apellido");
	var concar = palabra1.concat(" ",palabra2);
	alert ("Tu nombre completo es " + concar);
	
}

function cadena() {
	var palabra = prompt ("Introduce esta palabra: Libro") ;
	var cadena1 = palabra.endsWith ("Libro");
	alert ("Tu palabra es; " + cadena1);
	
}

function incluye() {
	var palabra = prompt ("Escribe la palabra mundo para buscarla en el texto");
	var incluye1 = palabra.includes("mundo");
	alert ("La palabra que buscamos es; " + incluye1); 
}


function posicioncadena() {
	var palabra = prompt ("Escribe en la BARRA inferior la palabra barra en mayus para volver");
	var index1 = palabra.indexOf("BARRA");
	alert ("Vuelve a la posición " + index1);
}


function ultimaposicioncadena() {
	var palabra = prompt ("Escribe en la BARRA inferior la palabra barra en mayus para volver");
	var index1 = palabra.indexOf("BARRA");
	alert ("Vuelve a la posición " + index1);
}

function comparacion() {
	var palabra1 = prompt ("vamos a comparar esta cadena");
	var palabra2 = prompt ("con esta otra"); 
	var comparar = palabra1.localeCompare(palabra2);
	alert ("comparacion ambas cadenas" + comparar);
}

function comprobar(){
	var frase = prompt ("Por favor, introduce tu numero de telefono");
	var indice = frase.match(/[0-9]/g);
	alert (" Su numero de telefono es " + frase);
	
}

function repeticion(){
	var frase = prompt ("Por favor introduce aquí tu frase");
    var copia = frase.repeat(2);
	alert (" Su frase es " + copia);
}

function remplazar() {
	alert ("Mi color favorito es el violeta");
	var frase = prompt ("¿Cual es tu color favorito?");
	var remplazar1 = frase.replace("violeta");
	alert ("Mi color favorito es el " + remplazar1);
}


function buscar() {
	var frase = prompt ("Introduce tu correo electronico");
	var busqueda = frase.search("/@/");
	var punto = frase.search("/\./");
	alert ("" + busqueda);
	if (busqueda === -1){
		alert ("no has escrito el caracter @")
	}
}

function cortar() {
	var frase = prompt ("Introduce tu nombre y tus apellidos");
	var cadenacortar = frase.slice(9, 15);
	alert ("y será pegado aquí " + cadenacortar);
}


function matriz() {
	var fecha = prompt ("Escribe la fecha de hoy: 15/03/2019");
	var matriz1 = fecha.split("15");
	var matriz2 = fecha.split("03");
	var matriz3 = fecha.split("2019");
	alert ("El día de hoy es: " + matriz1 + " " + matriz2 + " " + matriz3);
	
	
}

function empezar() {
	var frase = prompt ("¿Como comienza esta cadena?: ");
	var empezar1 = frase.startsWith("¿");
	alert ("Tu resulado es: " + empezar1);
}

function subcortar() {
	var frase = prompt ("Introduce tu nombre");
	var frase2 = prompt ("Introduce tu apellido");
	var frase3 = prompt ("Introduce tu segundo apellido");
	var cadenacortar = frase.slice(0, 3);
	var cadenacortar2 = frase2.slice(0, 3);
	var cadenacortar3 = frase3.slice(0, 3);
	alert ("nombre abreviado: " + cadenacortar + cadenacortar2 + cadenacortar3 );
}

function espacioblanco() {
	var frase = prompt ("introduce tu nombre");
   
	if (frase == null || frase =="" || frase ==" " ) {
		alert(" porfavor rellene el campo");
		var frase = prompt ("introduce tu nombre");
	} else {
    var quitarEspacios = frase.trim();
	alert ("nombre abreviado: " + quitarEspacios);
	}
}


  
