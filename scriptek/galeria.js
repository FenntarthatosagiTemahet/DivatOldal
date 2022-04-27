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

function init() 
{
    $("footer").innerHTML="&copy Készítette: Weinberger Péter";
    mintaKepFeltolt();
}

const mintaKep="../kepek/minta.png";

function mintaKepFeltolt()
{
    for (let i = 0; i < 23; i++) 
    {
        $(".minta").innerHTML+=`<div class=kep><img src="${mintaKep}" alt="hattér"></div>`;
    }
}