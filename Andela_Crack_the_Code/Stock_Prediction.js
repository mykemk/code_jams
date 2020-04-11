var x = [5, 6, 8, 4, 1, 9, 8, 3, 6, -1, 11, 10, 7, 13, 24];
var queries = [1, 4, 8];

function predictAnswer(stockData, queries) {
  var days = [];
  queries.forEach((n) => {
    day = compareVals(stockData, n - 1);
    days.push(day);
  });
  function compareVals(arr, index) {
    let result, prevIndex, nextIndex;
    if (index == 0) {
      result = arr.findIndex((k) => k < arr[0]) + 1;
    } else {
      prevIndex = arr
        .slice(0, index)
        .reverse()
        .findIndex((k) => k < arr[index]);
      nextIndex = arr.slice(index + 1).findIndex((k) => k < arr[index]);
      console.log([prevIndex, nextIndex]);
      prevIndex == -1 && nextIndex == -1
        ? (result = -1)
        : prevIndex == nextIndex && prevIndex != -1
        ? (result = index - prevIndex)
        : prevIndex < nextIndex && prevIndex != -1
        ? (result = index - prevIndex)
        : prevIndex == 0 && nextIndex == -1
        ? (result = index)
        : nextIndex == 0 && prevIndex == -1
        ? (result = index + 1)
        : prevIndex > nextIndex && nextIndex == -1
        ? (result = index - prevIndex)
        : (result = index + nextIndex + 2);
    }
    return result;
  }
  return days;
}

console.log(predictAnswer(x, queries));
