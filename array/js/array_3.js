// Асоциативный массив и конструкторы
//

let assocMas = new Map([ //  Выделяются круглыми скобками
  ["number", 1000], //  до запятой ["название ячейки", значение ячейки]
  ["city", "Moskva"],
  ["flag", true],
  ["array", [10, 20, 30]]
]);

assocMas.set("date", "28.04.2021"); // Создаёт элемент с ключом "date"

console.log(assocMas.get("date")); // Вернуть значение по ключу
console.log(assocMas.get("array"));
alert(assocMas.get("array"));

console.log(assocMas.size); // Вернуть длинну массива
assocMas.delete("number"); //  Удаление элементов с ключом



// assocMas.clear();   //  Очищает полностью массив

console.log(assocMas);
alert(assocMas.has("mops")); // Метод  has используется в операторах ветвления 
//  выдаёт true / false




// for (let key of assocMas.keys()) { //  Метод keys перебирает имена элементов массива
//   console.log(key);
// }

// for (let value of assocMas.values()) {
//   console.log(value);
// }

  //    Метод  forEach  с функцией
  // assocMas.forEach ( 
  //   function(value, key) {
  //   console.log('Имя: ' + key + '\n Значение: ' + value);
  //   } 
  // );

  //    Тоже самое в стрелочной натации: 

  assocMas.forEach ( 
    (value, key) => {
    console.log('Имя: ' + key + '\n Значение: ' + value);
    } 
  );