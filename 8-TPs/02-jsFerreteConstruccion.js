/*
Luis Andaur TP2
2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	let largoTerreno;
	let anchoTerreno;
	let perimetro;
	let cantidadAlambre;

	largoTerreno = document.getElementById("txtIdLargo").value;
	anchoTerreno = document.getElementById("txtIdAncho").value;

	largoTerreno = parseInt(largoTerreno);
	anchoTerreno = parseInt(anchoTerreno);

	perimetro = 2*(largoTerreno+anchoTerreno);

	cantidadAlambre = perimetro *3;

	alert("Usted necesita " +cantidadAlambre+ " metros de alambre.");

}


function Circulo () 
{
	let radioTerreno;
	let perimetro;
	let cantidadAlambre;

	radioTerreno = document.getElementById("txtIdRadio").value;
	radioTerreno = parseInt(radioTerreno);

	perimetro = 2*3.14+radioTerreno;

	cantidadAlambre = perimetro*3;

	alert("Usted necesita " +cantidadAlambre+ " metros de alambre.")

}


function Materiales () 
{
	let ancho;
	let largo;
	let area;
	let cemento;
	let cal;

	ancho = document.getElementById("txtIdAncho").value;
	largo = document.getElementById("txtIdLargo").value;

	ancho = parseInt(ancho);
	largo = parseInt(ancho);

	area = ancho*largo;

	cemento = area*2/1;
	cal = area*3/1;

	alert("Para su terreno de " +area+ " metros, necesita: " +cemento+ " bolsas de cemento y " +cal+ " bolsas de cal.");
}