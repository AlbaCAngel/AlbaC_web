//Crear Array

function matriz() {
	var color1 = prompt ("introduce un color");
	var color2 = prompt ("introduce otro color");
	var color3 = prompt ("introduce un color más");
	
	var colores = ("\"" + color1 + "\"," +
				   "\"" + color2 + "\"," +
				   "\"" + color3 + "\"");
	
		
	var crearMatriz = new Array (color1, color2, color3);
	
	alert ("Se han creado las variables: " + "\n" + "var color1 = " + color1 + ";\n" + "var color2 = " + color2 + ";\n" + "var color3 = " + color3 + ";\n" + 
		   "Se ha creado la matriz de colores" + "\n" + "var colores = " + "[" + crearMatriz + "];" + "\n" +
		   "La variable colores es de tipo: " + typeof(crearMatriz) + "\n" + "La matriz contiene: "  + crearMatriz.length);
	
	var convertir = colores.splice;
	
}

function nombrespersonas() {
	var nombre1 = prompt ("Introduce un nombre");
	var nombre2 = prompt ("Introduce un segundo nombre");
	var nombre3 = prompt ("Introduce un tercer nombre diferente");

	var nombres = ("\"" + nombre1 + "\"," +
				   "\"" + nombre2 + "\"," +
				   "\"" + nombre3 + "\"");
	
	
	
	var dividirmatriz = new Array (nombre1, nombre2, nombre3);
	
	alert ("Se ha creado la variable: " + "\n" + "var nombre1 = " + nombre1 + ";\n" + "var nombre2 = "
		  + nombre2 + ";\n" + "var nombre3 = " + nombre3 + ";\n" + 
		  "Se ha creado la matriz de nombres para dividir" + "\n" + " var dividirnombres = " + "[" + dividirnombres + "]; + "
		  );
	
	var dividirnombres = dividirmatriz.split ();
	
	

}

function unionfrutas() {
	var fruta1 = prompt ("elige fruta");
	var fruta2 = prompt ("elige otra fruta");
	var fruta3 = prompt ("elige una ultima fruta más");
	
	var frutas = ("\"" + fruta1 + "\"," +
				  "\"" + fruta2 + "\"," +
				  "\"" + fruta3 + "\"");
	
		
	var unionfrutas1 = new Array (fruta1, fruta2, fruta3);
	
	alert ("Se han creado las variables: " + "\n" + 
		   "var fruta1 = " + fruta1 + ";\n" + 
		   "var fruta2 = " + fruta2 + ";\n" + 
		   "var fruta3 = " + fruta3 + ";\n" + 
	       "Se ha creado la matriz de colores" + "\n" + 
		   "var frutas = " + "[" + unionfrutas1 + "];" + 
		   unionfrutas1.concat(fruta2)
		  );
	
	
	
}

function copyarray() {
	var copy1 = prompt ("elige fruta");
	var copy2 = prompt ("elige otra fruta");
	var copy3 = prompt ("elige una ultima fruta más");
	
	var copyarray1 = ("\"" + copy1 + "\"," +
				      "\"" + copy2 + "\"," +
				      "\"" + copy3 + "\"");
	
		
	var copyarray2 = new Array (copy1, copy2, copy3);
	
	alert (
		"Se han creado las variables: " + "\n" + 
		"var copy1 = " + copy1 + ";\n" + 
		"var copy2 = " + copy2 + ";\n" + 
		"var copy3 = " + copy3 + ";\n" + 
	    "Se ha creado la matriz de frutas " + "\n" + 
		"var copyarray2 = " + "[" + copyarray2 + "];" + "\n" + 
	    "Y la variable copyWithin " + copyarray2.copyWithin(1, 0) 
		  );	
}

