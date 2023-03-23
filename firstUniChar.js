function firstUniqueChar(s){
let map={}

for(i=0;i<s.length;i++){
    if(map[s[i]]==undefined){
        map[s[i]]=true
    }else{
        map[s[i]]=false
    }
}

for(i=0;i<s.length;i++){
    if(map[s[i]]){
        return i
    }
}
return -1
}


let s='jijinu'
console.log(firstUniqueChar(s));