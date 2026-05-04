let bazarList : string[] = ['eggs' , 'oil' , 'honey' , 'milk'];

let mixedArr : (string | number)[] = ['eggs' , 'oil' , 'honey' , 12 ,  'milk' , 100];
mixedArr.push('rice');

let coordinates : [number , number] = [20 , 30];

let couple : [string , string] = ['Husband' , 'Wife'];

let nameRoll : [string , number] = ['Rafee' , 88];

// reference type - object
const user : {
    organization : "Programming Hero"; //value => type: litral type
    firstName :  string;
    middleName?: string; //optional type
    lastName : string;
    isMarried: boolean;

} = {
    organization: 'Programming Hero',
    firstName: 'Hasan',
    lastName: 'Rafee',
    isMarried: false,
}
user.organization = "Programming Hero Fire";
console.log(user);


