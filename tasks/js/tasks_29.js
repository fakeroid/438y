//			Tasks  29-31

//			tasks 29
let a, b, c;
let str;
let numb = Number(prompt("Enter a positivfe two-digit integer"));

if (numb == "" || numb === null) {
	alert("Empty!!!")
}
else if (isNaN(numb)) {
	alert("Not a number!!!");
 }
if (numb < 0 || numb < 10) {
	alert("Not a positive number or less then 10!!!");
}
else if (numb % 1 !== 0) {
	alert("Not a integer!!!");
}
else if (numb >= 10 && numb <= 99) {
	a = numb - numb % 10;
	b = numb - a;
	str = "" + a + " " + b;
	alert(str);

//		+ tasks 31
	b = numb - numb % 10;
	a = (numb - b) * 10;
	str = a + b / 10 + 8;
	alert(str);
}

//		+ tasks 30
else if (numb >=100 && numb <= 999) {
	b = numb - numb % 10;
	c = numb - b;
	a = b - b % 100;
	b = numb - (a + c);
	str = "" + a + " " + b + " " + c;
	alert(str);
}