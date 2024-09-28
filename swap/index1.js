//selection sort

function selection_sort(array) {

    for (let i = 0; i < array.length; i++) {

      let lower_value = array[i];
      let index_last_value = i;

      for (let j = i; j < array.length; j++) {

        if (array[j] < lower_value) {
          lower_value = array[j];
          index_last_value = j;
        }

      }

      let temp = array[i];
      array[i] = array[index_last_value];
      array[index_last_value] = temp;
    
    }
    
    return array;
  
}
  
  console.log(selection_sort([51, 3, 5, 12,1, 6]));