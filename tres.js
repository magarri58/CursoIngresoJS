function mostrar()
{
    var x; //precio
    var y; //porcentaje de descuento
    var g; //precio final

    x=prompt("Ingrese el precio");
    y=prompt("Ingrese el porcentaje de descuento");
    
    g=parseInt(x)*parseInt(y)/100;

    document.getElementById("elPrecioFinal").value=g;


}
