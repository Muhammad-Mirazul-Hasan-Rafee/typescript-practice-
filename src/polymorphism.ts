// Polymorphism = various behaviour   = same  method but behavious is different 

class Person{
    getSleep(){
        console.log(`I am a normal person.I sleep for 9 hrs. `);
    };
};

class Student extends Person{
    getSleep(){
        console.log(`I am a student. I sleep for 8 hours.`);
    };
};

class NextLevelDev extends Person{
    getSleep(){
        console.log(`I am a next level developer . I sleep for 4 hrs.`);
    };
};
const getSleepHour = (param: Person) =>{
    param.getSleep();
};
const person1 = new Person();
const person2 = new Student();
const person3 = new NextLevelDev();

getSleepHour(person1);
getSleepHour(person2);
getSleepHour(person3);


class Shape{
    getArea(): number{
        return 0;

    };
};

class Circle extends Shape{
    radius: number;
    constructor(radius: number){
        super();
        this.radius = radius;
    }
    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}
class Rectangle extends Shape{
    height: number;
    width:number;
    constructor(height:number, width:number){
        super();
        this.height = height;
        this.width = width;
    };
    getArea(): number {
        return this.height * this.width;
        
    };
};


const getArea = (param: Shape) => {
    console.log(param.getArea());
};

const shape1 = new Shape();
const shape2 = new Circle(10);
const shape3 = new Rectangle(10,20);

getArea(shape1);
getArea(shape2);
getArea(shape3);