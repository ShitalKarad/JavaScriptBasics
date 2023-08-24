//Higher order function : a function wich accept a function as an argument  
//and also return the function is kown as higher order function.

// Higher order functions are functions that take one or more functions as arguments, 
//or return a function as their result.

function sum(print) {
    let a = 7;
    let b = 8;
    let c = a + b;
    print(c);
}

// console.log("sum",sum(print));

// function print(content) {
//     console.log("output " + content);
// }

// let num = [1,2,3,4,5,6];
// const output = num.map((num)=> num += 10);
// console.log(num);
// console.log(output);

// const arr = [1, 2, 3, 4, 5];
// const result = arr.filter((num) => num % 2) // filter out odd numbers
// console.log(arr); // [1, 2, 3, 4, 5]
// console.log(result); // [1, 3, 5]

// const user = [
//     { firstName: "Shital", lastName: "Karad", city: "Parali" },
//     { firstName: "vishal", lastName: "Karad", city: "Parali" },
//     { firstName: "Vaibhav", lastName: "Karad", city: "Sambhaji Nagar" },
//     { firstName: "Vivek", lastName: "Karad", city: "Shirur" },

// ];

// const getFullName = user.map((user)=>{ 
//      return user.firstName +' '+ user.lastName+' '+ user.city});
// console.log(getFullName);

// const getCity = user.filter(({city})=>city == "Parali");
// console.log(getCity);

// let numbers = [5, -200, 100, 60, 1];
// const maxValue = numbers.reduce((max, curr) => {
//     if(curr > max) max = curr;
//     return max;  
// });

// console.log(maxValue); // 10

// const arr6= [1,2,3,4];
// const arr7 = [6,7,8,9];

// var arr8 = [...arr6, ...arr7];

// console.log(arr8);
// var [first,sec,third,four] = arr6;
// console.log(first);

// var[first,,,last] = arr6;
// console.log(last);

//call bind apply 