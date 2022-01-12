var vp = document.getElementById("villa"); //conetxto de villaplatzi
var papel = vp.getContext("2d"); //traer donde vamos a dibujar
document.addEventListener("keyup",moverCerdo);
var teclas = {
    UP: 38, 
    DOWN: 40, 
    LEFT: 37, 
    RIGTH: 39
};

var cx = aleatorio(0,430);
var cy = aleatorio(0,430);

var fondo = {
    url:"tile.png",
    cargaOK: false
};
var vaca = {
    url: "vaca.png",
    cargaOK: false
};

var cerdo = {
    url: "cerdo.png",
    cargaOK: false
};

fondo.imagen = new Image(); 
fondo.imagen.src = fondo.url; 
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

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
        console.log("Hay " + cantidad + " vacas");
        for (var v = 0;v < cantidad; v++)
        {
            var x = aleatorio(0,7); //Posicion aceptable
	        var y = aleatorio (0,7);
            var x = x * 60;
            var y = y * 60;
            papel.drawImage(vaca.imagen,x,y)
            xv = x;
            yv = y;
        }
    }
    if(cerdo.cargaOK)
    {
        papel.drawImage(cerdo.imagen,cx,cy);
    
    }
}
function dibujarC()
{
    if(fondo.cargaOK)
    {
        papel.drawImage(fondo.imagen,0,0)
    }
    if(vaca.cargaOK)
    {
        
        var cantidad = aleatorio(5,25);
        //console.log(cantidad);
        for (var v = 0;v < cantidad; v++)
        {
            papel.drawImage(vaca.imagen,xv,yv)
        }
    }
    if(cerdo.cargaOK)
    {
        papel.drawImage(cerdo.imagen,cx,cy);
    }
}
function moverCerdo(evento)
{  
switch(evento.keyCode)
  {
    case teclas.UP:
        console.log("estas oprimiendo arriba");
        console.log(cx,cy);
        cy = cy -10;
        dibujarC()
        break;
    case teclas.DOWN:
        console.log("Oprimiste tecla abajo");
        console.log(cx,cy);
        cy = cy +10;
        dibujar()
        break;
    case teclas.LEFT:
        console.log("Oprimiste tecla izquierda");
        console.log(cx,cy);
        cx = cx -10;
        dibujar()
         break;
    case teclas.RIGTH:
        console.log("Oprimiste tecla derecha");
        console.log(cx,cy);
        cx = cx +10;
        dibujar()
         break;
  }
}
function aleatorio (min,maxi)
{
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min +1))+ min;
    return resultado;
}