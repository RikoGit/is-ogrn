import ogrn from '../ogrn';

it('return true for correct OGRN', () => {
  expect(ogrn('1177746126040')).toBe(true);
});

it('return false for incorrect OGRN', () => {
  expect(ogrn('1177746146040')).toBe(false);
});
