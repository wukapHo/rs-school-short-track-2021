/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const arr1 = s1.split('').sort();
  const arr2 = s2.split('');
  let res = 0;

  function getCountCharacter(char, arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (char === arr[i]) count++;
    }
    return count;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr1[i - 1]) {
      const res1 = getCountCharacter(arr1[i], arr1);
      const res2 = getCountCharacter(arr1[i], arr2);
      res += res1 > res2 ? res2 : res1;
    }
  }

  return res;
}

module.exports = getCommonCharacterCount;
