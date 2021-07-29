//with the help of const the value can't be redeclare
const play1= Math.floor(Math.random() *6 )+1;
// const play1dice = "images/dice" + play1 +".png";
const play1dice = `images/dice${play1}.png`

document.getElementById('check1').setAttribute('src',play1dice)