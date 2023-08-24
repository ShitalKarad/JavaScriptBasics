const str = "  Hello World  ";
console.log(str.charAt(1));

console.log(str[0]);

//trim() it removes white spces of both the sides there are 3 methos trimEnd() and trimStart.
console.log(str.trimStart());

//Array methods
//The isArray() method checks whether an object is an array
function arrayMethods() {
    
    const fruits = ["Apple","Mango","Banana","greaps"];
    console.log(Array.isArray(fruits)); 
}
arrayMethods();

//he forEach() method calls a function once for each array element.
// map() Creates a new array by performing a function on each array element

var num = [1,2,3,4,5,6]
 const res = num.map(myFunction);
console.log(res);

function myFunction(value ) {
    return value * 2;
}

var rs = num.filter(namef)
console.log(rs);
function namef(val) {
    return val > 3;
}

// indexOf() method return index of that element 
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var a = fruits.indexOf("Apple");
console.log(a);

// json.stringify()

const obj1 = {name:"Shital", age:"23", city:"parali"};

console.log(JSON.stringify(obj1));