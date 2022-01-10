document.addEventListener("mousemove",dibujarMouse);
document.addEventListener("mousedown",estadoButtonOn);
document.addEventListener("mouseup",estadoButtonOff);

var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x ; //guarda coordenada en x
var y ; // guarda coordenada en y
var button; //estado del button

//Dibujar el marco guia de dibujo
dibujarLinea("black", 0, 0, 300, 0, papel);
dibujarLinea("black", 0, 0, 0, 300, papel);
dibujarLinea("black", 0, 300, 300, 300, papel);
dibujarLinea("black", 300, 300, 300, 0, papel);

//dibujarLinea("red", 149,149,151,151,papel);

function dibujarLinea(color,xinicial,yinicial,xfinal,yfinal,lienzo)
{
    lienzo.beginPath(); //inciia trazado
    lienzo.strokeStyle = color; // Escoge color "atributo"
    lienzo.lineWidth = 2; //Ancho de la linea es decir px
    lienzo.moveTo(xinicial,yinicial); //Inicia dibujo
    lienzo.lineTo(xfinal,yfinal); // traza linea
    lienzo.stroke(); // atributo de lapiz
    lienzo.closePath(); // fin del trazado
}

function estadoButtonOn(evento1)
{
    button = 1;
}

function estadoButtonOff(evento1)
{
    button = 0;
}

function dibujarMouse(evento)
{
    x =  evento.layerX;
    y = evento.layerY;
    console.log(evento)
    if (button == 1)
        {
            dibujarLinea("red", x, y,evento.layerX-1,evento.layerY-1,papel);
            x =  evento.layerX;
            y = evento.layerY;
        }

}

