function palindrome(str) {
  const newStr = str.toLowerCase().replace(/ /g, '');
  const flipStr = newStr.split('').reverse().join('');

  return newStr === flipStr ? 'true' : 'false';
}

module.exports = palindrome;
