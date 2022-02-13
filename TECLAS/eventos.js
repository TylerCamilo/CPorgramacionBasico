var teclas = {
    UP: 38, 
    DOWN: 40, 
    LEFT: 37, 
    RIGTH: 39
};// ESTO ES UNA SOLA LINEA DE CODIGO

document.addEventListener("keyup",dibujarTeclado);

var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 150; // variable de ubicacion de pixel para x posicion ini
var y = 150; // Variable de ubicacion de pixel para Y posicion ini

dibujarLinea("red", 149,149,151,151,papel);

function dibujarLinea(color,xinicial,yinicial,xfinal,yfinal,lienzo)
{
    lienzo.beginPath(); //inciia trazado
    lienzo.strokeStyle = color; // Escoge color "atributo"
    lienzo.lineWidth = 3; //Ancho de la linea es decir px
    lienzo.moveTo(xinicial,yinicial); //Inicia dibujo
    lienzo.lineTo(xfinal,yfinal); // traza linea
    lienzo.stroke(); // atributo de lapiz
    lienzo.closePath(); // fin del trazado
}

function dibujarTeclado(evento)
{
    var colorcito = "blue";
    var movimiento = 10;
  
switch(evento.keyCode)
  {
    case teclas.UP:
        dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
        y = y - movimiento; //nuevo punto final
        break;
    case teclas.DOWN:
        dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
        y = y + movimiento;
        break;
    case teclas.LEFT:
        dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
        x = x - movimiento;
         break;
    case teclas.RIGTH:
        dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
        x = x + movimiento;
         break;
  }
}
