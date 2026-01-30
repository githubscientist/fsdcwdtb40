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

enum Rating {
    poor = 1,
    good,
    better,
    average,
    excellent,
}

let rating: Rating = Rating.excellent;

console.log(rating);