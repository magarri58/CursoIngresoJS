/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
  var a; //dividendo
  var b; // divisor
  var g; //resultado

  a=document.getElementById("numeroDividendo").value;
  b=document.getElementById("numeroDivisor").value;

  g=parseInt(a)%parseInt(b);

  alert("El resto entre el dividendo y el divisor es " +g);

}
