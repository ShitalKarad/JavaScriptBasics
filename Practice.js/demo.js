const { rejects } = require("assert");
const { error } = require("console");
const { checkPrime } = require("crypto");
const { resolve } = require("path");

// function isPrime() {
//     const n = 4;
//     if (n <= 1){
//         return false;
//     }
    
//     for(let i = 2; i <= n / 2; i++) {
//         console.log(i,"i");
//         if (n % i == 0){
//             return false;
//         }
//     }
//     return true;

// }

// const output = isPrime();
// console.log(output, "out");

// function checkPrimeNumber() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {

//             if (output == true) {
//                 resolve(isPrime());
//             } else {
//                 reject("promise is rejected")
//             }
//         }, 1000);

//     });
// }

// checkPrimeNumber()
//     .then((data) => {
//         console.log("data " + data);
//     }).catch((error) => {
//         console.log("error " + error);
//     })


// async function newCheckPrime() {
//     try {

//         const prime = await checkPrimeNumber();
//         console.log(prime,'success');
//     }catch{
//         console.log("error in code " + error);
//     }
// }

 //newCheckPrime();


        // let num ;
        // console.log(num);
        // num = 5;

        // const arr = [1,3,4,6,7]
        // let res = arr.map((num) => num+2)
        // console.log(res);

        // function add(n,n2,callback) {

        //     let sum = n + n2;
        //     callback(sum);
            
// }

// function mainFunction(sum) {
//     console.log(sum);
// }

// console.log(add(2,5,mainFunction));

 
function concatArrays(...arr ) {
    return [].concat(...arr)
    
}
const arr1 = [1,2,3,4]
const arr2 = [5,6,7,8]
const arr3 = [9,10,54]
const arr4 = [9,10,54]


const myArray = concatArrays(arr1,arr2,arr3,arr4);
console.log(myArray);

