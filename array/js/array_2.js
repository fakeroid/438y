

let matrix = [
  [100, 200, 300],
  ["Москва", "Красноярск", "Волгоград", "Питер"],
  [true, false],
];
for(let i in matrix) {
  if(i == 1) {
    // 1-й способ

    for(let j in matrix[1]) {
      console.log(`${+j + 1}. ${matrix[1][j]}`);
      alert(`${+j + 1}. ${matrix[1][j]}`);
    }
  }
}
//  2-й способ
//  for(let j = 0; j < matrix[1].length; j++) {






