"use strict";

function isOgrn(ogrnNumber){
  console.log('Number = ' + ogrnNumber);
  let ogrnValue = String(ogrnNumber);
  let ogrnValueLength = ogrnValue.length;

  if (checkValidate(ogrnValue,ogrnValueLength)) {
    let ogrnDivisorValue = getDivisor(ogrnValueLength);
    let ogrnValueLast = ogrnValue.slice(-1);
    let remainderDivision = ogrnValue.slice(0, -1) % ogrnDivisorValue;
    if (remainderDivision == ogrnValueLast || remainderDivision == 10 && ogrnValueLast == 0) {
      console.log('Ccorrect number.' + showOgrnType(ogrnValueLength));
    }
    else console.log('Number not ogrn.');
  }
}

function checkValidate(a,b) {
  if (Number(a)) {
    return (b == 15 || b == 13) ? a : showErrorMessage();
  }
  else return showErrorMessage();
}

function showErrorMessage(){
 console.log('Iincorrect value.');
 return;
}

function showOgrnType(c){
 let d = c == 13 ? 'OGRNIP' : 'OGRNUL';
 return 'This is ' + d + '.';
}

function getDivisor(i) {
 return divisorValue = i == 15 ? 13 : 11;
}
