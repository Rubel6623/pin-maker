function generatePin(){
  const randomPin= Math.round(Math.random()*10000);
  return  randomPin;
}

console.log(generatePin())