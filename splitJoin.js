const str = 'JavaScript is the world most popular programming language. JavaScript is the programming language of the Web. JavaScript is easy to learn.';

const words = str.split(' ');
const sentences = str.split('.');
const charecters = str.split('');

console.log(words[3]);

const partial = str.slice(5,8);
const partial2 = str.substring(5,8);
const partial3 = str.substr(5,8);

console.log(partial);
console.log(partial2);
console.log(partial3);

const str1 = 'hello';
const str2 = 'developer';

console.log(str1.concat(' ',str2));

const lines = [
    'hello programmer',
    'start your journey',
    'solve problem'
];

console.log(lines.join(','));