//     Исправленный каоькулятор ********

/*** МИНИ-КАЛЬКУЛЯТОР (начало) ***/
// сложение 2-х чисел
// разность 2-х чисел
// произведение 2-х чисел
// частное 2-х чисел
// возведение числа в n-степень
// корень n-й степени

let cancel = true; //пока true - пользователю выводится меню
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
   result = undefined;
   let operation = prompt(menu, "0"); //выбор пользователя (пункт меню)

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


//Задаёт параметры (вводимые значения)
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

//Проверяет параметры
function checkParametrs(str1, str2) {
   let p1, p2; //параметры (вводимые пользователем значения)

   let cancel; //флаг для анализа выхода из цикла
               //когда значение false - выходим из цикла

   let exit = true; //флаг для выхода из внутреннего цикла
                    //когда значение false - выходим из цикла

   start:
   if(exit) {
      do {
         p1 = prompt(str1);
         cancel = checkP(p1); //проверка параметра на null,
                              //пустую строку или не число

         if(cancel == "undefined") {
            break;
         }
         //если первый параметр введён корректно (т.е. является числом)
         //т.е. cancel --> false
         if(!cancel) {
            do {
               p2 = prompt(str2);
               cancel = checkP(p2);

               if(cancel == "undefined") {
                  exit = false;
                  break start;
               }
            } while(cancel);
         }
      } while(cancel);
   }

   return [p1, p2];
}

//Проверяет параметр.
//Возвращает "undefined" или true (введена пустая строка или не число!)
//или false (введено число)
function checkP(param) {
   if(!param && typeof param == "object") {
      param = "undefined";
      return param;
   }
   if(param == "" || isNaN(+param)) {
      alert("Пустая строка или не число!");
      return true;
   }
   return false;
}

//Вычисляет результат и возвращает строку с ним
function getResult(params, oper) {
   let result;
   let p1 = params[0], p2 = params[1];

   if(!p1 && typeof p1 == "object" ||
      !p2 && typeof p2 == "object") {
      result = "Вы отменили ввод!";
   }
   else {
      p1 = +p1;
      p2 = +p2;

      switch(oper) {
         case "+": result = `Сумма чисел = ${p1 + p2}`;
                  break;

         case "-": result = `Разность чисел = ${p1 - p2}`;
                  break;

         case "*": result = `Произведение чисел = ${p1 * p2}`;
                  break;

         case "/": if(p2 != 0) {
                     if(Number.isInteger(p1 / p2)) {
                        result = `Частное 2-х чисел = ${(p1 / p2)}`;
                     }
                     else {
                        result = `Частное 2-х чисел = ${(p1 / p2).toFixed(4)}`;
                     }
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

         case "n": if(Number.isInteger(p1**(1 / p2))) {
                     result = `Корень степени ${p2} из числа ${p1} = ${p1**(1 / p2)}`;
                   }
                   else {
                     result = `Корень степени ${p2} из числа ${p1} = ${(p1**(1 / p2)).toFixed(4)}`;
                   }  
                  break;
      }
   }
   return result;
}
/*** МИНИ-КАЛЬКУЛЯТОР (конец) ***/



/*** ОБЪЕКТЫ (начало) ***/