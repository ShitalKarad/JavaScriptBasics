const { error } = require("console");
const { resolve } = require("path");

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
//             console.log("from resolve");
//             resolve(pizza);
//         }, 2000);
//     }) 
// }

// async function orderPizza(){
//     try{
//     const cheese = await getCheese();
//     console.log('here is the cheese ', cheese);
//     const dough = await makeDough(cheese);
//     console.log('here is the dough ', dough);
//     const pizza = await makePizza(dough);
//     console.log('here is the pizza ', pizza);
//     }catch{
//         console.log('error',error);
//     }
// }
// orderPizza();

//----------------------------------------

let promise = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve('promise resolvee')
    }, 3000);

});

async function asyncFunction(){
    let res = await promise;
    console.log(res);
    console.log('hello');
}

asyncFunction();


