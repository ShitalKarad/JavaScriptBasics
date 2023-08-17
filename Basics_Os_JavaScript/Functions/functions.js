//general function
function add(a,b){
    let c = a + b;
    console.log("my addition is " + c);
}
add(5,3);
//arrows function
const sub = (a,b)=>{
    return a - b;
};

let output = sub(5,3);
console.log(output);

// self exicuting functon

(function(){
    console.log("hello");
})();

//anonymous function

const greet = function(a,b){
    return a * b;
}
console.log(greet(3,4));


//this value

function myFunction() {
    console.log("using this "+this);
  }
  
  // Simple invocation
  myFunction(); // logs global object (window)

  const myObject = {
    method() {
      console.log(this);
    }
  };
  // Method invocation
  myObject.method(); // logs myObject


  function myDisplayer(sum){
    console.log(sum);
  }
  function myCalculator(num , num2) {
    let sum = num + num2;
    myDisplayer(sum);
  }
  myCalculator(3,1);