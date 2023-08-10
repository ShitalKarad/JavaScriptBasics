const { rejects } = require("assert");
const { error } = require("console");
const { checkPrime } = require("crypto");
const { resolve } = require("path");

function isPrime() {
   let n = 13;
    if (n <= 1)
        return false;

    for (let i = 2; i < n; i++)

        if (n % i == 0)
            return false;

    return true;
}

const output = isPrime();

function checkPrimeNumber() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            if (output == true) {
                resolve(isPrime());
            } else {
                reject("promise is rejected")
            }
        }, 1000);

    });
}

// checkPrimeNumber()
//     .then((data) => {
//         console.log("data " + data);
//     }).catch((error) => {
//         console.log("error " + error);
//     })


async function newCheckPrime() {
    try {

        const prime = await checkPrimeNumber();
        console.log(prime,'success');
    }catch{
        console.log("error in code " + error);
    }
}

 newCheckPrime();



 