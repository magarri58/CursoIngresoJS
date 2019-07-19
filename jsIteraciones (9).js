function mostrar()
{
  var num;
  var max;
  var min;
  var primeraVez=true

  while(prompt("Ingrese un número")) {
    do{
      num=prompt("Ingrese un número");
      num=parseInt(num);
    } while (isNaN(num));

    if(primeraVez){
      primeraVez=false;
      max=num;
      min=num;

    } else {
      primeraVez=true;


    }



}//FIN DE LA FUNCIÓN
