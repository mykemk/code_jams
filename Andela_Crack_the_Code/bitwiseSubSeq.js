//console.log(1 ^ 2);
var array = [2, 2, 2];

console.log(2 ^ 2);
function bitWiseSequence(k, arr, n) {
  let value = 0;
  var sequence = new Array();
  for (let i = 0; i < n - 1; i++) {
    let result = arr[i] ^ arr[i + 1];
    if (result == k) {
      sequence.push(arr[i]);
      sequence.push(arr[i + 1]);
    }
  }
  sequence.length == 0
    ? (value = value + 1)
    : sequence.length > n && n % 2 != 0
    ? (value = value + sequence.length - 1)
    : sequence.length > n && n % 2 == 0
    ? (value = value + (sequence.length + 2) / 2)
    : (value = value + sequence.length);
  return value;
}
console.log(bitWiseSequence(0, array, 3));
