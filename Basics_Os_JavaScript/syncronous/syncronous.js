console.log("hi");
console.log("hello");
console.log("Bye");


// reading file synchonously

const fs = require("fs");
 let data = fs.readFileSync("./syncronous.txt" , "utf-8");
 if (data) {
    console.log(data);
 }else{
    console.error(error);
 }
