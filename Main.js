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