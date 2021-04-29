// let matrix = [
//   [100, 200, 300],
//   ["Москва", "Красноярск", "Волгоград", "Питер"],
//   [true, false]
//`];
// for(let i in matrix) {
//   if(i == 1) {
//     // 1-й способ
//     for(let j in matrix[1]) {
//       console.log(`${+j + 1}. ${matrix[1][j]}`);
 // 2-й способ
//  for(let j = 0; j < matrix[1].length; j++) {
//   console.log(`${+j + 1}. ${matrix[1][j]}`);
let countElements = +prompt("Кол-во элементов в массиве:");

for(let i = 0; i < countElements; i++) {
  let isArray = confirm(`${i + 1}-й элемент, массив?`);

  if(isArray) {
    let innerCount = +prompt("Кол-во элементов в массиве?");

    matrix[i] = [];

    for(let j = 0, elem = ""; j < innerCount; j++) {
      elem = prompt(`${j + 1}-й эл-т:`);

      if( (+elem).toString() == "NaN"
          && elem != "true" && elem != "false") {
        matrix[i][j] = elem;
      }
      else if( isNaN(+elem) ) {
        elem == "true" ? matrix[i][j] = true : matrix[i][j] = false;
      }
      else {
        matrix[i][j] = +elem;
      }
    }
  }
  else {
    matrix[i] = +prompt(`Введите число:`);
  }
}
// вывод элементов массива в консоль
for(let i in matrix) {
  if(Array.isArray(matrix[i])) {
    for(let j = 0; j < matrix[i].length; j++) {
      console.log(matrix[i][j]);
    }
  }
  else {
    console.log(matrix[i]);
  }
}

console.log(JSON.stringify(matrix));

// for(let i in matrix) {
//   if(i == 1) {
//     // 1-й способ
//     for(let j in matrix[1]) {
//       console.log(`${+j + 1}. ${matrix[1][j]}`);
//     }

//     // 2-й способ
//     for(let j = 0; j < matrix[1].length; j++) {
//       console.log(`${+j + 1}. ${matrix[1][j]}`);
//     }
//   }
// }