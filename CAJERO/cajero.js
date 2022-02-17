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
    var t  =document.getElementById("dinero"); //Recibe el valor del usuario
    dinero = parseInt(t.value); // usamos parsear(castear) a int el entero de la cadena caracteres
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
    if (dinero > 0)
    {        
        resultado.innerHTML = "No tengo ese dinero";
    } 
    else
    {
        for(var e of entregado)
        {
            if(e.cantidad > 0)
            {
                resultado.innerHTML = resultado.innerHTML + e.cantidad + " billetes de  $" + e.valor + "<br/>";
            }            
        }
    }   
}

var caja = [];
var entregado = [];
caja.push(new Billete(100,5) );
caja.push(new Billete(50,10) ); //coloca 3 billetes de 50
caja.push(new Billete(20,30) ); //coloca 2 billetes de 20
caja.push(new Billete(10,10) ); //coloca 2 billetes de 10
caja.push(new Billete(5,5) );

var dinero = 0;
var div = 0;
var papeles = 0;

var saldo = document.getElementById ("saldoCaja");
var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer"); // obtener elemento de html von un id 
b.addEventListener("click", entregarDinero); // cuando hace click dispara la funcion
