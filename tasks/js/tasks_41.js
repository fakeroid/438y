//			tasks # 41

const btnOne = document.getElementById('btnOne');
const sampOne = document.getElementById('sampOne');
document.getElementById('btnOne').addEventListener("click", btnFortyOne);

function btnFortyOne() {
	let str = "";

	let myArray = ["Привет Мир", " ! ", "Я проснулся, ", "Но лучше бы... спал."];
	
	for (let i = 0; i < myArray.length; i++) {

		str += myArray[i];
		console.log(str);
	}

	sampOne.insertAdjacentHTML("afterend", `${str}`);
	alert(str);
}

//				Tasks # 42 

const btnTwo = document.getElementById('btnTwo');
const sampTwo = document.getElementById('sampTwo');
document.getElementById('btnTwo').addEventListener("click", btnFortyTwo);

function btnFortyTwo() {
	let myArray = [];
	let min = 0;
	for ( let i = 0; i < 1; i++) {
		myArray.push(Math.floor(Math.random() * 60) + 1);
		min = myArray[i];
		console.log(typeof min);
	}
		if (min > 0 && min <= 15) {
			alert(`Заданное число min =  ${min} находится в первой четверти часа`);
			sampTwo.insertAdjacentHTML("afterend", `Заданное число min =   ${min} находится в первой четверти часа`);
		} else if (min > 15 && min <= 30) {
			alert(`Заданное число min =  ${min} находится во второй четверти часа`);
			sampTwo.insertAdjacentHTML("afterend", `Заданное число min =   ${min}  находится во второй четверти часа`);
		} else if (min > 30 && min <= 45) {
			alert(`Заданное число min =  ${min} находится в третьей четверти часа`);
			sampTwo.insertAdjacentHTML("afterend", `Заданное число min =   ${min}  находится в третьей четверти часа`);
		} else {
			alert(`Заданное число min =  ${min} находится в четвёртой четверти часа`);
			sampTwo.insertAdjacentHTML("afterend", `Заданное число min =   ${min}  находится в четвёртой четверти часа`);
		}
}

//				Tasks # 43 

const btnThree = document.getElementById('btnThree');
const sampThree = document.getElementById('sampThree');
document.getElementById('btnThree').addEventListener("click", btnFortyThree);

function btnFortyThree() {
	let myArray = [];
	let min = 0;
	for ( let i = 0; i < 5; i++) {
		myArray.push(Math.floor(Math.random() * 20) + 1);
		min = myArray[i];
		console.log(typeof min);
		
	}
	sampThree.insertAdjacentHTML("afterend", `${myArray}`);
	alert(myArray);
}
