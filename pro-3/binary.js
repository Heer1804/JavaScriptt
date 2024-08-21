// binary searching
const array = [100, 200, 300, 400];
function binary_Search(array,item) {
let startValue = 0;
let endValue = array.length - 1;

  while (startValue <= endValue) {
    let mid = startValue + Math.floor((endValue - startValue) / 2)

    if (array[mid] === item) return mid;
    else if (item < array[mid]) endValue = mid - 1;
    else startValue = mid + 1;
  }

  return -1;
}
console.log(binary_Search(array,200))

// Deleting using binary search 
function deleteItem(array, item) {

    const index = binary_Search(array, item);

    if (index !== -1) {
        array.splice(index, 1);
        console.log(`Item deleted at index ${index}:`);
    } else {
        console.log('Item not found in the array.');
    }
}

const itemToDelete = 230;
deleteItem(array, itemToDelete)
console.log(array)

// Update using binary search 
function updateItem(array, oldItem, newItem) {

    const index = binary_Search(array, oldItem);

    if (index !== -1) {
        array[index] = newItem;
        console.log(`Item updated at index ${index}:`);
    } else {
        console.log('Item not found in the array.');
    }
}

const oldItem = 110;
const newItem = 115;

updateItem(array, oldItem, newItem);
console.log(array);