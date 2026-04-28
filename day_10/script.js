// local storage 

// two types >> localstorage, sessionstore

// local storage >> saved locally until user delet or hard reste the server, or delte history
// session storeag>> avaailavbve  withte the seessoin< session ends,>> means data vanished


// how to add a new item to local storage
localStorage.setItem("name", "Amir");
localStorage.setItem("age", 23);
localStorage.setItem("isStudent", false);

const userData = {
    name: "Amir Alsayed",
    age: 23,
    isStudent: false
}

console.log(userData.hamada);


const localStorageUserData = JSON.stringify(userData)

console.log(typeof userData);
console.log(typeof localStorageUserData);


// localstorage .setitem >> if the key exitss> >> override it, if it is not presetn>>> create new one
localStorage.setItem("user", localStorageUserData);

// how to convert object to a stgring json

// update data
userData.age = 24;

const newData = JSON.stringify(userData); // i i want to send data to ls >> must stringfy
localStorage.setItem("user", newData);


// delete item >> reset value to undefined or null
// localStorage.setItem("user", undefined);


// delete item entirely using removeItem
// localStorage.removeItem("user");


// how to get item form localstorage
const userFromLocalStorage = localStorage.getItem("user"); 
console.log(userFromLocalStorage.name);

console.log(userFromLocalStorage);
const parsedData = JSON.parse(userFromLocalStorage); // if you get data form ls,>> you must Parse
console.log(parsedData.age, typeof parsedData);

// crud operations 
// creaating >> setItem
// updategin >> setItem with the same key
// deletign >> revemoeItem
// readign >> getItem

let user = "name: amrie alsayed"
user.name;

// fixed rule>>> reading form ls/api >> parse data 
// writgin from ls/api/ss >> strgify


// useign session storage

sessionStorage.setItem("this is a key", "this is a value")
sessionStorage.setItem("user", "this is a value")
console.log(sessionStorage.getItem("user"));

// sessionStorage.removeItem("test")