function EjJoin() {
	var fruta1 = prompt ("elige fruta");
	var fruta2 = prompt ("elige otra fruta");
	var fruta3 = prompt ("elige una ultima fruta más");
	var caracter = prompt ("introduce un caracter para separar los valores");
	
	
	var frutas = ("\"" + fruta1 + "\"," +
				  "\"" + fruta2 + "\"," +
				  "\"" + fruta3 + "\"");
	
		
	var unionfrutas1 = new Array (fruta1, fruta2, fruta3);
	
	alert (
		"Se han creado las variables: " + "\n" + 
		"var fruta1 = " + fruta1 + ";\n" + 
		"var fruta2 = " + fruta2 + ";" + "\n" + 
		"var fruta3 = " + fruta3 + ";\n" + 
		"var frutas = [" + frutas + "];\n" + 
		"Se ha creado la matriz de frutas" + "\n" + 
		"Con join() se unen todos los elementos de la matriz"  + "\n" + 
		 unionfrutas1.join(" " + caracter + " ")
		  );
	
	
}

function cortarmatriz() {
	
	var fruta1 = prompt ("elige fruta");
	var fruta2 = prompt ("elige otra fruta");
	var fruta3 = prompt ("elige una ultima fruta más");
	
	
	
	var frutas = ("\"" + fruta1 + "\"," +
				  "\"" + fruta2 + "\"," +
				  "\"" + fruta3 + "\"");
	
		
	var cortarfruta = new Array (fruta1, fruta2, fruta3);
	
	alert (
		"Se han creado las variables: " + "\n" + 
		"var fruta1 = " + fruta1 + ";\n" + 
		"var fruta2 = " + fruta2 + ";" + "\n" + 
		"var fruta3 = " + fruta3 + ";\n" + 
		"var frutas = [" + frutas + "];\n" + 
		"Se ha creado la matriz de frutas" + "\n" + 
		"Con pop() elimina el último elemento de la matriz"  + "\n" + 
		 cortarfruta.pop()
		  );
	
	
}
function nuevoelemento() {
	
	var fruta1 = prompt ("elige fruta");
	var fruta2 = prompt ("elige otra fruta");
	var fruta3 = prompt ("elige una ultima fruta más");
	
	
	
	var frutas = ("\"" + fruta1 + "\"," +
				  "\"" + fruta2 + "\"," +
				  "\"" + fruta3 + "\"");
	
		
	var añadirfruta = new Array (fruta1, fruta2, fruta3);
	
	añadirfruta.push("Kiwi")
	alert (
		"Se han creado las variables: " + "\n" + 
		"var fruta1 = " + fruta1 + ";\n" + 
		"var fruta2 = " + fruta2 + ";" + "\n" + 
		"var fruta3 = " + fruta3 + ";\n" + 
		"var frutas = [" + frutas + "];\n" + 
		"Se ha creado la matriz de frutas" + "\n" + 
		"Push() añade un nuevo elemento de la matriz" + "\n" + añadirfruta
		);
	
	
}

function desplazaelemento() {
	
	var fruta1 = prompt ("elige fruta");
	var fruta2 = prompt ("elige otra fruta");
	var fruta3 = prompt ("elige una ultima fruta más");
	
	
	
	var frutas = ("\"" + fruta1 + "\"," +
				  "\"" + fruta2 + "\"," +
				  "\"" + fruta3 + "\"");
	
		
	var desplaza = new Array (fruta1, fruta2, fruta3);
	
	desplaza.shift(fruta1)
	
	alert (
		"Se han creado las variables: " + "\n" + 
		"var fruta1 = " + fruta1 + ";\n" + 
		"var fruta2 = " + fruta2 + ";" + "\n" + 
		"var fruta3 = " + fruta3 + ";\n" + 
		"var frutas = [" + frutas + "];\n" + 
		"Se ha creado la matriz de frutas" + "\n" + 
		"El shift()elimina el primer elemento de matriz y desplaza todos los otros elementos a un índice inferior." + "\n" + desplaza
		);
	
	
}

