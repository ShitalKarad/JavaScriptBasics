function add() {
    let counter = 0;

    function plus() {
        counter += 1;
    }
    plus();
    return counter;
}

console.log(add());

let name = "Shital";

function getFirstName() {
    return `Hello i am ${name}`
}
console.log(getFirstName());

function parrent() {
    let x = 10;
    let y = 10;

    function inner() {
         console.log(x+y);;
    }
    inner();
}

parrent();

const addition = ( function(){
    let counter = 0; 
    return function () {
        counter += 1;
        return counter;
    }
})();
console.log(addition());
console.log(addition());