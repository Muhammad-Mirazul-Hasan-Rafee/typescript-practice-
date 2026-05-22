//  nullable type
const getUser = (input: string | null) => {
    if (input) {
        console.log(`from DB : ${input}`);
    }
    else {
        console.log(`from DB : All user}`);
    }
};

getUser('Rafee');


// Unknown types
const discountCount = (input: unknown) => {
    if(typeof input === 'number'){
        const discountPrize =  input * 0.1;
        console.log(discountPrize);
    }    
    else if(typeof input === 'string'){
        const [discountPrize] = input.split(' ');
        console.log(Number(discountPrize) * 0.1);

    }
    else{
        console.log('Wrong Input');

    }

}

discountCount(100);
discountCount('100 TK');
discountCount(null);


// void
const throwErr = (msg: string) : never =>{
    throw new Error(msg);
}

throwErr('Error...');