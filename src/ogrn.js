import toOgrn from './toOgrn';
import getDivisor from './getDivisor';
import checkOgrn from './checkOgrn';

export default value => {
  const ogrn = toOgrn(String(value));

  if (!checkOgrn(ogrn)) return false;
  const ogrnLast = Number(ogrn.slice(-1));
  const modulo = Number((ogrn.slice(0, -1) % getDivisor(ogrn)) % 10);

  return modulo === ogrnLast;
};
