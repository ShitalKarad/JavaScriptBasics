function arrayOperation(array,callBack) {
    const processedArray = array.map((callBack));
    return processedArray;
}

const numbers = [5,3,8,92,43,7];

function numberProcessed(numbers) {
    return numbers + 2
}

const outputArray = arrayOperation(numbers,numberProcessed);
//console.log(outputArray);

// using callback on the array retuns only even num

function findEvenNum(numberArray,callBack){
    const findEvenNumber = numberArray.filter((callBack));
    return findEvenNumber;
}

function evenNumber(numbers) {
    return numbers % 2 == 0 ;
}

console.log(findEvenNum(numbers,evenNumber));