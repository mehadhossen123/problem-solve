function findEvenNumber(array){
    const arrays=array;
    let newArray=[]
    for(let i=0;i<arrays.length;i++){
        if(arrays[i]%2===0){
            newArray.push(arrays[i])

        }
    }
    return newArray;
}
const result=findEvenNumber([1,2,4,6,8,9,12,19]);
console.log(result)