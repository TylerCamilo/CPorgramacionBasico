var vp = document.getElementById("villa"); //conetxto de villaplatzi
var papel = vp.getContext("2d"); //traer donde vamos a dibujar

//vamor a cargar la imagen dentro del canvas,es decir crear un objeto nuevo
//crear objeto de la nada en este caso
// new Image(); la definicion un objeto con primer letra en Mayús
//en image es como crear una etiqueta img de HTML
var fondo = {
    url:"tile.png",
    cargaOK: false
};
var vaca = {
    url: "vaca.png",
    cargaOK: false
};

//en js no hay fomra de agregarle  a un objeto new image a una de
//de JSON

fondo.imagen = new Image(); // creamos una imagen creando un nuevo objeto
fondo.imagen.src = fondo.url; //para poder cargar la fuente de la imagen hay que pasarla por el atributo src
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

function cargarFondo()
{
    fondo.cargaOK = true;
    dibujar();
}
 
function cargarVacas()
{
    vaca.cargaOK = true;
    dibujar();
}

function cargarCerdos()
{
    cerdo.cargaOK = true;
    dibujar();
}

function dibujar()
{
    if(fondo.cargaOK)
    {
        papel.drawImage(fondo.imagen,0,0)
    }

    if(vaca.cargaOK)
    {
        var cantidad = aleatorio(5,25);
        console.log(cantidad);
        for (var v = 0;v < cantidad; v++)
        {
            var x = aleatorio(0,7) //Posicion aceptable
	        var y = aleatorio (0,7)
            var x = x * 60;
            var y = y * 60;
            papel.drawImage(vaca.imagen,x,y)

        }
        
    }
}

function aleatorio (min,maxi)
{
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min +1))+ min;
    return resultado;
}