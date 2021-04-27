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

//              задача № 3
//
//Пользователь вводит сумму вклада и процент, который будет начисляться
// ежегодно. Отобразить размер вклада поочередно на ближайшие 5 лет. 

let percentages = +prompt("ВВедите процентную ставку на ваш депозит: "); // Проценты по вкладу
let firstYear = 0;
let secondYear = 0;
let thirdYear = 0;
let fourthYear = 0;
let fifthYear = 0;

let contribution = +prompt("Введите сумму вашего вклада:");

  if (!contribution && typeof contribution == "object") {
      alert ("Вы отменили сделку!!!");
  }

  else {
    if (contribution == "") {
        alert ("вы ни чего не ввели!!!");
      }

      else {
        if(isNaN(+contribution)) {
          alert ("Это не сумма!!!");
        }
          else {
            firstYear = contribution + (contribution / 100) * percentages;
            alert(typeof firstYear);
            secondYear = fifthYear + (fifthYear / 100) * percentages;
            alert(typeof secondYear);
            thirdYear = secondYear + (secondYear / 100) * percentages;
            fourthYear = thirdYear + (thirdYear / 100) * percentages;
            fifthYear = fourthYear + (fourthYear / 100) * percentages;
            alert("Сумма вашего вклада за первый год:" + fifthYear + "\n за второй год: "+ secondYear + "\n за третий год: "+ thirdYear + "\n за четвёртый год: "+ fourthYear + "\n за пятый год: "+ fifthYear);
    }
  }
}


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
