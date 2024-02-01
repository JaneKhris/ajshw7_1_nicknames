import Validator from '../validator';

test.each([
  ['user-12_name', true],
  ['user@', false],
  ['user1', false],
  ['_user', false],
  ['user1234name', false],
])('test validateUsername function', (username, expected) => {
  const val = new Validator();
  expect(val.validateUsername(username)).toBe(expected);
});
