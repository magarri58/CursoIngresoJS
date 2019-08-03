function mostrar()
{
	var numero;
	var num;
	while(num>0||num<9);
	num=prompt("Ingrese un número entre 0 y 10.");
	num=parseInt(num);
	document.getElementById("Numero").value=num;
  
  
	while(isNaN(num)){
	  num=prompt("Ingreso de datos incorrecto");
	  num=parseInt(num);
  
	  break;
  
  
	}


}//FIN DE LA FUNCIÓN