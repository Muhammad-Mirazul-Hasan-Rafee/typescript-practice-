// constraint = enforcing strict rules
type Student = {id:number , name: string};
 const addStudentToCourse = <T extends Student > (studentInfo: T) =>
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

 const student3 = {
    hasWatch : true,
 };


 const result1 = addStudentToCourse(student1);
 console.log(result1);

  const result2 = addStudentToCourse(student2);
 console.log(result2);

//   const result3 = addStudentToCourse(student3);
//  console.log(result3);