window.addEventListener("load", init);

function ID(elem) {
  return document.getElementById(elem);
}

function $(elem) {
  return document.querySelector(elem);
}

function $All(elem) {
  return document.querySelectorAll(elem);
}

function CLASS(elem) {
  return document.getElementsByClassName(elem);
}

function init() {
  $("footer").innerHTML = "&copy Készítette: Weinberger Péter";
  mintaKepFeltolt();
}

const mintaKep = "../minta_kepek/minta.png";

function mintaKepFeltolt() 
{
  for (let i = 0; i < 23; i++) 
  {
    $(".minta").innerHTML += `<div><div class=kep><img src="${mintaKep}" alt="hattér"></div></div>`;
  }
}

const galeriaAdatok = [
  {
    kepCim: "kep cím",
    eleres: "../kepek/lanyokKepei/",
    keszito: "Árokszállási Renáta Andrea",
    tipus: "női",
    leírás: "mi alapján tervezte meg",
    tovabbiKepek: [
      {
        eleres: "kep2.jpg",
      },
    ],
    ar: "Nem eladó",
    modellNeve: "XY",
    ruhaoldalEleresiut: "",
  },
  {
    kepCim: "kep cím",
    eleres: "kep.jpg",
    keszito: "Bajusz Gyöngyike",
    tipus: "férfi/női",
    leírás: "mi alapján tervezte meg",
    tovabbiKepek: [
      {
        eleres: "kep2.jpg",
      },
    ],
    ar: "Nem eladó",
    modellNeve: "XY",
    ruhaoldalEleresiut: "",
  },
  {
    kepCim: "kep cím",
    eleres: "kep.jpg",
    keszito: "Balla Robin",
    tipus: "férfi/női",
    leírás: "mi alapján tervezte meg",
    tovabbiKepek: [
      {
        eleres: "kep2.jpg",
      },
    ],
    ar: "Nem eladó",
    modellNeve: "XY",
    ruhaoldalEleresiut: "",
  },
  {
    kepCim: "kep cím",
    eleres: "kep.jpg",
    keszito: "Bartha Emma Zsuzsanna",
    tipus: "férfi/női",
    leírás: "mi alapján tervezte meg",
    tovabbiKepek: [
      {
        eleres: "kep2.jpg",
      },
    ],
    ar: "Nem eladó",
    modellNeve: "XY",
    ruhaoldalEleresiut: "",
  },
  {
    kepCim: "kep cím",
    eleres: "kep.jpg",
    keszito: "Berecz Lili Blanka",
    tipus: "férfi/női",
    leírás: "mi alapján tervezte meg",
    tovabbiKepek: [
      {
        eleres: "kep2.jpg",
      },
    ],
    ar: "Nem eladó",
    modellNeve: "XY",
    ruhaoldalEleresiut: "",
  },
  {
    kepCim: "kep cím",
    eleres: "kep.jpg",
    keszito: "Buzás Vanda Szonja",
    tipus: "férfi/női",
    leírás: "mi alapján tervezte meg",
    tovabbiKepek: [
      {
        eleres: "kep2.jpg",
      },
    ],
    ar: "Nem eladó",
    modellNeve: "XY",
    ruhaoldalEleresiut: "",
  },
  {
    kepCim: "kep cím",
    eleres: "kep.jpg",
    keszito: "Fábián Fanni",
    tipus: "férfi/női",
    leírás: "mi alapján tervezte meg",
    tovabbiKepek: [
      {
        eleres: "kep2.jpg",
      },
    ],
    ar: "Nem eladó",
    modellNeve: "XY",
    ruhaoldalEleresiut: "",
  },
  {
    kepCim: "kep cím",
    eleres: "kep.jpg",
    keszito: "Fazekas Anna",
    tipus: "férfi/női",
    leírás: "mi alapján tervezte meg",
    tovabbiKepek: [
      {
        eleres: "kep2.jpg",
      },
    ],
    ar: "Nem eladó",
    modellNeve: "XY",
    ruhaoldalEleresiut: "",
  },
  {
    kepCim: "kep cím",
    eleres: "kep.jpg",
    keszito: "Fódi Martin Levente",
    tipus: "férfi/női",
    leírás: "mi alapján tervezte meg",
    tovabbiKepek: [
      {
        eleres: "kep2.jpg",
      },
    ],
    ar: "Nem eladó",
    modellNeve: "XY",
    ruhaoldalEleresiut: "",
  },
  {
    kepCim: "kep cím",
    eleres: "kep.jpg",
    keszito: "Hoffmann Dóra",
    tipus: "férfi/női",
    leírás: "mi alapján tervezte meg",
    tovabbiKepek: [
      {
        eleres: "kep2.jpg",
      },
    ],
    ar: "Nem eladó",
    modellNeve: "XY",
    ruhaoldalEleresiut: "",
  },
  {
    kepCim: "kep cím",
    eleres: "kep.jpg",
    keszito: "Juhász Nóra",
    tipus: "férfi/női",
    leírás: "mi alapján tervezte meg",
    tovabbiKepek: [
      {
        eleres: "kep2.jpg",
      },
    ],
    ar: "Nem eladó",
    modellNeve: "XY",
    ruhaoldalEleresiut: "",
  },
  {
    kepCim: "kep cím",
    eleres: "kep.jpg",
    keszito: "Kertész Krisztina",
    tipus: "férfi/női",
    leírás: "mi alapján tervezte meg",
    tovabbiKepek: [
      {
        eleres: "kep2.jpg",
      },
    ],
    ar: "Nem eladó",
    modellNeve: "XY",
    ruhaoldalEleresiut: "",
  },
  {
    kepCim: "kep cím",
    eleres: "kep.jpg",
    keszito: "Mészáros Mercédesz Beatrix",
    tipus: "férfi/női",
    leírás: "mi alapján tervezte meg",
    tovabbiKepek: [
      {
        eleres: "kep2.jpg",
      },
    ],
    ar: "Nem eladó",
    modellNeve: "XY",
    ruhaoldalEleresiut: "",
  },
  {
    kepCim: "kep cím",
    eleres: "kep.jpg",
    keszito: "Nagy Dominika Anna",
    tipus: "férfi/női",
    leírás: "mi alapján tervezte meg",
    tovabbiKepek: [
      {
        eleres: "kep2.jpg",
      },
    ],
    ar: "Nem eladó",
    modellNeve: "XY",
    ruhaoldalEleresiut: "",
  },
  {
    kepCim: "kep cím",
    eleres: "kep.jpg",
    keszito: "Nagy Flóra",
    tipus: "férfi/női",
    leírás: "mi alapján tervezte meg",
    tovabbiKepek: [
      {
        eleres: "kep2.jpg",
      },
    ],
    ar: "Nem eladó",
    modellNeve: "XY",
    ruhaoldalEleresiut: "",
  },
  {
    kepCim: "kep cím",
    eleres: "kep.jpg",
    keszito: "Nagy Hanna Napsugár",
    tipus: "férfi/női",
    leírás: "mi alapján tervezte meg",
    tovabbiKepek: [
      {
        eleres: "kep2.jpg",
      },
    ],
    ar: "Nem eladó",
    modellNeve: "XY",
    ruhaoldalEleresiut: "",
  },
  {
    kepCim: "kep cím",
    eleres: "kep.jpg",
    keszito: "Novák Nóra",
    tipus: "férfi/női",
    leírás: "mi alapján tervezte meg",
    tovabbiKepek: [
      {
        eleres: "kep2.jpg",
      },
    ],
    ar: "Nem eladó",
    modellNeve: "XY",
    ruhaoldalEleresiut: "",
  },
  {
    kepCim: "kep cím",
    eleres: "kep.jpg",
    keszito: "Szoboszlai Bella",
    tipus: "férfi/női",
    leírás: "mi alapján tervezte meg",
    tovabbiKepek: [
      {
        eleres: "kep2.jpg",
      },
    ],
    ar: "Nem eladó",
    modellNeve: "XY",
    ruhaoldalEleresiut: "",
  },
  {
    kepCim: "kep cím",
    eleres: "kep.jpg",
    keszito: "Szórád Nikolett",
    tipus: "férfi/női",
    leírás: "mi alapján tervezte meg",
    tovabbiKepek: [
      {
        eleres: "kep2.jpg",
      },
    ],
    ar: "Nem eladó",
    modellNeve: "XY",
    ruhaoldalEleresiut: "",
  },
  {
    kepCim: "kep cím",
    eleres: "kep.jpg",
    keszito: "Tóth Dávid",
    tipus: "férfi/női",
    leírás: "mi alapján tervezte meg",
    tovabbiKepek: [
      {
        eleres: "kep2.jpg",
      },
    ],
    ar: "Nem eladó",
    modellNeve: "XY",
    ruhaoldalEleresiut: "",
  },
  {
    kepCim: "kep cím",
   eleres: "kep.jpg",
   keszito: "Wertheim Loretta",
   tipus: "férfi/női",
   leírás: "mi alapján tervezte meg",
   tovabbiKepek: [{
       eleres: "kep2.jpg"
   }],
   ar: "Nem eladó",
   modellNeve: "XY",
   ruhaoldalEleresiut: ""
 }
];
