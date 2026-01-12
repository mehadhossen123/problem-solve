function findMaxNumber(array){
    const arrays=array;
    let max= arrays[0]
    for(let i=0; i<arrays.length;i++){
        if(arrays[i]>max){
            max=arrays[i]
        }
    }
    return max;
}
const result=findMaxNumber([2,3,45,7])
console.log(result)