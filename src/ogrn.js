import isPositiveInteger from 'is-positive-integer';

import toOgrn from './toOgrn';
import getDivisor from './getDivisor';
import checkLength from './checkLength';


export default value => {
  const ogrn = toOgrn(value);

  if (!checkLength(ogrn) || !isPositiveInteger(Number(ogrn))) return false;

  const ogrnLast = Number(ogrn.slice(-1));
  const modulo = Number((ogrn.slice(0, -1) % getDivisor(ogrn)) % 10);

  return modulo === ogrnLast;
};
