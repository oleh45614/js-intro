/*alert('Hello JavaScript');

const greetings = 'Nice to see you';
alert(greetings);

let name = 'John';
alert(name);

name = 'Isabel';
alert(name);

const userName = prompt('Enter your name');
const userGreetings = 'Nice to see you!' + userName;
alert(userGreetings);*/

const userAge = parseFloat(prompt('Enter your age'));
const nextAge = add(userAge, 1);
const messangAge = 'Next year you will be' + nextAge;
alert(messangAge);

if (userAge >= 18) {
    alert('You are abult!');
} else {
    alert('You are not minor!');
}

function add(a, b){
    const result = a + b;
    return result;
}

