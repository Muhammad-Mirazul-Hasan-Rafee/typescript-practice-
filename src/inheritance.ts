class Person{
        name:string;
    age:number;
    address: string;


    constructor(name:string , age:number , address: string){
        this.name = name;
        this.age = age;
        this.address = address;
    };

    getSleep(numberOfHours: number){
        console.log(`${this.name}  ${numberOfHours} ghumay!!`)
    };

}



// creating a blueprint 
class Student extends Person{
    rollNo:number;

    constructor(name:string, age:number, address:string, rollNo:number ){
        super(name, age, address);
        this.rollNo = rollNo;
    }

};

const student1 = new Student(`Rafee`, 28, `Bangladesh`, 1998);
student1.getSleep(15);


// another blueprint 
class Teacher extends Person{
    designation: string; // own property


    constructor(name:string, age:number, address:string, designation:string){
        // at fist call super
        super(name, age, address);
      
        this.designation = designation;
    };
     takeClass(numberOfHoursOfClaSS: number){
        console.log(`${this.name} ${numberOfHoursOfClaSS} hour class nen`);
    };

};
const teacher1 = new Teacher('Mr. Smart' , 25 , "Bangladesh" , "Senior");

teacher1.takeClass(4);
