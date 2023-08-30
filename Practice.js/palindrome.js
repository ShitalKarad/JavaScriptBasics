function checkPalindrome(number) {
    const str = number.toString();
    let str2 = str.split('').reverse().join('');
    return str === str2;
}

function findpalin(arr) {
    
    const palinNumber = arr.filter(num => checkPalindrome(num));
    return palinNumber;
}

const numArr = [121,334,1331,414,565,347,189];
const palindrome = findpalin(numArr);

console.log("Palindrome numbers in an givin array",palindrome);