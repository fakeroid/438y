//                ****** Решение

let result; // Итоговая строка вывода
let period = +prompt("Введите срок вклада: ");
let contribution = +prompt("Введите сумму вашего вклада:");
let percentages = +prompt("ВВедите процентную ставку на ваш депозит: "); // Проценты по вкладу

  if (!contribution && typeof contribution == "object") {
      alert ("Вы отменили сделку!!!");
  }

  else 
    if (contribution == "") {
        alert ("вы ни чего не ввели!!!");
      }

      else 
        if(isNaN(+contribution || +percentages || +period)) {
          alert ("Это не сумма!!!");
        }
          else {
            for(let i = 0; i < period; i++) {
              contribution += contribution * percentages / 100;
              result +=`ваш вклад увеличивался ${i} год: ${contribution}\n`;
            }
              alert(result);
        }     
