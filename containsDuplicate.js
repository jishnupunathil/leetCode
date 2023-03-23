function containsDuplicate(arr){
    let set=new Set()
    for(i=0;i<arr.length;i++){
        if(set.has(arr[i])){
            return true
        }else{
            set.add(arr[i])
        }
    }
    return false
}

let s=[1,2,4,12,2,2]
console.log(containsDuplicate(s));