import checkLength from '../checkLength';

it('return true for strings with correct length', () => {
  expect(checkLength('1025700517292')).toBe(true);
});

it('return false for strings with wrong length', () => {
  expect(checkLength('0')).toBe(false);
});
