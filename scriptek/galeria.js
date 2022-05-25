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

const zeroWasteKepek = [];
const ingKepek = [];

function init() {
  $("footer").innerHTML = "&copy Készítette: Weinberger Péter & Rohácsi Daniella";
  tombBeolvasas(ingKepek, "UjrahasznositottIng");
  tombBeolvasas(zeroWasteKepek, "zeroWaste");
  valaszt();
  szovegKiiras(0);
  // $("#esemenyGomb").addEventListener("click", esemenyKepek());
}

function valaszt() {
  var melyik = "";
  const tomb = $All("#gombok button");
  tomb.forEach((elem) => {
    elem.addEventListener("click", function () {
      melyik = event.target.innerHTML;
      if (melyik === "Zero waste kollekció") {
        $("#zero").addEventListener("click", galeriaFeltoltAdatokkal(zeroWasteKepek));
        szovegKiiras(0);
        $(".tervezok").style.display = "block";
        $("#kollekcioSzoveg").style.display = "block";
        $("#tartalom").style.gridTemplateColumns = "4fr 1fr";
      }
      else if (melyik === "Kreatív kollekció") {
        $("#ing").addEventListener("click", galeriaFeltoltAdatokkal(ingKepek));
        szovegKiiras(1);
        $(".tervezok").style.display = "block";
        $("#kollekcioSzoveg").style.display = "block";
        $("#tartalom").style.gridTemplateColumns = "4fr 1fr";
      }
      else if (melyik === "Esemény képek") {
        $("#esemenyGomb").addEventListener("click", feltoltEsemeny(esemenyKepek, 0, 8));
        $("#tartalom").style.gridTemplateColumns = "1fr";
        $(".tervezok").style.display = "none";
        $("#kollekcioSzoveg").style.display = "none";

        // jobbra-balra gombok
        var pozicio = 1
        ID("holTart").innerHTML = `<p>${pozicio}. oldal/8 oldal<p>`
        var kezdoIndex = 0
        var vegIndex = 8

        feltoltEsemeny(esemenyKepek, kezdoIndex, vegIndex)
        ID("bal").addEventListener("click", balra)
        ID("jobb").addEventListener("click", jobbra)

        function jobbra() {
          console.log("jobb gomb")
          if (pozicio < 8) {
            kezdoIndex += 8
            vegIndex += 8
            console.log("jobbravalt")
            pozicio++
          } else {
            kezdoIndex = 0
            vegIndex = 8
            pozicio = 1
          }
          feltoltEsemeny(esemenyKepek, kezdoIndex, vegIndex)
          ID("bal").addEventListener("click", balra)
          ID("jobb").addEventListener("click", jobbra)
          ID("holTart").innerHTML = `<p>${pozicio}. oldal / 8 oldal<p>`
        }
        function balra() {
          console.log("bal gomb")
          if (1 < pozicio && pozicio <= 8) {
            vegIndex -= 8
            kezdoIndex -= 8
            console.log("balravalt")
            pozicio--
          } else {
            kezdoIndex = 56
            vegIndex = 64
            pozicio = 8
          }
          feltoltEsemeny(esemenyKepek, kezdoIndex, vegIndex)
          ID("bal").addEventListener("click", balra)
          ID("jobb").addEventListener("click", jobbra)
          ID("holTart").innerHTML = `<p>${pozicio}. oldal / 8 oldal<p>`
        }
      }
    })
  })
}

function tombBeolvasas(tomb, kulcs) {
  fetch("../json/galeria.json")
    .then((response) => response.json())
    .then((data) => {
      data[kulcs].forEach((elem) => {
        tomb.push(elem);
      });
      galeriaFeltoltAdatokkal(tomb);
    })
    .catch((err) => console.log(err));
}

