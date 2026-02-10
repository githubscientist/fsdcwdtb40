// // ... spread operator or rest operator
// let numbers = [3, 4, 5, 6];

// console.log(...numbers); // spread operator

// console.log(3, 4, 5, 6);

// let nums1 = [1, 2, 3];
// let nums2 = [4, 5, 6];

// console.log([...nums2, ...nums1]);

// let person = {
//     name: 'krish',
//     age: 25
// }

// console.log({
//     ...person
// });

// console.log(person);

// ... rest operator
// rest = [ 7 ]
function add(x, y, ...rest) {
    console.log(x + y);
    console.log(rest);
}

add(5, 6, 7, 8, 9, 10, 11, 12); 