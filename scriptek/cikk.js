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
          txt+=`<div class="mellekdiv">`;              
          for (const key in lista[index]) {
            if(key.includes("focim")){
              txt+=`<h1>${lista[index][key]}</h1>`

            }else if((key.includes("cikk_iroja"))){
              txt+=`<p>${lista[index][key]}</p>`
            }
            }
            txt+=`<a href="../html_oldalak/feltcikk.html"><button value="${index}" id="refgmb${index}">Bővebben</button></a></div>`
          }
         
        console.log(txt);
        ID("lab").innerHTML = "&copy Készítette: Paál Ádám";
        ID("cikkContainer").innerHTML = txt;

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


        




    


