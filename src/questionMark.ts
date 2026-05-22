//  ? : ternary operator : decision making
// ?? : nullish coalescing operator == null/undefined 
// ?. :optional chaining


const biyerJonnoEligible = (age: number)=>{
// if(age >= 21){
//     console.log('You are eligible!');
// }
// else{
//     console.log('You are not eligible!');
// }
const result = age>=21 ? 'You are eligible!' : 'You are not eligible!' ;

console.log(result);
};

biyerJonnoEligible(26);


const userTheme = undefined;
const selectedTheme = userTheme ?? 'Light theme';
console.log(selectedTheme);
