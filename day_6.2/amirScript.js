console.log("hellow, this is amir, this is an extrenal js file");
//  js is a loosly type language 
// c++ >> int, string, arr, boolean, float << strictly type language, java 

// let, const


// hoisting a functin 
checkAge(60);
// CheckAgeArrow(60)


let amir = "hamada";
amir = "amir alsaeyd";
amir = 34; // reassigment 

// let amir = "not amir" // redeclaration var amir

// by default >> use const unlsess your value need to be changed

const const_amir = "amir";
// const_amir = "hamda";

const amirArray = [
    "amir alsayed",
    "yaha",
    "sabah"
]

// amirArray = []  // reassigning to a new array

amirArray[3] = "eman";
amirArray[4] = "new user";

console.log(amirArray)



// js is now called ecma script es
// var 


// preemetive data types
/*
string
number
boolean
null
undefined
*/
let name = "Amir";
let age = 25;
let isStudent = true;
let x = null;
let y;


// refrence data types
let arr = [1, 2, 3];
let obj = { name: "Amir" };


let a = 5;
let b = a;
b = 10;
console.log(`a is ${a}, and b is ${b}`);


const arr_1 = [
    "amir",
    "alsayed"
]

const arr_2 = arr_1;

arr_2[2] = "hamdad";

arr_1[0] = "Amir Alsayed";
console.log(`array 1 is ${arr_1}, and array 2 is ${arr_2}`);


// temporal dead zoon
// console.log(temporlaVar);

let temporlaVar = "from here";

let user_name = "amir";
let camelCase = "camel case"; // conventional for js
let CabitalCase = "cabital case";


// tepe correction

console.log(+"10" + 5);
console.log("10" + 5);
console.log("10" - 5);
console.log("10" / 5);
console.log("10" * 5);
console.log(+"a" + 5); // 5a


console.log("amir " + " alsayed")
console.log(4 + 9)

// controal flow >> if, else

// if
// else if
// else

if (true) {
    console.log("this is tru form if statmen");
}


if (false) {
    console.log("this is tru form if statmen");
} else {
    console.log("thei si sform elses");
}


let myAge = 60;

if (myAge > 60) {
    console.log("you are too old");
} else if (myAge == 60) {
    console.log("welcome to our website");
}
else {
    console.log("you are too young");
}

// ternary operator version

// first condition      | first choise       ||>                                                                                       <|
myAge > 60 ? console.log("you are too old") : myAge === 60 ? console.log("welcome to our website") : console.log("you are too young");


// equality

// == >> compare value onely

if (5 == "5") { // true 
    console.log("string is equal to numbedr");
}

// === >> compare value and data type >> conventional 


if (5 === "5") { // false 
    console.log("string is equal to numbedr");
} else {
    console.log("number and string are different");
}

// falsey values >> values act as false by default 
//  false, 0, "", '',null,undefined, NaN
let condition = ""

if (condition) {
    console.log("this is false");
} else {
    console.log("this is true");
}

// ternaly operator

// main condition ? first chiose : seciond chosie;

let myNewAge = 24;

myNewAge === 25 ? console.log("this is the first result") : console.log("this is the second result");
condition ? console.log("this is the first result") : console.log("this is the second result");  // conditional rendergin




// loops 
/*
for
while
forEach
for of
for in

*/
// if i  know how many times to loop
for (let i = 0; i < 10; i++) {
    console.log(i);
}


// i do not know how many times to loop 
let i = 50;
while (i < 60) {
    console.log(i);
    i++;
}

// functions >> reusable parts fo code

function checkAge(myAge) {
    if (myAge > 60) {
        console.log("you are too old");
    } else if (myAge == 60) {
        console.log("welcome to our website");
    }
    else {
        console.log("you are too young");
    }
    return myAge * 10;
}

checkAge(); // myAge is undefined
console.log(checkAge(68));

// arrow function 
const CheckAgeArrow =  (myAge = 50, myName = "Amir") => { // annonimus function 
    var newAmir = "inner score";
    let amir  = " amir from teh inner scope";
    console.log(newAmir);
    console.log(amir);
    
    if (myAge > 60) {
        console.log("you are too old", myName);
    } else if (myAge == 60) {
        console.log("welcome to our website");
    }
    else {
        console.log("you are too young");
    }
    return myAge * 10;
}

console.log(newAmir);

var newAmir = "test";

CheckAgeArrow(66, "yaha");

// differntce between arrow function and functikon keyowrd >> this, hoisting