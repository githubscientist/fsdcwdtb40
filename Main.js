const promise = new Promise((resolve, reject) => {
    resolve();
});

promise
    .then(
        // success callback 
        () => {
            console.log('operation success');
        }
    )
    .catch(
        () => {
            console.log('operation failed');
        }
    )