function anadeshift() {
	
	var fruta1 = prompt ("elige fruta");
	var fruta2 = prompt ("elige otra fruta");
	var fruta3 = prompt ("elige una ultima fruta más");
	
	
	
	var frutas = ("\"" + fruta1 + "\"," +
				  "\"" + fruta2 + "\"," +
				  "\"" + fruta3 + "\"");
	
		
	var añade = new Array (fruta1, fruta2, fruta3);
	añade.unshift("Kiwi")
	
	alert (
		"Se han creado las variables: " + "\n" + 
		"var fruta1 = " + fruta1 + ";\n" + 
		"var fruta2 = " + fruta2 + ";" + "\n" + 
		"var fruta3 = " + fruta3 + ";\n" + 
		"var frutas = [" + frutas + "];\n" + 
		"Se ha creado la matriz de frutas" + "\n" + 
		"El unshift()método añade un nuevo elemento a una matriz (al principio):" + "\n" + 
		añade
		);
	
	
}

function añadirelemento() {
	
	var fruta1 = prompt ("elige fruta");
	var fruta2 = prompt ("elige otra fruta");
	var fruta3 = prompt ("elige una ultima fruta más");
	
	
	
	var frutas = ("\"" + fruta1 + "\"," +
				  "\"" + fruta2 + "\"," +
				  "\"" + fruta3 + "\"");
	
		
	var añadeelemento1 = new Array (fruta1, fruta2, fruta3);
	añadeelemento1.splice(1, 0, "Limon", "Kiwi");
	
	alert (
		"Se han creado las variables: " + "\n" + 
		"var fruta1 = " + fruta1 + ";\n" + 
		"var fruta2 = " + fruta2 + ";" + "\n" + 
		"var fruta3 = " + fruta3 + ";\n" + 
		"var frutas = [" + frutas + "];\n" + 
		"Se ha creado la matriz de frutas" + "\n" + 
		"El splice() para añadir nuevos elementos a una matriz:" + "\n" + 
		añadeelemento1
		);
	
	
}

function entries1() {
	
	var fruta1 = prompt ("elige fruta");
	var fruta2 = prompt ("elige otra fruta");
	var fruta3 = prompt ("elige una ultima fruta más");
	
	
	
	var frutas = ("\"" + fruta1 + "\"," +
				  "\"" + fruta2 + "\"," +
				  "\"" + fruta3 + "\"");
	
		
	var frutasentrie = new Array (fruta1, fruta2, fruta3);
	frutasentrie.entries();
	
	alert (
		"Se han creado las variables: " + "\n" + 
		"var fruta1 = " + fruta1 + ";\n" + 
		"var fruta2 = " + fruta2 + ";" + "\n" + 
		"var fruta3 = " + fruta3 + ";\n" + 
		"var frutas = [" + frutas + "];\n" + 
		"Se ha creado la matriz de frutas" + "\n" + 
		"Las entradas () devuelve un objeto Iterador matriz con pares clave / valor" + "\n" + 
		frutasentrie
		);	
}

function añadirelemento() {
	
	var fruta1 = prompt ("elige fruta");
	var fruta2 = prompt ("elige otra fruta");
	var fruta3 = prompt ("elige una ultima fruta más");
	
	
	
	var frutas = ("\"" + fruta1 + "\"," +
				  "\"" + fruta2 + "\"," +
				  "\"" + fruta3 + "\"");
	
		
	var añadeelemento1 = new Array (fruta1, fruta2, fruta3);
	añadeelemento1.splice(1, 0, "Limon", "Kiwi");
	
	alert (
		"Se han creado las variables: " + "\n" + 
		"var fruta1 = " + fruta1 + ";\n" + 
		"var fruta2 = " + fruta2 + ";" + "\n" + 
		"var fruta3 = " + fruta3 + ";\n" + 
		"var frutas = [" + frutas + "];\n" + 
		"Se ha creado la matriz de frutas" + "\n" + 
		"El splice() para añadir nuevos elementos a una matriz:" + "\n" + 
		añadeelemento1
		);
	
	
}

