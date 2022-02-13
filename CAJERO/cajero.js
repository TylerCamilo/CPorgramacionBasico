class Billete
{
    constructor(v,c)
    {
        this.valor = v;
        this.cantidad = c;
    }
}

function entregarDinero()
{
    for (var bi of caja)
    {
        if (dinero > 0)
        {
            div = Math.floor( dinero / bi.valor);
            if ( div > bi.cantidad)
            {
                papeles = bi.cantidad;
            }
            else
            {
                papeles = div;
            }
            entregado.push( new Billete(bi.valor, papeles));
            dinero = dinero - (bi.valor * papeles);           
        }

    }
    console.log(entregado);
}


var caja = [];
var entregado = [];
caja.push(new Billete(50,3) ); //coloca 3 billetes de 50
caja.push(new Billete(20,2) );
caja.push(new Billete(10,2) );

var dinero = 210;
var div = 0;
var papeles = 0;

var b = document.getElementById("extraer"); // obtener elemento de html von un id 
b.addEventListener("click", entregarDinero); // cuando hace click dispara la funcion
