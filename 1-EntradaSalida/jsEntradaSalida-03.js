/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombre;
	nombre = document.getElementById("txtIdNombre").value;
	alert(nombre);

	document.getElementById("txtIdNombre").value = "";//Dejar en blanco el campo de texto. Valor = cadena vacía.

}


/*var nombreIngresado;
	nombreIngresado=txtIdNombre.value;
	alert("ok");*/ 