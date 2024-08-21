function reverse_Str(str){
    let stack = []
    for(let char of str){
        stack.push(char)
    }

    let revStr = ''
    while(stack.length>0){
        revStr += stack.pop()
    }
    return revStr
}

console.log(reverse_Str('HEER PARIKH'))