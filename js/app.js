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
console.log(generatePin()) 