window.addEventListener("load", init);

function ID(elem)
{
    return document.getElementById(elem);
}

function $(elem)
{
    return document.querySelector(elem);
}

function $All(elem)
{
    return document.querySelectorAll(elem);
}

function CLASS(elem)
{
    return document.getElementsByClassName(elem);
}

function init(){
    let txt = ""

    let adatok =JSON.parse(localStorage.getItem("aktualisgomb"));
    
    console.log(adatok.length)
    for (const key in adatok) {
        if(key.includes("focim")){
            txt+=`<h1>${adatok[key]}</h1>`
        }
        else if((key.includes("bekezdeslista"))){
            txt+=`<p>${adatok[key]}</p>`
        }
        else if((key.includes("bekezdeskeplista"))){
            txt+=``
        }
    ID("halo").innerHTML = txt
    }
}
