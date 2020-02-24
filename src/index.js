import validator from './validator.js';

console.log(validator);
const primera = document.getElementById("one");
const segunda = document.getElementById("two");
const tercera = document.getElementById("three");
const card1 = document.getElementById("visa");
const card2 = document.getElementById("mastercard");
segunda.style.display = 'none';
tercera.style.display = 'none';
const boton = document.getElementById("check1");
boton.addEventListener("click",() => {
  segunda.style.display = 'block';
  primera.style.display = 'none';
  tercera.style.display = 'none';
  card1.style.display = 'block';
  card2.style.display = 'none';
  })
const boton2 = document.getElementById("check2");
boton2.addEventListener("click",() => {
  segunda.style.display = 'block';
  primera.style.display = 'none';
  tercera.style.display = 'none';
  card2.style.display = 'block';
  card1.style.display = 'none';
})
const boton3 = document.getElementById("check3");
boton3.addEventListener("click",() => {
  tercera.style.display = 'block';
  segunda.style.display = 'none';

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
        score.style.display='block';
        valid.style.display='block';
        invalid.style.display='none';
      }else{
        score.textContent="INVALID";
        score.style.display='block';
        invalid.style.display='block';
        valid.style.display='none';
      }
    }else{
    alert("Por favor ingrese un número de tarjeta");
     segunda.style.display = 'block';
     primera.style.display = 'none';
     tercera.style.display = 'none';
    }

})
