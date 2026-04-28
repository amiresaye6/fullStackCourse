// js works line by line  >>> syncnchronous
console.log(1);
console.log(2);
console.log(3);


// but now  we knoa something callled delay using timeout

console.log("first");

setTimeout(() => {
    console.log(
        "second"
    );

}, 2000);

console.log(
    "third");
//  what if js waits for each action to finish then go to the next ?

function wait() {
    for (let i = 0; i < 1e9; i++) { } // loops for 100000000 timems >> takes some time 
}

console.log("start");
wait();
console.log("finish");

// there are some parts of the code we must wait and others we do not have to 
// api, user input, files >> these are examples of  things we must wit for it to be ready.
// call stak 

// to solve the issu of the website stuck waiting for some process to finish, we have multible solutions,
// first the callback soludtin 

// instead of waiting, give the code neading time  a funcitn to call when it finishes

// for example

function greet(name) {
    console.log('welcme ', name);
}

greet("amir alsayed");

function processWithCallback(callback) {
    callback("amir from callback");
}

processWithCallback(greet);

function processWithCallbackWithDelay(callback) {
    setTimeout(() => {
        callback("amir from callback");
    }, 1000);
}

processWithCallbackWithDelay(name => {
    console.log(name);

})


// simulating api 
function getUser() {
    setTimeout(() => {
        return {
            name: "amir", age: 23, department: "os", isStudent: false
        }
    }, 3000);
}

const user = getUser();
console.log("user data: ", user); // at this moment, ther is no usr data yet.


// this method leads to someting claled callback hell 

getUser((user) => {
    getPosts(user, (posts) => {
        getComments(posts, (comments) => {
            console.log(comments);
        });
    });
});

//  this lead to the promises approach

// makes the code async but with the code structuer like sync

// promise >> object representing the futuer reuslts eithre a success or failure

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("botato chips");
    }, 1000);
})

myPromise.then(res => {
    console.log("promise data : ", res);
})

const promiseRejected = new Promise((happy, sad) => {
    setTimeout(() => {
        happy("great work my friend :)");
        // sad("sorry soemting wrong happend :(");
    }, 1000);
})

promiseRejected
    .then(res => console.log(res))
    .catch(err => console.log(err))
    .finally(() => console.log("done")) // method chainning still not perfect so we have async await approach


// all promisses must be resolved or rejectd befor the event loop takes any task from the macro task queue 

async function getData() {
    const res = await Promise.resolve("hello"); // await stopes the function not the entire logic or code
    console.log("result is :", res);
}

getData();

async function test() {
    console.log("A");
    await Promise.resolve();
    console.log("B");


}

test();
console.log("C");


// lets then test waht we have learned so far in a real world application 
// we wiil call an api "applicatoni programing interfvace " via fetch  and test it with promise.then and with async await


const userData = [];

function getUserData() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            userData.push(...data);
        })
}

getUserData();
console.log(userData);


// lets build the async await version


const getUserDataAsync = async () => {
    const res = await fetch("https://rickandmortyapi.com/api/character");
    // fetch api doesnt raise an error if the res is 404 or similar  we need to handel itmanually using re.ok
    if (!res.ok) {
        throw new Error("usrs not found");
    }
    const data = await res.json();
    // userData.push(...data);
    // console.log([...userData]);
    console.log("rick and morty data are :", data);

}

// getUserDataAsync();



// lets use it in real world ok

async function getRickData() {
    const res = await fetch("https://rickandmortyapi.com/api/character");
    if (!res.ok) {
        throw new Error("usrs not found");
    }
    return await res.json();
}

const renderPage = async () => {
    let characters = await getRickData();

    characters = characters.results
    console.log("my characters are : ", characters);

    // we need to make a card for each character , displayign 
    /*
    name
    status
    species
    gnder
    image
    */



    characters = characters.filter(ch => ch.gender === "Male");

    const gridContainer = document.getElementById('character-grid');

    const cardsHTML = characters.map(char => `
                <div class="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                    
                    <div class="relative w-full h-64 overflow-hidden bg-slate-200">
                        <img 
                            src="${char.image}" 
                            alt="${char.name}" 
                            class="w-full h-full object-cover object-center"
                        >
                    </div>
                    
                    <div class="p-6 flex flex-col flex-grow">
                        <h2 class="text-2xl font-bold text-slate-900 mb-3 line-clamp-1" title="${char.name}">
                            ${char.name}
                        </h2>
                        
                        <div class="flex items-center mb-4 text-slate-700">
                            <span class="w-3 h-3 rounded-full mr-2 shadow-sm"></span>
                            <span class="font-medium text-base">${char.status} - ${char.species}</span>
                        </div>
                        
                        <div class="mt-auto pt-4 border-t border-slate-100 flex justify-between items-center text-sm">
                            <span class="text-slate-500 font-semibold uppercase tracking-wider">Gender</span>
                            <span class="font-medium bg-slate-100 px-3 py-1 rounded-full text-slate-700">${char.gender}</span>
                        </div>
                    </div>
                    
                </div>
            `).join('');

    gridContainer.innerHTML = cardsHTML;

}

renderPage()