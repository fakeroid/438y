//  Создаём и инициализируем два массива: 

//  let myArrayString = ["a", "b", "c"];
//  let myArrayNumber = [1, 2, 3];
//  let unification = [];
 //  ОбЪединяем два массива в один многомерный

 //    .Вариант № 1
// unification.push (myArrayString, myArrayNumber);

// console.log (unification);

//    .Вариант № 2
let arrString = ["a", "b", "c"];
let arrNumber = [10, 20, 30];
let unification = [];

unification = arrString.concat(arrNumber);
console.log (unification);

