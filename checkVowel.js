function checkVowel(word){
    let c=0;
    const words=word.toLowerCase()
    for(let i=0;i<words.length;i++){
        if(words[i]==='a'|| word[i]==='e'||words[i]==='i'||words[i]==='o'||words[i]==='u'){
            c+=1;
        }

    }
    return c;

}
const result=checkVowel("programming")
console.log("Total vowel is : ",result)