// OBJECT LITERAL REFERENCE TYPE

const person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 26,
  email: 'test@mail.com',
  vehicles: ['truck', 'sedan', 'motorcycle'],
  address: {
    city: 'Miami',
    state: 'FL'
  },
  getBirthYear: function(){
    return 2018 - this.age;
  }
}

let val;

val = person;

// get specific value
val = person.lastName; // common
val = person['lastName']; // uncommon
val = person.age;
val = person.vehicles[0];
val = person.address.state;
val = person.address['city'];
val = person.getBirthYear(); // function()

console.log(val);

const people = [
  {name: 'John', age: 30},
  {name: 'Mike', age: 23},
  {name: 'Michael', age: 35}
];

for(let i = 0; i < people.length; i++){
console.log(people[i].name);
}