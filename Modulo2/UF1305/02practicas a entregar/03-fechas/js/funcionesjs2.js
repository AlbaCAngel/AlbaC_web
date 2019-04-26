//Ejercicio 1

function fecha1() {
	
	var fechaUser = new Date(document.getElementById("date1").value);
	var fechaActual = new Date();
	
	if (fechaUser > fechaActual) {
	var resta = fechaUser - fechaActual; 
	} else {
	var resta = fechaActual - fechaUser; 
	}
	//alert(resta);
	
	var anoActual = new Date().getFullYear();
	var anoUser = fechaUser.getFullYear();
	var edad = anoActual - anoUser;
	
	alert(edad);

	var hora = Math.round(((((edadmls/1000)*60)*60)*24)-edadmls);
	var minutos = Math.round(((((hora/1000)*60)*60)*24));
	var segundos = Math.round(((((minutos/1000)*60)*60)*24));
	var dias = Math.round (hora/24);
	var ano = 
	
	document.getElementById("etiqueta1").innerHTML = "tu edad es " + resta + "<br>" +
	"El tiempo que llevas vivio es: " + hora + "H" + " "  + minutos + "Min" + " " + segundos + "Seg" + "<br>"
	+ "Los días que llevas vivo es: " + dias; 
	
}


//FORMATO FECHA
function formatoFecha() {
	//var fecha = new Date(document.getElementById("date2").value);
	
	var dia = document.getElementById("number2").value;
	var mes = document.getElementById("number3").value;
	var ano = document.getElementById("number4").value;  
	
	var dia1 = dia.getDay();
	var mes1 = mes.getMonth();
	var ano1 = ano.getYear();
	
  /*var horas = fecha.getHours;
	var minutos = fecha.getMinutes;
	var segundos = fecha.getSeconds;*/
	
	document.getElementById("etiqueta2").innerHTML = 
	dia1 + mes1 + ano1;
}

function fechaLarga () {
	var fecha1 = new Date(document.getElementById("date3").value);
	
	var dia = fecha1.getDay();
	var mes = fecha1.getMonth()+1;
	var ano = fecha1.getFullYear();
	
	
    var dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
	var meses =["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

	document.getElementById("etiqueta3").innerHTML = 
		"Hoy es: " + dias[dia] + " " + dia + " de " + meses[mes] + " de " + ano;

}

function Iniciosesion () {
	
	var fecha1 = document.getElementById("text4").value;
	
	
	var monstrardia = new Date();
	
	var fechadia = monstrardia.getDate();
	var mes = monstrardia.getMonth()+1;
	var anocompleto = monstrardia.getFullYear();
	
	
	var mostrarhora = new Date();
    var hora = mostrarhora.getHours();
	var minutos = mostrarhora.getMinutes(); 
	var second = mostrarhora.getSeconds(); 
	
	
	setTimeout("Iniciosesion()",1000) 
	
	document.getElementById("etiqueta4").innerHTML =
	"Hola usuario, has iniciado sesión el día " + fechadia + "/" + mes + "/" + anocompleto + " a las " + hora + ":" + minutos + ":" + second; 
	
}


function diasquefaltan() {
	var fecha = new Date (document.getElementById("date5").value);
	
	var anopersona = fecha.getFullYear();
	var splitanopersona = anopersona.split("");
	/*alert (splitanopersona);
	*/
	var anoactual = new Date().getFullYear();
	
	var resta = (anoactual - anopersona); 
	
	document.getElementById("etiqueta5").innerHTML =
	anopersona 
	
	/*"Han pasado "  + resta + " desde tu cumpleaños " +
    "<br>" +  " te faltan " + " para tu siguiente cumpleaños"*/; 
	
}