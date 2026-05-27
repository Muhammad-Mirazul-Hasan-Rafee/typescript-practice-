// dynamically generalize

type GenericArray<T> = Array<T>;


//const friends : string[] = ['Mr X' , 'Mr Y' , 'Mr Z'];
const friends: GenericArray<string> = ['Mr X', 'Mr Y', 'Mr Z'];

//const rollNumber : number[] = [3 , 4, 5, 66 ,200];
const rollNumber: GenericArray<number> = [3, 4, 5, 66, 200];

//const isEligibleList : boolean[] = [true , false , true];
const isEligibleList: GenericArray<boolean> = [true, false, true];

type CoOrdinance<X, Y> = [X, Y];
const coordinance1: CoOrdinance<number, number> = [20, 30];
const coordinance2: CoOrdinance<string, string> = ['20', '30'];



// generic for array of objects
const userList : GenericArray<{name:string , age:number}> = [
    {
        name: 'Mr. X',
        age: 26,
    },
    {
        name: 'Mr. Y',
        age: 27,
    },
    
];