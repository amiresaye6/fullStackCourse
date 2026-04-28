

 let name = "eman";        
let age = 20;            
let isStudent = true;
console.log("Name: " + name);
console.log("Age: " + age);
console.log("Is Student: " + isStudent);
 

let result1 = "5" + 10;
console.log("Result 1 ('5' + 10):", result1);

let result2 = "10" - 5;
console.log(" result2('10' - 5):", result2);

let compare1 = (5 == "5");
console.log(" result3 (5 == '5'):", compare1);

let compare2 = (5 === "5");
console.log("result4 (5 === '5'):", compare2);



let valueA = 10;
let valueB = "10";
console.log("--- Testing Equality Condition ---");

if (valueA === valueB) {
    console.log("Strict Equal");
} else if (valueA == valueB) {
    console.log("Equal (Loosely)");
} else {
    console.log("Not Equal at all");
}



let myVar = "";
if (myVar) {
    console.log("Has Value");
} else {
    console.log("Empty"); 
}


console.log("--- Testing Truthy & Falsy Results ---");


if (0) { console.log("0 is Truthy"); } else { console.log("0 is Falsy"); }


if ("") { console.log("empty string is Truthy"); } else { console.log("empty string is Falsy"); }

if (null) { console.log("null is Truthy"); } else { console.log("null is Falsy"); }

if (undefined) { console.log("undefined is Truthy"); } else { console.log("undefined is Falsy"); }


if ("Gemini") { console.log("a non-empty string is Truthy"); } else { console.log("a non-empty string is Falsy"); }

 age = 20;
if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");}

let status = (age >= 18) ? "Adult" : "Minor";
console.log("Status using Ternary:", status);



let username1 = ""; 
let displayName1 = username1 || "Guest"; 
console.log("Using OR (||):", displayName1);

let username2 = ""; 
let displayName2 = username2 ?? "Guest";
console.log("Using Nullish (??):", displayName2);



console.log("--- Task 12: Numbers 1 to 10 ---");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
console.log("--- Task 13: Even Numbers 1 to 20 ---");
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}



console.log("--- Task 14: Modern Loop (for...of) ---");

const numbers = [15, 25, 35, 45, 55];

for (const num of numbers) {
    console.log("Value:", num);

}

function greetUser(name = "Guest") {
    console.log("Hello, " + name + "!");}

    const greetArrow = (name = "Guest") => {
    console.log(`Hello from Arrow Function, ${name}!`);
};

const checkAge = (age) => {
    return (age >= 18) ? "Adult" : "Minor"};
     result1 = checkAge(25);
 result2 = checkAge(15);

console.log("Age 25 is:", result1); 
console.log("Age 15 is:", result2); 
//
//let globalVar = "";

//function testScope() {
  
//let localVar ="";

  //  console.log("--- Inside the function ---");
   // console.log("Global:", globalVar); 
   // console.log("Local:", localVar);   
//}
// globalVar = "I am Global;
//function testScope() {
   // console.log("--- Inside the function ---");
  //  console.log("Global:", globalVar); 
   // console.log("Local:", localVar);  
//}
//testScope();

//console.log("--- Outside the function ---");
//console.log("Global:", globalVar); 
//try {
  //  console.log("Local:", localVar);
//}
//console.log("Local:", localVar); 
// catch (error) {
   // console.log("Local outside: Error! (localVar is not defined)");
//}
//
let a = 10;
let b = a; 
a = 20;   

console.log("Task 20 - Primitives:");
console.log("a:", a); 
console.log("b:", b);

let user1 = { name: "Ali" };
let user2 = user1;
user1.name = "Sami"; 

console.log("Task 21 - Objects:");
console.log("user1 name:", user1.name); 
console.log("user2 name:", user2.name); 

{
let list1 = [1, 2, 3];
let list2 = list1;
list1.push(4); 
console.log("Task 22 - Arrays:");
console.log("list1:", list1); 
console.log("list2:", list2);}

const getUserStatus = (name, age) => {
    let finalName = name || "Guest";
    let status = (age >= 18) ? "Adult" : "Minor";
    return `Hello ${finalName}, you are ${status}`;
};

console.log(getUserStatus("Ali", 25));   
console.log(getUserStatus("", 15));      
console.log(getUserStatus(null, 20));     

const users = ["Ahmed", "Sara", "", "John", "Layla"];
const greetEachUser = (namesList) => {
    console.log("--- Starting Greetings ---");
    for (const name of namesList) {
    
        let finalName = name || "Guest";
        console.log(`Hello ${finalName}, welcome to the system!`);
    }
};