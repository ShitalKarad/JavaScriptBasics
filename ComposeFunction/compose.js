const compose = (...functions) => input => 
functions.reduce((accumlatedVal,fn) => fn(accumlatedVal),input);

function add(num){
return num + 2;
}
function mul(num){
    return num * 3;
}

function div(num){
    return num / 4
}

const combinedFunction = compose(
    add,mul,div
);

console.log(combinedFunction(40));