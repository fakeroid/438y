//			фон body в мобильном режиме
const widthUserScreen = screen.width;

if (widthUserScreen < 700) {
	document.body.style.background = "gold";
	document.querySelector('.new-text').style.color = "#fff";
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
const buttonRegSite = document.querySelector('#buttonRegist');
const buttonReset = document.querySelector('#buttonReset');

//----------------------------	Cоздаем событие ----------------------------

document.getElementById('buttonRegist').addEventListener('click', registrationSite);

let ac = {								//	Создаём обЪект хронящий данные о пользователе
	name: "Администратор",
	password: 12345,
	email: "Mariy@mail.ru",
}

function registrationSite(event) {
	event.preventDefault();
	//----------------	Проверяем коректность вводимых данных и удоляем ссылку регистрации -------------------------

		ac.name = inputLogin.value;
		ac.password = inputPassword.value;
		ac.email = inputMail.value;

		console.log(ac.name);
		console.log(ac.password);
		console.log(ac.email);

		if (ac.name == "" || ac.password == "" || ac.email == "") {
			alert("Не корректный ввод данных");
		}	else if(isNaN(+ac.password)) {
			alert("Пароль не число");
		}	else {
			document.querySelector('#registrHom').style.display = "none";
		}

	

// const registrHome = document.getElementById('registrHom');


//------------------------ Событие регистрации 2 с созданием формы ????? ------------------------

// document.getElementById('registrHom').addEventListener('click', registHom);
// function registHom() {
// 	 if (!document.getElementById('divForm') && !document.getElementById('registrForm') && !document.getElementById('labelLogin') && !document.getElementById('inputLogin') && document.getElementById('labelEmail') && document.getElementById('inputEmail') && !document.getElementById('btnRegistr') && !document.getElementById('btnTwo')) {

// 	 	 const div = document.createElement('div');
// 	 	 div.id = "divForm";
// 	 	 div.className = "divForm";

// 		const form = document.createElement('form');
// 		form.id = "registrForm";
// 		form.className = "formOne";
// 		form.textContent = "Окно регистрации";

// 		const labelLog = document.createElement('label');
// 		labelLog.id = "labelLogin";
// 		labelLog.className = "labelOne";
// 		labelLog.textContent = "Введите логин:";

// 		const inputLog = document.createElement('input');
// 		inputLog.id = "inputLogin";
// 		inputLog.className = "inputOne";	

// 		const labelMail = document.createElement('label');				// 	 && !document.getElementById('labelPassword') && !document.getElementById('inputPassword')
// 		labelMail.id = "labelEmail";
// 		labelMail.className = "labelThree";							//	&& document.getElementById('labelEmail') && document.getElementById('inputEmail')
// 		labelMail.textContent = "Введите @ mail:";

// 		const inputMail = document.createElement('input');
// 		inputMail.id = "inputEmail";
// 		inputMail.className = "inputThree";					

//	const labelPass = document.createElement('label');
//	labelPass.id = "labelPassword";
//	labelPass.className = "labelTwo";
//	labelPass.textContent = "Введите пароль:";

//	const inputPass = document.createElement('input');
//	inputPass.id = "inputPassword";
//	inputPass.className = "inputTwo";

// const buttonReg = document.createElement('button');
// buttonReg.id = "btnRegistr";
// buttonReg.className = "btnOne";
// buttonReg.textContent = "Зарегистрироватся";

// const buttonReset = document.createElement('button');
// buttonReset.id = "btnTwo"
// buttonReset.className = "btnTwo"
// buttonReset.textContent = "Сбросить";

//----------------- Активирование события регистрация ---------------------------------------

// 		setTimeout(() =>{ 
// 			document.getElementById('registrHom').insertAdjacentElement("afterend", div);
// 			document.getElementById('registrHom').insertAdjacentElement("afterbegin", form);

// 			document.getElementById('registrHom').insertAdjacentElement("afterend", labelLog);
// 			document.getElementById('registrHom').insertAdjacentElement("afterbegin", inputLog);

// 			document.getElementById('registrHom').insertAdjacentElement("afterend", labelMail);
// 			document.getElementById('registrHom').insertAdjacentElement("afterbegin", inputMail);

// 		//	document.getElementById('registrHom').insertAdjacentElement("afterend", labelPass);
// 		//	document.getElementById('registrHom').insertAdjacentElement("afterbegin", inputPass);

// 			document.getElementById('registrHom').insertAdjacentElement("beforeend", buttonReg);
// 			document.getElementById('registrHom').insertAdjacentElement("beforeend", buttonReset);
// 		}, 500);

// 	} else {

// 	}

// }

const enterHome = document.getElementById('enterHom');
// console.log(enterHome);


//--------------------------------- Событие авторизации ---------------------------

document.getElementById('enterHom').addEventListener('click', loginHom);

function loginHom(event) {
	event.preventDefault();
	if()
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
			let str = inputLog.value;
			let pass = inputPass.value;
			let email = inputMail.value;
			if (str === "" || pass === "") {

				alert("Допущена пустая строка");

			} else if (isNaN(+pass)) { 

				alert(`Пароль не число ${pass}`);

			}	else if (Number(pass) !== Number(ac.password) || str !== ac.name) {
							alert(`Не верный логин:  ${str}  или пароль:  ${pass}`)
			} else {
				div.remove();
				form.remove();
				enterHome.textContent = "Выйти"
				document.querySelector('.titleLogin').textContent = `Логин:  ${str}  Email:  ${email}`;
				alert(`Вы вошли в аккаунт под именем ${str}`);
			}
		}
					console.log(ac);


		//----------------------------------------Выход из меню вход ------------------------------

		// 	setTimeout(() => {
		// 	document.getElementById('divForm').remove();
		// 	document.getElementById('enterForm').remove();
		// }, 500);

	} else {


		}
	}

}