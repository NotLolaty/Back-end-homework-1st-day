let arr = [1, 2, 2, 3, 4, 4, 5];

function noRepeat() {
  for (var z = 1, i = 1; z < arr.length; ++z) {
    if (arr[z] !== arr[z - 1]) {
      arr[i++] = arr[z];
    }
  }

  arr.length = i;
  return arr;
}
noRepeat();

console.log(arr);
