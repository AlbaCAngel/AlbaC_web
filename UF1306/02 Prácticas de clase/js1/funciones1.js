//Javasxcript 
//Documento , pantalla


//Ancho y Alto de pantalla 
function pantalla()  {
	document.getElementById("divBom").innerHTML = 
		"El ancho de la pantalla es: " + screen.width + " El alto de la pantalla es: " + screen.availWidth + ". " + " El alto de la pantalla disponible es: " + screen.availHeight;
	
}

//Ancho y Alto de la pantalla disponibles 
 function pantallaDisponible()  {
	document.getElementById("divBom").innerHTML = " El ancho de la pantalla disponible es: " + screen.availWidth + ". " + " El alto de la pantalla disponible es: " + screen.availHeight;
}

//
function pantallaProfundidad() {
	document.getElementById("divBom").innerHTML = " La profundidad de la pantalla disponible es: " + screen.colorDepth + ". " + " La profundidad de pixeles de la pantalla es: " + screen.pixelDepth;
}


//Devuelve el href(URL) de la pagina actual. 
function tamañoVentana() {
	
var w = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var h = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

var x = document.getElementById("infoVentana").innerHTML = "La ventana del navegador de ancho " + w + "px, y de alto: " + h + "px.";
	
}

var w = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var h = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;


function urlPagina() {
	


document.getElementById("infoPantalla").innerHTML = "La localizacion de la pagina  es" + windows.location.location.href; 
	
}

function dominioPagina() {
	
 document.getElementById("infoPantalla").innerHTML = 
"La localizacion de la pagina es " + windows.location.hostname; 
	
}

function rutaPagina() {
	
document.getElementById("infoPantalla").innerHTML = 
"La ruta de la pagina es " + windows.location.pathname; 
	
}

function protocoloPagina() {
	
document.getElementById("infoPantalla").innerHTML = 
"El protocolo de la pagina es " + windows.location.protocol; 
	
}

function cargarPagina() {
	
document.getElementById("infoPantalla").innerHTML = 
"El protocolo de la pagina es " + windows.location.assign("https://www.wikipedia.org"); 
	
}

function puertoPagina() {
	
document.getElementById("infoPantalla").innerHTML = 
"El protocolo de la pagina es " + windows.location.assign("https://www.wikipedia.org"); 
	
}

//HISTORY

function irAtras() {
	window.history.back();
}

function irAdelante() {
	window.history.forward();
}

function gohistorial() {
	window.history.go(-2);
}

//CAJAS EMERGENTES 

function alerta() {
	windows.alert("Esto es un mensaje de alerta");
}

function confirmar(){
	window.prompt("Esto es un mensaje de confirmación");
}

function introducir () {
	window.prompt("A la espera de ordenes", "intoduzca su nombre");
}

/*
//Funcion tiempo

function Interval () {
	var timeinterval = setInterval(myTimer,1000);


function myTimer () {
	var d = new Date();
	var time = d.toLocaleTimeString();
	alert(time);
}
}	
function tiempoout() {
  alert('Hello');
}


var myVar; 

function time1 () {
	var myVar = setInterval(time2, 1000);

function time2 () {
	var d = new Date();
	var time = d.toLocaleTimeString();
	
	 document.getElementById("tiempoenparrafo2").innerHTML = ;
}
}
*/
//INFORMACIÓN NAVEGADOR 

function infoNavegador() {
	

 //Motor Navegador

var motorNombre = navigator.appName;
if (motorNombre === "Netscape") {
	motorNombre = "Javascript"; 
}
// Motor nombre navedador
var navegador = navigator.appCodeName;

//Version del navegador 
var navegador2 = navigator.appVersion;

//Dueño Navegador 
var propietario = "Goolge. Inc";

//Lenguaje 
var lenguaje = window.navigator.lenguaje;

//Plataforma 
var plataforma = window.navigator.plataform;

//Sistema Operativo
var sistoperativo = "Windows";

//Navegador Online 
var navegadorOnline = window.navigator.onLine;

//Java activo
var javactivo = navigator.javaEnabled();

//Cookies 
var cookiesActivas = navigator.cookieEnabled;
	

//MOSTRAR INFO NAVEGADOR 


var txt=" ";
txt += "<h3>Información Navegador</h3>";
txt += "<p> <b>Motor Navegador: </b>" + motorNombre + "</p>"; 
txt += "<p> <b>navegador: </b>" + navegador + "</p>"; 
txt += "<p> <b>navegador2: </b>" + navegador2 + "</p>";
txt += "<p> <b>propietario: </b>" + propietario + "</p>"; 
txt += "<p> <b>lenguaje: </b>" + lenguaje + "</p>"; 
txt += "<p> <b>plataforma: </b>" + plataforma + "</p>"; 
txt += "<p> <b>Sistema Operativo: </b>" + sistoperativo + "</p>"; 
txt += "<p> <b>Navegador Online: </b>" + navegadorOnline + "</p>"; 
txt += "<p> <b>Java Activo: </b>" + javactivo + "</p>"; 
txt += "<p> <b>Cookies Activas: </b>" + cookiesActivas + "</p>"; 
txt += "<p> <b>Plugins Activos: </b>" + window.navigator.plugins.length +"</p>"; 
txt += "<p> <b>Agente Usuario: </b>" + window.navigator.userAgent + "</p>"; 


document.getElementById("infoNav").innerHTML = txt;

}
//Navegador Online 
	var plataforma = window.navigator.platform;
	var agentUser = window.navigator.userAgent; 
	
