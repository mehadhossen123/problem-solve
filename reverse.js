function findReverse(word){
    const words=word.split("").reverse().join('')
    return words;


}

const result=findReverse("abc")
console.log(result)
