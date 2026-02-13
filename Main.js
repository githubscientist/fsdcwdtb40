// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

// Method 1
inp.on("close", () => {
    let executions = 0;
    let S = userInput[0];
    let uniques = 0;

    for (let i = 0; i < S.length; i++) {
        // for each char @ S[i]
        // find the count of occurence of S[i] in S
        // initialize a count to keep track of the count of character S[i]
        let count = 0;
        // iterate the entire string again
        for (let j = 0; j < S.length; j++) {
            // compare S[i] and S[j]
            if (S[i] == S[j]) {
                count++;
            }
            executions++;
        }

        // we now will have the count of occurence of S[i]
        if (count == 1) {
            uniques++;
        }
    }

    if (uniques === 0) {
        console.log(-1);
    } else {
        console.log(uniques);
    }

    console.log('executions:', executions);
});