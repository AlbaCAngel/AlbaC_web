//CÁLCULO 

function calculoNeto() {
	var bruto = Number(document.getElementById("number1").value);
	
	
	var SegS = ((bruto * 6.4)/100);
	var IRPF = ((bruto * 15)/100);
	
	var neto = bruto - IRPF - SegS;
	var pagas = neto/14;
	
	document.getElementById('etiqueta1').innerHTML =
		"Sueldo neto es: " + pagas.toPrecision(4) + " € "; 
}

function calculoProducto() {
	var precio= Number(document.getElementById("number2").value);
	
	var desc = (50 / 20)/100;
	var imp = (50 * 21)/100;
	var total = 50 - desc + imp;
	
document.getElementById('etiqueta2').innerHTML =
		"Descuento del -20%" + "<br>" + 
		"Impuesto +21%" + "<br>" +
		"Precio total: " + total.toPrecision(4) + " € "; 
	
}

function calculoProducto() {
	var precio = Number(document.getElementById("number2").value);
	
	var desc = (50 / 20)/100;
	var imp = (50 * 21)/100;
	var total = 50 - desc + imp;
	
document.getElementById('etiqueta2').innerHTML =
		"Descuento del -20%" + "<br>" + 
		"Impuesto +21%" + "<br>" +
		"Precio total: " + total.toPrecision(4) + " € "; 
	
}

/*function tiempoDescarga() {
	var peso = Number(document.getElementById("number3").value);
	
	var mb = (peso / velocidad);
	var velocidad = (peso*8);
	var tiempo = mb + velocidad; 
	var seg = (tiempo / 60);
	
document.getElementById('etiqueta3').innerHTML = 
	
}*/

function frase() {
	var mensaje = document.getElementById("number4").value;
	

	var frase1 = mensaje; 
	var frase2 = mensaje.toUpperCase()  ;
	var frase3 = mensaje.toLowerCase(); ;
	var frase4 = mensaje.split(" ").reverse(); 
	var frase5 = mensaje;
	
	document.getElementById('etiqueta4').innerHTML =
    "'" + frase1 + "'" + "<br>" +
	frase2 + "<br>" +
	frase3 + "<br>" +
	frase4 + "<br>" +
	"Cita: " + frase5 + "<br>";
}

function comparar() {
	
	var comparar1 =document.getElementById("number5").value;	

	var cadena = comparar1;
	alert(cadena + typeof(cadena));
	var coincidencia1 = cadena.indexOf(" "); //5
	var cortar1 = Number(cadena.slice (0, coincidencia1));
	var coincidencia2 = cadena.lastIndexOf(" "); //5
	var cortar2 = Number(cadena.slice (coincidencia2));
	//var coincidencia3 = cadena.lastIndexOf(" "); //5
	var cortar3 = Number(cadena.slice (coincidencia1, coincidencia2));
	

 
	var contar = "";
	if ((cortar1 > cortar2) && (cortar1 > cortar3)) {
		var contar = cortar1 + " es el número Mayor";

	} else if ((cortar2 > cortar1) && (cortar2 > cortar3)) { 
		var contar = cortar2 + " es el número Mayor";
	
	} else {
		var contar = cortar3 + " es el número Mayor";
	}
    
	
	document.getElementById('etiqueta5').innerHTML = contar;
		
	
}

//Ej10 

function tablamulti() {				
			var y = document.getElementById("number10").value;
			if( y > 0 && y < 11){
				var x = "";
				var resultado = "";						
				for( x = 1 ; x <= 10 ; x++){
					resultado +=  y + " x " + x + " = " + (x * y) + "<br>";  			
					}
				document.getElementById("etiqueta10").innerHTML= "Tabla del " + y + "<br>" + resultado;
							}
			else{
				document.getElementById("etiqueta10").innerHTML= "introduzca un número del 1 al 10";
				document.getElementById("etiqueta10").style.color = "red";
			}				
		}
