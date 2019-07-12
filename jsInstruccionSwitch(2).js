function mostrar()
{
//tomo la edad
var mesDelAño = document.getElementById('mes').value;

alert (mesDelAño);

switch(mesDelAño){
  case "Julio":
  case "Agosto":
  alert("Abrigate que hace frio");
  break;

  case "Enero":
  case "Febrero":
  case "Marzo":
  case "Abril":
  case "Mayo":
  case "Junio":
  case "Noviembre":
  case "Diciembre":
  alert("Falta para el invierno");
  break;

  case "Septiembre":
  case "Octubre":
  alert("Ya pasamos el frío, ahora calor!!!");
  break;

}



}//FIN DE LA FUNCIÓN
