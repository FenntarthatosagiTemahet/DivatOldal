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

function init()
{
    $("footer").innerHTML = "&copy Készítette: Weinberger Péter & Hoffmann Dóra";
    feltolt();
}

const ruhaKepekTomb=[];
function feltolt() 
{
    const adatok=JSON.parse(localStorage.getItem("aktualisKep"));
    
    
    ruhaKepekTomb.push(adatok);
    let txt = "";
    for (let i = 0; i < ruhaKepekTomb.length; i++) 
    {
      txt+=`<div class=ruhaKepek>`;
        for (let j = 0; j < ruhaKepekTomb[i].tovabbiKepek.length; j++) 
        {
            txt+=`<div><img id="${j}" src="${ruhaKepekTomb[i].tovabbiKepek[j]}"></div>`;
            // console.log(j);    
        }
        txt+="</div>"
        txt+=`<div class="szovegTartalom"><h2>${ruhaKepekTomb[i].kepCim}</h2>
        <p><span id="keszitoNeve">${ruhaKepekTomb[i].keszito}</span></p>
        <p><span>${ruhaKepekTomb[i].tipus}</span></p>
        <p>${ruhaKepekTomb[i].leiras}</p>
        <p><span>${ruhaKepekTomb[i].modellNeve}</p></span><div>`;
        $("h1").innerHTML=ruhaKepekTomb[i].keszito;
    }

    txt+="";
    $All("article")[0].innerHTML = txt
    
}