function edad() {
	
	var edad1 = prompt ("pon tu edad");
		var edad11 = Number(edad1);
	var edad2 = prompt ("pon la edad de tu madre");
		var edad22 = Number(edad2);
	var edad3 = prompt ("pon la edad de tu abuela");
		var edad33 = Number(edad3);
	
	
	
	var mostrarEdades = ("\"" + edad1 + "\"," +
				         "\"" + edad2 + "\"," +
				         "\"" + edad3 + "\"");
	
		
	var edadArray = new Array (edad11, edad22, edad33);
	function evaluar(edadArray){return edadArray > 18;}
	

	
	alert (
		"Se han creado las variables: " + "\n" + 
		"var edad1 = " + edad11 + ";\n" + 
		"var edad2 = " + edad22 + ";" + "\n" + 
		"var edad3 = " + edad33 + ";\n" + 
		"var edades = [" + mostrarEdades + "];\n" + 
		"Se ha creado la matriz de edades" + "\n" + 
		"Compruebe si todos los valores de la edad matriz son mayores de 18 años:" + "\n" + 
		 edadArray.every(evaluar)
		);
	
}


function cambiarelemento() {
	
	var fruta1 = prompt ("elige fruta");
	var fruta2 = prompt ("elige otra fruta");
	var fruta3 = prompt ("elige una ultima fruta más");
	
	
	
	var frutas = ("\"" + fruta1 + "\"," +
				  "\"" + fruta2 + "\"," +
				  "\"" + fruta3 + "\"");
	
		
	var cambiarelento1 = new Array (fruta1, fruta2, fruta3);
	cambiarelento1.fill("Limoncio");
	
	alert (
		"Se han creado las variables: " + "\n" + 
		"var fruta1 = " + fruta1 + ";\n" + 
		"var fruta2 = " + fruta2 + ";" + "\n" + 
		"var fruta3 = " + fruta3 + ";\n" + 
		"var frutas = [" + frutas + "];\n" + 
		"Se ha creado la matriz de frutas" + "\n" + 
		"El splice() para añadir nuevos elementos a una matriz:" + "\n" + 
		cambiarelento1
		);
	
	
}
function encontrarEdad() {
	
	var edad1 = prompt ("pon tu edad");
		var edad11 = Number(edad1);
	var edad2 = prompt ("pon la edad de tu padre");
		var edad22 = Number(edad2);
	var edad3 = prompt ("pon la edad de tu abuelo");
		var edad33 = Number(edad3);
	
	
	
	var edades1 = ("\"" + edad1 + "\"," +
				   "\"" + edad2 + "\"," +
				   "\"" + edad3 + "\"" );
	
		
	var edadbuscar = new Array (edad11, edad22, edad33);
	function evaluarEdad(edadbuscar){return edadbuscar > 18;}
	
	
alert (
		"Se han creado las variables: " + "\n" + 
		"var edad1 = " + edad11 + ";\n" + 
		"var edad2 = " + edad22 + ";" + "\n" + 
		"var edad3 = " + edad33 + ";\n" + 
		"var edades = [" + edades1 + "];\n" + 
		"Se ha creado la matriz de edades" + "\n" + 
		"El primer valor de edad matriz de 18 años es:" + "\n" + 
		 edadbuscar.find(evaluarEdad)
		);
}


