function maxMin(numbers)
{
    let  min = numbers[0];
    let max = numbers[0] ;

    for(let i= 0; i< numbers.length;i++){
        if(numbers[i] < min){
            min = numbers[i]
        }
        if(numbers[i] > max){
            max = numbers[i]
        }
    }
    return {min,max}
}

let result = maxMin([12,24,31,2,52,41,5])
console.log("The minimum number is ",result.min)
console.log("The maximum number is ",result.max)