// let person = {
//     name: 'krish',
//     age: 25
// }

// // destructuring
// let { name, age } = person;

// console.log(name, age);

// let person = ['krish', 25];

// let [name, age] = person;

// console.log(name, age);

// destructuring
// function fun([name, age]) {
//     console.log(name, age);
// }

// let person = ['krish', 25];

// fun(person);

// function fun({ name, age }) {
//     console.log(name, age);
// }

// let person = {
//     name: 'krish',
//     age: 25
// }

// fun(person);

// callback function: passing one function to another function as an argument.

// higher order function
function calc(fun, a, b) {
    console.log(fun(a, b));
}

// callback function
function add(a, b) {
    return a + b;
}

// callback function
function sub(a, b) {
    return a - b;
}

calc(sub, 5, 6);