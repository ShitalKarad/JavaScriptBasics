//With the call() method, you can write a method that can be used on different objects.
// With call(), an object can use a method belonging to another object.

const student = {

    fullName:function studentFun() {
        return this.name + ' '+ this.lName;

    }
}

const student1 = {
    name:"Shital",
    lName:"Karad"
}


//console.log(student.fullName.call(student2));
//The call() method can accept arguments: 

const personObj = {
    
    getName: function getFullName(city,country) {
        return this.name +' '+this.lName+' ,'+' '+city + ' ,'+country;
    }
}

const student2 = {
    name:"vishal",
    lName:"Karad"
}

console.log(personObj.getName.call(student2,"Beed","India"));

// The Difference Between call() and apply()
// The difference is:

// The call() method takes arguments separately.

// The apply() method takes arguments as an array.