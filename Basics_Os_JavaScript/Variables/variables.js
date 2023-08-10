let greet = "Hello " // global variable

function myfunction(){
    let msg = "JavaScript!"; 
    console.log(greet + msg);//can access global and local variable
}


myfunction();
		
console.log(greet);// yes access global variable
//console.log(msg); //error: can't access local variable


let number = 50
function print() {
  
    let square = number * number // 2500
  
    if (number < 60) {
      var largerNumber = 80
      let anotherLargerNumber = 100
  
      console.log(square)  // 80
    }
  
    console.log(largerNumber)
    //console.log(anotherLargerNumber)  //ReferenceError: anotherLargerNumber is not defined
  }
  
  print()
 
  