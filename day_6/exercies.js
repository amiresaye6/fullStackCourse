let age = 17;

if (age >= 18) {
    console.log("Allowed");
} else {
    console.log("Not allowed");
}

function checkAge(my_age) {
    console.log("this statement is form checkAge func");
    
    if (my_age >= 18) {
        console.log("Allowed");
    } else {
        console.log("Not allowed");
    }
}

checkAge(19); // alowed
checkAge(15); // not allwoed

let arr1 = [1, 2];

let arr2 = arr1;

arr2.push(3);

console.log(arr1);
console.log(arr2);
