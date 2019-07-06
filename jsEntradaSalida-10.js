/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var valorImporte;
	var ValorResultado;
	/*valorImporte="lalala";
	alert(valorImporte);*/
	valorImporte=document.getElementById('importe').value;
	console.info("el.valor",valorImporte);
	//alert(valorImporte);

	var datoUno;
	var datoDos;
	var suma;
	datoUno=prompt();
	datoDos=document.
	
	datoUno =parseInt(datoUno);
	datoDos=parseInt(datoDos);
	
	suma=datoUno+datoDos;
	alert("la suma

	ValorResultado=valorImporte*100;
	//alert(ValorResultado);
	document.getElementById('resultado').value=ValorResultado;

}
