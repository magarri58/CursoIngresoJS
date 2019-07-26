function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;
	
	nota=Math.floor(Math.random()*10)+1;

	alert(nota);

	if(nota>8){
		alert("EXCELENTE.");
	}
	if(nota>=4 && nota<9){
		alert("APROBÓ.");
	}
	if(nota<4){
		alert("Vamos, la próxima se puede.");
	}
}//FIN DE LA FUNCIÓN