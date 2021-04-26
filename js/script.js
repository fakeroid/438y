//Пользователь вводит длину оснований трапеции (a и b), 
//а также высоту трапеции h. Программа выводит сообщение: 
//«Площадь трапеции будет равна <значение>». Площадь
// вычисляется по формуле ((a + b) / 2) * h, где a,
//  b - основания, h - высота. 

let trapezoidBase_a;
let trapezoidBase_b;
let trapezoidHeight;
let trapezoidArea;

trapezoidBase_a = +prompt("Введите основание трапеции A:");
trapezoidBase_b = +prompt("Введите основание трапеции B:");
trapezoidHeight = +prompt("Введите высщту трапеции H:");

trapezoidArea = ((trapezoidBase_a + trapezoidBase_b) / 2) * trapezoidHeight;

alert(trapezoidArea);