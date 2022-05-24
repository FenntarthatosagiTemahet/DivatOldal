window.addEventListener("load", init);

function ID(elem) {return document.getElementById(elem);}
function CL(elem) {return document.getElementsByClassName(elem);}
function $(elem) {return document.querySelector(elem);}
function $a(elem) {return document.querySelectorAll(elem);}

let i = 0;
var txt = "";

const kepek = [];

let szamlalo = 0;
var probalkozasokSzama = 0;
var osszesKartya = 0;

function kepFeldolgozas() {
    var gombok = $a("#difficulty button");
    gombok[0].onclick = () => {
        osszesKartya = 16;
        let konnyuKartyak = [];
        for(let j = 0; j < osszesKartya; j++) konnyuKartyak.push(kepek[j]);
        nullazas();
        event.target.className = "active";
        gombok[1].className = "";
        gombok[2].className = "";
        kartyaElrendezes(konnyuKartyak);
    }
    gombok[1].onclick = () => {
        osszesKartya = 28;
        let normalKartyak = [];
        for(let j = 0; j < osszesKartya; j++) normalKartyak.push(kepek[j]);
        nullazas();
        event.target.className = "active";
        gombok[0].className = "";
        gombok[2].className = "";
        kartyaElrendezes(normalKartyak);
    }
    gombok[2].onclick = () => {
        osszesKartya = kepek.length;
        let nehezKartyak = [];
        for(let j = 0; j < osszesKartya; j++) nehezKartyak.push(kepek[j]);
        nullazas();
        event.target.className = "active";
        gombok[0].className = "";
        gombok[1].className = "";
        kartyaElrendezes(nehezKartyak);
    }
}

function nullazas() {
    kartyak = [];
    megtalaltKartyak = [];
    szamlalo = 0;
    probalkozasokSzama = 0;
}

function kartyaElrendezes(aktualisKartya) {
    let txt = "";
    aktualisKartya.sort(function(a, b) {
        return 0.5 - Math.random();
    });

    for(i = 0; i < osszesKartya; i++) {
    txt += "<div id=\"" + i + "\"></div>";
    }
    ID("memory-game").innerHTML = txt;

    var tomb = $a("#memory-game div");
    var tombHossz = tomb.length;
    txt = "";
    
    for(i = 0; i < tombHossz; i++) {
        tomb[i].className = "invisible";
        tomb[i].style.backgroundColor = "#d3a778";
    }
    ID("points").innerHTML = "<h3>Próbálkozások száma: " + probalkozasokSzama + "</h3>";
    
    for(let i = 0; i < tombHossz; i++) tomb[i].addEventListener("click", function() {kartyatMutat(i, aktualisKartya)});
}

var kartyak = [];
var megtalaltKartyak = [];

function kartyatMutat(i, aktualisKartya) {
    if(szamlalo < 2 && event.target.className == "invisible") {
        event.target.className = "visible";
        event.target.style.backgroundImage = `url("${aktualisKartya[i].kepEleresiUtvonala}")`;
        event.target.style.backgroundSize = "100%";
        event.target.style.animation = "lathato 1.5s 1";
        kartyak.push(event.target.id);
        szamlalo++;
        if(szamlalo == 2) {
            if(aktualisKartya[kartyak[0]].kepEleresiUtvonala == aktualisKartya[kartyak[1]].kepEleresiUtvonala) {
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
                    kartyak.splice(0, 2);
                }, 500);
            }
            else {
                probalkozasokSzama++;
                setTimeout(() => {
                    ID(Number(kartyak[0])).className = "invisible";
                    ID(Number(kartyak[0])).style.backgroundImage = "none";
                    ID(Number(kartyak[1])).className = "invisible";
                    ID(Number(kartyak[1])).style.backgroundImage = "none";
                    kartyak.splice(0, 2);
                }, 500)
            };
            ID("points").innerHTML = "<h3>Próbálkozások száma: " + probalkozasokSzama + "</h3>";
            szamlalo = 0;
            setTimeout(() => {
                if(megtalaltKartyak.length == osszesKartya) vegeKiir();
            }, 800);
        }
    }
}

function vegeKiir() {
    var szoveg = "Gratulálok! Sikeresen végigjátszotta a játékot!\n\nEnnyi próbálkozásból sikerült: " + probalkozasokSzama;
    alert(szoveg);
}

function init() {
    ID("title").innerHTML = "<h1>Fenntarthatósági témahét</h1>";
    ID("footer").innerHTML = "<p>© Készítette: Piller András Gábor</p>";

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