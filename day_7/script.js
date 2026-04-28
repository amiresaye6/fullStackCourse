// arrays >> basics, methods , hof,
// objects >> definition, methods
// JSON
// practic test


const myStuedents = [1, 2, 3, 4, 5, 6, 3, 4, 5, 5, 3];
console.log(myStuedents.length);


const myStuedentsString = ['yaha', 'eman', 'sabah',];
console.log(myStuedentsString.length);

const myValues = ['yaha', 1, true]; // loosly teyped array, non homogenious
console.log(myValues.length);

// array sin js >> 0 indexed
console.log(
    myStuedents
);

console.log(myStuedents[4]);

console.log(myStuedentsString[4]);

// add , removing

// add at the end >> push

let newLen = myStuedentsString.push("newvalue");
console.log(newLen, myStuedentsString)

let retrunFromPop = myStuedentsString.pop();
console.log(retrunFromPop, myStuedentsString);


// remvoe from the end / pop

// add at the start >> unshift
newLen = myStuedentsString.unshift("amir");
console.log(newLen, myStuedentsString)

// remove from the start  >> shift

let retrunFromShift = myStuedentsString.shift();

console.log(retrunFromShift, myStuedentsString)

// push, pop, unshift, shift

myStuedentsString[5] = "test";
console.log(myStuedents);

myStuedentsString[2] = "SABAH";


// slice, splice

const number = [0, 1, 3, 4, 5, 6, 7, 8, 9, 0, "amir", "Not amir", "yaha"];

// start, end >> nevative values >> offest from the direction

const numbersOnly = number.slice(0, 10); // ending index is exclusive
const stringsOnly = number.slice(10)
console.log(numbersOnly, stringsOnly);

// splice >> start, count,


const stringsOnly2 = number.splice(10)
console.log(number, stringsOnly2);

// map

// array of objects
let users = [
    { name: "amir", age: 23 },
    { name: "test user", age: 33 },
    { name: "rema", age: 43 },
]

console.log(users);


// get all teh studetn names

// hof >> highre order functions 
// accepts a function as a parameter, or return a function

const test = (name) => {
    console.log(name);
}

const nameValues = users.map(
    (studetn) => {
        return studetn.name;
    }
)

// add 10 years to each user age;
console.log(users);


users = users.map(user => {
    return {
        name: user.name.toUpperCase(),
        age: user.age + 10,
    }
}
)
console.log(users);

// map , filter
// search >> filter >> higher order funciton 

// get all studetns older thatn 40

const usersOlderThan40 = users.filter((u) => {
    return u.age > 40;
})

console.log("users > 40 ", usersOlderThan40);

// reduce >> callback >> 2 params , 1, accumilator, current

const sumOfAges = users.reduce((soa, curretnUser) => {
    return soa += curretnUser.age;
}, 47)
console.log(sumOfAges);

const sumOfNames = users.reduce((soa, curretnUser) => {
    return soa += curretnUser.name + " ";
}, "")
console.log(sumOfNames);


console.log(number.reduce((total, curr) => {
    return total += curr;
}, 0));


// find

// add a new user with the name amir

users.push({ name: "AMIR", age: 100 });
console.log(users);


// eman wiill explian teh differenc between == and === next session :__:
const amirusr = users.find((hamda) => {
    return hamda.name === "amir".toUpperCase()
})

console.log(amirusr);

console.log("same func but with filter", users.filter((el) => el.name === "AMIR"));


// find >> returns teh first elment it mets and ends executggatoin.
// filter returns an array of all the elmte meatign teh condition.

// method chainning 

// some(), every()

const newNumber = [
    10, 20, 30, 44, 45
]

// retuern fif teh numbers all are greater than 5
console.log(newNumber.every(el => el > 5))

// all elments must be even numbers
console.log(newNumber.every(el => el % 2 === 0))


// return true if one or more is true form the callback
console.log(newNumber.some(el => el % 2 === 0))


// objects 

const object = {
    name: "amir",
    num: 21334,
    bool: true,
    pritnName: () => {
        console.log(this.key);

    }
}


const yahaStd = {
    name: "yahia",
    age: 20,
    country: "palastine",
    major: "cs",
    student: true,
    pritn: function () {
        console.log(`my name is ${this.name} and my age is ${this.age} and my major is ${this.major}`);

    }
}

console.log(yahaStd)
console.log(yahaStd.name)
console.log(yahaStd.age)
console.log(yahaStd.major)
console.log(yahaStd["name"])
console.log(yahaStd["student"])

// add / update/ delete

yahaStd.salary = 1000000;

yahaStd.age = 23;

console.log(yahaStd)

delete yahaStd.major;
yahaStd["name"] = "Yahia mohamed"

yahaStd.pritn();


console.log(Object.keys(yahaStd));
console.log(Object.values(yahaStd));
console.log(Object.entries(yahaStd));


// JSON >> javascrip object notation

const yh_stringfy = JSON.stringify(yahaStd);

console.log(yh_stringfy, yahaStd);


// sending data to the backen d>> stringify data first
// receive data from the backend >> user parese

const newData = JSON.parse(yh_stringfy);
console.log(newData.salary);

