var j = [4, 1, 1, 1, 3];

function isAscending(arr) {
  let value, sortVal;
  sortVal = 0;
  let pattern = [];
  for (let i = 0; i < arr.length - 1; i++) {
    pattern.push(arr[i + 1] >= arr[i]);
  }
  pattern.forEach((e) => {
    e ? (sortVal = sortVal + 0) : (sortVal = sortVal + -1);
  });
  sortVal < 0 ? (value = -1) : (value = arr);
  return value;
}
//console.log(isAscending(j));

function getCount(arr, n) {
  let array = arr.slice();
  let c = 0;
  count(array, n);
  function count(arr, n) {
    let a = array.indexOf(n);
    if (a == -1) return (c = c);
    else {
      c = c + 1;
      arr.splice(a, 1);
      count(array, n);
    }
  }
  return { value: c, times: Math.round(c / 2) };
}

//console.log(getCount(j, 1));

function returnSubsequence(arr) {
  let list = [];
  var array = arr.slice();
  let subseq = [];
  array.forEach((num) => {
    let { value } = getCount(array, num);
    if (value > 1) {
      subseq.push(num);
    }
  });
  var uniqueNums = subseq.reduce(function unique(newList, num) {
    if (!newList.includes(num)) return [...newList, num];
    return newList;
  }, []);
  uniqueNums.forEach((num) => {
    let { value, times } = getCount(array, num);
    addToSubseq(num, times);
  });
  function addToSubseq(num, n) {
    for (let i = 0; i < n; i++) {
      list.push(num);
    }
  }
  return isAscending(list);
}
console.log(returnSubsequence(j));
