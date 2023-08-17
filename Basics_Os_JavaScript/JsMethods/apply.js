//With the apply() method, you can write a method that can be used on different objects.

const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const person1 = {
    firstName: "Mary",
    lastName: "Doe"
  }
  
  // This will return "Mary Doe":
 console.log( person.fullName.apply(person1));
  
  //-----------------------------------------------------

  const person3 = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  
  const person2 = {
    firstName:"John",
    lastName: "Doe"
  }
  
  console.log(person3.fullName.apply(person2, ["Oslo", "Norway"]));

  //----------------------------------------

const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);

console.log(max);

const min = Math.min.apply(null, numbers);

console.log(min);
