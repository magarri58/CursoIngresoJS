/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/
function sumar()
{
  var n1;
  var n2;
  var x;
  n1=document.getElementById("numeroUno").value;
  n2=document.getElementById("numeroDos").value;
  x=parseInt(n1)+parseInt(n2);
  alert("El resultado de la suma es " +x);

}

function restar()
{
  var n1;
  var n2;
  var x;
  n1=document.getElementById("numeroUno").value;
  n2=document.getElementById("numeroDos").value;
  x=parseInt(n1)-parseInt(n2);
  alert("El resultado de la resta es " +x);

}

function multiplicar()
{
  var n1;
  var n2;
  var x;
  n1=document.getElementById("numeroUno").value;
  n2=document.getElementById("numeroDos").value;
  x=parseInt(n1)*parseInt(n2);
  alert("El resultado de la multiplicacion es " +x);

}

function dividir()
{
  var n1;
  var n2;
  var x;
  n1=document.getElementById("numeroUno").value;
  n2=document.getElementById("numeroDos").value;
  x=parseInt(n1)/parseInt(n2);
  alert("El resultado de la division es " +x);

}

