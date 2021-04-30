/*** ОБЪЕКТЫ (начало) ***/
// Литеральный способ создания объекта {}
let button = {
  text: "Купить",

  position: "absolute",
  top: "50%", 
  left: "50%",

  width: "350px",
  height: "70px",
  marginLeft: "-175px",
  marginTop: "-35px",
  padding: "10px 30px",

  fontSize: "18px",
  color: "#ffffff",
  backgroundColor: "darkred",
  boxShadow: "0 0 5px #ff0000",
  borderRadius: "10px",

  isBorder: false
};

let btn = document.createElement("button");

for(let property in button)
{
  if(property == "text") {
     btn.textContent = button[property];
  }
  else {
     if(property == "isBorder") {
        if(button[property]) {
           btn.style.border = "2px solid darkred";
        }
        else {
           btn.style.border = "none";
        }
     }
     else {
        btn.style[property] = button[property];
     }
  }
}

document.body.prepend(btn);

// console.dir(btn.style.boxShadow);


//string, number, boolean, Array, Object, Function


/*** ОБЪЕКТЫ (конец) ***/


