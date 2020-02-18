const validator = {
  isValid : (creditCardNumber) => {

  let sumtotal=0;
  let invert=creditCardNumber.split('').reverse();
  for(let i=0;i<invert.length;i++){
    if (i%2!=0){
      let sum=0;
      let par=parseInt(invert[i]*2);
      if(parseInt(par)>=10){
      let valor=par.toString();
      for(let j=0;j<valor.length;j++){
        sum = sum + parseInt(valor[j]);
        }
       sumtotal= sumtotal + sum;
        }
        else{
        sumtotal=sumtotal+parseInt(invert[i]*2);
            }
    }
    else{
    sumtotal=sumtotal+parseInt(invert[i]);
        }
  }
  if(sumtotal%10==0){
  return true;
  }else{
  return false;
  }
 },

  maskify : (creditCardNumber) => {
  let maskedString = creditCardNumber.split('');
  for(let i = 0; i < creditCardNumber.length - 4; i++) {
    maskedString[i] = "#";
  }

  return maskedString.join('');
}
};

export default validator;
