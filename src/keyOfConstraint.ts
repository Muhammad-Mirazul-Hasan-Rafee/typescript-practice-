// keyof: this operator works on type

type RichPeopleVehicle={
    car:string,   //key: value 
    bike:string,
    jetPlane:string,
    yott:string,
};

type MyVehicle1= "bike" | 'car' | 'cng';   //string literal type
type MyVehicle2 =  keyof RichPeopleVehicle;

 const MyVehicle : MyVehicle2 = 'bike';


 const user={
    id: 88,
    name: 'Rafee',
    address:{
        city: 'ctg',
    },

 };

//  both are correct
 const myName = user.name;
 const myId = user['id'];
 const myAddress = user['address'];

 //console.log({myName , myId , myAddress});
 

 const getPropertyFromObj = (obj: object , key: string) =>{
    return obj[key]
 }

 const result = getPropertyFromObj(user ,  "name");
 console.log(result);

// 12.05


