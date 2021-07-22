
let b = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(a = 99);
    },0);
});

b.then(() => {
    console.log(a)
})
