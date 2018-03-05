import toOgrn from './toOgrn';

it('remove extra chars', () => {
  expect(toOgrn(' 15-5')).toBe('155');
});
