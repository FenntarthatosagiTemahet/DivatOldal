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



function init() {
  $("footer").innerHTML = "&copy Készítette: Weinberger Péter";
  // mintaKepFeltolt();
  $("#zero").addEventListener("click", tombBeolvasas(zeroWasteKepek,"zeroWaste", zeroTxt));
  //tombBeolvasas(ingKepek,"UjrahasznositottIng", ingTxt);
  //$("#ing").addEventListener("click",tombBeolvasas(ingKepek,"UjrahasznositottIng", ingTxt));
  valaszt();
}

function valaszt(){
  var melyik = ""
  const tomb = $All("article>button");
  tomb.forEach((elem)=>{
    elem.addEventListener("click", function(){
      melyik = event.target.innerHTML;
      if(melyik === "Zero waste"){
        $("#zero").addEventListener("click", tombBeolvasas(zeroWasteKepek,"zeroWaste", zeroTxt));
      }
      else if(melyik ==="Újrahasznosított ingek"){
        $("#ing").addEventListener("click",tombBeolvasas(ingKepek,"UjrahasznositottIng", ingTxt));
      }
    })
  })
}

function tombBeolvasas(tomb, kulcs, txt)
{
  fetch("../json/galeria.json")
  .then((response)=>response.json())
  .then((data)=>{
    data[kulcs].forEach(elem => 
      {
        tomb.push(elem);
      });
    kepekFeltoltAdatokkal(tomb, txt);
    // console.log(tomb);
  })
  .catch(err => console.log(err));
}

var zeroTxt=`<div class="zeroWaste">`;
var ingTxt=`<div class="ing">`;
var asideTxt="<div>";
function kepekFeltoltAdatokkal(tomb, txt) 
{
  
  for (let i = 0; i < tomb.length; i++) 
  {
      txt+=`<div><img src="${tomb[i].foKepEleresiUt}" alt="kép">
          <p>A kép címe: <span>${tomb[i].kepCim}</span></p>
          <p>Készítő neve: <span>${tomb[i].keszito}</span></p>
          <p>Ruha típusa: <span>${tomb[i].tipus}</span></p>
          <p>Modell neve: <span>${tomb[i].modellNeve}</span></p></div>`;

    asideTxt+=`<p><a href="#">${tomb[i].keszito}</a></p>`;
    
  }
  txt+="</div>";

  asideTxt+="</div>";
  $(".galeriaKepek").innerHTML=txt;
  // txt="";
  // $(".ing").innerHTML=txt;
  // $(".tervezok").innerHTML=asideTxt;
   console.log(zeroTxt);
   console.log(ingTxt);
}



function ujoldal() 
{

}

const mintaKep = "../minta_kepek/minta.png";

function mintaKepFeltolt() 
{
  for (let i = 0; i < 23; i++) 
  {
    $(".minta").innerHTML += `<div><div class=kep><img src="${mintaKep}" alt="hattér"></div></div>`;
  }
}
