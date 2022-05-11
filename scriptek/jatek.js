window.addEventListener("load", init);

function ID(elem) {return document.getElementById(elem);}
function CL(elem) {return document.getElementsByClassName(elem);}
function $(elem) {return document.querySelector(elem);}
function $a(elem) {return document.querySelectorAll(elem);}

let i = 0;
var txt = "";

const kepek = [];

let pontszam = 0, szamlalo = 0;
var probalkozasokSzama = 0;

function kepFeldolgozas() {
    // console.log(kepek.length);
    let txt = "";
    kepek.sort(function(a, b) {
        return 0.5 - Math.random();
    })
    console.log(kepek);
    for(i = 0; i < kepek.length; i++) {
        txt += "<div id=\"" + i + "\"></div>";
    }
    // console.log(txt);
    ID("memory-game").innerHTML = txt;
    var tomb = $a("#memory-game div");
    var tombHossz = tomb.length;
    txt = "";
    for(i = 0; i < tombHossz; i++) {
        tomb[i].className = "invisible";
        // tomb[i].innerHTML = `<img src='${kepek[i].kepEleresiUtvonala}' alt='${kepek[i].kepNeve}'>`
        // tomb[i].style.background = `url("${kepek[i].kepEleresiUtvonala}")`;
        tomb[i].style.backgroundColor = "pink";
    }
    ID("points").innerHTML = "<h3>Próbálkozások száma: " + probalkozasokSzama + "</h3>";
    
    for(let i = 0; i < tombHossz; i++) tomb[i].addEventListener("click", function() {kartyatMutat(i)});
}

var kartyak = [];

function kartyatMutat(i) {
    if(szamlalo < 2) {
        event.target.className = "visible";
        event.target.style.backgroundImage = `url("${kepek[i].kepEleresiUtvonala}")`;
        event.target.style.backgroundSize = "100%";
        kartyak.push(event.target.id);
        console.log(kartyak);
        szamlalo++;
        if(szamlalo == 2) {
            if(kepek[kartyak[0]].kepEleresiUtvonala == kepek[kartyak[1]].kepEleresiUtvonala) {
                probalkozasokSzama++;
                ID("points").innerHTML = "<h3>Próbálkozások száma: " + probalkozasokSzama + "</h3>";
                setTimeout(() => {
                    ID(Number(kartyak[0])).style.display = "none";
                    ID(Number(kartyak[1])).style.display = "none";
                }, 1000);
            }
            else {
                setTimeout(() => {
                    ID(Number(kartyak[0])).className = "invisible";
                    ID(Number(kartyak[1])).className = "invisible";
                })
            }
            kartyak.splice(0);
            szamlalo = 0;
            probalkozasokSzama++;
            console.log(szamlalo)
            console.log(probalkozasokSzama)
        }
    }
}

function init() {
    ID("title").innerHTML = "<h1>Memóriajáték</h1>";
    ID("footer").innerHTML = "<p>@ Semmilyen jog nincs fenntartva<br>Készítette: Én</p>"
    
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
    for(i = 0; i < tombHossz; i++) tomb[i].addEventListener("click", kartyatMutat(i));

}