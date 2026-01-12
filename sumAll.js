function findSum(array){
    const arrays=array;
    let sum=0;
    for(let i=0;i<arrays.length;i++){
        sum+=arrays[i]
    }
    return sum;
} 
const result=findSum([1,2,3,4])
console.log(result)