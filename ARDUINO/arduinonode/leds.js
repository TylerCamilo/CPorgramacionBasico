var jf = require("johnny-five"); //Traemos Johnny Five donde carga
var circuito = new jf.Board(); // creamos el circuito,c rear clase de tipo board

circuito.on("ready", prender); // cuando el circuito este listo dispare funcion prender

function prender()
{
    var led = new jf.Led(13); // creamos la variable del pin el puerto donde esta led
    led.blink(500); // funcion que esta lista para hacer un encendido y apagado
    var led1 = new jf.Led(12);
    led1.blink(500);
    console.log("Hola mundo arduino")
}