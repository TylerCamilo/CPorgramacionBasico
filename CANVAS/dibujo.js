var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d"); //del canvas vamos a obtener el lienzo
var lineas = 30;
var l = 0;
//CREAMOS UNA FUNCION
function dibujarLinea(color,xinicial,yinicial,xfinal,yfinal)
{
    lienzo.beginPath(); //inciia trazado
    lienzo.strokeStyle = color; // Escoge color "atributo"
    lienzo.moveTo(xinicial,yinicial); //Inicia dibujo
    lienzo.lineTo(xfinal,yfinal); // traza linea
    lienzo.stroke(); // atributo de lapiz
    lienzo.closePath(); // fin del trazado
}

while(l < lineas)
{
    dibujarLinea("green",10 * l,0,300,10 * (l + 1));
    l ++;
}

dibujarLinea("black",1,1,299,1) //margen izquierdo
dibujarLinea("black",299,1,299,299) // margen derecho

/*for (l = 0;l < lineas;l++)
{
    yi = 10 * l;
    xf = 10 * (l + 1);
    dibujarLinea("green",0,yi,xf,300);
    l ++;
}*/