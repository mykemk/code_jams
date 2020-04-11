var grid = [
  [1, 1, 1, 1],
  [2, 2, 2, 2],
  [3, 3, 3, 3],
  [4, 4, 4, 4],
];
var maxSum = 39;

function largestSubgrid(grid, maxSum) {
  let k = 0;
  function reduceLength(array) {
    array.forEach((element) => {
      element.pop();
    });
    array.pop();
    return array;
  }
  function getSum(arr) {
    let total = 0;
    arr.forEach((grid) => {
      let sum = grid.reduce((a, b) => a + b, 0);
      total = total + sum;
    });
    return total;
  }
  var count = grid.length;
  while (count > 0) {
    let sum = getSum(grid);
    if (sum <= maxSum) {
      k = k + grid.length;
      break;
    }
    reduceLength(grid);
    count--;
    if (count == 0) {
      k = k + 0;
      break;
    }
  }
  return k;
}

console.log(largestSubgrid(grid, maxSum));
