/*
Luis Andaur
Ejercicio 10BIS
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrardescuento()
{
	let importe;
	let porcentaje;
	let descuento;
	let resultado;
	
	importe = document.getElementById("txtIdImporte").value;
	importe = parseInt(importe);

	porcentaje = prompt("Ingrese su porcentaje");
	porcentaje = parseInt(porcentaje);

	descuento = importe*porcentaje/100;

	resultado = importe - descuento;

	document.getElementById("txtIdResultado").value = resultado;

}








/*
CLASE OCTAVIO


	let importe;
	let descuento;
	let resultado;
	
	importe = document.getElementById("txtIdImporte").value;
	importe = parseInt(importe);

	descuento = importe*25/100;

	resultado = importe - descuento;

	document.getElementById("txtIdResultado").value = resultado;













	clase video

	let importe;
	let descuento;
	let importeFinal;

	importe = parseFloat(document.getElementById("txtIdImporte").value);

	descuento = importe * 25 / 100;

	importeFinal = importe - descuento;

	document.getElementById("txtIdResultado").value = importeFinal;
	*/