// let values = [1000, 3, 8.5];

// // without destructuring
// // let principal = values[0];
// // let years = values[1];
// // let rate = values[2];

// // destructuring
// let [principal, years, rate] = values;

// let si = (principal * years * rate) / 100;

// console.log(si);

let values = {
    principal: 1000,
    years: 3,
    rate: 8.5
}


// let si = (values.principal * values.years * values.rate) / 100;

let { principal: initial, years, rate } = values;

let si = (initial * years * rate) / 100;

console.log(si);