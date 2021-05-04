//      Объединим две задачи 22, 23 и 24
let greeting = confirm("Привет! Познакомимся ? ");
if (greeting == false) {
  alert("Познакомимся в следующий раз!")
} else {
  let yourName = prompt("Как Вас зовут ? ");
  greeting = confirm(`${yourName} , приятно познакомиться. Давай вместе решим задачу ?`);
  if (greeting == false) {
    alert(`${yourName} , до встречи`)
  } else {
    let m = +prompt(`${yourName} , впиши пожалуйста массу тела: `);
    let v = +prompt(`А теперь за одно и скорость его движения: `);
    let e = m * (v ** 2) / 2;
    alert(`${yourName} , сейчас мы вычислим кинетическую энергию тела по формуле: Е = m*v^2/2 \n`);
    let surnames = prompt(`${yourName} , пока машина решает задачу я хотел бы заполнить анкету,какое у тебя Фамилие ?`);
    let  patronymic = prompt(`Отчество ?`);
    alert(`${surnames} ${patronymic[0]}${yourName[0]} вот и ответ подоспел Е(k) = ${e}Dg , Спасибо!!!`);
  }
}