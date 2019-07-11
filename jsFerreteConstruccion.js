/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo ()
{
  var a; //Largo del terreno
  var b; //Ancho del terreno
  var c; //Radio del terreno
  var x;
  var y;

  a=document.getElementById("Largo").value;
  b=document.getElementById("Ancho").value;
  c=document.getElementById("Radio").value;

  x=parseInt(a)*2 + parseInt(b)*2;
  y=parseInt(x)*3;

  alert("Cantidad de alambre a comprar es " +y);

}
function Circulo ()
{

}
function Materiales ()
{

}
