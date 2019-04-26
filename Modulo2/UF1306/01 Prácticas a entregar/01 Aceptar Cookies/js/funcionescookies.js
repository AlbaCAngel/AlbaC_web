//div Cookies 

/*function cerrarse(){ 
window.close();
} 
*/


function aceptarCookies() {
	
	var	nombre= "nombre";
	var web = "Gourmet au catering";
	var caduca = "expires";
	var fecha = Date()+1;
	var fechaUTC = fecha.toDateString;
	var horaUTC = "12:00:00";
	
	var cookie = nombre + "=" + web + "; " + caduca + "=" + fechaUTC + " " + horaUTC;
	var crearCookie = cookie;
	document.cookie = crearCookie;

	
	
}

function cerrarDiv(){
	
	
	var caja = document.getElementById("divcookies");


	
	caja.onclick = miFunction();
	function miFunction(){	
	caja.style.display = "none";
	}
}


if (document.getElementById('boton').clicked == true) { 
	
    divcookies.style.display = "none";
}
	




