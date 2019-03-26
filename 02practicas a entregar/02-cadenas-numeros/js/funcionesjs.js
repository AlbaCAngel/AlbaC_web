//CÁLCULO 

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
	var precioFinal = Number(document.getElementById("number2").value);
	
}
