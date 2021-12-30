var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click",dibujoPorClick);

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d"); //del canvas vamos a obtener el lienzo


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
function dibujoPorClick()
{
    var lineas = parseInt(texto.value);
    var l = 0;
    var xi, yf;
    while(l < lineas)
    {
        xi = 10 * l;
        yf = 10 * (l + 1);
        dibujarLinea("green",xi,0,300,yf);
        l ++;
    }    
}
dibujarLinea("black",1,1,299,1) //margen Superior
dibujarLinea("black",299,1,299,299) // margen derecho
dibujarLinea("black",1,1,1,299) // margen izquierdo
dibujarLinea("black",1,299,299,299) // margen inferior





