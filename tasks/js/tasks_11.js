//       //  Вариант № 1

// //  Создаём переменные (а), (b) и (c)

// let a, b, c;

// //  Спрашиваем у пользователя: нужно ли ему что-то вычисить?

// let question = confirm("Go to calculations: ?");

// if (question == true) {
//   a = prompt("Enter the numbet A: ");
//   b = prompt("Enter the number B: ");
//   c = prompt(`Какую операцию произвести:\n
//     1 сложение\n
//     2 вычитание\n
//     3 умножение\n
//     4 деление
//     `);
// }

// if (!a && typeof a == "object" || !b && typeof b == "object") {
//   alert("You canceled!");
// } 
// else {
//   if (a == "" || b == "" || c == "") {
//     alert("You not enter anything!");
//   } else {
//     if (isNaN(+a) || isNaN(+b) || isNaN(+c)) {
//       alert("It\`s not a number!");
//     } else {
//       let calculyte = 0;
//       switch (c) {
//         case "1":
//           calculyte = a + b;
//           alert(`Сумма А и B = ${calculyte}`);
//           break;

//         case "2":
//           calculyte = a - b;
//           alert(`Разность A и B = ${calculyte}`);
//           break;
//         case "3":
//           calculyte = a * b;
//           alert(`Произведение А и В = ${calculyte}`);
//           break;
//         case "4":
//           calculyte = a / b;
//           alert( `Частное А и В = ${calculyte}`);
//           //отмена (закрытие меню)
//         case "0":
//         case null:
//           cancel = false;
//           break;
//         default:
//           alert("Ошибка! Неверный выбор!!!");
//           break;
//       }
//     }
//   }

// }

//    ***************** Вариант № 2

let str = [];
let num = [];

//   ВВодим переменные и проверяем кокого типа они:
let a = +prompt(`ВВедите значение 1: ?`);
if(isNaN(+a)) {
  str.unshift(a);
  alert(`${str} -  Это не число!!!`);
}
else {
  num.unshift(a);
  let b = +prompt(`ВВедите значение 2: ?`);
  if (isNaN(+b)) {
    str.push(b);
    alert(`${str} -  Это не число!!!`);
  }
  else {
    num.push(b);
    let sum;
    alert(`Вы ввели в массив Num два числа: ${num}`);
    alert(`А теперь мы их сложим ${num[0]} + ${num[1]} = ${sum = a + b} `);
  }
}