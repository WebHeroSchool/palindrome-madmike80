const palindrome = require('./palindrome');

test('Функция palindrome должна вернуть true, если строка является палиндромом', () => {
  expect(palindrome('А роза упала на лапу Азора')).toBe('true');
});
