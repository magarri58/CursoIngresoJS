/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
  var a; //importe
  var b; //resultado

  a=document.getElementById("importe").value;
  b=document.getElementById("resultado").value;

  a=parseInt(a);
  b=parseInt(a) * 0.25 +(a);

  document.getElementById("resultado").value=b;

}
