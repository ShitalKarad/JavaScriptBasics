const { rejects } = require("assert");
const { promises } = require("dns");
const { resolve } = require("path");

// const tiket = new Promise((resolve, reject) => {
//     const flag = false;
//     if (flag) {
//         resolve(" you are not in the flight ")
//     }else{
//         reject(" your flight is cancelled ");
//     }
// });
// tiket
//     .then((data)=>{
//         console.log("success"+data);
//     })
//     .catch((data)=>{
//         console.log(" promise Reject"+data);
//     })


//-------------

// function getCheese(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             const cheese = " Cheese";
//             resolve(cheese);
//         }, 2000);
       
//     }) 
    
// }

// function makeDough(cheese){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             const dough = cheese+" dought";
//             resolve(dough);
//         }, 2000);
       
//     }) 

// }

// function makePizza(dough){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             const pizza = dough+" pizza";
//             resolve(pizza);
//         }, 2000);
//     }) 
// }

// getCheese().then((cheese)=>{
//     console.log("here is the cheese ",cheese);
//     return makeDough(cheese);
// }).then((dough)=>{
//     console.log("here is the dough ",dough);
//     return makePizza((dough));
// }).then((pizza) =>{
//     console.log("here is the pizza ",pizza);
// }).catch((data) =>{
//     console.log("error occured " ,data);
// })

//-------------------------

function myFunction(){

    console.log("Hey i am shital");
}

const myPromise = ()=>{
    return new Promise((resolve, reject) =>{
        const isFlag = true;
        if (isFlag) {
            resolve(myFunction());
        }else{
            console.log("Promise rejected");
        }
    });
}
myPromise()
.then((data) =>{
    console.log("promise resolve "+data);
}).catch((error) =>{
    console.log('promise rejected ', error);
})