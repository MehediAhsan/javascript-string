// charecter reverse

function reverseString(text){
    let reverse= '';
    for(let i=text.length-1; i>=0; i--){
        const element = text[i];
        reverse += element;
    }
    return reverse;
}

const myString = 'This is a string';
const reversed = reverseString(myString);
console.log('Reverse String:',reversed);