const str = 'JavaScript is the world most popular programming language. JavaScript is the programming language of the Web. JavaScript is easy to learn.';

/*
The includes() method performs a case-sensitive search to determine whether one string may be found within another string, returning true or false as appropriate.
*/

console.log(str.includes('javascript'));
console.log(str.toLowerCase().includes('javascript'));

/*
The indexOf() method, given one argument: a substring to search for, searches the entire calling string, and returns the index of the first occurrence of the specified substring.
*/

console.log(str.length);
console.log(str.indexOf('programming'));
console.log(str.indexOf('Programming'));

if(str.indexOf('world') !== -1){
    console.log('Exists');
}
else{
    console.log('Not Exists');
}

//startswith

console.log(str.startsWith('JavaScript'));
console.log(str.startsWith('language'));

//endswith

console.log(str.endsWith('learn.'));
console.log(str.endsWith('easy'));