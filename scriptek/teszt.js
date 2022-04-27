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
    const altalanosteszt =[{
        kerd:" 1. A műanyagot milyen színű szelektív kukába gyűjtjük?",
        valasz1:"citromsárga",
        valasz2:"kék",
        valasz3:"zöld",
        helyes: valasz1,
        pont : 1,
    },{
        kerd:"2. A papírt milyen színű szelektív kukába gyűjtjük?",
        valasz1:"kék",
        valasz2:"piros",
        valasz3:"szürke",
        helyes: valasz1,
        pont : 1,
    },{
        kerd:"3. Az üveget milyen színű szelektív kukába gyűjtjük?",
        valasz1:"zöld",
        valasz2:"lila",
        valasz3:"citromsárga",
        helyes: valasz1,
        pont : 1,
    },{
        kerd:"4. A fémet milyen színű szelektív kukába gyűjtjük?",
        valasz1:"szürke",
        valasz2:"kék",
        valasz3:"narancssárga",
        helyes: valasz1,
        pont : 1,
    },{
        kerd:"5. Milyen színűek a szelektív kukák?",
        valasz1:"citromsárga, kék, szürke, zöld",
        valasz2:"piros, kék, zöld, fekete",
        valasz3:"citromsárga, zöld, lila, rózsaszín",
        helyes: valasz1,
        pont : 1,
    },{
        kerd:"6. A felsorolás között mi a legkörnyezetbarátabb közlekedés?",
        valasz1:"séta",
        valasz2:"vonat",
        valasz3:"autó",
        helyes: valasz1,
        pont : 1,
    },{
        kerd:"7. A felsorolás között melyik a takarékosabb?",
        valasz1:"zuhanyzás",
        valasz2:"habfürdő, pancsolás kádban",
        valasz3:"fürdűszobából vizipark csinálás",
        helyes: valasz1,
        pont : 1,
    },{
        kerd:"8. Miket komposztálhatunk?",
        valasz1:"zöldség - gyümölcs maradék, tojáshéj",
        valasz2:"nagy ágak, fatörzsek, diófalevél",
        valasz3:"fém, műanyag, vegyszeres dolgok",
        helyes: valasz1,
        pont : 1,
    },{
        kerd:"9. Fogmosásnál... ",
        valasz1:"elzárom a csapot, ha már nem kell víz",
        valasz2:"nem zárom el a csapot, hadd folyjon",
        valasz3:"ki tekerem tejlesen, mert miért ne",
        helyes: valasz1,
        pont : 1,
    },{
        kerd:"10. Közlekedésnél....",
        valasz1:"ha lehet biciklizek",
        valasz2:"autózom",
        valasz3:"tömegközlekedést használok",
        helyes: valasz1,
        pont : 1,
    },{
        kerd:"11. Az okostelefont...",
        valasz1:"csak 2-3 évente cserélem",
        valasz2:"évente cserélem",
        valasz3:"amikor van egy jobb akkor azt rögtön megveszem",
        helyes: valasz1,
        pont : 1,
    }]
}