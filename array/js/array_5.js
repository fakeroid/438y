
//  Перевод строки в массив методом (Array.from)

let str = "Владимир";
let mas = Array.from(str);

// console.log(typeof str);//  Выводит string
// console.log(typeof str);//  Выводит object
console.log(mas[0]);    //  Выводит символы

for(let symbIndex in mas) {
  console.log(symbIndex); //  Обращиние к индексам
  console.log(mas[symbIndex]);  //  Обращиние к символам
}

//    Тоже сатое с (fot of)

// for(let symb of mas) {
//   console.log(symb);
// }
//  console.log(mas.lengts);