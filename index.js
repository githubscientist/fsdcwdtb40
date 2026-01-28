const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, 3000);
});

console.log(promise);

promise
    .then(
        // success callback 
        () => {
            console.log('operation success');
            console.log(promise);
        }
    )
    .catch(
        () => {
            console.log('operation failed');
        }
    )