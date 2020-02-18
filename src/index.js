import validator from './validator.js';

console.log(validator);
const primera = document.getElementById("one");
const segunda = document.getElementById("two");
const tercera = document.getElementById("three");
segunda.style.display = 'none';
tercera.style.display = 'none';
let boton = document.getElementById("check1");
boton.addEventListener("click",() => {
  segunda.style.display = "block";
  primera.style.display = "none";
  tercera.style.display = 'none';
})
let boton2 = document.getElementById("check2");
boton2.addEventListener("click",() => {
  segunda.style.display = "block";
  primera.style.display = "none";
  tercera.style.display = 'none';
})
let boton3 = document.getElementById("check3");
boton3.addEventListener("click",() => {
  tercera.style.display = "block";
  segunda.style.display = "block";
  let creditCardNumber = document.getElementById("play").value;
  let output = validator.isValid(creditCardNumber);
  let mask = validator.maskify(creditCardNumber);
  let score = document.getElementById("validation");
  let hola = document.getElementById("mascara")
  hola.textContent=mask;
  if (output==true){
    score.textContent="Valid";
    score.style.display="block";
  }else{
    score.textContent="Invalid";
    score.style.display="block";
  }
})
