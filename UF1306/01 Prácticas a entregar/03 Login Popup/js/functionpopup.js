//Abrir div Modular
function formulariouser1() {
				console.log ("hola");
					/* var formularuser =
					 document.getElementById("demo1").innerHTML = formulariouser2;*/
						  var modal = document.getElementById("formulariouser2");
						  console.log (modal);
	 					  modal.style.display = "block"; 
	
					  }
	

//Cerrar div Modular
function cerrarimg(){
	
	var caja = document.getElementById("formulariouser2");
	caja.onclick = miFunction ();
	function miFunction(){	
	caja.style.display = "none";
	}

} 
	

function botonAceptar() { 
	var caja = document.getElementById("formulariouser2");
	caja.onclick = miFunction ();
	function miFunction(){	
	caja.style.display = "none";
	}
}

function cookies() {
	var cokiesCasilla= document.getElementById("Recordaruser");
	var	nombre= "nombre";
	var web = "Tienda";
	var caduca = "expires";
	var fecha = Date()+1;
	var fechaUTC = fecha.toDateString;
	var horaUTC = "12:00:00";
	
	var cookieCadena = nombre + "=" + web + "; " + caduca + "=" + fechaUTC + " " + horaUTC;
	var crearCookie = cookieCadena;
	document.cookie = crearCookie;

	alert ("Bienvenido");
}


