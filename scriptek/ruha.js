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
    let txt = "<div>";
    for (let i = 0; i < tomb.length; i++) 
    {
      txt+=`<div class=ruhaKepek>`;
        for (let j = 0; j < tomb[i].tovabbiKepek.length; j++) 
        {
            txt+=`<div><img src="${tomb[i].tovabbiKepek[j]}"></div>`;
            // console.log(j);    
        }
        txt+="</div>"
        txt+=`<p>${tomb[i].kepCim}</p>
        <p>${tomb[i].keszito}</p>
        <p>${tomb[i].tipus}</p>
        <p>${tomb[i].leiras}</p>
        <p>${tomb[i].modellNeve}</p>`;
    }

    txt+="</div>";
    ID("aktualisKepek").innerHTML = txt
    
}