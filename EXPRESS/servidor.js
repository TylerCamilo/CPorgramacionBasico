var express = require ("express"); // require es una funcion que busca frameworks o librerias y las gaurada en la variables express
var aplicacion = express(); // ejecurta la funcion en variable Aplicacion

aplicacion.get("/", inicio); // es como addevenlistener
aplicacion.get("/cursos", cursos);

function inicio(peticion, resultado)
{
    resultado.send("Este es el home")

}

function cursos(peticion, resultado)
{
    resultado.send("Esta es la pagina de cursos")
}

aplicacion.listen(8989);