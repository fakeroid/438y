//	Owl carusel


$(function() {
	$('.works-carousel').owlCarousel({
    	loop:true,
    	margin:30,
    	nav:true,
      dots:true,
      navText : ['<img src="img/left.svg" alt="влево">','<img src="img/right.svg" alt="вправо">'],
    	responsive:{
       		 0:{
           		 items:1
       		 },
        	600:{
            	items:1
        	},
        	1000:{
            	items:1
        	}
    	}
	});
});

//	----------------------------------------------------------

//			фон body в мобильном режиме
const widthUserScreen = screen.width;

if (widthUserScreen < 700) {
	document.body.style.background = "gold";
	document.querySelector('.news').style.color = "#fff";
	console.log(widthUserScreen);
}


if (widthUserScreen < 480) {
	document.body.style.background = "green";
	// console.log(widthUserScreen);
}




// console.log($(document));
//	Формы регистрации и входа 

//----------------------------  Находим форму и её элементы  -------------------------------
const formReg = document.querySelector('#registrationForm');
const inputLogin = document.querySelector('#loginRegInput');
const inputMail = document.querySelector('#mailRegInput');
const inputPassword = document.querySelector('#passwordRegInput');
const inputConfirm = document.querySelector('#confirmReg');
const buttonRegSite = document.querySelector('#buttonRegist');
const buttonReset = document.querySelector('#buttonReset');

//----------------------------	Cоздаем событие ----------------------------

document.getElementById('buttonRegist').addEventListener('click', registrationSite);


