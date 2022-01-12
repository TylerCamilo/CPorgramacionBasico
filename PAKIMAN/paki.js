class Pakiman
{
    constructor(n, v, a)
    {
        this.nombre = n;
        this.vida = v;
        this.ataque = a;
    }
    hablar()
    {
        alert(this.nombre)
    }
}
var cauchin = new Pakiman("cauchin",100,30);
var pokacho = new Pakiman("pokacho",80,50);
var tocinauro = new Pakiman("tocinauro",120,40);
console.log(cauchin, pokacho,tocinauro);

pokacho.hablar();
