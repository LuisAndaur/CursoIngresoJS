/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numeroUno;
	let numeroDos;
	let resultado;
	let mensaje;

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	resultado = numeroUno + numeroDos;
	mensaje = "La suma es : " +resultado;

	alert(mensaje);

}

/*
HECHO CON VIDEO GRABADO
let num1;
	let num2;
	let resultado;

	//FORMA 1
	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);

	//FORMA 2
	num2 = document.getElementById("txtIdNumeroDos").value;
	num2 = parseInt(num2);

	resultado = num1 + num2;

	alert("La suma es " +resultado)

	*/




