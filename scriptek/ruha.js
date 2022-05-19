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

function feltolt() 
{
    var tomb=[];
    const adatok=JSON.parse(localStorage.getItem("aktualisKep"));
    
    
    tomb.push(adatok);
    // console.log(tomb);
    // console.log(tomb.length);
    let txt = "";
    for (let i = 0; i < tomb.length; i++) 
    {
      txt+=`<div class=ruhaKepek>`;
        for (let j = 0; j < tomb[i].tovabbiKepek.length; j++) 
        {
            txt+=`<div><img src="${tomb[i].tovabbiKepek[j]}"></div>`;
            // console.log(j);    
        }
        txt+="</div>"
        txt+=`<div class="szovegTartalom"><h2>${tomb[i].kepCim}</h2>
        <p><span id="keszitoNeve">${tomb[i].keszito}</span></p>
        <p><span>${tomb[i].tipus}</span></p>
        <p>${tomb[i].leiras}</p>
        <p><span>${tomb[i].modellNeve}</p></span><div>`;
    }

    txt+="";
    $All("article")[0].innerHTML = txt
    
}