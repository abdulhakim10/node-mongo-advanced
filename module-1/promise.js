/**
 * # Promises in JavaScript are objects that represent the outcome of an asynchronous operation, such as fetching data from a server or reading a file.
 
 * Three states of promise
 * 1. pending
 * 2. resolved/fulfilled
 * 3. rejected
  
 # Promise action is asynchronous.
 */


const myPromise = new Promise((resolve, reject) => {
    const user = { name: "Tusar", age: 24 };
    if (!user) {
        reject("something went wrong");
    }
    else {
        setTimeout(() => {
            resolve(user)
        }, 1000)
    }
});

const userId = [1, 2, 3, 4, 5];
const userData = [];

for (let i = 0; i < userId.length; i++) {
    const userI = userId[i];
    // myPromise.then(data => {
    //     userData.push(data);
    // });
    userData.push(myPromise);
}

Promise.all(userData)
    .then(res => console.log(res))
    .catch(err => console.log(err));

// console.log(userData);

// consume from promise
myPromise
    .then(res => console.log('done'))
    .catch(err => console.log(err));