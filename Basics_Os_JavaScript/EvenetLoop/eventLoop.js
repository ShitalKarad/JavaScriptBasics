// console.log("first");
// setTimeout(() => {
//     console.log("second");
// }, 2000);
// console.log("third");

function LevelTwo() {
    console.log("Inside Level Two!")
    }
    
    function LevelOne() {
    LevelTwo()
    }
    
    function main() {
    LevelOne()
    }
    
    main()
    