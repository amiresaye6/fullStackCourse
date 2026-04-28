console.log("connect is working");

/*

hoisting
amir
myarray
printhellow << function hoisting


*/

// variables 

// js >> loosly typed language >> pything >> php

// let, const, var

// const amir = 23;
// const amir = true;
// const amir = "amir";

// temprlal zone 
// console.log(amir);

const amir = {
    name: "old amir",
    age: 23
};

let new_amir = amir;

amir.name = "amir alsayed";

console.log("old variable ", amir);
console.log("newv ariable ", new_amir);

const myArray = [1, 2, 4, 5];

let botato = myArray;

console.log(amir);

// undefined

// amir = "hamada"; // thiw will raise an error 


console.log(typeof amir)


let department = "open Source";
console.log(department);

department = "full stack development";
console.log(department);

// two categories in data types 
// primitive < refrence

console.log("5" + 5);
console.log("5" - 5);


// controal flow >> if , else if , else, >> switch

let my_age = 1000;

if (my_age === 20) {
    console.log("welcome to my world");
}
else if (my_age > 100) {
    console.log("you are too old");
    if (my_age == 1000) {
        console.log("your age is 1000");
    }
}
else if (my_ag === 0) {
    console.log("test");
}
else {

    console.log("you are not allowed")
}



// ternary operator 

//  condition  ? statment one : statmenttwo ;

my_age = 19

//  true values in js
/*
strings >> trtue "test"
numbers >> true 2324
true >> true

flasey values
0
false
"", ''
[]
{}
undefiined
null
nan
*/

my_age == 1000 ? console.log("first statment is running ") : console.log("who are you?");

if (2) { console.log(" this is a true value") }


if (0) { console.log(" this is a faluse vayeu :(") }

// logica operators 

/*
&& >> and  >> two conditions must be true 
|| >> or >> one of the conditions must be true
! >> not >> reverse the condition
==, === >> equl >> the value must equla the other value

*/

let user1 = 'any ting ';
let user2 = true;
let user3 = 0; // flase 

if (user1 && user2) {
    console.log('true and true');
}
if (user1 || user3) {
    console.log('true or false');
}
if (!user3) {
    console.log('reverse false >> true');
}

// == >> compare value only
// === >> compare value and data type

let x = "10";
let y = 10;
// compare value onel
console.log(x == y);

// compare value and data type
console.log(x === y);

// this 
let useName = user1 || "testUer";
// same as this
if (user1) {
    let userName = user1;
} else {
    let userame = "testUser4";
}

// for, while, for of, foreach 
for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log("index outside the for loop");

let idx = 5;
for (idx = 5; idx < 10; idx++) {
    console.log(idx);
}

let tesetVar = 0;

while (tesetVar <=  5) {
    console.log("value is : ", tesetVar)
    tesetVar += 1;
}

printhellow()

// funcitons >> reusable parts of code 

// is hoisted
function printhellow() {
    console.log("heloow world")
    let innervar = 5;
    console.log(innervar);
}
// will make an error, useing var outsied of it's scope
// console.log(innervar);

printhellow();


// is not hoisted
const newfunction = () => {
    console.log("this is an arrow funciton")
}

newfunction();

// hoisting >> 

console.log("====================================================================");
