"use strict";

function isOgrn(ogrnNumber){
  console.log(`Number = ${ogrnNumber}`);
  const ogrnValue = String(ogrnNumber);
  const ogrnValueLength = ogrnValue.length;

  if (checkValidate(ogrnValue,ogrnValueLength)) {
    let ogrnDivisorValue = getDivisor(ogrnValueLength);
    const ogrnValueLast = ogrnValue.slice(-1);
    const remainderDivision = ogrnValue.slice(0, -1) % ogrnDivisorValue;
    if (remainderDivision == ogrnValueLast || remainderDivision == 10 && ogrnValueLast == 0) {
      console.log(`Ccorrect number. ${showOgrnType(ogrnValueLength)}`);
    }
    else console.log(`Number not ogrn.`);
  }
}

function checkValidate(a,b) {
  if (Number(a)) {
    return (b == 15 || b == 13) ? a : showErrorMessage();
  }
  else return showErrorMessage();
}

function showErrorMessage(){
 console.log(`Iincorrect value.`);
 return;
}

function showOgrnType(c){
 return `This is ${(c == 13 ? 'OGRNIP' : 'OGRNUL')}.`;
}

function getDivisor(i) {
 return i == 15 ? 13 : 11;
}
