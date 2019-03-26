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

function tiempoDescarga() {
	var precio = Number(document.getElementById("number2").value);
	
}
