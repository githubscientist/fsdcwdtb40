// const promise = new Promise(() => {

// });

// console.log(promise);

/*
    A function passed as an argument to another function.
*/

/*
    Callback example:

    Give me your number, I will call you back later after sometime.

    Higher order function: Give me a function, I will call that function later. the function being asked is called as callback function.
*/

// higher order function
function calc(operation, num1, num2) {
    return operation(num1, num2);
}

// add or sub or mul or div -> callback functions
function add(num1, num2) {
    return num1 + num2;
}

function sub(num1, num2) {
    return num1 - num2;
}

function mul(num1, num2) {
    return num1 * num2;
}

function div(num1, num2) {
    return num1 / num2;
}

console.log(calc(div, 5, 6));