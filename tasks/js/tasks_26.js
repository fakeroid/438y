//      Tasks 26-27
let numb = Number(prompt("Enter a two-digit integer: "));

if(numb == '' || numb == null || isNaN(numb)) { 
  alert("Goodbye simpleton!");
}
else if(Number.isInteger(numb) == false){ 
  alert(`${numb} It\`s not an integer`);
}
else if(numb < 0){
  alert(`${numb} this is a negative number`);
}
else if(numb < 10){
  alert(`This is a not two-digit integer`);
}
else if(numb >= 10 && numb <= 99){
  let str = "" + numb;
  alert(str[0] + " " + str[1]); 
}
else if(numb >= 100 && numb <= 999){
  let str = "" + numb;
  alert(str[0] + " " + str[1] + " " + str[2]); 
}

//      Tasks 28 
let string = prompt("Enter a number ");
let stringNum 
for(let i = (string.length -1); i >= 0; i-- ){
  stringNum +=" " + string[i];
}
alert(stringNum);

