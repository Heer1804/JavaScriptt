// bubble sort
let bubble_sort = (arr)  => {
    let swap
    do{
        swap = false
        for(let i = 0; i < arr.length - 1; i++){
            if(arr[i] > arr[i + 1]){
                let temp
                temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                swap = true
            }
        }
    }
    while(swap)
        return arr
}

console.log(bubble_sort([8,494,540,40,14,9]))