/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
/*function mostrar()
{	
	//reservo espacio en memoria para guardar el nombre del usuario
	let nombre;

	//guardo en la variable nombre el texto el texto que escribio el usuario dentro de la ventana prompt
	nombre = prompt("Ingrese su nombre");
	
	// copio el nombre que tengo guardado en la variable nombre dentro de la caja de texto embebida en la página html
	document.getElementById("txtIdNombre").value = nombre;
}*/

function mostrar()
{

	let nombre;
	
	nombre = prompt("Ingrese su nombre");

	document.getElementById("txtIdNombre").value = "Su nombre es: " +nombre;

	alert(nombre);
}
/*
salida 
	alert()
	document.getElementById('txtIdNombre').value=mensajeDeRespuesta;//muestra el valor

ingreso
	=prompt()
	nombreIngresado=document.getElementById('txtIdNombre').value;// toma el valor 


*/
