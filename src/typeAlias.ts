type User =  {id:number,
    name: {
        firstName:string,
        secondName:string,
        thirdName?:string,
        fourthName?:string,
    }, gender: 'male' | 'female', 
    contactNo: string,
    address:{
        division: string,
        city: string,
         
    }
}


const user1 : User ={
    id:1234567890,
    name: {
        firstName: 'Mr',
        secondName: 'Rafee',
    },
    gender: 'male',
    contactNo: '0188888888',
    address:{
        division: 'Chittagong',
        city: 'Chittagong',
    }

}

const user2 : User ={
    id:9876543210,
    name: {
        firstName: 'Ms',
        secondName: 'M',
    },
    gender: 'female',
    contactNo: '017777777',
    address:{
        division: 'Cumilla',
        city: 'Cumilla',
    }

}




// for function


type AddFunc = (num1: number , num2: number) => number;
const add : AddFunc = (num1 , num2) => num1 + num2;