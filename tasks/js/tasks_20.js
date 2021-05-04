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

let timesNums = +prompt("Введите сколько времени вы затрачиваете на обед в минутах: ");

let converterTimes = function(timesNums) {
  let mas = [];
    let seconds = timesNums * 60;
    str ="Вы тратите на обед " + seconds + " драгоценных секунд.";
    mas.push(str);
    return mas;
}

alert(converterTimes(timesNums));

//        Задача № 22

let interval = 60 * Number(prompt("Сколько часов на ваших ходиках ? "));
    interval += Number(prompt("А сколько минут ?"));

if(interval == "" || interval == null) { alert("Cancellation!!!"); }
  else if (isNaN(interval)) {alert("Not a number!!!"); }
  else {
    let timeBegenning;
    let timeEnd;

    let timeSchedule = function(interval) {
      let mas = [];
        seconds = interval * 60;
        timeBegenning = "От полночи прошло " + seconds + " секунд" + "\n или " + interval +" минут";
        mas.unshift(timeBegenning);
        let minutes = 24 * 60 - interval;
        timeEnd = "\n a до слудующей полночи осталось " + minutes + "минут";
        mas.push(timeEnd);
        return mas;
    }
      alert(timeSchedule(interval));
  }
 