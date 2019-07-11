/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
  var a; //sueldo
  var b; //resultado

  a=document.getElementById("sueldo").value;
  b=document.getElementById("resultado").value

  a=parseInt(a);
  b=parseInt(a)*0.1 + (a);
  document.getElementById("resultado").value=b;








}
