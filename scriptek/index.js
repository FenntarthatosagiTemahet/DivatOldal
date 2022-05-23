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

const manipul = [];
const indexbekezd = [];
const bekezd = indexbekezd.bekezd

function init() {
  fetch("../json/manipul.json")
    .then((response) => response.json())
    .then((data) => {
      data.manipul.forEach((elem) => {
        manipul.push(elem);
      });
      feltolt();
    })
    .catch((err) => {
      console.log(err);
    });
    valami();
}

function valami(){
  fetch("../json/indexbekezd.json")
  .then((response) => response.json())
  .then((data) => {
    data.indexbekezd.forEach((elem) => {
      indexbekezd.push(elem);
    });
    betolt();
  })
  .catch((err) => {
    console.log(err);
  });
}

function betolt(){
  let text = "";
  for (let i = 0; i < indexbekezd.length; i++) {
    for (const key in indexbekezd[i]) {
      if(key.includes("cim")){
        text+=`<h3>${indexbekezd[i][key]}</h3>`;
      }
      else if(key.includes("bekezd")){
          for (let index = 0; index < key.length; index++) {
            if(typeof key[index] ==="undefined"){
              index=key.length;
          }else{
            text+=`<p>${indexbekezd[i][key][index]}</p>`
          }
          }
      }
        
      }
    }
    ID("cikek").innerHTML = text;
    }
    
  
  

function feltolt() {
  let txt = "";
  for (let index = 0; index < manipul.length; index++) {
    txt += `<div id="mellék_div"><div class="ize""><a href=${manipul[index].link}><div class="kep"><img src="${manipul[index].kep}"alt="menuKep""/></div></a></div><div><h4>${manipul[index].cim}</h4><p>${manipul[index].szoveg}</p></div></div>`;
  }
  ID("fodiv").innerHTML = txt;
}
