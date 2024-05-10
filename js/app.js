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
  const value=event.target.innerText;
  const pinDisplayField=document.getElementById('pin-display');
  pinDisplayField.value=value;
})