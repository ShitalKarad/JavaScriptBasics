class Car{
    constructor(carName,year){
        this.carName = carName;
        this.year = year;
    }
    age(x){
        return x - this.year
    }
}


const myCar1 = new Car("Ford", 2014);
const myCar2 = new Car("Audi", 2019);

console.log(myCar1.carName);
//A JavaScript class is not an object.

//It is a template for JavaScript objects.