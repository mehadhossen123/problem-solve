function invertCapital(word){
    const words=word.split(" ")
    const newArray=[]
    for(let i=0;i<words.length;i++){
      let capital= words[i][0].toUpperCase()+words[i].slice(1)
      newArray.push(capital)
       
    }
    return newArray;
}
const result=invertCapital("hello world kemon aso")
console.log(result)