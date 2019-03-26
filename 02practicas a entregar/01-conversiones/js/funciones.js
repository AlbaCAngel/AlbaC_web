//VOLUMEN

function obtenerlitros() {
	var litros = Number(document.getElementById("number1").value);
	
	var decilitros = litros * 10;
	var centilitros = litros * 100;
	var mililitros = litros * 1000;
	
document.getElementById('etiqueta1').innerHTML =
	"Número de litros" + litros + "<br>" +
	litros + "litros son " + decilitros + " decilitros " + "<br>" +
	litros + "litros son " + centilitros + " centilitros " + "<br>" + 
	litros + "litros son " + mililitros + " mililitros";
	
}

//KILOMETROS LONGITUD

function obtenerlongitud() {
	var kilometros = Number(document.getElementById("number2").value);
	
	var metros1 = kilometros * 10;
	var centimetros = kilometros * 100;
	var milimetros = kilometros * 1000;
	
document.getElementById('etiqueta2').innerHTML =
	"Número de kilometros" + kilometros + "<br>" +
	kilometros + " kilometros son " + metros1 + " metros " + "<br>" +
	kilometros + " kilometros son " + centimetros + " centimetros " + "<br>" + 
	kilometros + " kilometros son " + milimetros + " milimetros";
	

}

//DIAS TIEMPO

function obtenerTiempo() {
	var dias = Number(document.getElementById("number3").value);
	
	var horas = dias * 24;
	var minutos = dias * 1440;
	var segundos = dias * 86400;
	
document.getElementById('etiqueta3').innerHTML =
	"Número de dias" + dias + "<br>" +
	dias + " dias son " + horas + " horas " + "<br>" +
	dias + " dias son " + minutos + " minutos " + "<br>" + 
	dias + " dias son " + segundos + " segundos ";
	

}

//GRADOS

function obtenerTemperatura() {
	var grados = Number(document.getElementById("number4").value);
	
	var fahrenheit = (grados * 1.8) + 32;
	var kelvin = grados + 273.15;
	
	
document.getElementById('etiqueta4').innerHTML =
	"Numero de grados centigrados " + grados + "<br>" +
	"Los grados en fahrenheit son " + fahrenheit + "<br>" +
	"Los grados en Kelvin son " + kelvin;

}

//TONELADAS

function obtenerPeso() {
	var toneladas = Number(document.getElementById("number5").value);
	
	var kilogramos = toneladas * 1000;
	var gramos = kilogramos * 1000;
	var miligramos = gramos * 1000;
	
	document.getElementById('etiqueta5').innerHTML =
	"El número de tonleadas son" + toneladas + "<br>" +
	toneladas + " kilogramos son " + kilogramos + " kilogramos " + "<br>" +
	toneladas + " toneladas son " + gramos + " gramos " + "<br>" + 
	toneladas + " toneladas son " + miligramos + " miligramos ";
	
}

//KILOGRAMOS

function obtenerPesaje() {
	var kilogramos = Number(document.getElementById("number6").value);
	
	var piedras = kilogramos * 0.1575;
	var libras = kilogramos * 2.2046;
	var onzas = kilogramos * 35.274;
	var kilates = kilogramos * 5000;
	
	document.getElementById('etiqueta6').innerHTML =
	"El número de kilogramos son " + kilogramos + "<br>" +
	kilogramos + " kilogramos son " + piedras + " piedras " + "<br>" +
	kilogramos + " kilogramos son " + libras + " libras " + "<br>" + 
	kilogramos + " kilogramos son " + onzas + " onzas " +
	kilogramos + " kilogramos son " + kilates + " kilates ";
	
}

//KILOMETROS DISTANCIA

function obtenerDistancia() {
	var kilometros = Number(document.getElementById("number7").value);
	
	var millas = kilometros * 0.621371;
	var pies = kilometros * 3280.84;
	var yardas = kilometros *  1093.61;
	var pulgadas = kilometros * 39370.1;
	
	document.getElementById('etiqueta7').innerHTML =
	"El número de kilometros son " + kilometros + "<br>" +
	kilometros + " kilometros son " + millas + " millas " + "<br>" +
	kilometros + " kilometros son " + pies + " pies " + "<br>" + 
	kilometros + " kilometros son " + yardas + " yardas " +
	kilometros + " kilometros son " + pulgadas + " pulgadas ";
	
}

//EUROS

function obtenerMoneda() {
	var euros = Number(document.getElementById("number8").value);
	
	var dolares = euros * 1.13;
	var libras = euros * 0.88;
	var yenes = euros *  128.27;
	var yuanes = euros * 7.85;
	
	document.getElementById('etiqueta8').innerHTML =
	"El número de euros son " + euros + "<br>" +
	euros + " euros son " + dolares + " dolares " + "<br>" +
	euros + " euros son " + libras + " libras " + "<br>" + 
	euros + " euros son " + yenes + " yenes " +
	euros + " euros son " + yuanes + " yuanes ";
	
}

//KILOMETROS POR HORA

function obtenerVelocidad() {
	var kilometroshora = Number(document.getElementById("number9").value);
	
	var millashora = kilometroshora * 0.621;
	var nudos = kilometroshora * 0.88;
	var metrossegundo = kilometroshora * 0.27;
	var ps = kilometroshora * 0.91;
	
	document.getElementById('etiqueta9').innerHTML =
	"El número de km/h son " + kilometroshora + "<br>" +
	kilometroshora + " km/h son " + millashora + " m/h " + "<br>" +
	kilometroshora + " km/h son " + nudos + " nudos " + "<br>" + 
	kilometroshora + " km/h son " + metrossegundo + " m/s " +
	kilometroshora + " km/h son " + ps + " p/s ";
	
}

//KILOMETROS POR HECTAREA

function obtenerArea() {
	var kmhectarea = Number(document.getElementById("number10").value);
	
	var hectareas = kmhectarea * 100;
	var acres = kmhectarea * 247.105;
	var millascuadradas = kmhectarea * 0.386;
	
	
	document.getElementById('etiqueta10').innerHTML =
	"El número de km cuadrados por hectarea son " + kmhectarea + "<br>" +
	kmhectarea + " km cuadrados por hectarea son " + hectareas + " hectareas " + "<br>" +
	kmhectarea + " km cuadrados por hectarea son " + acres + " acres " + "<br>" + 
	kmhectarea + " km cuadrados por hectarea son " + millascuadradas + " millas cuadradas ";
	
}

