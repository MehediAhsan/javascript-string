/* 

 The String object is used to represent and manipulate a sequence of characters. 

 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

*/

const str = 'I love my country';
const arr = ['I', 'love' ,'my' ,'country'];
console.log(str);

// স্ট্রিং immutable 
//Javascript String is immutable, which means once a String object is assigned to String reference the object value cannot be changed.

console.log(str[0]);
str[0]='H';
console.log(str[0]);

console.log(arr[0]);
arr[0] = 'We';
console.log(arr[0]);

//length of string
console.log('Length:',str.length);

//loop of string

for(const element of str){
    console.log(element);
}




