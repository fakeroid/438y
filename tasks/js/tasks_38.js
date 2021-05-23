// //			tasks № 38 решение без рекурсии

const btnOne = document.getElementById('btnOne');
document.getElementById('btnOne').addEventListener("click", btnThirtyEight);

function btnThirtyEight() {

let numArr = [];

for (let i = 0; i < 10; i++) {
	numArr.push(Math.ceil(Math.random() * 10));
}

	let longArr = Number(prompt("Определите необходимую длинну добавления массива: "));
	let num = 0;
	for (let i = 0; i < longArr; i++) {
		num = Number(prompt("Введите элемент массива:"));
			numArr.push(num);
	}

numArr.sort(function(a, b) {
	return a - b;
});
console.log(numArr);
alert(`Выводим массив [ ${numArr} ] без рекурсии и сортируем его [ ${numArr} ]`);


//						tasks №38  решение с рекурсией

let mas = [];

const setElements = () => {
   for (let i = 0; i < 10; i++) {
      mas.push(Math.ceil(Math.random() * 10));

			mas.sort(function(a, b) {
				return a - b;
			});
   }
}

setElements();

const getElements = (index) => {

   if (index < (mas.length - 1)) {
      return mas[index].toString() + ', ' + getElements(++index);
   }
   return mas[index].toString() + '!';
}

alert(`Сортированный массив ${mas}  выведен с помощью рекурсии: ${getElements(0)}`);

}
 //			tasks № 39.1

 const btnTwo = document.getElementById('btnTwo');
 document.getElementById('btnTwo').addEventListener("click", btnThirtyNine);
 
 function btnThirtyNine() {

 let numTwo = 0;
 let str;
 let i;
 for(i = 1; i < 100; i++) {
 	numTwo += "\n" + i;
	
 }
 		alert(numTwo);

 //			tasks № 39.2

 let sumb = "\n";
 let set = sumb =>{
 	let str = 0;
 	for(let i = 1; i < 100; i++) {
 		str += sumb;
 		str += "" + i;
 	}
 	return str;
 }
 alert(set(sumb));

 }
 //			tasks № 40 

const btnThree = document.getElementById('btnThree');
const code = document.getElementById('code');

document.getElementById('btnThree').addEventListener("click", btnForty);

function btnForty() {

	if (!document.getElementById('image') && !document.getElementById('code')) {
		const img = document.createElement('img');
		img.id = 'image';
		img.alt = "Foto";
		img.src = "img/tasks40.png";
		img.className = "image";
		
		setTimeout(() =>{
		document.getElementById('btnThree').insertAdjacentElement("afterend", img);
		document.getElementById('code').remove();
		document.getElementById('btnThree').textContent = "Скрыть фотографию";
		}, 500);

		img.addEventListener("click", showSrc);
	
	} else {
		setTimeout(() =>{
		document.getElementById('image').remove();
		document.getElementById('btnThree').textContent = "Решение задачи";
		}, 500);
	}

}
 
function showSrc(e) {
	const src = e.target.src;

	showMessage(src);
}

function showMessage(src) {
	if (!document.getElementById("mesage")) {
	const div = document.createElement('div');
	div.id = "mesage";
	div.className = "event";

	div.innerHTML = `<p>Адрес картинки: ${src}</p>`;

		document.getElementById("image").insertAdjacentElement("afterend", div);
	}
}
		
		
