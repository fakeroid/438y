// //          Вариант № 1
// //    Создаём массив product

// let product = [];
// let a, b;
// //    Заполняем  положительными числами

// let x = Number(prompt("Введите целое положительное число: "));

// //    Проверяем его на требуемые параметры

// x > 0 ? (a = x * 2, b = x * 3, product.push(x, a, b),
//   alert(`Последовательность ваших чисел: ${product}`)
// ) : alert(`Не правильно: !`);

//        Вариант № 2
let arr = [];
let x, a, b;
let num = Number(prompt("Ваше число ? "));

if (!num && typeof num == "object") {
  alert("отмена");
}
 else if (num == "") {
    alert("Вы не чего не ввели, попробуйте ещё раз: ");
  }
   else if (isNaN(num)) {
      alert("Это не число, попробуйте ещё раз: ");
    }
     else {

       x = num;
       a = x * 2;
       b = x * 3;
      arr.push(x, a, b);
      alert(`Результат ваших действий:\n массив arr[${arr}]:\n x = ${x}\n a = ${a}\n b = ${b}`);
     }
