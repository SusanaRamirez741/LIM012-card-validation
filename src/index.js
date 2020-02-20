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
  segunda.style.display = "none";

    let creditCardNumber = document.getElementById("play").value;
    if(creditCardNumber!=""){
    let output = validator.isValid(creditCardNumber);
    let mask = validator.maskify(creditCardNumber);
    let score = document.getElementById("validation");
    let cover = document.getElementById("masked");
    cover.textContent=mask;
      if (output==true){
        score.textContent="VALID";
        score.style.display="block";
      }else{
        score.textContent="INAVILD";
        score.style.display="block";
      }
    }else{
    alert("Por favor ingrese un número de tarjeta");
     segunda.style.display = "block";
     primera.style.display = "none";
     tercera.style.display = 'none';
    }

})
