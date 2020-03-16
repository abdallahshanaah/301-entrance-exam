var count = 0;
function greaterThan(array, a) {
  count=0;
  for (let index = 0; index < array.length; index++) {
    if (array[index] > a) {
      count++;
    }
  }
}


greaterThan([1, 2, 3, 4], 2);
console.log(count);

greaterThan([2, 4, 8], 8);
console.log(count);
