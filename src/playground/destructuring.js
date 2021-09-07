// const person ={
//     name: 'Alin',
//     age: 22,
//     location: {
//         city: 'Satu Mare',
//         temp: 21
//     }
// };

// const { name: firstname = 'Anonymus', age } = person;

// console.log(`${firstname} is ${age}`);

// const {city, temp: temperature} = person.location;

// if (temperature && city){
//     console.log(`It's ${temperature} degres in ${city}`);
// }

// const book ={
//     title: 'Ego is th enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher; 

// console.log(publisherName);

// const address = ['Grig Alexandrescu 174', 'Timis', 'Timisoara', '225200'];
// const [street, state = 'Satu Mare', city, zip] = address;

// console.log(`You are in ${city}, ${state}.`);


const item = ['Coffe (hot)', '$2.00', '$2.50', '$2.75'];
const [coffe, , medium] = item;

console.log(`A medium ${coffe} costs ${medium}`);
