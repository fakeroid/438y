//      Задача № 14

let num = 0;
let sum = 0;
let str = prompt("Введите любое предложение\n и убедитесь? что JavaScript может его пощитать: ");

for (let i = 0; i < str.length; i++) {
  sum += i;
}
num = str.length / 3;
alert(`треть длины вашего предложения -  ${str} = ${Math.round(num)},\n а сумма чисел его длинны = ${sum}\n 
  Tеперь возведём длинну предложения в N степень: \n
  и увеличим на N число:
  `);

//      Задача № 15, 16
let sentences = new Map([
  ["explainOne", "Значение длины предложения Х ="],
  ["explainTwo", "Возведение длины предложения (Х) в степень"],
  ["explainThree", "Сума Х и числ  "]
]);

str = prompt("Введите новое предложени: ");
//    Создадим случайное число
let randomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let n = randomNumber(2, 19);
let strTwo = str;
let strThree = str;

//  sentences.set("sentences", strTwo);// добавление элемента по ключу "sentences"
sentences.set("longSentOne", str.length);
sentences.set("longSentTwo", strTwo.length ** n); //
sentences.set("longThree", strThree.length + n);

console.log(sentences);//   Выводит значения в корсоль.

alert(`${sentences.get("explainOne")} ${sentences.get("longSentOne")}\n
 ${sentences.get("explainTwo")} n = ${sentences.get("longSentTwo")}\n
 ${sentences.get("explainThree")} n = ${sentences.get("longThree")}`); // Возвращение элемента по ключу "explainOne"



