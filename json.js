
// JavaScript Object
// Key:Value pair
// const person = {
//     name: 'krish',
//     age: 25
// }

// converting JavaScript Object to JSON String (JavaScript Object Notation)
// console.log(JSON.stringify(person));

// JSON String: {"name":"krish","age":25}

/*
    {"name": "krish","age": 25}
*/

const jsonString = '{ "name": "krish", "age": 25 }';

let jsObject = JSON.parse(jsonString);

// console.log(jsObject.name);