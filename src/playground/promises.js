const promise = new Promise ((resolve, reject) => {
    setTimeout(()=> {
        // resolve('Resolved data');
        reject('Something went wrong!');
    }, 5000)
});

console.log('before');

promise.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
})

console.log('after');