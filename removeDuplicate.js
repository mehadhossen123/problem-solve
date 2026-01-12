function removeDuplicate(array){
    const arrays=array;
    let newArray=[];
    for(let i=0;i<arrays.length;i++){
        if(!newArray.includes(arrays[i])){
            newArray.push(arrays[i])
        }
    }
    return newArray;

}
const result=removeDuplicate([1,1,2,2,5,4,5]);
console.log("The Non duplicate array is : ",result)