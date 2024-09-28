const merge_sort = arr => {
    if (arr.length < 2) return arr;
    
    const mid = Math.floor(arr.length / 2);
    const left = merge_sort(arr.slice(0, mid));
    const right = merge_sort(arr.slice(mid, arr.length));

    return Array.from(
        { length: left.length + right.length },
        () => {
            if (!left.length) return right.shift();
            else if (!right.length) return left.shift();
            else return left[0] > right[0] ? right.shift() : left.shift();
        }
    );
}

console.log(merge_sort([50, 3, 88, 45, 21, 0]));
