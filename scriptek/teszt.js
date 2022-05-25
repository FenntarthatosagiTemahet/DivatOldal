window.addEventListener('load', init)
const altalanosteszt = [];
const kozepiskolasteszt = [];
const felnotteszt = [];
const helyesvalaszok = [];

function ID(elem) {
  return document.getElementById(elem)
}

function $(elem) {
  return document.querySelector(elem) 
}

function $All(elem) {
  return document.querySelectorAll(elem)
}

function CLASS(elem) {
  return document.getElementsByClassName(elem)
}

function fetchfeltolt(kulcs, teszttomb) {
  fetch('../json/tesztek.json')
    .then((response) => response.json())
    .then((data) => {
        data[kulcs].forEach((element) => {
          teszttomb.push(element)
        })
    })
    .catch((err) => {
      console.log(err)
    })
}

function tesztvalasztas(){
  var melyikteszt = ''
  const htmlgombok = $All('#gombok>button')
  htmlgombok.forEach((elem) => {
    elem.addEventListener('click', function () {
      melyikteszt = event.target.innerHTML
      if (melyikteszt === "Általános Iskolás") {
        ID('teszt').innerHTML = listabejaras(altalanosteszt)
        helyesvalaszokszerzes(altalanosteszt);
      } else if (melyikteszt === "Középiskolás") {
        ID('teszt').innerHTML = listabejaras(kozepiskolasteszt)
        helyesvalaszokszerzes(kozepiskolasteszt);
      } else if (melyikteszt === "Felnőtt") {
        ID('teszt').innerHTML = listabejaras(felnotteszt)
        helyesvalaszokszerzes(felnotteszt);
      }
      ID("kuldes").innerHTML="<button class='kuldesgomb'>Küldés</button>";
    })
  })
}

function listabejaras(array) {
  var txt = '<form>'
  let db = 1;
  for (let index = 0; index < array.length; index++) {
    let i = 1
    txt+='<div>'
    for (const key in array[index]) {
      if (i === 1) {
        txt += `<p>${array[index][key]}</p>`
      } else if (Object.keys(array[index]).length === 7 && (i < 1 || i < 5)) {
        txt += `<input type="checkbox" id="${db}.valasz" name="${index}.valasz" value="${array[index][key]}">
                <label for="${db}.valasz">${array[index][key]}</label><br>`
                db++;
      } else if (i < 1 || i < 5) {
        txt += `<input type="radio" id="${db}.valasz" name="${index}.valasz" value="${array[index][key]}">
                <label for="${db}.valasz">${array[index][key]}</label><br>`
                db++;
      } else if (i === 5) {
        txt += `<span>${array[index][key]}pont</span><br>`
      }
      i++
    }
    txt+='</div>'
  }
  txt += "</form>"
  return txt
}

function tombtiszit(array){
  while(array.length)
  {
    array.pop();
  }
}

function helyesvalaszokszerzes(array){
  if(helyesvalaszok.length>0){
    tombtiszit(helyesvalaszok);
  }
for (let index = 0; index < array.length; index++) {
  if(Object.values(array[index]).length === 7){
    helyesvalaszok.push(Object.values(array[index])[Object.values(array[index]).length-1]);
    helyesvalaszok.push(Object.values(array[index])[Object.values(array[index]).length-2]);
  }
  else if(Object.values(array[index]).length === 6){
    helyesvalaszok.push(Object.values(array[index])[Object.values(array[index]).length-1]);
  }
  
}
}

function tesztjavitas(){
  ID("kuldes").addEventListener("click", function(){
    let helyesval = 0;
    let valaszokszam = 0;
    const answers = $All('input');
    const answerslabel = document.querySelectorAll('label');
    for (let index = 0; index < answers.length; index++) {
      if(answers[index].checked){
        if(answers[index].value===helyesvalaszok[valaszokszam]){
          answerslabel[index].style.color="green"
          helyesval++;
        }
        else{
          answerslabel[index].style.color="red"
        }
        valaszokszam++;
      }
    }
    window.alert(`Köszönjük, hogy velünk játszottál! \n\nEnnyi pontot szerzett ${helyesval}/${valaszokszam}.`);
  });
}

function init() {
  fetchfeltolt("alt", altalanosteszt);
  fetchfeltolt("kozep", kozepiskolasteszt);
  fetchfeltolt("felnot", felnotteszt);
  tesztvalasztas();
  const felhvalaszok = [];
  tesztjavitas();
  ID("teszt").innerHTML = "<div id='kep'><img src='../kepek/teszt.png' alt='teszt kép'></div>"
  $("footer").innerHTML="<p>&copy Készítette: Xu Jiyu</p>"

}
