// eslint-disable-next-line no-console

const getDivisor = ogrn => (ogrn.length === 15 ? 13 : 11);
export default getDivisor;
