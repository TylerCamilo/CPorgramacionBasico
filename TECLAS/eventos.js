var teclas = {
    UP: 38, 
    DOWN: 40, 
    LEFT: 37, 
    RIGTH: 39
};// ESTO ES UNA SOLA LINEA DE CODIGO
console.log(teclas);

document.addEventListener("keyup",dibujarTeclado);

function dibujarLinea(color,xinicial,yinicial,xfinal,yfinal,lienzo)
{
    lienzo.beginPath(); //inciia trazado
    lienzo.strokeStyle = color; // Escoge color "atributo"
    lienzo.moveTo(xinicial,yinicial); //Inicia dibujo
    lienzo.lineTo(xfinal,yfinal); // traza linea
    lienzo.stroke(); // atributo de lapiz
    lienzo.closePath(); // fin del trazado
}

function dibujarTeclado(evento)
{
switch(evento.keyCode)
  {
    case teclas.UP:
        console.log("Arriba");
        break;
    case teclas.DOWN:
        console.log("Abajo");
        break;
    case teclas.LEFT:
         console.log("Izquierda");
         break;
    case teclas.RIGTH:
         console.log("Derecha");
         break;
    default:
        console.log("otra tecla")
        break;
  }
}