window.addEventListener("load", init);

function ID(elem) {return document.getElementById(elem);}
function CL(elem) {return document.getElementsByClassName(elem);}
function $e(elem) {return document.querySelector(elem);}
function $a(elem) {return document.querySelectorAll(elem);}

let i = 0;
var txt = "";

const kepek = [];

let pontszam = 0, szamlalo = 0;
var probalkozasokSzama = 0;

function kepFeldolgozas() {
    let txt = "";
    kepek.sort(function(a, b) {
        return 0.5 - Math.random();
    });
    console.log(kepek);
    for(i = 0; i < kepek.length; i++) {
        txt += "<div id=\"" + i + "\"></div>";
    }
    ID("memory-game").innerHTML = txt;

    var tomb = $a("#memory-game div");
    var tombHossz = tomb.length;
    txt = "";
    
    for(i = 0; i < tombHossz; i++) {
        tomb[i].className = "invisible";
        tomb[i].style.backgroundColor = "pink";
    }
    ID("points").innerHTML = "<h3>Próbálkozások száma: " + probalkozasokSzama + "</h3>";
    
    for(let i = 0; i < tombHossz; i++) tomb[i].addEventListener("click", function() {kartyatMutat(i)});
}

var kartyak = [];
var megtalaltKartyak = [];

function kartyatMutat(i) {
    if(szamlalo < 2 && event.target.className == "invisible") {
        event.target.className = "visible";
        event.target.style.backgroundImage = `url("${kepek[i].kepEleresiUtvonala}")`;
        event.target.style.backgroundSize = "100%";
        event.target.style.animation = "lathato 1.5s 1";
        kartyak.push(event.target.id);
        console.log(kartyak);
        szamlalo++;
        if(szamlalo == 2) {
            if(kepek[kartyak[0]].kepEleresiUtvonala == kepek[kartyak[1]].kepEleresiUtvonala) {
                probalkozasokSzama++;
                megtalaltKartyak.push(kartyak[0]);
                megtalaltKartyak.push(kartyak[1]);
                setTimeout(() => {
                    ID(Number(kartyak[0])).className = "found";
                    ID(Number(kartyak[1])).className = "found";
                    ID(Number(kartyak[0])).style.animation = "megtalalt 1s 1";
                    ID(Number(kartyak[1])).style.animation = "megtalalt 1s 1";
                    ID(Number(kartyak[0])).style.opacity = "0.5";
                    ID(Number(kartyak[1])).style.opacity = "0.5";
                    kartyak.splice(0, kartyak.length);
                }, 550);
            }
            else {
                probalkozasokSzama++;
                setTimeout(() => {
                    ID(Number(kartyak[0])).className = "invisible";
                    ID(Number(kartyak[0])).style.backgroundImage = "none";
                    ID(Number(kartyak[1])).className = "invisible";
                    ID(Number(kartyak[1])).style.backgroundImage = "none";
                    kartyak.splice(0, kartyak.length);
                }, 600)
            };
            ID("points").innerHTML = "<h3>Próbálkozások száma: " + probalkozasokSzama + "</h3>";
            szamlalo = 0;
            setTimeout(() => {
                if(megtalaltKartyak.length == 16) vegeKiir();
            }, 800);
        }
    }
}

function vegeKiir() {
    var szoveg = "Gratulálok! Végigjátszottad a játékot!\n\nA próbálkozások száma: " + probalkozasokSzama + "\n\nSzeretnél még egyet játszani?";
    if(confirm(szoveg)) window.location = "../html_oldalak/jatek.html";
}

function init() {
    ID("title").innerHTML = "<h1>Memóriajáték</h1>";
    ID("footer").innerHTML = "<p>© Készítette: Piller András Gábor</p>";

    /* ID("difficulty").innerHTML = "<button onclick=\"\">Könnyű</button>"
    ID("difficulty").innerHTML = "<button onclick=\"\">Nehéz</button>" */

    fetch("../json/jatek.json")
    .then((response) => response.json())
    .then((data) => {
        data.kepek.forEach(elem => {
            kepek.push(elem);
            kepFeldolgozas();
            })
        })
    .catch(err => console.log(err));

    const tomb = $a("#memory-game div");
    let tombHossz = tomb.length;

    for(i = 0; i < tombHossz; i++) tomb[i].className = "invisible";
    for(i = 0; i < tombHossz; i++) {
        tomb[i].addEventListener("click", kartyatMutat);
    }
}