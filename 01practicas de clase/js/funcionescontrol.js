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

/*function horaElseIf() {
var fecha = new Date; 
var hora = fecha.getHours();
var minutos = fecha.getMinutes();
var segundos = fecha.getSeconds();

	if (hora >=7 && <=12) {
		alert ("Buenos días" + "\n" + "Son las: " + hora + ":" + minutos + ":" + segundos);
	} else if (hora >=12 && hora <=20){
		alert ("Buenas tardes" + "\n" + "Son las: " + hora + ":" + minutos + ":" + segundos);
	} else {
		alert ("Buenas noches" + "\n" + "Son las: " + hora + ":" + minutos + ":" + segundos);
	}
}*/

/*function switchCase(new Date;.getDay()) {
	case 0:
    day = "Domingo";
    break;
  case 1:
    day = "Lunes";
    break;
  case 2:
    day = "Martes";
    break;
  case 3:
    day = "Miercoles";
    break;
  case 4:
    day = "Jueves";
    break;
  case 5:
    day = "Viernes";
    break;
  case  6:
    day = "Sabado";
	
	alert(new Date;.getDay())
}
}*/

	