function registrationSite(event) {
	event.preventDefault();
	//----------------	Проверяем коректность вводимых данных и удоляем ссылку регистрации -------------------------
	let log = inputLogin.value;
	let pas = inputPassword.value;
	let ema = inputMail.value;
	let con = inputConfirm.value;

	if (log == "" || pas == "" || ema == "" || con == "") {

		let span = document.createElement('span');
		span.id = "mistake";
		span.className = "mistakeSpan";
		span.textContent = "Не корректный ввод данных";
		document.getElementById('registrationForm').insertAdjacentElement("beforebegin", span);
		timedInfo();

		function timedInfo() {
			setTimeout(three, 4000);
		}

		function three() {
			span.remove();
		}
		// alert("Не корректный ввод данных");
	} else if (isNaN(+pas) || isNaN(+con)) {

		let span = document.createElement('span');
		span.id = "mistake";
		span.className = "mistakeSpan";
		span.textContent = "Пароль не число";
		document.getElementById('registrationForm').insertAdjacentElement("beforebegin", span);
		timedInfo();

		function timedInfo() {
			setTimeout(three, 4000);
		}

		function three() {
			span.remove();
		}

		// alert("Пароль не число");
	} else if (Number(pas) !== Number(con)) {

		let span = document.createElement('span');
		span.id = "mistake";
		span.className = "mistakeSpan";
		span.textContent = "Введеные пароли не совпадают";
		document.getElementById('registrationForm').insertAdjacentElement("beforebegin", span);
		timedInfo();

		function timedInfo() {
			setTimeout(three, 4000);
		}

		function three() {
			span.remove();
		}

		// alert(`Введеные пароли не совпадают`);
	} else {
		let account = { //	Создаём обЪект хронящий данные о пользователе
			name: "Администратор",
			password: 12345,
			email: "Mariy@mail.ru",
		}

		account.name = log;
		account.password = Number(pas);
		account.email = ema;
		document.querySelector('#registrHom').style.display = "none";

		let span = document.createElement('span');
		span.id = "mistake";
		span.className = "mistakeSpan";
		span.textContent = "Вы зарегестрированны, нажмите вернуться";
		document.getElementById('registrationForm').insertAdjacentElement("beforebegin", span);
		timedInfo();

		function timedInfo() {
			setTimeout(three, 4000);
		}

		function three() {
			span.remove();
		}

		console.log(account.name);
		console.log(account.password);
		console.log(account.email);
		console.log(account);

		//		--------------------- формпа авторизации ----------------------------

		const enterHome = document.getElementById('enterHom');
		// console.log(enterHome);


		//--------------------------------- Событие авторизации ---------------------------

		document.getElementById('enterHom').addEventListener('click', loginHom);

		function loginHom(event) {
			event.preventDefault();

			if (!document.getElementById('divForm') && !document.getElementById('enterForm') && !document.getElementById('labelLogin') && !document.getElementById('inputLogin') && !document.getElementById('labelPassword') && !document.getElementById('inputPassword') && !document.getElementById('btnEnter') && !document.getElementById('btnTwo') && !document.getElementById('btnExit')) {

				const div = document.createElement('div');
				div.id = "divForm";
				div.className = "divForm";

				const form = document.createElement('form');
				// form.setAttribute("method", "post");
				form.id = "enterForm";
				form.className = "formOne";

				const labellog = document.createElement('label');
				labellog.id = "labelLogin";
				labellog.className = "labelOne";
				labellog.textContent = "Введите логин:";

				const inputLog = document.createElement('input');
				inputLog.setAttribute = ("type", "text");
				inputLog.setAttribute = ("name", "login");
				// inputLog.setAttribute = ("placeholder", "Логин");
				inputLog.id = "inputLogin";
				inputLog.className = "inputOne";

				const labelPass = document.createElement('label');
				labelPass.id = "labelPassword";
				labelPass.className = "labelTwo";
				labelPass.textContent = "Введите пароль:";

				const inputPass = document.createElement('input');
				inputPass.setAttribute = ("type", "password");
				inputPass.setAttribute = ("name", "regPassword");
				// inputPass.setAttribute = ("placeholder", "Пароль");
				inputPass.id = "inputPassword";
				inputPass.className = "inputTwo";

				const buttonEnter = document.createElement('button');
				buttonEnter.setAttribute = ("type", "submit");
				buttonEnter.id = "btnEnter";
				buttonEnter.className = "btnOne";
				buttonEnter.textContent = "Войти";

				const buttonReset = document.createElement('button');
				buttonReset.setAttribute = ("type", "reset");
				buttonReset.id = "btnTwo"
				buttonReset.className = "btnTwo"
				buttonReset.textContent = "Сбросить";

				const buttonExit = document.createElement('button');
				buttonExit.setAttribute = ("type", "submit");
				buttonExit.id = "btnExit"
				buttonExit.className = "btnThree"
				buttonExit.textContent = "Выйти";

				//----------------- ВВодим элеметы непосредственно в форму ---------------------------------

				form.appendChild(labellog);
				form.appendChild(inputLog);

				form.appendChild(labelPass);
				form.appendChild(inputPass);

				form.appendChild(buttonEnter);
				form.appendChild(buttonReset);
				form.appendChild(buttonExit);


				//----------------- Активирование события авиторизации ---------------------------------------

				setTimeout(() => {
					document.getElementById('enterHom').insertAdjacentElement("afterend", div);
					document.getElementById('enterHom').insertAdjacentElement("afterend", form);

					// document.getElementById('enterHom').insertAdjacentElement("afterend", labellog);
					// document.getElementById('enterHom').insertAdjacentElement("afterbegin", inputLog);

					// document.getElementById('enterHom').insertAdjacentElement("afterend", labelPass);
					// document.getElementById('enterHom').insertAdjacentElement("afterbegin", inputPass);

					// document.getElementById('enterHom').insertAdjacentElement("beforeend", buttonReg);
					// document.getElementById('enterHom').insertAdjacentElement("beforeend", buttonReset);
					// document.getElementById('enterHom').insertAdjacentElement("beforeend", buttonExit);
				}, 500);

				//------------------------------- выход без пароля ---------------------------------
				buttonExit.addEventListener('click', loginExit);

				function loginExit() {
					setTimeout(() => {
						div.remove();
						form.remove();
					}, 500);

				}
				//--------------------------------------- введение логина и пароля	---------------------

				buttonEnter.addEventListener('click', logSite);

				function logSite() {
					let login = inputLog.value;
					let pass = inputPass.value;
					// let email = inputMail.value;
					if (login === "" || pass === "") {

						let span = document.createElement('span');
						span.id = "mistake";
						span.className = "mistakeSpan";
						span.textContent = "Допущена пустая строка!";
						document.getElementById('divForm').insertAdjacentElement("beforebegin", span);
						timedInfo();

						function timedInfo() {
							setTimeout(three, 4000);
						}

						function three() {
							span.remove();
						}

					} else if (isNaN(+pass)) {

						let span = document.createElement('span');
						span.id = "mistake";
						span.className = "mistakeSpan";
						span.textContent = `Пароль ${pass}  не число!`;
						document.getElementById('divForm').insertAdjacentElement("beforebegin", span);
						timedInfo();

						function timedInfo() {
							setTimeout(three, 4000);
						}

						function three() {
							span.remove();
						}

					} else if (Number(pass) !== Number(account.password) || login !== account.name) {


						let span = document.createElement('span');
						span.id = "mistake";
						span.className = "mistakeSpan";
						span.textContent = `Не верный логин:  ${login}  или пароль:  ${pass}`;
						document.getElementById('divForm').insertAdjacentElement("beforebegin", span);
						timedInfo();

						function timedInfo() {
							setTimeout(three, 4000);
						}

						function three() {
							span.remove();
						}

					} else {
						setTimeout(() => {
							div.remove();
							form.remove();
						}, 500);
						enterHome.textContent = "Выйти"
						document.querySelector('.titleLogin').textContent = `:  ${login}`;

						let span = document.createElement('span');
						span.id = "mistake";
						span.className = "mistakeSpan";
						span.textContent = `Вы вошли в аккаунт под именем ${login}`;
						document.getElementById('enterHom').insertAdjacentElement("beforebegin", span);
						timedInfo();

						function timedInfo() {
							setTimeout(three, 4000);
						}

						function three() {
							span.remove();
						}

					}
				}
				//----------------------------------------Выход из меню вход ------------------------------

				// 	setTimeout(() => {
				// 	document.getElementById('divForm').remove();
				// 	document.getElementById('enterForm').remove();
				// }, 500);

			}

		}
	}
}

