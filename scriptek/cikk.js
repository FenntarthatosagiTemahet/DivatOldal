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

const lista = [];

function init(){
/*    for (let index = 0; index < cikkek.length; index++) {
        for (const key in cikkek[]) {

      }
        */

      
      fetch("../json/cikkek.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(data.cikkek);
        data.cikkek.forEach((elem) => {
          lista.push(elem);
        });
        console.log(lista);
        feltolt();
      })
      .catch((err) => {
      console.log(err);
      });
    }


    function feltolt(){
        let txt = ""; 
        for (let index = 0; index < lista.length; index++) {
          txt+=`<div class="mellekdiv">`;              /*"<div id='mellekdiv"+index+"'>";*/
          for (const key in lista[index]) {
            if(key.includes("focim")){
              txt+=`<h1>${lista[index][key]}</h1>`
            // } else if((key.includes("bekezdeslista"))){
              // txt+=`<p>${lista[index][key]}</p>`
            }else if((key.includes("cikk_iroja"))){
              txt+=`<p>${lista[index][key]}</p>`
            }
            }
            txt+=`<a href="../html_oldalak/feltcikk.html"><button value="${index}" id="refgmb${index}">Bővebben</button></a></div>`
          }
         
        console.log(txt);
        ID("cikkContainer").innerHTML = txt;
        // ID("headerid").innerHTML = "cikkek" 
        gomb();
    }

      function gomb(){
        let egeszcikk = "";
        let gomblista = document.querySelectorAll("button")
        for (let index = 0; index < gomblista.length; index++) {
          gomblista[index].addEventListener("click", function(event){
            let gombertek = event.target.value 
            localStorage.setItem("aktualisgomb", JSON.stringify(lista[gombertek]))
          })
        }
      }


        




    


