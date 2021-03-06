//    *****   Часы для сайта  *****

window.onload = function(){
  window.setInterval(function(){
    let now = new Date();
    let clock = document.getElementById("clock");
    clock.innerHTML = now.toLocaleTimeString();
  },1000);
};

/*          
            section Galery (Шаги расширяющие горизонты)

        Находим по id заголовки h3 и присваиваем их константам 
*/
const hOne = document.getElementById('galeriOne');
const hTwo = document.getElementById('galeriTwo');
const hThree = document.getElementById('galeriThree');
const hFoure = document.getElementById('galeriFoure');
const hOneFive = document.getElementById('galeriOneFive');
const hSix = document.getElementById('galeriSix');

//        Привязываем к заголовкам события
document.getElementById('galeriOne').addEventListener("click", cartGaleriOne);

//        Активируем их через функцию
function cartGaleriOne() {
  if(!document.getElementById('divOne') && !document.getElementById('textOne')) {
    const divOne = document.createElement('div');
    const textOne =document.createElement('h3');
    divOne.id = 'divOne';
    divOne.className = 'textGaleri';
    textOne.id = 'textOne';
    textOne.className = 'titleGaleri';
    textOne.textContent = "Первый шаг на пути к знаниям HTML / CSS";
    setTimeout(() => {
      document.getElementById('galeriOne').insertAdjacentElement("afterend", divOne);
      document.getElementById('galeriOne').insertAdjacentElement("afterend", textOne);
      document.getElementById('galeriOne').textContent = "Не пусто!";
    }, 500);
  } else {
    setTimeout(() => {
      document.getElementById('divOne').remove();
      document.getElementById('textOne').remove();
      document.getElementById('galeriOne').textContent = "Показать первый шаг?";
    }, 500);
  }
}

//      *** Анимация тeкста ***

// var TxtRotate = function(el, toRotate, period) {
//   this.toRotate = toRotate;
//   this.el = el;
//   this.loopNum = 0;
//   this.period = parseInt(period, 10) || 2000;
//   this.txt = '';
//   this.tick();
//   this.isDeleting = false;
// };

// TxtRotate.prototype.tick = function() {
//   var i = this.loopNum % this.toRotate.length;
//   var fullTxt = this.toRotate[i];

//   if (this.isDeleting) {
//     this.txt = fullTxt.substring(0, this.txt.length - 1);
//   } else {
//     this.txt = fullTxt.substring(0, this.txt.length + 1);
//   }

//   this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

//   var that = this;
//   var delta = 300 - Math.random() * 100;

//   if (this.isDeleting) { delta /= 2; }

//   if (!this.isDeleting && this.txt === fullTxt) {
//     delta = this.period;
//     this.isDeleting = true;
//   } else if (this.isDeleting && this.txt === '') {
//     this.isDeleting = false;
//     this.loopNum++;
//     delta = 500;
//   }

//   setTimeout(function() {
//     that.tick();
//   }, delta);
// };

// window.onload = function() {
//   var elements = document.getElementsByClassName('txt-rotate');
//   for (var i=0; i<elements.length; i++) {
//     var toRotate = elements[i].getAttribute('data-rotate');
//     var period = elements[i].getAttribute('data-period');
//     if (toRotate) {
//       new TxtRotate(elements[i], JSON.parse(toRotate), period);
//     }
//   }
//   // INJECT CSS
//   var css = document.createElement("style");
//   css.type = "text/css";
//   css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
//   document.body.appendChild(css);
// };


// Generate colors (as Chroma.js objects)
// var colors = paletteGenerator.generate(
//   5, // Colors
//   function(color){ // This function filters valid colors
//     var hcl = color.hcl();
//     return (hcl[0]>=330 || hcl[0]<=20)
//       && hcl[1]>=11.81 && hcl[1]<=78.35000000000001
//       && hcl[2]>=47.64 && hcl[2]<=100;
//   },
//   false, // Using Force Vector instead of k-Means
//   50, // Steps (quality)
//   false, // Ultra precision
//   'Default' // Color distance type (colorblindness)
// );
// // Sort colors by differenciation first
// colors = paletteGenerator.diffSort(colors, 'Default');