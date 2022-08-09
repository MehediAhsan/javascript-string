function reverseWord(text){
    const words = text.split(' ');
    const result = [];
    for(let i=words.length-1; i>=0; i--){
        const element = words[i];
        result.push(element);
    }   
    const reverse = result.join(' ');
    return reverse;
}

const myString = 'This is a string';
const reversed = reverseWord(myString);
console.log('Reverse Word:',reversed);