/*
Luis Andaur
Ejercicio 9BIS se pide al usuario el porcentaje
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo;
	let porcentaje;
	let aumento;
	let resultado;
	
	sueldo = document.getElementById("txtIdSueldo").value;
	sueldo = parseInt(sueldo);

	porcentaje = prompt("Ingrese su porcentaje");
	porcentaje = parseInt(porcentaje);

	aumento = sueldo*porcentaje/100;

	resultado = sueldo + aumento;

	document.getElementById("txtIdResultado").value = resultado;

}








/*
CON OCTAVIO
let sueldo;
	let aumento;
	let resultado;
	
	sueldo = document.getElementById("txtIdSueldo").value;
	sueldo = parseInt(sueldo);

	aumento = sueldo*10/100;

	resultado = sueldo + aumento;

	document.getElementById("txtIdResultado").value = resultado;




CON VIDEO
let sueldo;
	let aumento;
	let nuevoSueldo;

	sueldo = parseFloat(document.getElementById("txtIdSueldo").value);

	aumento = sueldo * 10 / 100;

	nuevoSueldo = sueldo + aumento;

	document.getElementById("txtIdResultado").value = nuevoSueldo;
	*/