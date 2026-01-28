const promise = new Promise((resolve, reject) => {
    reject();
});

promise
    .then(
        // success callback 
        () => {
            console.log('operation success');
        },
        () => {
            console.log('operation failed');
        }
    )