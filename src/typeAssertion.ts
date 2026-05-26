let anything : any;

anything = 2222;

// (anything as number);


const kgToGrmConvertor = (input: string | number) : string | number | undefined => {
    if(typeof input === 'number'){
        return input * 1000;

    }
    else if(typeof input === 'string'){
        const [value] = input .split(" ");
        return `Converted Output is: ${Number (value) * 1000}`
    }
};


const result1 = kgToGrmConvertor(2) as number ;
console.log({result1});
const result2 = kgToGrmConvertor('2 kg') as string;
console.log({result2});