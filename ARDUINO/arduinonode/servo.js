const { Motor } = require("johnny-five");
var cinco = require("johnny-five");
var circuito = new cinco.Board();
var led, servo, celda;
var turno = 0;

circuito.on("ready", prender);
function prender()
{
    var configuracion = {pin: "A0", freq: 50}
    celda = new cinco.Sensor(configuracion);

    led = new cinco.Led(13);
    led.blink(500);

    servo = new cinco.Servo(9);
    servo.to(30);
    
    ondear();
}

function ondear()
{
    console.log("Luz:" + celda.value); 
    var luz = celda.value;
    if (luz>20)
    {
        if(turno ==1)
        {
            turno = 0;
            servo.to(70);
        }
        else
        {
            turno = 1;
            servo.to(110);
        }
    }
    else
    {
        servo.to(30);
    }

    setTimeout(ondear,1000);
}