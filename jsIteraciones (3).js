function mostrar()
{
  var cont=0;
  var error=false;
  var clave;
  do {
    clave=prompt("Ingrese el número clave");
    cont++;
    if(cont==3){
      error=true;
      break;
    } while(clave!="utn750");
    cont==3
    if(error==true){
      alert("ERROR");
    }else{
      alert("ÉXITO");


}//FIN DE LA FUNCIÓN
