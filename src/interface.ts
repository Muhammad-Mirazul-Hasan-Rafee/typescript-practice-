type User = {
    name: string;
    age: number;

};

// interface : works with object type data : array m object , function
interface IUser {
    name: string;
    age: number;
};

type Role = {
    role: 'admin' | 'user';
};


interface IUserWithRole extends IUser {
    role: 'admin' | 'user';
}


type UserWithRole = User & Role;

const user1 : IUserWithRole = {
    name: 'Rafee',
    age: 100,
    role: 'admin',
}
const user2 : IUser= {
    name: 'Rafee2',
    age: 1000,
    
};

type IsAdmin = boolean; 

const isAdmin : IsAdmin = true;

// function

type Add = (num1: number , num2: number) => number;

interface IAdd {
(num1 : number , num2: number) : number
}

const add : IAdd = (num1 , num2) =>  num1 + num2;