function moveZero(arr){
    let prev=0
    for(i=0;i<arr.length;i++){
        if(arr[i]!=0){
            let temp=arr[prev]
            arr[prev]=arr[i]
            arr[i]=temp
            prev++
        }
    }

    console.log(arr);
}


let arr=[1,0,3,0,12,6]
moveZero(arr)