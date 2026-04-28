const arr1 = [
    1, 2, 3, 4, 5, 6, 7, 8
]

arr1.push([1, 2, 3,])
console.log(arr1);

console.log(arr1[1])
console.log(arr1[33])

arr1.push("hamada");
console.log(arr1.pop());


arr1.shift()
arr1.unshift("botato")


// slice/ splice 

const numbers = [1, 2, 3, 4, 5];

const section = numbers.slice(1,4)
console.log(section)

const section2 = numbers.splice(2, 2)
console.log(section2);



const users = [
    {name: "Amir", age: 23},
    {name: "1Amir", age: 43},
    {name: "2Amir", age: 33},
]

const names = users.map((user) => {
    return user.name;
})
console.log(names);

names.map(name => name.toUpperCase());
console.log(names);

// filter
const olderThan30 = users.filter(user => user.age > 30);
console.log(olderThan30);


const totalAge = users.reduce((total, user) => {
  return total + user.age;
}, 0);

console.log(totalAge);


// find 

let myUserName = users.find(user => user.name === "Amir");

console.log(myUserName);


console.log(users.some(u => u.age < 18));
console.log(users.some(u => u.age < 40));
console.log(users.every(u => u.age < 40));


const user = {
    name: "Amir",
    age: 23,
    isStudetn: false,
    isInstructor: true,
    greet: () => {
        console.log("hellow my frind my name is " + this.name);
        
    }
}

console.log(user.name);
console.log(user.age);
console.log(user["isStudetn"]);

user.botato = "chips";
console.log(user);

delete user.botato;
console.log(user);
user.greet();

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

console.log(typeof user);
const json = JSON.stringify(user);
console.log(json);

console.log(typeof json);

const products = [
  { name: "Perfume", price: 100 },
  { name: "Watch", price: 200 },
  { name: "Shoes", price: 150 }
];
