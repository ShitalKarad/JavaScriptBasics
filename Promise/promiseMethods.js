// let promise = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         resolve('promise resolve')
//     }, 100)
// });

// let promise2 =
//     Promise.resolve("from second promise");

// let promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('from 3rd promise')
//     })
// })

// Promise.all([promise, promise2, promise3]).then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// });

// //---------------------------------------

// const tout = (t) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`resolve complited in ${t}`);
//         }, t);
//     })
// }

// tout(100).then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// });

// Promise.all([tout(100), tout(200)]).then((res) => {
//     console.log(res);
// })
//----------------------------

// const timeOut = ((time) => {

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (time == 200) {
//                 reject(`Rejected in ${time}`)
//             } else {
//                 resolve(`Completed in ${time}`)
//             }

//         }, time)
//     })
// })

// const durations = [100,200,300];
// let promises = [];

// durations.map((duration)=>{
//     promises.push(timeOut(duration))
// })

// Promise.all(promises).then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// });


//------------------.any()-----------------

// let prom1 = new Promise((resolve,reject)=>{
//     reject('Failure');
// })

// let secProm = new Promise((resolve,reject)=>{
//     reject('Fail to load ')
// })

// let prom3 = new Promise((resolve,reject)=>{
//     resolve('working');
// })

// let prom4 = new Promise((resolve,reject)=>{
//     resolve('succesfull');
// })

// let prom = [prom1,secProm,prom4,prom3];
// Promise.any(prom).then((result) => {
//     console.log(result);
// }).catch((err) => {
// console.log(err);
// });

// let prom1 = new Promise((resolve, reject) => {
//     reject("Failure");
// })
// let prom2 = new Promise((resolve, reject) => {
//     reject("Failed to load");
// })
// let prom3 = new Promise((resolve, reject) => {
//     reject("Unsuccessful");
// })
// let prom4 = new Promise((resolve, reject) => {
//     reject("Rejected");
// })
 
// let prom = [prom1, prom2, prom3, prom4];
 
// Promise.any([])
//     .then((val) => console.log(val))
//     .catch(err => console.log(err));
// Promise.any(prom)
//     .then((val) => console.log(val))
//     .catch(err => console.log(err));


// ------------------promise.race()-----------------

const promise1 = new Promise((resolve, reject) => {
    setTimeout( resolve,500,'one');
})

const promiseTwo = new Promise((resolve, reject) => {
    setTimeout(reject,100,'two')
})

Promise.race([promise1,promiseTwo]).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});


//-------------------------------
