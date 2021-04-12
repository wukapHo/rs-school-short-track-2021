/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const row = matrix.length;
  const col = matrix[0].length;
  const res = new Array(row).fill(0).map(() => new Array(col).fill(0));
  function findMines(r, c) {
    if (r < 0 || c < 0 || r >= row || c >= col) {
      return 0;
    }
    return (matrix[r][c]) ? 1 : 0;
  }
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      res[i][j] = findMines(i - 1, j - 1) + findMines(i, j - 1)
                + findMines(i + 1, j - 1) + findMines(i + 1, j)
                + findMines(i + 1, j + 1) + findMines(i, j + 1)
                + findMines(i - 1, j + 1) + findMines(i - 1, j);
    }
  }
  return res;
}

module.exports = minesweeper;
