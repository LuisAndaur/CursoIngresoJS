function mostrar()
{
	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

/*	NEGACION
	if(!(edad<18 && edad>12))
	{
		alert("No es adolescente");
	}
*/


/*	SEPARADO EN DOS IF
	if(edad>17)
	{
		alert("No es adolescente");
	}
	if(edad<13)
	{
		alert("No es adolescente");
	}
*/


	//OPERADOR LOGICO O(||)
	if(edad>17 || edad<13)
	{
		alert("No es adolescente");
	}


}//FIN DE LA FUNCIÓN



/*EXPLICACION PROFESOR

function mostrar()
{
	var edad;
	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);
	console.log("la edad ingresada es :"+ edad);
	
	
	if(!(edad<18 && edad>12))
	{
		alert("No es adolescente");
	}
	
	
	if(edad>17)
	{
		alert("No es adolescente");
	}
	if(edad<13)
	{
		alert("No es adolescente");
	}
	
	//if(edad>17 && edad<13)// nunca
	//if(edad<18 || edad>12)// siempre
	if(edad>17||edad<13)
	{
		alert("No es adolescente");
	}
	





	if(!(edad<18 && edad>12))
	if(edad>=18 || edad<=12)
	{
		alert("No es adolescente");
	}

	
}//FIN DE LA FUNCIÓN

*/