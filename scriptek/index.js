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

const manipul = [
  {
    szoveg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed rutrum tellus. Vivamus lectus nisi.",
    kep: "../kepek/ruha1.jpg",
    link: "cikk.html",
  },
  {
    szoveg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed rutrum tellus. Vivamus lectus nisi.",
    kep: "../kepek/ruha2.jpg",
    link: "galeria.html",
  },
  {
    szoveg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed rutrum tellus. Vivamus lectus nisi.",
    kep: "../kepek/ruha3.jpg",
    link: "jatek.html",
  },
  {
    szoveg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed rutrum tellus. Vivamus lectus nisi.",
    kep: "../kepek/ruha4.jpg",
    link: "teszt.html",
  } 
]

function init() {
  let txt = "";
  for (let index = 0; index < manipul.length; index++) {
      //txt += `<div id="mellék_div"><div><p>${manipul[index].szoveg}</p></div><div><a href=${manipul[index].link}><img src="${manipul[index].kep}"alt="facepalm""/></a></div></div>`;
      //if(index%2===0){
        //txt += `<div id="mellék_div"><div><p>${manipul[index].szoveg}</p></div><div><a href=${manipul[index].link}><img src="${manipul[index].kep}"alt="facepalm""/></a></div></div>`;
      //}
      //else{
          txt +=  `<div id="mellék_div"><div><a href=${manipul[index].link}><img src="${manipul[index].kep}"alt="facepalm""/></a></div><div><p>${manipul[index].szoveg}</p></div></div>`;
      // }
      console.log(txt)
  }
  ID("fodiv").innerHTML= txt;
}
