function mostrar()
{
//tomo la edad  
var edad;
var estado;

edad=document.getElementById("edad").value;
estado=document.getElementById("estadoCivil").value;

if(edad<18 && estado=="Casado") {
    alert("Es muy pequeño para no ser soltero.");
}
if(edad<18 && estado=="Divorciado") {
    alert("Es muy pequeño para no ser soltero.");
}

}//FIN DE LA FUNCIÓN