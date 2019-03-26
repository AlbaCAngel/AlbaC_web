//CÁLCULO 

function calculoNeto() {
	var neto = Number(document.getElementById("number1").value);
	
	var SegS = 6.4;
	var IRPF = 15;
	var paga = 14;
	
	
	document.getElementById('etiqueta1').innerHTML =
		"Sueldo neto " neto + (IRPF + SegS);
}