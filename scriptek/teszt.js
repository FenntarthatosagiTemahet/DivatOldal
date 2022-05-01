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
        pont : 1,
        helyes: "citromsárga",
    },{
        kerd:"2. A papírt milyen színű szelektív kukába gyűjtjük?",
        valasz1:"kék",
        valasz2:"piros",
        valasz3:"szürke",
        pont : 1,
        helyes: "kék",
    },{
        kerd:"3. Az üveget milyen színű szelektív kukába gyűjtjük?",
        valasz1:"zöld",
        valasz2:"lila",
        valasz3:"citromsárga",
        pont : 1,
        helyes: "zöld",
    },{
        kerd:"4. A fémet milyen színű szelektív kukába gyűjtjük?",
        valasz1:"szürke",
        valasz2:"kék",
        valasz3:"narancssárga",
        pont : 1,
        helyes: "szürke",
    },{
        kerd:"5. Milyen színűek a szelektív kukák?",
        valasz1:"citromsárga, kék, szürke, zöld",
        valasz2:"piros, kék, zöld, fekete",
        valasz3:"citromsárga, zöld, lila, rózsaszín",
        pont : 1,
        helyes: "citromsárga, kék, szürke, zöld",
    },{
        kerd:"6. A felsorolás között mi a legkörnyezetbarátabb közlekedés?",
        valasz1:"séta",
        valasz2:"vonat",
        valasz3:"autó",
        pont : 1,
        helyes: "séta",
    },{
        kerd:"7. A felsorolás között melyik a takarékosabb?",
        valasz1:"zuhanyzás",
        valasz2:"habfürdő, pancsolás kádban",
        valasz3:"fürdűszobából vizipark csinálás",
        pont : 1,
        helyes: "zuhanyzás",
    },{
        kerd:"8. Miket komposztálhatunk?",
        valasz1:"zöldség - gyümölcs maradék, tojáshéj",
        valasz2:"nagy ágak, fatörzsek, diófalevél",
        valasz3:"fém, műanyag, vegyszeres dolgok",
        pont : 1,
        helyes: "zöldség - gyümölcs maradék, tojáshéj",
    },{
        kerd:"9. Fogmosásnál... ",
        valasz1:"elzárom a csapot, ha már nem kell víz",
        valasz2:"nem zárom el a csapot, hadd folyjon",
        valasz3:"ki tekerem tejlesen, mert miért ne",
        pont : 1,
        helyes: "elzárom a csapot, ha már nem kell víz",
    },{
        kerd:"10. Közlekedésnél....",
        valasz1:"ha lehet biciklizek",
        valasz2:"autózom",
        valasz3:"tömegközlekedést használok",
        pont : 1,
        helyes: "ha lehet biciklizek",
    },{
        kerd:"11. Az okostelefont...",
        valasz1:"csak 2-3 évente cserélem",
        valasz2:"évente cserélem",
        valasz3:"amikor van egy jobb akkor azt rögtön megveszem",
        pont : 1,
        helyes: "csak 2-3 évente cserélem",
    }];
    const kozepiskolasteszt = [{
        kerd:"1. Hogyan dobjuk a szelektívbe a műanyagot?",
        valasz1:"Tisztán, kimosva",
        valasz2:"koszosan",
        valasz3:"mindegy",
        pont : 1,
        helyes:"Tisztán, kimosva",
    },{
        kerd:"2. A felsorolás között mi a legkörnyelózetbarátabb közlekedés?",
        valasz1:"séta",
        valasz2:"vonat",
        valasz3:"autó",
        pont : 1,
        helyes:"séta",
    },{
        kerd:"3. Ha szemetet látsz eldobva...",
        valasz1:"felveszem és kidobom a legközelebb kukába",
        valasz2:"otthagyom",
        valasz3:"belerúgok",
        pont : 1,
        helyes:"felveszem és kidobom a legközelebb kukába",
    },{
        kerd:"4. Mi kerülhet a papír szelektívbe?",
        valasz1:"újságok, tejes -gyümölcsleves papírdobozok, könyve",
        valasz2:"hőpapír (nyugta, blokk)",
        valasz3:"olajjal/zsíradékkal szennyezett papír",
        pont : 1,
        helyes:"újságok, tejes -gyümölcsleves papírdobozok, könyve",
    },{
        kerd:"5. Miket komposztálhatunk?",
        valasz1:"zöldség - gyümölcs maradék, tojáshéj",
        valasz2:"nagy ágak, fatörzsek, diófalevér",
        valasz3:"fém, műanyag, vegyszeres dolgok",
        pont : 1,
        helyes:"zöldség - gyümölcs maradék, tojáshéj",
    },{
        kerd:"6. Mi a komposzt?",
        valasz1:"szerves anyagok lebomlásának a végterméke",
        valasz2:"szerves és szervetlen anyagok lebomlásának a végterméke",
        valasz3:" szervetlen anyagok lebomlásának a végterméke",
        pont : 1,
        helyes:"szerves anyagok lebomlásának a végterméke",
    },{
        kerd:"7. A könyveket....",
        valasz1:"kiveszem a könyvtárból/elcserélem",
        valasz2:"megveszem drágán a boltban",
        valasz3:"elégetem,ha már nem kell",
        pont : 1,
        helyes:"kiveszem a könyvtárból/elcserélem",
    },{
        kerd:"8. Mi az ökologiai lábnyom?",
        valasz1:"Egy mutató, hogy mekkora mértékben éljük föl természetes erőforrásokat.",
        valasz2:"Az amikor sárba lépünk és ott marad a cipő talpának a lenyomata.",
        valasz3:"Az amikor valaki lápnyomokat hagy az úton",
        pont : 1,
        helyes:"Egy mutató, hogy mekkora mértékben éljük föl természetes erőforrásokat.",
    },{
        kerd:"9. Az okostelefont...",
        valasz1:"csak 2-3 évente cserélem",
        valasz2:"évente cserélem",
        valasz3:"amikor van egy jobb akkor azt rögtön megveszem",
        pont : 1,
        helyes:"csak 2-3 évente cserélem",
    },{
        kerd:"10. Hova tegyük az üveget?",
        valasz1:"A színes üveghulladékok közé dobjuk a kupak nélküli boros-, pezsgős, sörös- és röviditalos színesüvegeket, természetesen átöblítés után, tisztán.",
        valasz2:"csak szimplán kidobjuk",
        valasz3:" A fehérüveg-hulladékok közé csak az olyan elöblített üvegeket dobjuk, amelyek átlátszók. Ilyen például a dunsztosüveg, a tejesüveg, bébiételes üveg stb.",
        pont : 2,
        helyes:"A színes üveghulladékok közé dobjuk a kupak nélküli boros-, pezsgős, sörös- és röviditalos színesüvegeket, természetesen átöblítés után, tisztán.",
        helyes2:" A fehérüveg-hulladékok közé csak az olyan elöblített üvegeket dobjuk, amelyek átlátszók. Ilyen például a dunsztosüveg, a tejesüveg, bébiételes üveg stb.",
    },{
        kerd:"11. Mi a legjobb alternatíva a nejlon zacskókra?",
        valasz1:"vászon szatyrok",
        valasz2:"papír zacskók",
        valasz3:"erősebb műanyagból készült szatyrok",
        pont : 1,
        helyes:"vászon szatyrok",
    },];
    const felnotteszt = [{
        kerd:"1. Található-e Magyarországon (műanyag) csomagolás mentes bolt?",
        valasz1:"Igen, van",
        valasz2:"Magyaroszágon nincs, de külföldön van",
        valasz3:"Magyaroszágon és külföldön sincs",
        pont : 1,
        helyes:"Igen, van",
    },{
        kerd:"2. Hogyan dobjuk a szelektívbe a műanyagot?",
        valasz1:"tisztán, kimosva",
        valasz2:"koszosan",
        valasz3:"mindegy",
        pont : 1,
        helyes:"tisztán, kimosva",
    },{
        kerd:"3. Ha bővíteni akarod a ruhatárad és mindegy milyen márkájú akkor...",
        valasz1:"turkálókban vásárolok",
        valasz2:"Online vásárolok",
        valasz3:"noname boltokban vásárolok",
        helyes:"turkálókban vásárolok",
        pont : 1,
    },{
        kerd:"4. Mi a legjobb alternatíva a nejlon zacskókra?",
        valasz1:"vászon szatyrok",
        valasz2:"papír zacskók",
        valasz3:"erősebb műanyagból készült szatyrok",
        pont : 1,
        helyes:"vászon szatyrok",
    },{
        kerd:"5. A felsorolás között mi a legkörnyelózetbarátabb közlekedés?",
        valasz1:"séta",
        valasz2:"vonat",
        valasz3:"autó",
        pont : 1,
        helyes:"séta",
    },{
        kerd:"6. Ha szemetet látsz eldobva...",
        valasz1:"felveszem és kidobom a legközelebb kukába",
        valasz2:"ott hagyom",
        valasz3:"belerúgok",
        pont : 1,
        helyes:"felveszem és kidobom a legközelebb kukába",
    },{
        kerd:"7. Mi az újrahasznosítás célja?",
        valasz1:"A természetes erőforrások lehető legkevesebb felhasználása.",
        valasz2:"kevesebb szemét legyen",
        valasz3:"mert jól hangzik",
        pont : 1,
        helyes:"A természetes erőforrások lehető legkevesebb felhasználása.",
    },{
        kerd:"8. Mi kerülhet a papír szelektívbe?",
        valasz1:"újságok, tejes -gyümölcsleves papírdobozok, könyvek",
        valasz2:"hőpapír (nyugta, blokk)",
        valasz3:"olajjal/zsíradékkal szennyezett papír",
        helyes:"újságok, tejes -gyümölcsleves papírdobozok, könyvek",
        pont : 1,
    },{
        kerd:"9. Mi a komposzt?",
        valasz1:"szerves anyagok lebomlásának a végterméke",
        valasz2:"szerves és szervetlen anyagok lebomlásának a végterméke",
        valasz3:"szervetlen anyagok lebomlásának a végterméke",
        pont : 1,
        helyes:"szerves anyagok lebomlásának a végterméke",
    },{
        kerd:"10. Miket komposztálhatunk?",
        valasz1:"zöldség - gyümölcs maradék, tojáshéj",
        valasz2:"nagy ágak, fatörzsek, diófalevér",
        valasz3:"fém, műanyag, vegyszeres dolgok",
        pont : 1,
        helyes:"zöldség - gyümölcs maradék, tojáshéj",
    },{
        kerd:"11. Vásárlásnál",
        valasz1:"figyelembe veszem, hogy milyen a csomagolása",
        valasz2:"nem törödök, hogy milyen a csomagolása",
        valasz3:"nem érdekel, hogy milyen a csomagolása",
        pont : 1,
        helyes:"figyelembe veszem, hogy milyen a csomagolása",
    },{
        kerd:"12. Ha elmegyek a boltba.....",
        valasz1:"csak azt veszem meg amire szükségem van",
        valasz2:"mindent megveszek, amit a szemem kíván",
        valasz3:"felvásárolom az egész LIDL-t",
        pont : 1,
        helyes:"csak azt veszem meg amire szükségem van",
    },{
        kerd:"13. Mi  a szürkevíz?",
        valasz1:"olyan szennyezett víz amelyben, szappan vagy mosószer maradványok, kisebb nagyobb",
        valasz2:"szürke színű víz",
        valasz3:"javarészt a vécékben kepződik, olyan  szennyezett vízet értünk alatta, amiben fertőző, egészségre és környezetre veszélyes baktériumok vannak",
        pont : 1,
        helyes:"olyan szennyezett víz amelyben, szappan vagy mosószer maradványok, kisebb nagyobb",
    },{
        kerd:"14. Mi a feketevíz?",
        valasz1:"javarészt a vécékben kepződik, olyan  szennyezett vízet értünk alatta, amiben fertőző, egészségre és környezetre veszélyes baktériumok vannak",
        valasz2:"olyan szennyezett víz amelyben, szappan vagy mosószer maradványok, kisebb nagyobb szennyeződések vannak.",
        valasz3:"feket színű víz",
        pont : 1,
        helyes:"javarészt a vécékben kepződik, olyan  szennyezett vízet értünk alatta, amiben fertőző, egészségre és környezetre veszélyes baktériumok vannak",
    },{
        kerd:"15. Az okostelefont...",
        valasz1:"csak 2-3 évente cserélem",
        valasz2:"évente cserélem",
        valasz3:"amikor van egy jobb akkor azt rögtön megveszem",
        pont : 1,
        helyes:"csak 2-3 évente cserélem",
    },];
    ID("teszt").innerHTML = listabejaras(altalanosteszt);
    ID("teszt").innerHTML = listabejaras(kozepiskolasteszt);
    ID("teszt").innerHTML= listabejaras(felnotteszt);
    console.log(listabejaras(kozepiskolasteszt));
}

function listabejaras(array){
    var txt ="<form>";
    for (let index = 0; index < array.length; index++) {
        let i = 1;
        for (const key in array[index]) {
            if(i===1){
                txt+=`<label for="${index}.kerdes">${array[index][key]}</label><br>`
            }
            else if (Object.keys(array[index]).length===7 && (i<1 || i < 5)) {
                txt += `<input type="checkbox" id="${index}${i}.valasz" name="${index}.valasz" value="${index}.valasz">
                <label for="${index}${i}.valasz">${array[index][key]}</label><br>`
            }
            else if (i<1 || i < 5) {
                txt += `<input type="radio" id="${index}${i}.valasz" name="${index}.valasz" value="${index}.valasz">
                <label for="${index}${i}.valasz">${array[index][key]}</label><br>`
            }
            else if (i === 5) {
                txt+=`<p>${array[index][key]}pont</p>`
            }
            i++;
        }
    }
    txt += "</form>"
    return txt;
}