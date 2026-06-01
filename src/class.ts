// OOP ---    class -> object

// .................We will create object from class...............



// Creating class
// class Animal {
//     name:string;
//     species: string;
//     sound: string;

//     constructor (name:string , species: string , sound: string){
//         this.name = name;
//         this.species = species;
//         this.sound = sound;
//     }

//      // defining method
//         makeSound(){
//             console.log(`${this.name} animal is making sound ${this.sound}`);
//         }
// };


// Use Parameter properties for cleaner code
class Animal {


    constructor(public name: string, public species: string, public sound: string) {

    };

    // defining method
    makeSound() {
        console.log(`${this.name} animal is making sound ${this.sound}`);
    };
};



// Creating Object
const cat = new Animal('Kitty', 'catus', 'Meow');
console.log(cat.name);
console.log(cat.species);
console.log(cat.sound);

cat.makeSound();


