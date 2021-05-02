//            *******Калькулятор*******

let cancel = true;
let menu = `Ваш выбор (0-6):
1. Сложение 2-х чисел
2. Разность 2-х чисел
3. Произведение 2-х чисел
4. Деление 2-х чисел
5. Возведение числа в n-ю степень
6. Вычисление корня n-й степени
0. Отмена`;

let result;
let params = [];

do {
  let operation = prompt(menu, "0");
  switch(operation) {
    case "1": params = getParametrs(operation);
              result = getResult(params, "+");            
              break;

    case "2": params = getParametrs(operation);
              result = getResult(params, "-");
              break;

    case "3": params = getParametrs(operation);
              result = getResult(params, "*");
              break;

    case "4": params = getParametrs(operation);
              result = getResult(params, "/");
              break;

    case "5": params = getParametrs(operation);
              result = getResult(params, "^");
              break;

    case "6": params = getParametrs(operation);
              result = getResult(params, "n");
              break;

    //отмена (закрытие меню)
    case "0": 
    case null: cancel = false;
              break;
    default:  result = "Ошибка! Неверный выбор!!!";
              break;
   }
   if(result){ 
      alert(result);
   }
} while(cancel);


//классический способ объявления функции - Function Declaration
function getParametrs(oper) {
   let str1, str2;

   if(oper >= 1 && oper <= 4) {
      str1 = "Первое число:";
      str2 = "Второе число:";
   }
   else if(oper == 5) {
      str1 = "Число:";
      str2 = "Степень:";
   }
   else {
      str1 = "Число:";
      str2 = "Степень корня:";
   }
   return checkParametrs(str1, str2);
}

function checkParametrs(str1, str2) {
   let p1, p2;
   let cancel;

   do {
      cancel = false;
      p1 = +prompt(str1);

      if(p1 == 0) {
         p1 = undefined;
         break;
      }
      if(isNaN(p1)) {
         alert("Вы ввели не число!");
         cancel = true;
      }
      else {
         do {
            cancel = false;
            p2 = +prompt(str2);

            if(p2 == 0) {
               p2 = undefined;
               break;
            }
            if(isNaN(p2)) {
               alert("Вы ввели не число!");
               cancel = true;
            }
         } while(cancel);
      }
   } while(cancel);

   return [p1, p2];
}

function getResult(params, oper) {
   let result;
   let p1 = params[0], p2 = params[1];

   if( (typeof p1).toString() == "undefined" || (typeof p2).toString() == "undefined") {
      result = "Вы отменили ввод!";
   }
   else {
      switch(oper) {
         case "+": result = `Сумма чисел = ${p1 + p2}`;
                  break;

         case "-": result = `Разность чисел = ${p1 - p2}`;
                  break;

         case "*": result = `Произведение чисел = ${p1 * p2}`;
                  break;

         case "/": if(p2 != 0) {
                     result = `Частное 2-х чисел = ${(p1 / p2).toFixed(4)}`;
                  }
                  else {
                     result = "Делить на 0 нельзя!";
                  }
                  break;

         case "^": if(p2 < 0) {
                     result = `Число ${p1} в степени ${p2} = ${(p1**p2).toFixed(4)}`;  
                  }
                  else {
                     result = `Число ${p1} в степени ${p2} = ${p1**p2}`;
                  }
                  break;

         case "n": result = `Корень степени ${p2} из числа ${p1} = ${p1**(1 / p2)}`;      
                  break;
      }
   }

   return result;
}