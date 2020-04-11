var x = [3, 2, 1, 3, 1];
var y = [3, 5, 3, 5, 5];
var newArr = [];
var count = 0;

function getSum(arr) {
  return arr.reduce((a, b) => a + b, 0);
}
function getUnfilledCans(used, total) {
  let voids = [];
  let unfilledCans = [];
  let fullCans = 0;
  for (i = 0; i < total.length; i++) {
    let space = total[i] - used[i];
    if (space != 0) {
      voids.push(space);
      unfilledCans.push(used[i]);
    } else fullCans = fullCans + 1;
  }
  return {
    voids: voids,
    unfilledCans: unfilledCans,
    fullCans: fullCans,
    totalVoids: getSum(voids),
    toEmpty: getSum(unfilledCans),
  };
}
function fillSpaces() {
  let { voids, unfilledCans, fullCans, totalVoids, toEmpty } = getUnfilledCans(
    x,
    y,
  );
  for (let i = 0; i < voids.length; i++) {
    toEmpty = toEmpty - voids[i];
    console.log(toEmpty, fullCans);
    if (toEmpty == 0) break;
    fullCans = fullCans + 1;
  }
  return fullCans;
}
//console.log(fillSpaces());
console.log(getUnfilledCans(x, y));

/*for (i = 0; i < x.length; i++) {
  let k = y[i] - x[i];
  if (k != 0) {
    newArr.push(k);
    unfilled.push(x[i]);
  } else count += 1;
}
function sum(array) {
  var sum = 0;
  for (j of array) {
    sum = sum + j;
  }
  return sum;
}
if (sum(newArr) != sum(unfilled)) {
  count += unfilled.length;
} else {
  let left = sum - unfilled[0];
  let m = 1;
  while (left != 0 && m <= unfilled.length - 1) {
    count++;
    left = left - unfilled[m];
    m++;
    console.log(count);
    console.log(left);
    console.log(m);
  }
}
//console.log(unfilled);
console.log(count);
*/
