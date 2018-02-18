// eslint-disable-next-line no-console

// const showOgrnType = i => `This is ${(i === 13 ? 'OGRNIP' : 'OGRNUL')}.`;

const getDivisor = i => (i === 15 ? 13 : 11);

const checkValidate = (a, b) => ((Number(a) && (b === 15 || b === 13)) ? a : false);

module.exports = (ogrnNumber) => {
  const ogrnValue = String(ogrnNumber);
  const ogrnValueLength = ogrnValue.length;
  if (checkValidate(ogrnValue, ogrnValueLength)) {
    const ogrnDivisorValue = getDivisor(ogrnValueLength);
    const ogrnValueLast = Number(ogrnValue.slice(-1));
    const remainderDivision = Number(ogrnValue.slice(0, -1) % ogrnDivisorValue);
    if ((remainderDivision === ogrnValueLast) ||
    (remainderDivision === 10 && ogrnValueLast === 0)) {
      return true;
    }
  }
  return false;
};
