console.log('hii');
setTimeout(() =>{
    console.log('hello');
}, 2000);

console.log('bye');

//Random Number Generator Without Promise
// an asynchronous self-executing arrow function was used, in which call back function is used
// to call the generateRandom() function. It is one example of synchronous code.


function generateRandomNumber(min,max){
    return Math.ceil(Math.random() * (max - min) + min);
}
(()=>{
    const random = generateRandomNumber(2,6);
    console.log(random);
})()


//create http server o node 

const http = require("node:http");
 const server = http.createServer(function(req,res){
    res.writeHead(200,{"content-Type":"text/plain"});
    res.write("Hello shital")
    res.end();
});
server.listen(300,()=>{
    console.log("server runnig on port 300");
})

const fs = require("fs");

// Making asynchronous call to read the file
fs.readFile("./asyncronous", "utf8", (error, data) => {
  if (error) 
  return console.error(error); // if error occurred
  console.log(data); // showing the data
});