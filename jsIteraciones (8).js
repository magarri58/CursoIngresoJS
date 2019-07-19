function mostrar()
{
  var num;
  var suma=0;
  var mult=1;

  while(confirm("")) {
    do {
      num=prompt("Ingrese un número");
      num=parseInt(num);
    } while(isNaN(num));
    if(num>=0){
      suma+=num;
    } else {
      mult*=num;
    }
  }
  document.getElementById('suma').value=suma;
  document.getElementById('producto').value=producto;




}//FIN DE LA FUNCIÓN
