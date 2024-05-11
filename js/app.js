function getPin(){
  const pin=generatePin();
  const pinStr=pin+'';
  if(pinStr.length===4){
    return pin;
  }
  else{
    return getPin();
  }
}

function generatePin(){
  const randomPin= Math.round(Math.random()*10000);
  return  randomPin;
}

document.getElementById('pin-generator').addEventListener('click',function(){
  const pin=getPin();
  document.getElementById('pin-field').value=pin;
})

document.getElementById('calculator').addEventListener('click', function(event){
  const number=event.target.innerText;
  const pinDisplayField=document.getElementById('pin-display');
  const previousValue = pinDisplayField.value;
  
  if(isNaN(number)){
    if(number==='C'){
      pinDisplayField.value="";
    }
    else if (number === '<'){
      const digits=previousValue.split('');
      digits.pop();
      const remainingDigits=digits.join('');
      pinDisplayField.value=remainingDigits;
    }
  }
  else{    
    const newPinNumber=previousValue+number;
    pinDisplayField.value=newPinNumber;
  }
})