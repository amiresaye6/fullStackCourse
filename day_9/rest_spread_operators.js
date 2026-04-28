// console.log("sometign", "another string", { name: "amir", age: 23 });

function anytihng(first, second, third, ...remainning) { //rest operator , used when i do not know how many  args the fun should pass

    console.log("start of the executation");
    

    console.log("first argument is ", first);
    console.log("second argument is ", second);
    console.log("third argument is ", third);
    console.log("remainning args ", remainning);
    
    // console.log(...string);
    
    console.log("=============================end of the executation=============");

}

anytihng("this is a test")
anytihng("this is a test", "another argument passed")
anytihng("sometign", "another string", { name: "amir", age: 23 });
anytihng("sometign", "another string", 'another 1', "another 2", "another 3");

// rest operator, spread operator

// sperad operator , array, object

let userArray = [
    "amir",
    "ahmed",
    "yaha",
    "sabah",
    "eman"
]
let nweusders = [...userArray];

nweusders.unshift("new value added at the start")

console.log(userArray);
console.log(nweusders);
console.log(...userArray);


