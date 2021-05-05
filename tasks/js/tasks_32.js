//			Tasks № 32, 33, 34

//			Tasks 32

let numbOne= Number(prompt("Enter one number"));
let numbTwo = Number(prompt("Enter two number"));
if (isNaN(numbOne)) {
	alert("this is not a number!!!");
}
let sum = 0;
let x = String(numbOne);
for(let i = 0; i< x.length; i++) {
	sum += Number(x[i]);
}
	alert(`Сумма цифр первого числа = ${sum}`);

function numberSum(numbTwo){
	let sumb = 1;
	let y = String(numbTwo);
	for(let i = 0; i < y.length; i++) {
		sumb *= Number(y[i]);
	}
	return sumb;
}
alert(`Произведение цифр второго числа = ${numberSum(numbTwo)}`);

//			tasks № 33
//			первый способ
let str = String(prompt("Entr string "));
let newStr = str.replace(str[0], str[0].toUpperCase());
alert(newStr);

let strTwo = String(prompt("Введите второе предложение"));
//			второй спопоб
let registr = strTwo => {
	if (!strTwo) return strTwo;

	return strTwo[0].toUpperCase()+strTwo.slice(1);
}
alert(registr(strTwo));

//			tasks № 34

let leng = Number(prompt(`Создаём числовой массив и рандомно заполняем. \n
	Затем ищем в нём цифру 5. Введите длину массива: `));

let mas = new Array(leng).fill(null);
mas = mas.map(() =>
	(Math.floor(Math.random() * 200) + 1));

alert(mas);

function sortMas(a, b){
	if (a > b){
		return 1;
	} else if (a < b) {
		return -1;
	} else if (a = b) {
		return 0;
	}
}
mas.sort(sortMas);
alert(mas);


// let b = mas.map(function(val){
// 	if (/5/.test(val)) 
// 		return 0;
// 	if (/7/.test(val))		// Метод поиска и удоления элементов в 
// 		return 0; 					// массиве
// 	return val;
// });
// alert(b);

let result = 0;
let n = 5;
for (let i = 0; i < mas.length; i++) {
	if(mas[i] == n) {
		result += 1;
	}
}
if (result !== 0) {
	alert(`В вашем массиве ${result}  пятерок`);
} else {
	alert(`В массиве нет пятерок`);
}
