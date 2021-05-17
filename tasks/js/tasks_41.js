//			tasks # 41

const btnOne = document.getElementById('btnOne');
document.getElementById('btnOne').addEventListener("click", btnFortyOne);
let str;
function btnFortyOne(str) {

	let myArray = ["Привет Мир", " ! ", "Я проснулся"];
	
	for (let i = 0; i < myArray.length; i++) {

		console.log(typeof str);
		str += myArray[i];
	}
	alert(str);
}
