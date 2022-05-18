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
    let txt = "";

    let adatok = JSON.parse(localStorage.getItem("aktualisKep"));
    
    for (const kulcs in adatok) 
    {
        txt+=`<p>${adatok[kulcs]}<p>`;
    }
    ID("aktualisKepek").innerHTML = txt
    
}