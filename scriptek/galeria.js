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

const zeroWasteKepek=[];
const ingKepek=[];
const szoveg=[];

function init() {
  $("footer").innerHTML = "&copy Készítette: Weinberger Péter";
  tombBeolvasas(ingKepek, "UjrahasznositottIng");
  tombBeolvasas(zeroWasteKepek, "zeroWaste");
  valaszt();
}

function valaszt(){
  var melyik = ""
  const tomb = $All("#gombok button");
  tomb.forEach((elem)=>{
    elem.addEventListener("click", function(){
      melyik = event.target.innerHTML;
      if(melyik === "Zero waste"){
        $("#zero").addEventListener("click", galeriaFeltoltAdatokkal(zeroWasteKepek));
      }
      else if(melyik ==="Újrahasznosított ingek"){
        $("#ing").addEventListener("click",galeriaFeltoltAdatokkal(ingKepek));
      }
    })
  })
}

function tombBeolvasas(tomb, kulcs)
{
  fetch("../json/galeria.json")
  .then((response)=>response.json())
  .then((data)=>{
    data[kulcs].forEach(elem => 
      {
        tomb.push(elem);
      });
      galeriaFeltoltAdatokkal(tomb);
  })
  .catch(err => console.log(err));
}

function galeriaFeltoltAdatokkal(tomb) 
{
  var txt=`<div class="galeriaKepek">`;
  var asideTxt="<div>";
  for (var i = 0; i < tomb.length; i++) 
  {
      txt+=`<div id="${i}"><a href="ruha.html"><img loading="lazy" id="${i}" src="${tomb[i].foKepEleresiUt}" alt="kép">
          <p><span id="${i}">${tomb[i].keszito}</span></p>
          <p>(<span>${tomb[i].modellNeve}</span>)</p></a></div>`;

      asideTxt+=`<p><a id="${i}" href="ruha.html">${tomb[i].keszito}</a></p>`;
  }
  txt+="</div>";
  asideTxt+="</div>";
  $(".galeria").innerHTML=txt;
  $(".tervezok").innerHTML=asideTxt;
  kepLista = document.querySelectorAll(".galeriaKepek>div");
  asideLista = document.querySelectorAll(".tervezok>div>p");
  for (let i = 0; i < kepLista.length; i++) 
  {
    kepLista[i].addEventListener("click", function(){
      let kepEleres=event.target.id;
      console.log(event.target.id);
      kepEleres=localStorage.setItem("aktualisKep", JSON.stringify(tomb[kepEleres]));
      console.log(kepEleres);
    });
  }
  for (let j = 0; j < asideLista.length; j++) 
  {
    asideLista[j].addEventListener("click", function(){
      let asideEleres=event.target.id;
      console.log(event.target.id);
      asideEleres=localStorage.setItem("aktualisKep", JSON.stringify(tomb[asideEleres]));
    });
  }
}
