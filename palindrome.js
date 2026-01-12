function palindrome(word){
    const words=word.toLowerCase().split("").reverse().join("");
    if(word.toLowerCase()===words){
        return true;
    }
    return false;
}
const result=palindrome("Madam")
console.log(result)