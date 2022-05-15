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
        console.log(helyesvalaszok)
      } else if (melyikteszt === "Középiskolás") {
        ID('teszt').innerHTML = listabejaras(kozepiskolasteszt)
        helyesvalaszokszerzes(kozepiskolasteszt);
        console.log(helyesvalaszok)
      } else if (melyikteszt === "Felnőtt") {
        ID('teszt').innerHTML = listabejaras(felnotteszt)
        helyesvalaszokszerzes(felnotteszt);
        console.log(helyesvalaszok)
      }
    })
  })
}

function listabejaras(array) {
  var txt = '<form>'
  let db = 1;
  for (let index = 0; index < array.length; index++) {
    let i = 1
    for (const key in array[index]) {
      if (i === 1) {
        txt += `<label for="${index}.kerdes">${array[index][key]}</label><br>`
      } else if (Object.keys(array[index]).length === 7 && (i < 1 || i < 5)) {
        txt += `<input type="checkbox" id="${db}.valasz" name="${index}.valasz" value="${index}.valasz">
                <label for="${db}.valasz">${array[index][key]}</label><br>`
                db++;
      } else if (i < 1 || i < 5) {
        txt += `<input type="radio" id="${db}.valasz" name="${index}.valasz" value="${index}.valasz">
                <label for="${db}.valasz">${array[index][key]}</label><br>`
                db++;
      } else if (i === 5) {
        txt += `<p>${array[index][key]}pont</p>`
      }
      i++
    }
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
  if(Object.keys(array[index]).length === 7){
    helyesvalaszok.push(Object.keys(array[index])[Object.keys(array[index]).length-1]);
    helyesvalaszok.push(Object.keys(array[index])[Object.keys(array[index]).length-2]);
  }
  else if(Object.keys(array[index]).length === 6){
    helyesvalaszok.push(Object.keys(array[index])[Object.keys(array[index]).length-1]);
  }
  
}
}

function init() {
  fetchfeltolt("alt", altalanosteszt);
  fetchfeltolt("kozep", kozepiskolasteszt);
  fetchfeltolt("felnot", felnotteszt);
  tesztvalasztas();
  const felhvalaszok = [];
  ID("kuldes").addEventListener("click", function(){
    const answers = document.querySelectorAll('input');
    answers.forEach((element)=>{
      if(element.checked){
        felhvalaszok.push(element);
      }
    })
  });
}