//	------------------------------- Меню выбора покупки по категортям -------------------------
const seasonForms = document.getElementById('seasonForms');
const sizeForm = document.getElementById('sizeForm');
const viewForm = document.getElementById('viewForm');
const	pricesForm = document.getElementById('pricesForm');
const optionTitle = document.getElementById('optionTitle');
const optionOne = document.getElementById('optionOne');
const optionTwo = document.getElementById('optionTwo');
const optionThree = document.getElementById('optionThree');
const optionFour = document.getElementById('optionFour');
const optionFive = document.getElementById('optionFive');
const optionSix = document.getElementById('optionSix');
const optionSeven = document.getElementById('optionSeven');
const optionEight = document.getElementById('optionEight');
const optionNine = document.getElementById('optionNine');
const optionTen = document.getElementById('optionTen');
const optionEleven = document.getElementById('optionEleven');
const optionTwelve = document.getElementById('optionTwelve');
const optionThitreen = document.getElementById('optionThitreen');
const optionFourteen = document.getElementById('optionFourteen');
const optionFivteen = document.getElementById('optionFivteen');
const optionSeventeen = document.getElementById('optionSeventeen');
const optionEighteen = document.getElementById('optionEighteen');
const optionNineteen = document.getElementById('optionNineteen');
const optionTwenty = document.getElementById('optionTwenty');
const optionTwentyone = document.getElementById('optionTwentyone');

let check = document.querySelectorAll('input[name="seasonShop"]');
for (let i = 0; i < check.length; i++) {
	check[i].addEventListener('click', function (event) {
		// alert(this.value);
		if (this.value === "spring") {
			//------------------------	Весенняя коллекция	----------------
			optionTwo.style = "display: flex";
			optionThree.style = "display: flex";
			optionEight.style = "display: flex";
			optionNine.style = "display: flex";

			optionFour.style = "display: none";
			optionFive.style = "display: none";
			optionSix.style = "display: none";
			optionSeven.style = "display: none";

		} else if (this.value == "summer") {
			//-------------------------	Удоляем весеннюю коллекцию -------------------------------
			optionTwo.style = "display: none";
			optionThree.style = "display: none";
			optionEight.style = "display: none";
			optionNine.style = "display: none";

			setTimeout(() => {
				optionOne.style = "display: none";
				optionTen.style = "display: none";
				optionTitle.style = "display: none"
			}, 500);
			//---------------------------------------- Вставляем летнюю коллекцию	-----------------------------------

			optionFour.style = "display: flex";
			optionFive.style = "display: flex";
			optionSix.style = "display: flex";
			optionSeven.style = "display: flex";

		} else if (this.value == "autumn") {

			//--------------------------------------- Удоляни летнюю коллекцию -------------------------------------------

		
			optionFour.style = "display: none";
			optionFive.style = "display: none";
			optionSix.style = "display: none";
			optionSeven.style = "display: none";

			//-----------------------------------Вставляю осеннюю колекцию ------------------------------------------
			optionSeventeen.style = "display: flex"
			optionEleven.style = "display: flex";
			optionTwelve.style = "display: flex";
		} else {

			setTimeout(() => {
				optionEleven.style = "display: none";
				optionTwelve.style = "display: none";
				optionTitle.style = "display: none";
			}, 500);
			//------------------------------ Вставляю зимнюю коллекцию	------------------------------------
			setTimeout(() => {
				optionFour.style = "display: flex"
				optionOne.style = "display: flex";
				optionTen.style = "display: flex";
			}, 500);
		}

	});
}

//---------------------------------- выбор по цене-------------------------------

let scaleShop = document.querySelectorAll('input[name="scale"]');
let prices = document.querySelectorAll('input[name="prices"]');
const titleMens = document.querySelector('.title-mens');
const mens = document.querySelectorAll('.mens');


