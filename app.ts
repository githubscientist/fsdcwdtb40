// create a variable and assign a value 25
// JavaScript
// let age = 25;

// TypeScript
// Variable re-assignment wit a different is not possible
// let age: number = 25;

// age = 'apple';

// console.log(age);

// Primitive Data Types
// 1. number

// let score: number = 96;
// let username: string = 'sathish';
// let isActive: boolean = true;

// // 2. string
// // 3. boolean

// console.log(score, username, isActive);

// Type Inference

// let age = 10; // the typescript automatically detects the data type of the variable
// as soon as the value is assigned.

// age = 'ten';

// let numbers: number[] = [1, 2, 3, 4, 5];
// let names: string[] = ['Apple', 'Orange'];

// console.log(numbers);

// any type
// let data:any =  10; // type inference: the number type would be assinged to the variable will make the data type of the variable as such.

// data = 'ten'; // this will throw an error, because the type of data is trying to chgance

// data = true;

// console.log(data);

// Tuple: Fixed Structure
// let fruits: [string, number] = ['apple', 25];

// console.log(fruits);

// enum Rating {
//     poor = 1,
//     good,
//     better,
//     average,
//     excellent,
// }

// let rating: Rating = Rating.excellent;

// console.log(rating);

// let student: {
//     name: string,
//     age: number,
//     isPassed: boolean,
//     [key: string]: any,
// } = {
//     name: 'krish',
//     age: 25,
//     isPassed: true
// }

// // console.log(student['name']);
// student.location = 'coimbatore';

// console.log(student);

// function add(a: number, b: number): number {
//     return a + b;
// }

// console.log(add(5, 6));

// arrow functions
// const add =  (a: number, b: number): number => {
//     return a + b;
// }

// console.log(add(5, 6));

// optional arguments
// const add =  (a: number, b?: number): number => {
//     return a + b;
// }

// console.log(add(5)); // b = undefined undefined + 5 = NaN (Not A Number)
// console.log(add(5, 6));

// default parameters
// const add =  (a: number, b: number = 0): number => {
//     return a + b;
// }

// console.log(add(5)); // b = undefined undefined + 5 = NaN (Not A Number)
// console.log(add(5, 6));

// union types
// let id: number | string;

// id = 101;
// // id = 'a101';

// console.log(id);

// Union types
// let id: number | string;

// id = 101;

// function getId(id: number | string) {
//     console.log(id);
// }

// getId(112);
// type User = {
//     name: string,
//     age: number,
// };


// Type Aliases
// let u1:User  = {
//     name: 'krish',
//     age: 25
// }

// console.log(u1);

// interface User {
//     readonly name: string,
//     age?: number
// }

// let u1: User = {
//     name: "sathish"
// }

// u1.name = 'krish';

// console.log(u1);

// Functions

// function addTwoNumbers(a:number, b:number): number {
//     return a + b;
// }

// const addTwoNumbers = (a:number, b:number) => {
//     return a + b;
// }

// console.log(addTwoNumbers(5, 6));

// optional parameters
function greeting(name: string, age?: number): string {
    if (age) {
        return 'Hi, ' + name + ". You're " + age + " years old";
    } else {
        return 'Hi, ' + name
    }
}

console.log(greeting('krish', 25));