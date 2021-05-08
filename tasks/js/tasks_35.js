//			Tasks № 35

let numbOne = Number(prompt("Для сравнения двух чисел введите первое: "));
let numbTwo = Number(prompt("А теперь введите второе: "));
let numb;
function comparingsNumb(numb){
	if(numbOne == numbTwo){
		return true;
	}
	     return false;
}
alert(comparingsNumb(numb));

//			Tasks № 36

let sumb = prompt("Введите символ: ");
let num = Number(prompt("введите колличество итераций: "));

function progresSumbol(sumb) {
	let mas = [];
	let str = sumb;
	for(let i = 0; i < num; i++) {
		mas.push(str);
		str += sumb;
	}
	return mas;
}
console.log(progresSumbol(sumb));

//			tasks № 37 (Решение без функции)

let mas = [3, -1, 5, -11, 54, 100, -34, 22, 6, 5.5, 200];
alert(`У нас есть массив MAS [${mas}]. Уберем из него отрицательные числа.`);
// let newMas = [];
// let num = 0;
// 	for(let i = 0; i < mas.length; i++){
// 		if (mas[i] > 0) {
// 			newMas.push(mas[i]);
// 		}
// }
// alert(`Как видите в новом массиве newMas [${newMas}] только положительные числа.\n в отличии от старого mas  ${mas}`);

//        Решение с функцией

 function isPositive(mas) {
 	let positive = [];
	for(let i = 0; i < mas.length; i++) {
		if (mas[i] > 0) {
		positive.push(mas[i]);
		}
	}
	return positive;
}
alert(`Как видите в новом массиве  POSITIVE   [ ${isPositive(mas)} ] только положительные числа.\n в отличии от старого MAS [${mas}]`);