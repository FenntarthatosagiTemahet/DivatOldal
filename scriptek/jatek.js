window.addEventListener("load", init);

function ID(elem) {return document.getElementById(elem);}
function CL(elem) {return document.getElementsByClassName(elem);}
function $(elem) {return document.querySelector(elem);}
function $a(elem) {return document.querySelectorAll(elem);}

let i = 0;
var txt = "";

var kepek = [
    {
        kepNeve: "Ruha",
        kepEleresiUtvonala: "kepek/"
    }
]

function init() 
{
    ID("title").innerHTML = "<h1>Fenntarthatósági témahét</h1>";
    ID("footer").innerHTML = "@ Semmilyen jog nincs fenntartva!<br>Készítette: Piller András";

    for(i = 0; i < kepek.length; i++) txt = txt + "<div></div>";
    ID("game").innerHTML = txt;
}