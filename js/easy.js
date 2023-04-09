const elEasy = document.querySelector(".js_easy");
const elMedium = document.querySelector(".js_medium");
const elHard = document.querySelector(".js_hard");
const easyStart = document.querySelector(".js-easyStart");
const mediumStart = document.querySelector(".js-mediumStart");
const hardStart = document.querySelector(".js-hardStart");
const elList = document.querySelector(".js-list");
const elLevel = document.querySelector(".js_level");
let elScore = document.querySelector(".js-score");
const elStarter = document.querySelector(".js_starter")
const elCong = document.querySelector(".js-cong")
// const elModal = document.querySelector(".js_modal")
const elOverlay= document.querySelector(".overlay")
const elReloder= document.querySelector(".js_reloder")
const elResult= document.querySelector(".js_result")
let f = false;
let s = false;
let u = false;
let firstCard, secondCard;
let arr = [];

let newArrs = [];
var n = [];
elCong.style.display = "none"

function Myfunc(array, node) {
  node.innerHTML = "";

  for (var a of array) {
    var createColBox = document.createElement("div");
    createColBox.setAttribute(
      "class",
      `col-4 text-center mb-5 ms-2 text-white btn m0-auto mybtn ${a.en} id_${a.id} `
    );
    createColBox.setAttribute("id", ` id_${a.id} `);
    createColBox.setAttribute("formTarget", ` id_${a.id} `);
    const random = Math.floor(Math.random() * 200) + 1
    color =random + 36
    createColBox.style.backgroundColor = 'hsl('+ random +',55%,50%)'
    createColBox.style.color = 'hsl('+ color +',25%,50%)'
    var pushToRow = node.appendChild(createColBox);

    var createName = document.createElement("h3");
    createColBox.innerHTML = a.en;
  }
  for (var a of array) {
    var createColBox = document.createElement("button");
    createColBox.setAttribute(
      "class",
      `col-4 text-center mb-5 ms-2 text-white btn m0-auto btn-warning ${a.uz}  `
    );
    createColBox.setAttribute("id", ` id_${a.id} `);
    createColBox.setAttribute("formTarget", ` id_${a.id} `);
    const random = Math.floor(Math.random() * 200) + 1
    color =random + 36
    createColBox.style.backgroundColor = 'hsl('+ random +',55%,50%)'
    createColBox.style.color = 'hsl('+ color +',35%,90%)'
    var pushToRow = node.appendChild(createColBox);
    var createName = document.createElement("h3");
    createColBox.innerHTML = a.uz;
  }
}


let res = [];

elStarter.addEventListener("click" , (evt) =>{
  evt.preventDefault()
  elStarter.classList.add("dn")
  for (var i = 0; i < 4; i++) {
    n.push(Math.floor(Math.random() * 20) + 1);
  }
  for (let i = 0; i < n.length; i++) {
    newArrs.push(easy[n[i]]);
  }
  Myfunc(newArrs, elList);
  const myTimeout = setTimeout(myGreeting, 10000);
  function myGreeting() {
    Myfunc(res, elList);
    elOverlay.style.display ="flex"
  }
  function myStopFunction() {
    clearTimeout(myTimeout);
    elOverlay.style.display ="flex"
  }
})
let IdArr = [];
let ids =0
elScore.style.display = "none";
let num = 0;
elList.addEventListener("click", (evt) => {
  evt.preventDefault();
  let elId = "";
  easy.forEach((el, i) => {
    if (evt.target.matches(`.${el.en}`)) {
      f = true;
      IdArr.push(evt.target.getAttribute("id"));
      arr.push(evt.target);
    } else if (evt.target.matches(`.${el.uz}`)) {
      console.log(evt.target);
      u = true;
    }
    if (IdArr[0] == evt.target.formTarget && f) {
      arr[0].style.visibility = "hidden";
      evt.target.style.visibility = "hidden";
      elCong.style.display = "flex"
      setTimeout(() => {
      elCong.style.display = "none"
      }, 1000);
      elScore.style.display = "block";
      num++;
      f = false;
      arr.length = 0;
      IdArr.length = 0;
    }
  });
  elScore.textContent = num;
  elResult.textContent = ` ${num}  ta to'gri toptingiz  ${num >0 ? " ajoyib" :"O'z ustingizda ishlang " }` 
  console.log(num);
  localStorage.setItem("record" , num)
});




elReloder.addEventListener("click" , ()=>{
location.reload()
})
