function mostrar()
{
    var cont=0;
    var clave;

    clave=prompt("Ingrese la clave.");

    while(clave!="utn750")
    {
        cont++;
        clave=prompt("Ingrese nuevamente la clave");
        if(cont==3)
        break;

    }


}//FIN DE LA FUNCIÓN
