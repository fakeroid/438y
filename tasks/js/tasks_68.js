//			searhe a button

const btnOne = document.getElementById('btnOne');
const btnTwo = document.getElementById('btnTwo');
const btnThree = document.getElementById('btnThree');

//			Привязка события к button

document.getElementById('btnOne').addEventListener("click", tasksSextyEight);

function tasksSextyEight() {

}

document.getElementById('btnTwo').addEventListener("click", tasksSextyNine);

function tasksSextyNine() {

}

//			tasks № 70

document.getElementById('btnThree').addEventListener("click", tasksSeventy);

function tasksSeventy() {

	const url = location.pathname;

function urlUser (url) {
	if (url.substr(-4) == ".php") {
		url = "Да строка заканчивается на .php";
	} else {
		url = "Not a string of .php";
	}
	return url;
}

alert(urlUser(url));


}





