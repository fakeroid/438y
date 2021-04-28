//Пользователь вводит длину оснований трапеции (a и b), 
//а также высоту трапеции h. Программа выводит сообщение: 
//«Площадь трапеции будет равна <значение>». Площадь
// вычисляется по формуле ((a + b) / 2) * h, где a,
//  b - основания, h - высота. 

//let trapezoidBase_a;
//let trapezoidBase_b;
//let trapezoidHeight;
//let trapezoidArea;

//trapezoidBase_a = +prompt("Введите основание трапеции A:");
//trapezoidBase_b = +prompt("Введите основание трапеции B:");
//trapezoidHeight = +prompt("Введите высщту трапеции H:");

//trapezoidArea = ((trapezoidBase_a + trapezoidBase_b) / 2) * trapezoidHeight;

//alert(trapezoidArea);




//              задача № 3  *******
//
//Пользователь вводит сумму вклада и процент, который будет начисляться
// ежегодно. Отобразить размер вклада поочередно на ближайшие 5 лет. 

//                ****** Решение

// let result; // Итоговая строка вывода
// let period = +prompt("Введите срок вклада: ");
// let contribution = +prompt("Введите сумму вашего вклада:");
// let percentages = +prompt("ВВедите процентную ставку на ваш депозит: "); // Проценты по вкладу

//   if (!contribution && typeof contribution == "object") {
//       alert ("Вы отменили сделку!!!");
//   }

//   else 
//     if (contribution == "") {
//         alert ("вы ни чего не ввели!!!");
//       }

//       else 
//         if(isNaN(+contribution || +percentages || +period)) {
//           alert ("Это не сумма!!!");
//         }
//           else {
//             for(let i = 0; i < period; i++) {
//               contribution += contribution * percentages / 100;
//               result +=`ваш вклад увеличивался ${i} год: ${contribution}\n`;
//             }
//               alert(result);
//         }     



// Программа хранит в двух переменных курс доллара и евро. В первой переменной у вас
// хранится стоимость одного евро в рублях, во второй - стоимость одного доллара в рублях.
// Вы спрашиваете у пользователя, сколько рублей он хочет сконвертировать, получаете это
// число и считаете. Результат надо вывести на страницу с помощью alert.

// let kursDollara = 74.8;
// let kursEuro = 90.5;
// let sumDollars = 0, sumEuro = 0;

// let rubles = prompt("Сумма в рублях:");

// if(!rubles && typeof rubles == "object") {
//   alert("Вы отменили!!!");
// }
// else {

//   if(rubles == "") {
//     alert("Вы ничего не ввели!!!");
//   }
//   else {
//     if(isNaN(+rubles)) {
//       alert("Это не число!");
//     }
//     else {
//       sumDollars = (rubles/kursDollara).toFixed(2);
//       sumEuro = (rubles/kursEuro).toFixed(2);

//       alert(`Сумма в долларах = ${sumDollars}$, сумма в евро = ${sumEuro}\u20AC`);
//     }
//   }
// } 


//            Задача № 4 

// 4.Запросить у пользователя ввод числа и сохранить это число в переменную a. 
//   Если переменная a равна 10, то выведите 'Верно', иначе выведите 'Неверно'. 

//              Решение:

// let a = parseInt(prompt ("Введите пожалуйста Ваше число: "));

// if (a == 10) {
//   alert ("Верно!");
// }
//   else {
//     alert ("Неверно!");
//   }

// задача № 5

// let i = 1;

// //  Цикл с простусловие

// while (i <= 50) {
//   console.log(i + `\n`);
//   i++;
// }


//    калькулятор:
//    Сложение 2-х чисел
//    

// let cancel = true;
// let menu = `Ваш выбор (0 - 6):
//     1. Сложение двух чисел
//     2. Разность двух чисел
//     3. Произведение двух чисел
//     4. Деление двух чисел
//     5. Возведение в степень
//     6.вычисление корня n степени
//     0.Отмена`;

// let result;
// let num1, num2;

// do {
//   let operation = +prompt(menu, "0");

//   switch (operation) {
//     case "1":
//       num1 = +prompt("Первое число: ");
//       num2 = +prompt("Веорое число: ");

//       result = num1 + num2;
//       alert(`Сумма чисел = ${result}`);
//       break;
//     case "2":
//       num1 = +prompt("Первое число:");
//       num2 = +prompt("Веорое число: ");

//       result = num1 - num2;
//       alert(`Разность чисел = ${result}`);
//       break;
//     case " 3 ":
//       num1 = +prompt("Первое число:");
//       num2 = +prompt("Веорое число: ");

//       result = num1 * num2;
//       alert(`Произведение чисел = ${result}`);
//       break;
//     case " 4 ":
//       num1 = +prompt("Первое число:");
//       num2 = +prompt("Веорое число: ");

//       result = num1 / num2;
//       alert(`Деление чисел = ${result}`);
//       break;
//     case " 5 ":
//       break;
//     case " 6 ":
//       break;
//       //Сброс меню
//     case " 0 ":
//       break;
//     case null:
//       cancel = false
//       break;
//   }
// } while (cancel);


//**** Мини-калькулятор ****
// сложение 2-х чисел
// разность 2-х чисел
// произведение 2-х чисел
// частное 2-х чисел
// возведение числа в n-степень
// корень n-й степени

// let cancel = true;
// let menu = `Ваш выбор (0-6):
// 1. Сложение 2-х чисел
// 2. Разность 2-х чисел
// 3. Произведение 2-х чисел
// 4. Деление 2-х чисел
// 5. Возведение числа в n-ю степень
// 6. Вычисление корня n-й степени
// 0. Отмена`;

// let num1, num2;
// let result; //сумма, разность, произведение...

// do {
//   let operation = prompt(menu, "0");

//   switch(operation) {
//     case "1": num1 = +prompt("Первое число:");
//               num2 = +prompt("Второе число:");

//               result = num1 + num2;
//               alert(`Сумма чисел = ${result}`);
//               break;
//     case "2": num1 = prompt("Первое число:");
//               num2 = prompt("Второе число:");

//               result = num1 - num2;
//               alert(`Разность чисел = ${result}`);
//               break;
//     case "3": num1 = prompt("Первое число:");
//               num2 = prompt("Второе число:");

//               result = num1 * num2;
//               alert(`Произведение чисел = ${result}`);
//               break;
//     case "4": num1 = prompt("Первое число:");
//               num2 = prompt("Второе число:");

//               if(num2 != 0) {
//                 result = num1 / num2;
//                 alert(`Частное 2-х чисел = ${result.toFixed(2)}`);
//               }
//               else {
//                 alert(`Делить на 0 нельзя!`);
//               }
//               break;
//     case "5": num1 = prompt("Число:");
//               num2 = prompt("Степень:");

//               if(num2 < 0) {
//                 result = Math.pow(num1, num2).toFixed(4);  
//               }
//               else {
//                 // result = num1**num2;
//                 result = Math.pow(num1, num2);
//               }

//               alert(`Число ${num1} в степени ${num2} = ${result}`);
//               break;
//     case "6": num1 = prompt("Число:");
//               num2 = prompt("Степень корня:");

//               result = Math.pow(num1, 1 / num2);
//               alert(`Корень степени ${num2} из числа ${num1} = ${result}`);

//               break;

//     //отмена (закрытие меню)
//     case "0": 
//     case null: cancel = false;
//               break;
//     default:  alert("Ошибка! Неверный выбор!!!");
//               break;
//   }
// } while(cancel);
