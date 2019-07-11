
function mostrar()
{
    var dato1; // Largo de un rectangulo
    var dato2; // Ancho de un rectangulo
    var resultado; // Perimetro de un rectangulo

    dato1 = prompt("Digite el largo del rectangulo");
    dato2 = prompt("Digite el ancho del rectangulo");
    resultado = parseInt(dato1)*2 + parseInt(dato2)*2;
    
    alert("El perimetro del rectangulo es " +resultado);
    
}
