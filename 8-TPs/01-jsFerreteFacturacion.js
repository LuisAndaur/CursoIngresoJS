/*
Luis Andaur
TP Facturación
1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let precioUno;
    let precioDos;
    let precioTres;
    let sumar;

    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioTres = document.getElementById("txtIdPrecioTres").value;

    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);

    sumar = precioUno + precioDos + precioTres;

    alert("La suma es : " +sumar);

}

function Promedio () 
{
	let precioUno;
    let precioDos;
    let precioTres;
    let promedio;

    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioTres = document.getElementById("txtIdPrecioTres").value;

    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);

    promedio = (precioUno + precioDos + precioTres)/3;

    alert("El promedio es : " +promedio);

}

function PrecioFinal () 
{
	let precioUno;
    let precioDos;
    let precioTres;
    let total;
    let iva;
    let precioFinal;

    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioTres = document.getElementById("txtIdPrecioTres").value;

    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);

    total = precioUno + precioDos + precioTres;

    iva = total*21/100;

    precioFinal = total + iva;

    alert("El precio final es : " +precioFinal);
}
































/*

hecho con video grabado


function Sumar () 
{
    let precio1;
    let precio2;
    let precio3;

    let suma;

    precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

    suma = precio1 + precio2 + precio3;

    alert("La suma es " +suma);

}

function Promedio () 
{
    let precio1;
    let precio2;
    let precio3;

    let promedio;

    precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

    promedio = (precio1 + precio2 + precio3)/3;

    alert("El promedio es " +promedio);

}

function PrecioFinal () 
{
    let precio1;
    let precio2;
    let precio3;

    let precioSuma;
    let iva;
    let precioFinal;

    precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

    precioSuma = precio1 + precio2 + precio3;
    iva = (precio1 + precio2 + precio3) * 21 / 100;

    precioFinal = precioSuma + iva;

    alert("El precio final es " +precioFinal);
}

*/