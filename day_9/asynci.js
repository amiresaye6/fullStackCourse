function wait() {
    for (let i = 0; i < 1e9; i++) { }
}

// console.log("first");
// wait();
// console.log("second");

// callbacks

function greet(name) {
    console.log("welcome ", name);
}

greet("Amir Alsayed")


function parentProcess(callbackFunc) {

    callbackFunc("Amir Alsayed Abdulsamea");
}

parentProcess(greet);

const getusers = (callback) => {
    setTimeout(() => {
        callback("Test Amir")
    }, 1000);
}

console.log("berfore");


getusers(name => {
    console.log(name);

})
console.log("after");

let me = getusers(name => {
    return name
})

console.log("my user data is ", me);


// callbacke hell
// getUser((user) => {
//   getPosts(user, (posts) => {
//     getComments(posts, (comments) => {
//       console.log(comments);
//     });
//   });
// });

// this led to the beginig of the promise

const myDetails = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("done")
        // reject("somethign went wrong")
    }, 1000);
})

// console.log("my user details", myDetails.then(data => data));
// myDetails.then(data => {
//     console.log("my user data", data);
// }).catch(err => {
//     console.log("my error is: ", err);

// }).finally(() => {
//     console.log(" i will be running no matter the");
// })


setTimeout(() => {
    console.log("timeout finished");
}, 0);

Promise.resolve().then(() => console.log("primise finished"))


// async await

async function getUsersAsync() {
    const result = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("hi there, this is a test from async awai")
        }, 1000);
    });
    console.log(result);

}

getUsersAsync();


async function test() {
    console.log("A");
    await Promise.resolve();
    console.log("B");


}
test();
console.log("C");

const apiUrl = "https://jsonplaceholder.typicode.com/posts";
const rickApi = "https://rickandmortyapi.com/api/character";

function getPosts() {
    // fetch api >> function helpsm me to get data form apis
    let valueFromFEtch = fetch(apiUrl).then(result => {
        console.log(result);
        if (result.ok)
            return result.json();
    }).then(data => console.log(data)
    )

    console.log(valueFromFEtch);

}

// getPosts();

async function getuserssAsyncAweait() {
    const response = await fetch(rickApi);
    const data = await response.json();
    // console.log("data fetched are: ", data);
    return data.results
}

/**
 * 
 * 
 * 0
gender
: 
"Male"
id
: 
1
image
: 
"https://rickandmortyapi.com/api/character/avatar/1.jpeg"
name
: 
"Rick Sanchez"
species
: 
"Human"
status
: 
"Alive"
 */

async function render() {
    const cont = document.getElementById("container");
    const characters = await getuserssAsyncAweait();

    const sanitizedData = characters.map(ch => {
        return {
            name: ch.name,
            gender: ch.gender,
            image: ch.image,
            id: ch.id,
            species: ch.species,
        }
    })
    console.log(sanitizedData);

    const ui = sanitizedData.map(el => {
        return `
         <div class="card">
            <img src=${el.image} alt="${el.name}">
            <h2></h2>
            <h3></h3>
            <span></span>
            <span></span>
        </div>
        `
    }).join("");

    cont.innerHTML = ui;


}

render()