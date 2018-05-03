import getDivisor from '../getDivisor';

it('return 13 of 304500116000221', () => {
  expect(getDivisor('304500116000221')).toBe(13);
});

it('return 11 of 8', () => {
  expect(getDivisor('8')).toBe(11);
});
