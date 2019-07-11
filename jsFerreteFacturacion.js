/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar ()
{
  var p1;
  var p2;
  var p3;
  var x;

  p1=document.getElementById("PrecioUno").value;
  p2=document.getElementById("PrecioDos").value;
  p3=document.getElementById("PrecioTres").value;

  x=parseInt(p1)+parseInt(p2)+parseInt(p3);

  alert("El resultado de la suma es " +x);

}

function Promedio ()
{
  var p1;
  var p2;
  var p3;
  var x;

  p1=document.getElementById("PrecioUno").value;
  p2=document.getElementById("PrecioDos").value;
  p3=document.getElementById("PrecioTres").value;

  x=parseInt(p1)+parseInt(p2)+parseInt(p3) /3;

  alert("El resultado del promedio es " +x);

}
function PrecioFinal ()
{
  var p1;
  var p2;
  var p3;
  var x;
  var y;

  p1=document.getElementById("PrecioUno").value;
  p2=document.getElementById("PrecioDos").value;
  p3=document.getElementById("PrecioTres").value;

  x=parseInt(p1)+parseInt(p2)+parseInt(p3);
  y= (x) * 0.21 +(x);


  alert("El resultado del precio final es " +y);


}
