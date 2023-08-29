// bind()
// with the bind() method, an object can borrow a method from another object 

const nameObj = {
    name:"Shital",
    lastName:"Karad",
    fullName: function(){
        return this.name + ' '+ this.lastName;
    }
}

const secondObj = {
    name:"Vishal",
    lastName:"Karad"
}

let fullNa  = nameObj.fullName.bind(secondObj);

console.log(fullNa());
//--------------------------------------

//when a function is used as a callback this is lost

const person = {
    name: "Vivek",
    lastName:"Karad",
    display: function fName(){
        console.log(this.name +' '+ this.lastName);
    }
}

 setTimeout(person.display,2000);

 /* will try to display the person name after 3 seconds,
  but it will display undefined instead:

  The bind() method solves this problem.
 In the following example, the bind() method is used to bind person.display to person.
This example will display the person name after 3 seconds */ 

const person2 = {
    firstName:"John",
    lastName: "Doe",
    display: function () {
      console.log(this.firstName + ' '+ this.lastName);
    }
  }
  
  let display = person2.display.bind(person2);
  setTimeout(display, 3000);

  /*What is this?
In JavaScript, the this keyword refers to an object.

Which object depends on how this is being invoked (used or called).

The this keyword refers to different objects depending on how it is used: */