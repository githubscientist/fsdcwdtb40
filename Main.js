// comment line
/*
    This is also a comment line
    // -> single line comment
    multi line comment

    The comment lines will not affect the actual execution of the code.
*/
/*
    console.log() -> a library function which will print any value that we pass to the standard output (stdout) -> command prompt/terminal

    library function -> a pre-written code (a block of code ) which gets executed when we call it.

    how do you call the function -> using its name followed by () (brackets)
*/
// console.log(6);

/*
    Variables -> A label that points to a memory location
*/

// age = 25;
// Age = 15;

// console.log(age);
// console.log(Age);

/*
    variable -> changeable (values can change/update)
        keywords:
            var (ES5) -> legacy applications
            let (ES6 or 2015 later)

    constants -> non-changeables (values cannot change/update)
        keywords:
            const
*/

// var age = 25; // variable, changeable

// // we can change its value
// age = 30;

// console.log(age);

// const age = 25; // constant / cannot change

// // we cannot change its value
// age = 30; // this line will throw an error

// console.log(age);


/*
    variable initialization -> assigning a value to a variable while creating or declaring a variable.

    re-declaration -> creating variable again.

        var -> allows re-declaration (problem)

        let -> does not allow re-declaration within the same scope (good thing)
*/

// const age = 25;

// const age = 'twenty five';

// console.log(age);

/*
    JavaScript -> dynamically typed language

    let age = 25; // datatype: number

    age = 'twenty five'; // datatype: string

    the value which we assign to a variable determines the data type of the variable.

    int age = 25; (statically typed language)
*/

// let age = 25;

// age = 'twenty five';

// console.log(age);
// console.log(typeof age); // number

// dynamically -> during execution (run time)

/*
    Data Types:

        Type of data we store in a variable.

    1. number
        examples: 45, 3.14, -23, 0

    2. boolean
        values: True, False

    3. string
        wrapped with '' (single quotes), "" (double quotes) or backticks ``
        - alphabets -- uppercase, lowercase
        - numbers
        - special characters

    4. array
        [, , , ]

*/

// let age = 25;

// console.log(typeof age);

// let isAdult = true;

// console.log(typeof isAdult);

// let word = `apple`;

// console.log(typeof word);

// // array
// let hobbies = ['fishing', 'gaming', 'driving'];

// console.log(hobbies);

// // js object or json object
// let person = {
//     name: 'krish',
//     age: 25,
//     hobbies: ['fishing', 'gaming', 'driving']
// };

// console.log(person);

/*
    Operators:

        A Symbol (eg., +, -, /) used to perform an operation (addition, subtraction, division).,

    1. Unary Operator
        - applied to a single variable or a value
        - examples: +5, -age, -6.5, etc.

        unary plus +
        unary minus -

        ++ increment
        -- decrement

        ~ bitwise negation or complement operator

        ! logical not operator

    2. Binary Operators

        a. Arithmetic Operators

            + addition
            - subtraction
            / division
            * multiplication
            % modulus
            ++ increment (short hand operator)
            -- decrement
            ** exponent

        b. Relational Operators

            < less than
            > greater than

             [false when both are false, true when either of them is true]
            <= less than or equal to
            >= greater than or equal to

            != not equal to
            == comparison (double equal to) -- value alone has to match
            === type comparison (triple equal to) -- type also should match
            !== not double equal to (with type comparison)

        To relate two variables or values

        whether first value is greater than the second value

        the result of the relational operators is always a boolean -> true or false

        c. Logical Operators - to combine more than one expression.

            && logical AND
            || logical OR
            ! logical NOT
*/

// console.log(-5);

// console.log(5 + 6, 5 - 6, 5 * 6, 5 / 6, 5 ** 2);

// console.log(5 / 2, 5 % 2);

// variables -> unary operator
// let age = 25;

// age++; // age = age + 1

// age--; // age = age - 1

// console.log(age);

// greater than or equal to
// either greater => true or equal => false

// number == string
// value -> 5 (same)
// data type -> different
// == does not care about the type but the value
// === care about the data type
// console.log(5 === '5');


// /*
//     Given the age of the person, we need to determine if the person is eligible to vote or not.

//         Eligibility Criteria:
//             - The age of the person should be greater than or equal to 18.
// */

// // Given data
// let age = 15;

// console.log(age >= 18);

/*
    Given the age of the person, and whether the person has an aadhar card or a voter id, we need to determine if the person is eligible to vote or not.

        Eligibility Criteria:
            - The age of the person should be greater than or equal to 18.
            - The person should either have an aadhar card or a voter ID.
*/

// Given data
// let age = 17;
// let hasAadhar = false;
// let hasVoterID = true;

// not user friendly
// logical operators (&& , ||) -> to combine more than one epression. 
// the person's age should be greater than or equal to 18 and
// either the person should have an aadhar card or a voter ID
// console.log(age >= 18 && (hasAadhar == true || hasVoterID == true));
// False && False || true == true
// False || true
// true

// precedence of operators -> priority in which the operators are evaluated
// brackets - ()
// &&
// ||

/*
    Given the age of the person, and whether the person has an aadhar card or a voter id, we need to determine if the person is eligible to vote or not.

        Eligibility Criteria:
            - The age of the person should be greater than or equal to 18.
            - The person should either have an aadhar card or a voter ID.
*/

