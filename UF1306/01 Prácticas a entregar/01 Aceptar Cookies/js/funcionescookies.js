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
	var fechaUTC = fecha.toDateString();
	var horaUTC = "12:00:00";
	
	var cookie = nombre + "=" + web + "; " + caduca + "=" + fechaUTC + " " + horaUTC;
	var crearCookie = cookie;
	document.cookie = crearCookie;

	alert (document.cookie);
	
}



/*	var caja = document.getElementById('divcookies');
	var boton = document.getElementById("button");
	
	
	
		boton.onclick = function () {
		caja.style.display = "none";*/
	/*	}*/

}	


//si pulsa el boton desaparece div 

/*if (localStorage.AceptarCookies == 'true') { 
	divcookies.style.display = 'none';
} 
} 

if(localStorage.cookies1 == 'true'){
    cajacookies.style.display = 'none';
  }*/
	




