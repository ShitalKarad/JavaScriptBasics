//  val = 5;
// console.log(val);

const { log } = require("util");

// var val;

// function codeHoist(){
//     a = 10;
//     let b = 20;
// }
// codeHoist()
// console.log(a);
// console.log(b); // refference error b is not defined
// let name;
// console.log(name); // undefined   ReferenceError: Cannot access 'name' before initialization
//      name = 'Mukul Latiyan'; 

     // Function scoped
    // function fun(){
    //     console.log(name);
    //     let name = 'Mukul Latiyan';
    // }
    // fun(); // Undefined

    fun(); 
     
    function fun(){ 
        console.log("Function is hoisted");
    }

    //var
  console.log(a); // outputs 'undefined'
  var a = 3;
   