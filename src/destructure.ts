// object destructuring


const user = {
    id: 123,
    name: {
        firstName: 'Muhammad',
        secondName: 'Mirazul',
        thirdName: 'Hasan',
        fourthName: 'Rafee',
    },
    gender:'male',
    favouriteColor: 'Blue',
};


const {favouriteColor , name:{fourthName : myFourthName} } = user;
console.log(favouriteColor);
console.log(myFourthName);




// array destructuring
const friends = ['Hasan' , 'Rafee' , 'Rihan'];
const [, myBestFriend] = friends;
console.log(myBestFriend);
