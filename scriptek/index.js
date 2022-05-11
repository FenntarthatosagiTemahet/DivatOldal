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

function init() {
  fetch("../json/manipul.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log(data.manipul);
      data.manipul.forEach((elem) => {
        manipul.push(elem);
      });
      console.log(manipul);
      feltolt();
    })
    .catch((err) => {
      console.log(err);
    });
}

function feltolt() {
  let txt = "";
  for (let index = 0; index < manipul.length; index++) {
    //txt += `<div id="mellék_div"><div><p>${manipul[index].szoveg}</p></div><div><a href=${manipul[index].link}><img src="${manipul[index].kep}"alt="facepalm""/></a></div></div>`;
    //if(index%2===0){
    //txt += `<div id="mellék_div"><div><p>${manipul[index].szoveg}</p></div><div><a href=${manipul[index].link}><img src="${manipul[index].kep}"alt="facepalm""/></a></div></div>`;
    //}
    //else{
    txt += `<div id="mellék_div"><div><a href=${manipul[index].link}><img src="${manipul[index].kep}"alt="facepalm""/></a></div><div><p>${manipul[index].szoveg}</p></div></div>`;
    // }
    console.log(txt);
  }
  ID("fodiv").innerHTML = txt;
}
