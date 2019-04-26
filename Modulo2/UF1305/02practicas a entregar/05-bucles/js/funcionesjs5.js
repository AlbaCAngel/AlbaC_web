//Javascript Document

function nif() {
	var dni = document.getElementById('text1').value; 
	
	var numero = dni.substr(0,dni.length-1);
	var letra = dni.substr(dni.length-1,1).toUpperCase();
	var numeroDni = numero % 23;
	var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
	var letraArray = letras[numeroDni];
	
	
	if (letra === letraArray) {
		document.getElementById('etiqueta1').innerHTML = "La letra es correcta"; 
	} else {
		document.getElementById('etiqueta1').innerHTML = "La letra es incorrecta"; 
	}
		
}

function signoZodiaco() {
	var fecha = new Date (document.getElementById('date2').value);
	var dia = fecha.getDate();
	var mes = fecha.getMonth()+1; 
	
	var signo = ""; 
	var imagen = "";
	if ((dia >= 21 && mes === 3) || (dia <= 20 && mes === 4)){ 
	    signo = "Aries";  
		imagen = "img/aries.jpg";
	} else if ((dia >= 21 && mes == 4) || (dia <= 20 && mes == 5)) {
		signo = "Tauro"; 
		imagen = "img/tauro.jpg";
		
	} else if ((dia >= 21 && mes == 5) || (dia <= 20 && mes == 6)) {
		signo = "Géminis"; 
		imagen = "img/geminis.jpg";
		
	}else if ((dia >= 21 && mes == 6) || (dia <= 20 && mes == 7)) {
		signo = "Cancer"; 
		imagen = "img/cancer.jpg";
		
	}else if ((dia >= 21 && mes == 7) || (dia <= 20 && mes == 8)) {
		signo = "Leo"; 
		imagen = "img/leo.jpg";
		
	}else if ((dia >= 21 && mes == 8) || (dia <= 20 && mes == 9)) {
		signo = "Virgo"; 
		imagen = "img/virgo.jpg";
		
		
	}else if ((dia >= 21 && mes == 9) || (dia <= 20 && mes == 10)) {
		signo = "Libra"; 
		imagen = "img/libra.jpg";
		
	}else if ((dia >= 21 && mes == 10) || (dia <= 20 && mes == 11)) {
		signo = "Escorpio"; 
		imagen = "img/escorpio.jpg";
		
	}else if ((dia >= 21 && mes == 11) || (dia <= 20 && mes == 12)) {
		signo = "Sagitario"; 
		imagen = "img/sagitario.jpg";
		
	}else if ((dia >= 21 && mes == 12) || (dia <= 20 && mes == 1)) {
		signo = "Capricornio"; 
		imagen = "img/capricornio.jpg";
		
	}else if ((dia >= 21 && mes == 1) || (dia <= 20 && mes == 2)) {
		signo = "Acuario"; 
		imagen = "img/acuario.jpg";
		
	}else if ((dia >= 21 && mes == 2) || (dia <= 20 && mes == 3)) {
		signo = "Piscis"; 
		imagen = "img/piscis.jpg";
		
	}
	
	document.getElementById('etiqueta2').innerHTML = "Naciste un " + dia + "/" + mes + "<br><br>" +  " <strong>Eres " + signo + " </strong>" + "<br>" + " <img src=" + "'" + imagen + "'" + "width='100px'  height='100px'" + "  " + "/>";
	
}

function categoriaFutbol() { 
	var fecha  = new Date(document.getElementById('date3').value);
    var fechaSys  = new Date();
	
	var ano = fecha.getFullYear();
	var anoSys = fechaSys.getFullYear();
	
	var cat = anoSys - ano;

	if (cat >= 0 && cat <= 4) { 
		document.getElementById('etiqueta3').innerHTML = "No es una fecha válida "; 
	}  else { 
	
	var categoria;

	switch(cat) {
  		case 5:
		case 6:
		case 7:
			categoria = "Prebenjamines";
			break;
		
		case 8:
		case 9:
			categoria = "Benjamines";
    		break;
			
		case 10:
		case 11:
			categoria = "Alevines";
			break;
			
		case 12:
		case 13:
			categoria = "Infantiles";
			break;
			
		case 14:
		case 15:
			categoria = "Cadetes";
			break;
		
		case 16:
		case 17:
		case 18:
			categoria = "Juveniles";
			break;
			
		default: 
			categoria = "No existe categoría de " + cat + "años";
			break;
   
	}
 document.getElementById('etiqueta3').innerHTML = "Tu categoría es " + categoria;
	} 

}


function frutas() {
	var frutas1 = document.getElementById('text4').value;
	
	var frutascadena;
	for (frutascadena  = 0; frutascadena < frutas1.length; frutas1++) { 
    text += cars[i] + "<br>";
} 
	var frutasparaarray = [frutas1];
	var frutaArray = frutasparaarray();
	
	document.getElementById('etiqueta4').innerHTML = "Tu categoría es " + categoria; 
	
}

