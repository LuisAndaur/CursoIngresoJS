/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
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
}

