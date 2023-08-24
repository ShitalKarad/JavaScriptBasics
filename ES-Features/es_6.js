var array = ["one","Two","Three","Four"];
console.log(array);

var [one, two , three] = array;

console.log(two);
var [one ,,, three] = array;
console.log(one);

[a,b] = array;
console.log(b);

//  structure assignment of objects

const obj = {
    name:"Shital",
    lastName:"Karaad",
    midName:"Vishal"
}

console.log(obj);
console.log(obj.name);//like normal accesseing

const {name,lastName,midName} = obj;
console.log(lastName);

var arr1 = [1,2,3];
var arr2 = [4,5,6];
//spread operator
var arr3 = [...arr1,...arr2];//merging two array
console.log(arr3);
var arr4 = arr1.concat(arr2);
console.log(arr4);


// promise

function promiseExample() {
    return new Promise((resolve, reject) => {
        let count = 0;
        if (count == 1) {
            resolve("success");
        }else{
            console.log("rejected");
        }
    });   
}
promiseExample()
.then((res)=>{
    console.log(res);
}).catch((console.error()))