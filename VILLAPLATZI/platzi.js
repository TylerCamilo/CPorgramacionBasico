var vp = document.getElementById("villa"); //conetxto de villaplatzi
var papel = vp.getContext("2d"); //traer donde vamos a dibujar
var mapa = "tile.png"; //fondo cargado en variable mapa

//vamor a cargar la imagen dentro del canvas, crear un objeto nuevo
//crear objeto de la nada en este caso
// new Image(); la definicion un objeto con primer letra en Mayús
//en image es como crear una etiqueta img de HTML
var fondo = new Image(); // creamos una imagen creando un nuevo objeto
fondo.src = mapa; //para poder cargar la fuente de la imagen hay que pasarla por el atributo src
fondo.addEventListener("load", dibujar);

var vaca = new Image();
vaca.src = "vaca.png";
vaca.addEventListener("load", dibujarVacas);

var cerdo = new Image();
cerdo.src = "cerdo.png";
cerdo.addEventListener("load", dibujarCerdos);

var pollo = new Image();
pollo.src = "pollo.png";
pollo.addEventListener("load", dibujarPollos);


function dibujar()
{
    papel.drawImage(fondo, 0, 0);
}

function dibujarVacas()
{
    papel.drawImage(vaca,10, 10);
}

function dibujarCerdos()
{
    papel.drawImage(cerdo,10, 300);
}

function dibujarPollos()
{
    papel.drawImage(pollo, 300, 150);
}

function aleatorio (min,maxi)
{
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min +1))+ min;
    return resultado;
}