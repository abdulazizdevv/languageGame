// const elEasy = document.querySelector('.js_easy');
// const elMedium = document.querySelector('.js_medium');
// const elHard = document.querySelector('.js_hard');
// const easyStart = document.querySelector('.js-easyStart');
// const mediumStart = document.querySelector('.js-mediumStart');
// const hardStart = document.querySelector('.js-hardStart');
// const elList = document.querySelector('.js-list');
// const elLevel = document.querySelector(".js_level")
// let f = false;
// let s = false;
// let u = false;
// let firstCard, secondCard;
// let arr = [];


// function Myfunc(array, node) {
// 	node.innerHTML = '';
// 	for (var a of array) {
// 		var createColBox = document.createElement('div');
// 		createColBox.setAttribute(
// 			'class',
// 			`col-3 text-center mb-5 ms-2 text-white btn m0-auto btn-success ${a.en} id_${a.id} `
// 		);
// 		createColBox.setAttribute('id', ` id_${a.id} `);
// 		createColBox.setAttribute('formTarget', ` id_${a.id} `);

// 		var pushToRow = node.appendChild(createColBox);

// 		var createName = document.createElement('h3');
// 		createColBox.innerHTML = a.en;
// 	}
// 	for (var a of array) {
// 		var createColBox = document.createElement('button');
// 		createColBox.setAttribute(
// 			'class',
// 			`col-3 text-center mb-5 ms-2 text-white btn m0-auto btn-warning ${a.uz}  `
// 		);
// 		createColBox.setAttribute('id', ` id_${a.id} `);
// 		createColBox.setAttribute('formTarget', ` id_${a.id} `);

// 		var pushToRow = node.appendChild(createColBox);
// 		var createName = document.createElement('h3');
// 		createColBox.innerHTML = a.uz;
// 	}
// }

// Myfunc(easy, elList);

// let IdArr = [];

// elList.addEventListener('click', (evt) => {
// 	evt.preventDefault();
// 	let elId = '';
// 	easy.forEach((el, i) => {
// 		if (evt.target.matches(`.${el.en}`)) {
// 			f = true;
// 			IdArr.push(evt.target.getAttribute('id'));
// 			arr.push(evt.target);
// 		} else if (evt.target.matches(`.${el.uz}`)) {
// 			console.log(evt.target);
// 			u = true;
// 		}
// 		if (IdArr[0] == evt.target.formTarget && f) {
// 			arr[0].style.visibility = 'hidden';
// 			evt.target.style.visibility = 'hidden';
// 			f = false;
// 			arr.length = 0;
// 			IdArr.length = 0;
// 		}
// 	});
// });
localdata = localStorage.getItem("user")
if(!localdata){
  location.replace("login.html")
}