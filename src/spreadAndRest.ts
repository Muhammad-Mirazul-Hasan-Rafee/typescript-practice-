// spread operator
const friends = ['Rafee' , 'Hasan'];
const schoolFriends = ['Big Show' , 'Randy Orton' , 'John Cena' , 'Undertaker'];
const collegeFriends = ['Miz' , 'Ray' , 'Doph Zigler' , 'HHH'];


friends.push(...schoolFriends);
friends.push(...collegeFriends);
console.log(friends);


// Object operator
const user = {name: 'Rafee' , mobile: '01888888'};
const otherInfo = {
    hobby: 'outing',
    refreshment: 'Ice cream',
};
const userInfo = { ...user , ...otherInfo};
console.log(userInfo);

// rest operator
const sendInvite = (...friends: string[]) => {
   friends.forEach((friend: string) =>console.log(`Send invitation to ${friend}`));

};

sendInvite('Marwa' , 'Rafee' , 'Hasan' , 'Muntaha');
