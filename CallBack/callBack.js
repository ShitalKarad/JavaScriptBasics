// function mainFunction(sum){
//     console.log(sum);
// }
// function myCalculator(num1,num2,mainFunction){
//     let sum = num1 + num2;
//     mainFunction(sum);
// }
// myCalculator(3,3,mainFunction);


//------------------------------

function exmple(n1,n2,callback){
    let sum = n1 + n2;
    callback(sum);
}
function myCallback(sum) {
    console.log("sum from myCallBack---------->",sum);
}
exmple(2,4,myCallback)
//------------------------------


// const num = [2,-4,6,3,1-3,-7,8];
// const positiveNum = removeNegNum(num,(x) => x >= 0);
// console.log(positiveNum);
// function removeNegNum(numbers,myCallback){
//     const array = [];
//     for(const x of numbers){
//         if (myCallback(x)) {
//             array.push(x)
//         }
//     }
// return array;
// }

//--------------------------------------
// function greet(name,myFunction){
//     console.log("Hello World");
//     myFunction(name);
// }

// function myFunction(name){
//     console.log('hello '+name);
// }
// setTimeout(greet,2000, 'shital',myFunction);


//---------------------------------------------

// function hello(callback){

//     console.log("hello from hello function");
//     setTimeout(function(){
//         callback('operation complete');
//     },100)
// }

// function callback(result) {
//     console.log("result "+result);
// }
// hello(callback);


//------------------------------------------

//callback using file reading 
const fs = require('fs');

function readFileAndProcess(fileName,processData) {
    
    fs.readFile(fileName,"utf8",(error,content)=>{
        if (error) {
            console.log('Error Reading file',error);
        } else {
            processData(content);
        }
    })
}

function processData(content) {
    console.log("File content: ",content);
}

readFileAndProcess("callBack.txt",processData);