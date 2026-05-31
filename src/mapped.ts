// mapped types = 

const arrayOfNumber : number[] = [1,4,6,8,10];
//const arrayOfString : string[] = ["1","4","6","8","10"];

const arrayOfStringUsingMap : string[] = arrayOfNumber.map((num)=> num.toString());
console.log(arrayOfStringUsingMap);


type AreaOfNum = {
    length: number;
    width: number;
};

// type AreaOfString = {
//     length: string;
//     width: string;
// };



//Primary approach
// type AreaOfString = {
//     [key in "length" | "width"] : string;
// };


// more better approach
type AreaOfString = {
   [key in keyof AreaOfNum] : string;
};

// much better approach
type Area <T> = {
    [key in keyof T] : T[key];
};

/**
 * key= length ====> string
 * key= width ====> number
 T means ===>>>> {length: string ; width: string}
 */

const area1: Area<{length: string ; width: number}> = {length: '6' , width: 40} 