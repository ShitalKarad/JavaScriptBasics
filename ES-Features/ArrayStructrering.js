var states = ["Maharatra","Kerla","Aasam","Zarkhand","Up"];

var [f,s,t,four,five] = states;
console.log(states);
console.log(f);

// if you wont to ignore some values you can get values you want 

var [,,,l] = states;
console.log(l);

var num =  [ 1,2,3];

var merge = [...states , ...num]; // merging to array
console.log(merge);

var cloneArr = [...states];// cloning array
console.log(cloneArr);

//for objects

var personObj = {
    fullName:"Shital Vishal Karad",
    state:"Maharastra",
    moNum:"8956561212"
}

var{fullName,state,moNum} = personObj;
console.log(fullName);
console.log(personObj.moNum);