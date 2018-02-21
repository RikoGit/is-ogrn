import checkLength from './checkLength';

export default ogrn => (Number(ogrn) && checkLength(ogrn) ? ogrn : false);
