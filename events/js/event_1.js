const widthUserScreen = screen.width;

if (widthUserScreen < 700) {
	document.body.style.background = "gold";
	document.querySelector('.new-text').style.color = "#fff";
} 
console.log(widthUserScreen);

if (widthUserScreen < 480) {
	document.body.style.background = "green";
} 
console.log(widthUserScreen);