window.addEventListener("load", init);

function ID(elem) {return document.getElementById(elem);}
function CL(elem) {return document.getElementsByClassName(elem);}
function $(elem) {return document.querySelector(elem);}
function $a(elem) {return document.querySelectorAll(elem);}

let i = 0;
var txt = "";

const kepek = [
    {
        kepNeve: "Ruha 1",
        kepEleresiUtvonala: "../kepek/ruha1.jpg"
    }, {
        kepNeve: "Ruha 1",
        kepEleresiUtvonala: "../kepek/ruha1.jpg"
    }, {
        kepNeve: "Ruha 2",
        kepEleresiUtvonala: "../kepek/ruha2.jpg"
    }, {
        kepNeve: "Ruha 2",
        kepEleresiUtvonala: "../kepek/ruha2.jpg"
    }, {
        kepNeve: "Ruha 3",
        kepEleresiUtvonala: "../kepek/ruha3.jpg"
    }, {
        kepNeve: "Ruha 3",
        kepEleresiUtvonala: "../kepek/ruha3.jpg"
    }, {
        kepNeve: "Ruha 4",
        kepEleresiUtvonala: "../kepek/ruha4.jpg"
    }, {
        kepNeve: "Ruha 4",
        kepEleresiUtvonala: "../kepek/ruha4.jpg"
    }, {
        kepNeve: "Ruha 5",
        kepEleresiUtvonala: "../kepek/ruha5.jpg"
    }, {
        kepNeve: "Ruha 5",
        kepEleresiUtvonala: "../kepek/ruha5.jpg"
    }, {
        kepNeve: "Ruha 6",
        kepEleresiUtvonala: "../kepek/ruha6.jpg"
    }, {
        kepNeve: "Ruha 6",
        kepEleresiUtvonala: "../kepek/ruha6.jpg"
    }, {
        kepNeve: "Ruha 7",
        kepEleresiUtvonala: "../kepek/ruha7.jpg"
    }, {
        kepNeve: "Ruha 7",
        kepEleresiUtvonala: "../kepek/ruha7.jpg"
    }, {
        kepNeve: "Ruha 8",
        kepEleresiUtvonala: "../kepek/ruha8.jpg"
    }, {
        kepNeve: "Ruha 8",
        kepEleresiUtvonala: "../kepek/ruha8.jpg"
    }
]

function init() 
{
    ID("title").innerHTML = "<h1>Fenntarthatósági témahét</h1>";
    ID("rules").innerHTML = "<h1>Játékszabály</h1><p>A szabály nagyon egyszerű: Keresd meg a párokat a lehető legkevesebb lépésből.</p>";
    ID("footer").innerHTML = "@ Semmilyen jog nincs fenntartva!<br>Készítette: Piller András";

    for(i = 0; i < kepek.length; i++) txt = txt + "<div></div>";
    ID("game").innerHTML = txt;

    var tomb = $a("#game div");
    var tombHossz = tomb.length;

    kepek.sort(function(a, b) {
        return 0.5 - Math.random();
    })
    console.log(kepek);

    for(i = 0; i < tombHossz; i++) {
        tomb[i].innerHTML = "<img src='" + kepek[i].kepEleresiUtvonala + "' alt='" + kepek[i].kepNeve + "'>";        
    }


}