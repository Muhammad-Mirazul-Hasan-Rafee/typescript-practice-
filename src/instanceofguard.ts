// instance of type guard / type narrowing

class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    };
    getSleep(numberOfHours: number) {
        console.log(`${this.name} always sleep for ${numberOfHours} hours`);
    };
};


class Student extends Person {
    constructor(name: string) {
        super(name);
    };

    doStudy(numberOfHours: number) {
        console.log(`${this.name} is doing study for ${numberOfHours} hours`);
    };
};

class Teacher extends Person {
    constructor(name: string) {
        super(name);
    };
    takeClass(numberOfHours: number) {
        console.log(`${this.name} teaches for ${numberOfHours} hours!`);
    };

};

// function guard
const isStudent = (user: Person) =>{
    return user instanceof Student ;
};

const isTeacher = (user: Person) =>{
    return user instanceof Teacher;
}

const getUserInfo = (user: Person) => {
if(isStudent(user)){
    user.doStudy(10);
}
else if(isTeacher(user)){
    user.takeClass(6);
}
else{
    user.getSleep(9);
}
};

// crerating instance (object)
const student1 = new Student("Mr. Student");
const teacher1 = new Teacher("Mr. Teacher");
const person = new Person('Mr. Person');

getUserInfo(student1);
getUserInfo(teacher1);
getUserInfo(person);


