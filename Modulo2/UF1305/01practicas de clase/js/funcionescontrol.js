//Estructura if

function horaIf() { 
	
var fecha = new Date; //hay extrae la hora de alguna parte para que se pueda hacer el if
var hora = fecha.getHours();
var minutos = fecha.getMinutes();
var segundos = fecha.getSeconds();

	
if (hora <= 12)
	alert ("Buenos días" + "\n" + "Son las: " + hora + ":" + minutos + ":" + segundos);
if (hora >=5)
	alert ("Buenas tardes" + "\n" + "Son las: " + hora + ":" + minutos + ":" + segundos);	
}

function horaElse() {
var fecha = new Date; 
var hora = fecha.getHours();
var minutos = fecha.getMinutes();
var segundos = fecha.getSeconds();

	if (hora <= 11) {
		alert ("Buenos días" + "\n" + "Son las: " + hora + ":" + minutos + ":" + segundos);
	} else {
		alert  ("Buenas tardes" + "\n" + "Son las: " + hora + ":" + minutos + ":" + segundos);
		   }

}

function horaElseIf() {
var fecha = new Date; 
var hora = fecha.getHours();
var minutos = fecha.getMinutes();
var segundos = fecha.getSeconds();

	if (hora >=7 && hora<=12) {
		alert ("Buenos días" + "\n" + "Son las: " + hora + ":" + minutos + ":" + segundos);
	} else if (hora >=13 && hora <=20){
		alert ("Buenas tardes" + "\n" + "Son las: " + hora + ":" + minutos + ":" + segundos);
	} else {
		alert ("Buenas noches" + "\n" + "Son las: " + hora + ":" + minutos + ":" + segundos);
	}
}


function switchCase(){
	

var dia1 = new Date();
var dia2 = fecha.getDay();
var dia = "";	
	
	switch(dia2) {
	  case 0:
		dia = "Domingo";
		break;
	  case 1:
		dia = "Lunes";
		break;
	  case 2:
		dia = "Martes";
		break;
	  case 3:
		dia = "Miercoles";
		break;
	  case 4:
		dia = "Jueves";
		break;
	  case 5:
		dia = "Viernes";
		break;
	  case  6:
		dia = "Sabado";	
	
}
	alert("El día de la semana es: " + dia);
}

//Estructura repetitiva

function bucleFor() {
	var nombre = prompt ("Introduce tu nombre");
	var apellido = prompt ("Introduce tu apellido");
	var apellido2 = prompt ("Introduce tu segundo apellido");
   
   
	for (nombre; apellido; apellido2) {
    
	   alert("Error de nombre, vuelva a introducirlo");

  }
}

function mientrasWhile() {
	var fecha = new Date; 
    var minutos = fecha.getMinutes();
	
	while (minutos >= 27 && minutos <=30) {
    alert ("Queda media hora");
}
}

/*function hacerMientrasDoWhile() {

do {
   prom
}

}*/
while (condition);

function romperBucle() {
	var nombre = prompt ("Introduce tu nombre");
	var apellido = prompt ("Introduce tu apellido");
	var apellido2 = prompt ("Introduce tu segundo apellido");
   
   
	for (nombre; apellido; apellido2++) {
    
	   alert("Error de nombre, vuelva a introducirlo");

    break;
  }
}

/*
function continuarBucle() {
	
var nombre = prompt ("Escribe tu nombre");
var vacio = null ;
	
if (nombre == '' || nombre == null) {
	alert ( "No ha escrito nada, vuelve a escribir ");
		for (nombre) {
			
		} (var frase = prompt ("introduce tu nombre");
	 
			  
	 }*/
     

		/*{continue; }
    nombre = prompt ("Escribe tu nombre");
		 
		
	
}*/