//        Задача № 20

let walNums = +prompt("Введите ваш вес в килограммах: ");
let converterMas =function (walNums) {
  let mas = [];
  let kilograms = walNums * 1000;
  let str = "Ваш вес в граммах = " + kilograms;
   mas.unshift(str);
   let pounds = (walNums / 2.2046);
   str =" \n Ваш вес в фунтах = " + pounds.toFixed(2);
  mas.push(str);
  return mas;

}

alert(converterMas(walNums));
 
//      Задача № 21 

let timesNums = +prompt("Введите сколько времени вы затрачиваете на обуд: ");

let converterTimes = function(timesNums) {
  let mas = [];
    let seconds = timesNums * 3600;
    str ="Вы тратите на обед " + seconds + " драгоценных секунд.";
    mas.push(str);
    return mas;
}

alert(converterTimes(timesNums));
