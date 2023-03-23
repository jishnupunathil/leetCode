function reverseString(str){
    let left=0
    let right=str.length-1
    while(left<right){
        let temp=str[left]
        str[left]=str[right]
        str[right]=temp
        left++
        right--
    }

    console.log(str);
}

let s=['j','i','s','h','n','u'] //string immutable
reverseString(s)