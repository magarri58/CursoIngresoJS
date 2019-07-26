function mostrar()
{
//tomo la edad  
var edad;
edad=document.getElementById("edad").value;

if(edad>=18){
    alert("Usted es mayor de edad.");
}else{
    if(edad>=13 && edad<=17){
        alert("Usted es adolescente");
    }else{
    if(edad<13){
        alert("Usted es menor de edad.");
    }
    }
}



}//FIN DE LA FUNCIÓN