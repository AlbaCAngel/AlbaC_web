//Codigo JS

function abrilFoto() {
		
					 var imagenverano = '<img src="img/house1.jpg" alt="House" style="width:100%">';
					 document.getElementById("demo1").innerHTML = imagenverano;
					 var modal = document.getElementById("modal");
					 modal.style.display = "block"; 
					  }
	
function cerrarFoto(){
	
	
	var caja = document.getElementById("modal");


	
	caja.onclick = miFunction ();
	function miFunction(){	
	caja.style.display = "none";
	}
}


//------------------------
function abrirFoto2() {
				
					 var imagenverano = '<img src="img/house2.jpg" alt="House" style="width:100%">';
					 document.getElementById("demo2").innerHTML = imagenverano;
					 var modal = document.getElementById("modal2");
					 modal2.style.display = "block"; 
					  }

function cerrarFoto2(){
	
	
	var caja = document.getElementById("modal2");

	caja.onclick = miFunction ();
	function miFunction(){	
	caja.style.display = "none";
	}
}
//--------FOTO3 
function abrirFoto3() {
				
					 var imagenverano = '<img src="img/house3.jpg" alt="House" style="width:100%">';
					 document.getElementById("demo3").innerHTML = imagenverano;
					 var modal = document.getElementById("modal3");
						 
	 					  modal.style.display = "block"; 
					  }

function cerrarFoto3(){
	
	
	var caja = document.getElementById("modal3");


	
	caja.onclick = miFunction ();
	function miFunction(){	
	caja.style.display = "none";
	}
}
//--------FOTO4 
function abrirFoto4() {
				
					 var imagenverano = '<img src="img/house4.jpg" alt="House" style="width:100%">';
					 document.getElementById("demo4").innerHTML = imagenverano;
					 var modal = document.getElementById("modal4");
						 
	 					  modal.style.display = "block"; 
					  }

function cerrarFoto4(){
	
	
	var caja = document.getElementById("modal4");


	
	caja.onclick = miFunction ();
	function miFunction(){	
	caja.style.display = "none";
	}
}