function galeriaFeltoltAdatokkal(tomb) {
  var txt = `<div class="galeriaKepek">`;
  var tervezokNeveTxt = "<div>";
  for (var i = 0; i < tomb.length; i++) {
    txt += `<div id="${i}"><a href="ruha.html"><img loading="lazy" id="${i}" src="${tomb[i].foKepEleresiUt}" alt="kép">
          <p><span id="${i}">${tomb[i].keszito}</span></p>
          <p id="modell">modell: <span>${tomb[i].modellNeve}</span></p></a></div>`;

    tervezokNeveTxt += `<p><a id="${i}" href="ruha.html">${tomb[i].keszito}</a></p>`;
  }
  txt += "</div>";
  tervezokNeveTxt += "</div>";
  $(".galeria").innerHTML = txt;
  $(".tervezok").innerHTML = tervezokNeveTxt;
  kepLista = document.querySelectorAll(".galeriaKepek>div");
  asideLista = document.querySelectorAll(".tervezok>div>p");
  for (let i = 0; i < kepLista.length; i++) {
    kepLista[i].addEventListener("click", function () {
      let kepEleres = event.target.id;
      console.log(event.target.id);
      kepEleres = localStorage.setItem(
        "aktualisKep",
        JSON.stringify(tomb[kepEleres])
      );
      console.log(kepEleres);
    });
  }
  for (let j = 0; j < asideLista.length; j++) {
    asideLista[j].addEventListener("click", function () {
      let asideEleres = event.target.id;
      console.log(event.target.id);
      asideEleres = localStorage.setItem(
        "aktualisKep",
        JSON.stringify(tomb[asideEleres])
      );
    });
  }
}
const szoveg = [
  {
    szovegCim: "A zero waste kollekció:",

    szovegLeiras: "<p>Egy jól tervezett folyamat lényege, hogy ne keletkezzen szemét, legfeljebb hulladék. A természetben az anyagok folyamatos átalakuláson mennek keresztül, de sohasem kerülnek ki egy zárt körforgásból. Vagyis körkörösen, a lehető leghatékonyabban újrahasznosítható erőforrások. Ezzel szemben az átgondolatlan termelési folyamatok felesleget eredményeznek. Ez a szemét. Teljesen mindegy, hogy a szemét elpazarolt alapanyag, energia, vagy humán tőke.<br>A hulladék nélküli öltözékek elkészítése magas szintű szabászati és kivitelezési ismereteket feltételez, ami korlátozta volna a lehetőségeket. Ezért a hulladék mentesség bemutatására három tervezési és kivitelezési koncepciót választottunk:</p><ul><li>hulladékmentes szabászati és kivitelezési megoldásokkal készített öltözékek</li><li>maradék anyagok felhasználásával készített öltözékek</li><li>upcycle koncepcióval készített öltözékek</li></ul><p>Ezekkel az eljárásokkal azok számára is adhatnak a diákok kreatív ötleteket, akik tudnak varrni és azoknak is, akik most kapnak kedvet ahhoz, hogy megtanulják.</p>",
    fotosok: "Fotósok: Fehér Szebasztián, Gál Regina, Józsa Anna, Nagy Ágoston Gellért ",
    tanarok: "Felkészítő tanár: Szilágyi Eszter Mária"
  },
  {
    szovegCim: "A kreatív kísérletek kollekció:",
    szovegLeiras: "<p>A kreatív kísérletek kollekció bepillantást enged a tervezési folyamat egyik fázisába, ahol a diákok kötöttségek nélkül, a formákkal szabadon kísérletezve alkothatták meg az elképzeléseiket régi férfiingeket használva alapanyagként.<br>A feladat az ing alkotóelemeire bontása, a kapott alkatrészek újrakomponálása volt.<br>A bemutatásra kerülő modellek a tervezési folyamat egy pillanatfelvételét testesítik meg, a kibontakozó ötletek egy-egy lehetséges irányát mutatják meg a számtalan lehetőség közül, amelyeket továbbfejlesztve születnek majd meg a végső öltözékek.</p>",
    fotosok: "Fotósok: Fehér Szebasztián, Gál Regina, Józsa Anna, Nagy Ágoston Gellért ",
    tanarok: "Felkészítő tanár: Molnár-Csíkós Hajnalka"
  }
]

function szovegKiiras(index) {
  var szovegTxt = "";
  szovegTxt += `<h2>${szoveg[index].szovegCim}</h2>${szoveg[index].szovegLeiras}<p><br>${szoveg[index].tanarok}</p><p>${szoveg[index].fotosok}</p>`;

  $("#kollekcioSzoveg").innerHTML = szovegTxt;
}

const esemenyKepek = [];
for (let i = 1; i <= 64; i++) {
  esemenyKepek.push(i)
}

function feltoltEsemeny(tomb, kezdoIndex, vegIndex) {
  let txt = `<div id="nyilGombok">
  <a href="#" class="nyilGomb" id="bal"
    ><img src="../kepek/nyilKepek/bal_gomb.png" alt="b" />
  </a>
  <div id="holTart"><p>1. oldal / 8 oldal<p></div>
  <a href="#" class="nyilGomb" id="jobb"
    ><img src="../kepek/nyilKepek/jobb_gomb.png" alt="j"
  /></a>
</div>
<div class="esemenyTarolo">`;
  for (let i = kezdoIndex; i < vegIndex; i++) {
    txt += `<div class = "kepDiv"><img src="../kepek/esemenyKepek/${tomb[i]}.jpg" alt="kép"></div>`
  }
  txt+=`</div>`
  $(".galeria").innerHTML = txt;
}

