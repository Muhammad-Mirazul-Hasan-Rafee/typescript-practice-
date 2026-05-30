// Generic Funtion  = Generalize the function


// const createArrayWithString = (value:string)=>[value];
// const createArrayWithNumber = (value:number) => [value];
// const createArrayWithUserObject = (value: {id:number , name: string})=>{
//     return [value];
// };


const createArrayWithGeneric= <T> (value: T)=>[value];

const arrString = createArrayWithGeneric('Apple');
const arrNum = createArrayWithGeneric(11);
const arrObj = createArrayWithGeneric({
    id:88,
    name: 'Next Level Web Development',
});


// tuple

 const createArrayWithTuple = (param1: string , param2: string)=>[param1 , param2];

 const createArrayTupleWithGeneric = <X , Y> (param1:X , param2:Y)=>[param1 , param2];


 const res1 = createArrayTupleWithGeneric('Rafee' , false);
 const res2 = createArrayTupleWithGeneric(10 , {name:'Rafee'});



 const addStudentToCourse = <T> (studentInfo: T) =>
 {return{
    course: 'Next Level Web Development',
    ...studentInfo,
 }}


 const student1 = {
    id:88,
    name: 'Rafee',
    hasPen: true,
 };

 const student2 = {
    id:10,
    name: 'Jhankar Mahbub',
    hasCar: true,
    isMarried: true,
 };


 const result1 = addStudentToCourse(student1);
 console.log(result1);

  const result2 = addStudentToCourse(student2);
 console.log(result2);