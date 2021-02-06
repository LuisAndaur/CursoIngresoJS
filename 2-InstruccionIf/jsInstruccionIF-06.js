/*
Luis Andaur INSTRUCCION IF EJ6
Al ingresar una edad debemos informar 
si la persona es mayor de edad (mas de 18 años)
o adolescente (entre 13 y 17 años) o niño (menor a 13 años)..
*/

/*
function mostrar()
{
	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

ERROR
	if(edad<13)
	{
		alert("Es niño");

		if(edad>12 && edad>18)
		{
			alert("Es adolescente");
		}
		else
		{
			alert("Es mayor");
		}
	}


}//FIN DE LA FUNCIÓN

*/

function mostrar()
{
	
	var edad;
	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);
	console.log("la edad ingresada es :"+ edad);
/*
minimo 4 
maximo 4
	if(edad<13)
	{
		alert("niño");
	}
	if(edad<18 && edad>12)
	{
		alert("adolescente");
	}
	if(edad>17)
	{
		alert("es mayor");
	}
*/
	//error
/*
	if(edad<13)
	{
		alert("niño");
	}
	if(edad<18 && edad>12)
	{
		alert("adolescente");
	}
	else
	{
		alert("es mayor");
	}

*/
/*
	if(edad<13)
	{
		alert("niño");
	}
	else
	{
		if(edad<18 && edad>12)
		{
			alert("adolescente");
		}
		else
		{
			if(edad>17)
			{
				alert("es mayor");
			}
		}

	}

*/
// minimo 1 
//maximo 2 --- A LO QUE ASPIRAN COMO PROGRAMADORES
	if(edad<13)
	{
		alert("niño");
	}
	else
	{
		if(edad>18)
		{
			alert("es mayor");
		}
		else
		{
			alert("adolescente");
		}
	}


	
	

}//FIN DE LA FUNCIÓN