if ((agentUser.indexOf("Chrome") > -1 ) ||
    (agentUser.indexOf("Edge") > -1) || 
	(agentUser.indexOf("OPR") > -1) || 
	(agentUser.indexOf("Firefox") > -1)) {
	var indice7 = agentUser.lastIndexOf("Win64");
	var plataforma = agentUser.substr(indice7,5);
}  else if ((agentUser.indexOf("Safari")> -1 ) ||
		   	(agentUser.indexOf("Trident")> -1 ) ||
			(agentUser.indexOf("MSIE")> -1 )) {
	var indice8 = agentUser.lastIndexOf("WOW64");
	var plataforma = "Win64";
}

var sistemaOS = "";
var agentUser = window.navigator.userAgent;

if (agentUser.indexOf("(Windows")) {
	var sistemaOS = "Windows";
} else if (agentUser.indexOf ("(Apple")) {
	var sistemaOS = "Apple";
} else if (agentUser.indexOf ("(Linux")) {
	var sistemaOS = "Linux";
} else if (agentUser.indexOf ("(iPhone")) {
	var sistemaOS = "iPhone";
} else if (agentUser.indexOf ("(iPod")) {
	var sistemaOS = "iPod";
} else if (agentUser.indexOf ("(iPhone")) {
	var sistemaOS = "iPhone";
} else if (agentUser.indexOf ("(Android")) {
	var sistemaOS = "Android";
}


//Nombre del navegador 

var navegador , agenteUsuario = navigator.userAgent;

if (agenteUsuario.indexOf("Firefox") > -1)
   {navegador = "Firefox";}
    else if ((agenteUsuario.indexOf("Opera") > -1) || 
	(agenteUsuario.indexOf("OPR") > -1))
	 {navegador = "Opera";}
	else if ((agenteUsuario.indexOf("Trident") > -1) || 
			 (agenteUsuario.indexOf("MSIE") > -1))
			 {navegador = "I.Explorer";}
	else if (agenteUsuario.indexOf("Edge") > -1) 
			{navegador = "Edge";}
	else if (agenteUsuario.indexOf("Chrome") > -1)
			{navegador = "Chrome";}
	else if (agenteUsuario.indexOf("Safari") > -1) 
			{navegador = "Safari";}
	
	else {navegador = "Desconocido";}
	
	
//version navegador

if (agenteUsuario.indexOf("Firefox") > -1) {
	var indice1 = agenteUsuario.lastindexOf("Firefox/");
	var version = agenteUsuario.substr(indice1,12);
	var localizar = version.search ("/");
	var versionNav = version.slice(localizar+1,12); 
}

else if (agenteUsuario.indexOf("OPR") > -1) {
	var indice2 = agenteUsuario.lastindexOf("OPR/");
	var version = agenteUsuario.substr(indice2,15);
	var localizar = version.search ("/");
	var versionNav = version.slice(localizar+1,8); 
}

else if (agenteUsuario.indexOf("Chrome") > -1) {
	var indice4 = agenteUsuario.lastindexOf("Chrome/");
	var version = agenteUsuario.substr(indice4,20);
	var localizar = version.search ("/");
	var versionNav = version.slice(localizar+1,12); 
}

else if (agenteUsuario.indexOf("Safari") > -1) {
	var indice5 = agenteUsuario.lastindexOf("Safari/");
	var version = agenteUsuario.substr(indice5,13);
	var localizar = version.search(":")
	var versionNav = version.slice(localizar+1,12); 
}

else if ((agenteUsuario.indexOf("Trident") > -1) || 
			 (agenteUsuario.indexOf("MSIE") > -1)) {
	var indice6 = agenteUsuario.lastindexOf("rv:");
	var version = agenteUsuario.substr(indice6,7);
	var localizar = version.search(":")
	var versionNav = version.slice(localizar+1,13); 
}


//Propietario navegador 

var propietarioNav, propietario = navigator.userAgent;

if (propietario.indexOf("Firefox") > -1) {
	propietarioNav = "Fundacion Mozilla";
} else if ((propietario.indexOf("Opera") > -1) ||
		  (propietario.indexOf ("OPR") > -1)) {
	propietarioNav = "Opera Software"; 
} else if ((propietario.indexOf ("Trident") > -1) ||
		  (propietario.indexOf("MSIE") > -1)) {
		propietarioNav = "Microsoft Corportation";
} else if (propietario.indexOf("Edge") > -1) {
	propietarioNav = "Microsoft Corporation";
} else if (propietario.indexOf("Chrome") >-1) {
	propietarioNav = "Google. Inc";
} else if (propietario.indexOf("Safari") >-1) {
	propietarioNav = "Apple, Computer, Inc";
} else { }

//Geolocalizacion 

function getLocation() {
	if (navigator.geolocation) {
		navigato.geolocation.getCurrentPosition(showPosition);
	} else {
		document.getElementById ("geolocalizacion").innerHTML= 
			"La Geolocalización no es soportada por ese navegador.";
	}
}

function showPosition (position) {
	document.getElementById("geolocalizador").innerHTML = "<h3>" + "Geolocalización de tu navegador:" + "Latitud: " + 
		

}
