//function ===   normal function
function add(num1 : number , num2 : number) : number{
    return num1 + num2;
}

add(2 , 3);

//function ===  arrow function 

const add2 = (x : number , y : number) : number => x + y;


add2(10 , 5);

// function in object === method
const poorUser  = {
    name : 'Rafee',
    balance : 0,
    addBalance(value : number) : number{
       return this.balance + value ;
    }
}