// not user-friendly
/*
    conditional statements or decision making statements or branching statements

    1. if condition
    2. if...else condition
    3. nested if...else condition
    4. multiple if...else if...else condition
*/
// Given data
// let age = 12;
// let hasAadhar = false;
// let hasVoterID = true;

// if (age >= 18 && (hasAadhar == true || hasVoterID == true)) {
//     // what needs to run if the condition is true
//     // if...block
//     console.log('Elibile to vote');
// } else {
//     console.log('Not Eligible to vote');
// }

/*
    ++i pre-increment operator
    i++ post-increment operator

    --i pre-decrement operator
    i--post-decrement operator
*/

// let i = 3;

// // post-increment
// // process first, increment next
// console.log(i++); // print 3 and then incremented to i = 4
// console.log(i);

// let i = 3;

// // pre-increment
// // increment first, process next
// console.log(++i); // i increments to 4 first, then print the i value

// let i = 3;

// let j = i++ + 4; // 3 + 4 = 7

// console.log(j);

// let i = 5;

// console.log(i = 7);

// console.log(i);
// , operator -> least precedence

// let i = 1;

// let j = i++ + i + ++i + i + i++

// console.log(i, i++, ++i, i++, ++i, i, i++, ++i, i++);

// console.log(!(5 < 6)); // !true -> false, !false -> true

// 1. if...statement
/*
    Given a number N, find and print the absolute value of the number.
*/

// let number = -5;

// // if the number is negative, convert the number into a positive number
// if (number < 0) {
//     // convert the number into a positive number
//     number = number * -1;
// }

// // print the number as such if the number is a positive number
// console.log(number);

// /*
//     Given a number, check and print if the number is a positive number or a negative number.
// */

// // 2. if...else statement
// let number = 5;

// // decision making
// // if number is positive => console number is positive
// if (number > 0) {
//     console.log(number, 'is a positive number');
// } else {
//     // number is a negative number
//     console.log(number, 'is a negative number');
// }

/*
    Given a number, check and print if the number is a positive number or a negative number or a zero.
*/

// 3. nested if...else statement
// let number = 6;

// if (number > 0) {
//     // number > 0
//     console.log(number, 'is a positive number');
// } else {
//     // number > 0 false
//     // either number < 0 or number == 0
//     // the number can either be a 0 or a negative number
//     // decision statement??
//     if (number == 0) {
//         console.log(number, 'is a zero');
//     } else {
//         console.log(number, 'is a negative number');
//     }
// }


// let number = 0;

// if (number >= 0) {
//     // either number can be >0 or = 0
//     if (number > 0) {
//         console.log(number, 'is a positive number');
//     } else {
//         console.log(number, 'is a zero');
//     }
// } else {
//     // number < 0
//     console.log(number, 'is a negative number');
// }

// 4. multiple if...else if...else condition
// let number = 0;

// if (number > 0) {
//     // number > 0
//     console.log(number, 'is a positive number');
// } else if (number < 0) {
//     console.log(number, 'is a negative number');
// } else {
//     console.log(number, 'is a zero');
// }

// switch...case
// let number = 0;

// // case with values next to it would be the possible values of the condition
// switch (number > 0) {
//     case true:
//         // positive case
//         console.log(number, 'is a positive number');
//         break;
//     case false:
//         // negative case
//         // number < 0 or number == 0
//         switch (number < 0) {
//             case true:
//                 console.log(number, 'is a negative number');
//                 break;
//             case false:
//                 console.log(number, 'is a zero');
//                 break;
//         }
//         break;
// }

// let number = 0;

// switch (number) {
//     case 1:
//         console.log('one');
//         break;
//     case 2:
//         console.log('two');
//         break;
//     case 3:
//         console.log('three');
//         break;
//     case 4:
//         console.log('four');
//         break;
//     default:
//         console.log('only 1-4 numbers are allowed');
//         break;
// }

// let number = 6;

// // ternary operator
// // ?:
// number > 0 ? console.log(number, 'is a positive number') : number < 0 ? console.log(number, 'is a negative number') : console.log(number, 'is a zero');

/*

    Looping Statements

*/
// Problem: print hello 3 times

// if condition is true -> loop runs
// if condition is false -> loop stops

/*
    count = 0
        print hello
        update count = 1
            print hello
                update count = 2
                    print hello
                        update count = 3

    0, 1, 2 => running condition
    stopping condition: count == 3
    running condition: count != 3 or count < 3 or count > 3
*/


/*
    stopping condition: count == 4
    running condition: count != 4 or count < 4
*/

// let count = 1;
// while (count < 4) {
//     console.log('hello');
//     count++;
// }

/*
    stopping condition: count == 0
*/

// let count = 3;
// while (count != 0) {
//     console.log('hello');
//     count--;
// }

// while loop
// let count = 0;
// while (count < 3) {
//     console.log('hello');
//     count++;
// }

// for loop -> elegant syntax
// for (let count = 0; count < 3; count++) {
//     console.log('hello');
// }

// while loop
// let count = 0;
// while (count < 3) {
//     console.log('hello');
//     count++;
// }

// do...while loop
// let count = 3;
// do {
//     console.log('hello');
//     count++;
// } while (count < 3);

/* infine loop :if used != , and count is not initailise to 0 or 1, or greater than 4 or n */

/*
   count = 4

   count = 5

   count = 6

   count = 7.....

   count == 3
   count != 3

*/

let count = 4;
while (count != 3) {
    console.log("Count is: " + count);
    count++;
}