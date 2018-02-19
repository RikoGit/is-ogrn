import toOgrn from './toOgrn';
import getDivisor from './getDivisor';

const checkValidate = ogrn => {
  const ogrnLength = ogrn.length;
  return (Number(ogrn) && (ogrnLength === 15 || ogrnLength === 13)) ? ogrn : false;
};

export default value => {
  const ogrn = toOgrn(String(value));

  if (!checkValidate(ogrn)) return false;

  const ogrnDivisor = getDivisor(ogrn);
  const ogrnLast = Number(ogrn.slice(-1));
  const modulo = Number((ogrn.slice(0, -1) % ogrnDivisor) % 10);

  return modulo === ogrnLast;
};
