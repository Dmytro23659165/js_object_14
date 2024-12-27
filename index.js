const players = [
    { id: 'player-1', name: 'Mango', age: 31, points: 54, online: false, eyeColor: 'green', gender: 'man', email: 'dllllllllllh@assgdg' },
    { id: 'player-2', name: 'Poly', age: 47, points: 92, online: true, eyeColor: 'blue', gender: 'woman', email: 'sddddddddddh@assgdg' },
    { id: 'player-3', name: 'Kiwi', age: 23, points: 48, online: true, eyeColor: 'green', gender: 'woman', email: 'sdjjjjjjjjjh@assgdg' },
    { id: 'player-4', name: 'Ajax', age: 15, points: 71, online: false, eyeColor: 'brown', gender: 'man', email: 'kdskkkkkkkkh@assgdg' },
    { id: 'player-5', name: 'Chelsy', age: 8, points: 48, online: true, eyeColor: 'blue', gender: 'man', email: 'daaaaaaaaaaaah@assgdg' },
];
let names = players.map(nam => nam.name);
console.log(names);

let colorEye = players.filter(color => color.eyeColor === 'blue');
console.log(colorEye);

let gender = players.filter(gend => gend.gender === 'man');
console.log(gender);

let isActive = players.filter(active => !active.online);
console.log(isActive);

let emailEM = players.find(emal => emal.email === 'sdjjjjjjjjjh@assgdg');
console.log(emailEM.name);

function getUsersByAgeRange(players, min, max) {
    return players.filter(({ age }) => age >= min && age <= max);
}
const minAge = 19;
const maxAge = 40;
const usersInRange = getUsersByAgeRange(players, minAge, maxAge);
console.log(usersInRange);
