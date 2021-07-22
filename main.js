
let b = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(a = 99);
    },0);
});

b.then(() => {
    console.log(a)
})
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const obj = {
    name: 'Vanya',
    age: 30,
};

const newPeople = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(obj)
        reject('error')
    },)
});

// newPeople().then((oke) => console.log(oke))
// newPeople().catch((ok) => console.error(ok))



const newJeckt = async () => {
    try {
        const b = await newPeople();
        console.log(b)
    } catch (err) {
        console.error(err)
    }finally {
        console.log(1)
    }
};

newJeckt()
