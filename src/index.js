import validator from './validator.js';

console.log(validator);
const primera = document.getElementById("one");
const segunda = document.getElementById("two");
const tercera = document.getElementById("three");
const card1 = document.getElementById("visa");
const card2 = document.getElementById("mastercard");
segunda.classList.add('hide');
tercera.classList.add('hide');
const boton = document.getElementById("check1");
boton.addEventListener("click",() => {
  segunda.classList.remove('hide');
  primera.classList.add('hide');
  tercera.classList.add('hide');
  card1.classList.remove('hide');
  card2.classList.add('hide');
  })
const boton2 = document.getElementById("check2");
boton2.addEventListener("click",() => {
  segunda.classList.remove('hide');
  primera.classList.add('hide');
  tercera.classList.add('hide');
  card2.classList.remove('hide');
  card1.classList.add('hide');
})
const boton3 = document.getElementById("check3");
boton3.addEventListener("click",() => {
  tercera.classList.remove('hide');
  segunda.classList.add('hide');

    let creditCardNumber = document.getElementById("play").value;
    if(creditCardNumber!=""){
    let output = validator.isValid(creditCardNumber);
    let mask = validator.maskify(creditCardNumber);
    let score = document.getElementById("validation");
    let cover = document.getElementById("masked");
    const valid = document.getElementById("valid");
    const invalid = document.getElementById("invalid");
    const refresh1 = document.getElementById("refresh-valid");
    const refresh2 = document.getElementById("refresh-invalid");
    cover.textContent=mask;
      if (output==true){
        score.textContent="VALID";
        score.classList.remove('hide');
        valid.classList.remove('hide');
        invalid.classList.add('hide');
      }else{
        score.textContent="INVALID";
        score.classList.remove('hide');
        invalid.classList.remove('hide');
        valid.classList.add('hide');
      }
    }else{
    alert("Por favor ingrese un número de tarjeta");
     segunda.classList.remove('hide');
     primera.classList.add('hide');
     tercera.classList.add('hide');
    }

})
