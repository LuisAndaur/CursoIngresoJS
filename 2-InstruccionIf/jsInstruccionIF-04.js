/*
Luis Andaur INSTRUCCION IF 4
Al ingresar una edad debemos informar
si la persona es adolescente,
edad entre 13 y 17 años (inclusive) .
*/

function mostrar()
{
	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

/*	if(edad > 12)
	{
		if(edad < 18)
		{
			alert("Es adolescente");
		}
	}
*/
	
	if(edad<18 && edad>12)
	{
		alert("Es adolescente");
	}

}//FIN DE LA FUNCIÓN