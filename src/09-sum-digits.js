/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let arr = String(n).split('').map(Number);
  let sum = 0;
  while (arr.length > 1) {
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    arr = String(sum).split('').map(Number);
    sum = 0;
  }
  return +arr.join('');
}

module.exports = getSumOfDigits;