function filtro() {
	
var edad1 = prompt ("pon tu edad");
		var edad11 = Number(edad1);
	var edad2 = prompt ("pon la edad de tu madre");
		var edad22 = Number(edad2);
	var edad3 = prompt ("pon la edad de tu abuela");
		var edad33 = Number(edad3);
	
	
	
	var mostrarEdades = ("\"" + edad1 + "\"," +
				         "\"" + edad2 + "\"," +
				         "\"" + edad3 + "\"");
	
		
	var edadArray = new Array (edad11, edad22, edad33);
	function evaluarfiltro(edadArray){return edadArray > 18;}
	

	
	alert (
		"Se han creado las variables: " + "\n" + 
		"var edad1 = " + edad11 + ";\n" + 
		"var edad2 = " + edad22 + ";" + "\n" + 
		"var edad3 = " + edad33 + ";\n" + 
		"var edades = [" + mostrarEdades + "];\n" + 
		"Se ha creado la matriz de edades" + "\n" + 
		"Compruebe si todos los valores de la edad matriz son mayores de 18 años:" + "\n" + 
		 edadArray.filter(evaluarfiltro)
		);
	
}
	
function ListaMatriz()
	var frutas1 = prompt ("elige fruta");
	var frutas2 = prompt ("elige otra fruta");
	var frutas3 = prompt ("elige una ultima fruta más");
	
    var frutas = ("\"" + fruta1 + "\"," +
				  "\"" + fruta2 + "\"," +
				  "\"" + fruta3 + "\"");

var Lista = new Array (frutas1, frutas2, frutas3);

function funciondearray(Listas) {currentValue, index
	
}

		
alert (
		"Se han creado las variables: " + "\n" + 
		"var fruta1 = " + fruta1 + ";\n" + 
		"var fruta2 = " + fruta2 + ";" + "\n" + 
		"var fruta3 = " + fruta3 + ";\n" + 
		"var frutas = [" + frutas + "];\n" + 
		"Se ha creado la matriz de frutas" + "\n" + 
		"El include () determina si una matriz contiene un elemento especifico" + "\n" + 
		"La fruta que estás buscando es: " + Lista.forEach (funciondearray)
		);
	
function buscarelemento() {
	
	var fruta1 = prompt ("elige fruta");
	var fruta2 = prompt ("elige otra fruta");
	var fruta3 = prompt ("elige una ultima fruta más");
	var busqueda = prompt ("De las tres elejidas que fruta quieres que busque");
	
	
	var frutas = ("\"" + fruta1 + "\"," +
				  "\"" + fruta2 + "\"," +
				  "\"" + fruta3 + "\"");
	
		
	var buscarpalabra1 = new Array (fruta1, fruta2, fruta3);
	
	
	alert (
		"Se han creado las variables: " + "\n" + 
		"var fruta1 = " + fruta1 + ";\n" + 
		"var fruta2 = " + fruta2 + ";" + "\n" + 
		"var fruta3 = " + fruta3 + ";\n" + 
		"var frutas = [" + frutas + "];\n" + 
		"Se ha creado la matriz de frutas" + "\n" + 
		"El include () determina si una matriz contiene un elemento especifico" + "\n" + 
		"La fruta que estás buscando es: " + buscarpalabra1.includes(busqueda)
		);
	
	
}

function buscaryposicionarElemento() {
	
	var fruta1 = prompt ("elige fruta");
	var fruta2 = prompt ("elige otra fruta");
	var fruta3 = prompt ("elige una ultima fruta más");
	var busqueda = prompt ("De las tres elejidas que fruta quieres que busque");
	
	
	var frutas = ("\"" + fruta1 + "\"," +
				  "\"" + fruta2 + "\"," +
				  "\"" + fruta3 + "\"");
	
		
	var bpelemento1 = new Array (fruta1, fruta2, fruta3);
	
	var busquedaarray = bpelemento1.indexOf(busqueda)+1;
	
	alert (
		"Se han creado las variables: " + "\n" + 
		"var fruta1 = " + fruta1 + ";\n" + 
		"var fruta2 = " + fruta2 + ";" + "\n" + 
		"var fruta3 = " + fruta3 + ";\n" + 
		"var frutas = [" + frutas + "];\n" + 
		"Se ha creado la matriz de frutas" + "\n" + 
		"Buscar una matriz  de un elemento especifico, y devuelve su posición" + "\n" + 
		busquedaarray
		);
	
	
}

