/*
    Template Literals:

        - Template literals are a new feature in JavaScript that allow for easier string interpolation and multi-line strings. They are enclosed by backticks (`) instead of single or double quotes.

        string interpolation: it means embedding expressions within a string.
*/
// string creating ways

// let word = 'apple'; // using single quotes

// console.log(word, typeof word);

// let sentence = "apple is a fruit." // using double quotes

// console.log(sentence, typeof sentence);

// \n -> escape sequence (newline)
// let paragraph = "apple is a fruit and \neating an apple everyday keeps doctor away!";

// let paragraph = `apple is a fruit and 
// eating an apple everyday keeps doctor away!`;

// console.log(paragraph, typeof paragraph);

let name = 'krish';
let age = 25;

// console.log('Hi,' + name + "! you're " + age + " years old");
console.log(`Hi, ${name}! you're ${age} years old`);