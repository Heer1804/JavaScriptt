//bubble swap

let bubbleswap = (arr) => {

    let swap

    do {
        swap = false

        for (var i = 0; i < arr.length-1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp
                temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                swap = true
            }
        }
    }
    while (swap)
        return arr
}

console.log(bubbleswap([9,2,55,5,0,2,8]))

let depc_swap = (array) => {
    let swap
    do {
        swap = false

        for(let j=0 ; j<array.length-1 ; j++ )
            {
                if (array[j] < array[j + 1]) {
                    let temp= array[j]
                    array[j] = array[j + 1]
                    array[j + 1] = temp
                    swap = true
                }
            }

    }while(swap)
        return array
}

console.log(depc_swap([9,2,55,5,0,2,10000,8]))

