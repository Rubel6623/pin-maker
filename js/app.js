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
  const calculatePinField=document.getElementById('pin-display');
  const previousCalculatePin = calculatePinField.value;
  
  if(isNaN(number)){
    if(number==='C'){
      calculatePinField.value="";
    }
    else if (number === '<'){
      const digits=previousCalculatePin.split('');
      digits.pop();
      const remainingDigits=digits.join('');
      calculatePinField.value=remainingDigits;
    }
  }
  else{    
    const newPinNumber=previousCalculatePin+number;
    calculatePinField.value=newPinNumber;
  }
})

document.getElementById('verify-pin').addEventListener('click', function(){
  const generatePinField=document.getElementById('pin-field');
  const currentPin=generatePinField.value;

  const calculatePinField=document.getElementById('pin-display');
  const currentCalculatePin = calculatePinField.value;

  const pinSuccessMessage=document.getElementById('pin-success');
  const pinErrorMessage=document.getElementById('pin-incorrect');
  
  if(currentPin === currentCalculatePin){
    pinSuccessMessage.style.display='block';
    pinErrorMessage.style.display='none';
  }
  else{
    pinErrorMessage.style.display='block';
    pinSuccessMessage.style.display='none';
  }
})