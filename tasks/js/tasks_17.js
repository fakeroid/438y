//      Задача № 17-18

let a = Number(prompt("Enter the number A: ?"));

a % 2 == 0 ? alert(`${"          "}Решение задачи № 17 \n${a} + 10 = ${a + 10}`):
             alert(`${"          "}Решение задачи № 17 \n${a} * 10 = ${a * 10}`);

             //   Задача № 19
let num = +prompt("Введите число А: ");

let randomNumber = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1) +min);
};
let n = randomNumber(1, 10);

let numMas = num => {
  let mas = [];
  let numbOne = num;
  let numbTwo = num - 1;

    for(let i = 0; i < n; i++) {
      mas.push(numbOne + i);
      // numbOne += num;
      mas.unshift(numbTwo - i);
    //  numbTwo -= num;

    }

    return mas;

}

alert(numMas(num));