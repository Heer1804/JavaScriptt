let array = [31, 45, 157, 54, 43, 3];

let startValue = 0;
let endValue = array.length - 1;
let searchItem = 157;
function binarySearching(array) {
  while (startValue <= endValue) {
    let mid = startValue + Math.floor((endValue - startValue) / 2);

    if (array[mid] === searchItem) return mid;
    else if (searchItem < array[mid]) endValue = mid - 1;
    else startValue = mid + 1;
  }
  return -1
}
console.log(binarySearching(array));