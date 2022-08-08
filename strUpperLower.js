const str = 'Thank you so much';
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.toLocaleUpperCase());
console.log(str.toLocaleLowerCase());

const userName = 'mehedi_ahsan';
const userInput = 'Mehedi_Ahsan';

if(userName.toLowerCase() === userInput.toLowerCase()){
    console.log('valid user');
}
else{
    console.log('invalid user');
}