for (let i = 0; i < scaleShop.length; i++) {

	scaleShop[i].addEventListener('click', function () {

		for (let j = 0; j < prices.length; j++) {

			let option = Number(prices[j].value);

			if (option > Number(1000) && option < Number(scaleShop[i].value)) {
				document.querySelectorAll('.mens')[j].style = "display: flex";
				document.querySelector('.title-mens').style = "display: none";

			} else {
				document.querySelectorAll('.mens')[j].style = "display: none";
			}
			
		}

	});
	continue;
}

//---------------------------------- выбор По размеру-------------------------------

let sizeShop = document.querySelectorAll('input[name="sizeShop"]');
let size = document.querySelectorAll('input[name="size"]');

for (let i = 0; i < sizeShop.length; i++) {

	sizeShop[i].addEventListener('click', function () {

		for (let j = 0; j < size.length; j++) {

			let option = Number(size[j].value);

			if ( option == Number(sizeShop[i].value)) {
				mens[j].style = "display: flex";
				titleMens.style = "display: none";

			} else {
		
			}
			
		}
		
	});
	continue;
}

//----------------------------------------	Выбор по категории товара  ---------------------------

let viewShop = document.querySelectorAll('input[name="viewShop"]');
let jockets = document.querySelectorAll('.jockets');
let trousers = document.querySelectorAll('.trousers');
let shirt = document.querySelectorAll('.shirt');
let suit = document.querySelectorAll('.suit');
let sweatshirts = document.querySelectorAll('.sweatshirts');

for (let i = 0; i < viewShop.length; i++) {

	viewShop[i].addEventListener('click', function (value) {
		// alert(this.value);
		//	-------	Блок куртки	----------------------
		if (this.value === "jockets") {
			let number = 1;
			switch (number) {
				case 1:
					for (let j = 0; j < mens.length; j++) {
						let option = this.value;
						if ( option === "jockets") {
							document.querySelectorAll('.jockets')[j].style = "display: flex";
							optionTitle.style = "display: none";
							document.querySelectorAll('.trousers')[j].style = "display: none";
							document.querySelectorAll('.shirt')[j].style = "display: none";
						} else {	
			
						}
					}
					break;
			}
				// Блок куртки конец----------
				alert(this.value[i]);
		} else if (this.value === "trousers") {
			let number = 1;
			switch (number) {
				case 1:
				for (let j = 0; j < mens.length; j++) {
					let option = this.value;
						if (option === "trousers") {
							document.querySelectorAll('.trousers')[j].style = "display: flex";
							optionTitle.style = "display: none";
							document.querySelectorAll('.jockets')[j].style = "display: none";
							document.querySelectorAll('.shirt')[j].style = "display: none";
						}	else {

					}
				}
				break;	
			}
				//	Блок брюки конец -------------------

		}	else if (this.value === "shirt") {
			let number = 1;
			switch (number) {
				case 1:
				for (let j = 0; j < mens.length; j++) {
					let option = this.value;
					if (option === "shirt") {
						document.querySelectorAll('.shirt')[j].style = "display: flex";
							optionTitle.style = "display: none";
							document.querySelectorAll('.jockets')[j].style = "display: none";
							document.querySelectorAll('.trousers')[j].style = "display: none";
					}	else {

					}
				}
				break;
			}
				//	Блок рубашки конец ------------------------
				console.log(sweatshirts);	
		}	else if (this.value === "suit") {
			let number = 1;
			switch (number) {
				case 1:
					for (let j = 0; j < mens.length; j++) {
						let option = this.value;
						if (option === "suit") {
							document.querySelectorAll('.suit')[j].style = "display: flex";
							document.querySelectorAll('.jockets')[j].style = "display: none";
							document.querySelectorAll('.trousers')[j].style = "display: none";
							document.querySelectorAll('.shirt')[j].style = "display: none";
						}	else {

						}
					}	
					break;
			}
				//	Блок костюмы конец	--------------------
			
		}	else if (this.value === "sweatshirts") {
			let number = 1;
			switch (number) {
				case 1:
					for (let j = 0; j < mens.length; j++) {
						let option = this.value;

						if (option === "sweatshirts") {
							document.querySelectorAll('.sweatshirts')[j].style = "display: flex";
							document.querySelectorAll('.jockets')[j].style = "display: none";
							document.querySelectorAll('.trousers')[j].style = "display: none";
							document.querySelectorAll('.shirt')[j].style = "display: none";
							document.querySelectorAll('.suit')[j].style = "display: none";
						}	else {

						}
					}
				break;
			}
				//		Блок кофты конец -----------------------
		} 
			
	return value;
	});
	continue;
}
//		-------------------------------------------------------