/*
Luis Andaur
Ejercicio 5
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	
function mostrar()
{	
	let nombre;
	let edad;

	nombre = document.getElementById("txtIdNombre").value;
	edad = document.getElementById("txtIdEdad").value;

	alert("Usted se llama " +nombre+ " y tiene " +edad+ " años.");

}


ERRORES QUE PUEDE TIRAR UN CODIGO

Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	
function mostrar()
{	
	var nombre;
	alert(nombre);
	console.log(nombre);//UNDEFINED
	
	nombre=document.getElementById('txtIdNombre').value;
	//alert("nombre");
 	//alert(nombre);
 	document.getElementById('txtIdEdad').value=nombre;
	console.log(nombre);
	alert(nombre)
	console.log("nombre");
	
	nombre=prompt("ingrese nombre");// null, con el cancelar
	console.log(nombre);
	alert(nombre)
	document.getElementById('txtIdEdad').value=nombre;


	//alert(variableNoExiste);



}

*/


/*
HECHO CON VIDEO GRABADO
let nombre;
	let edad;

	nombre = document.getElementById("txtIdNombre").value;
	edad = document.getElementById("txtIdEdad").value;

	//alert("Usted se llama " + nombre + " y tiene " + edad + " años.")
	
	alert(`Usted de llama ${nombre} y tiene ${edad} años`);//Otra alternativa para concatenar
	*/




/*
Luis Andaur
EJERCICIO 5 BIS
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/

function mostrar()
{	

	let nombre;
	let edad;
	let apellido;

	nombre = document.getElementById("txtIdNombre").value;
	edad = document.getElementById("txtIdEdad").value;
	apellido = prompt("Ingrese su apellido");

	alert(apellido+ ", usted se llama " +nombre+ " y tiene " +edad+ " años.");

}

/*
bis : 
 se debe mostrar un mensaje :

 "Perez , usted se llama jose y tiene 66 años"
se debe optener el apellido , de la manera que puedan

*/