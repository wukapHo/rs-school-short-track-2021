/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let encode = '';
  let i = 0;
  while (i < str.length) {
    let j = i + 1;
    let charCount = 1;
    while (str.charAt(j) === str.charAt(i)) {
      charCount++;
      j++;
    }
    if (charCount > 1) {
      encode += (charCount + str.charAt(i));
    } else {
      encode += str.charAt(i);
    }
    i = j;
  }
  return encode;
}

module.exports = encodeLine;
