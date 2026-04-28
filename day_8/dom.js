const nameHeader = document.querySelector("h1");
const nameHeaderByClassName = document.querySelector(".first");
console.log(nameHeaderByClassName.classList);

const nameHeaderbyId = document.querySelector("h1#myId.second");

console.log(nameHeader);
console.log(nameHeaderByClassName);
console.log(nameHeaderbyId);


const h1List = document.querySelectorAll('h1');
console.log(h1List);

const h1WithID = document.getElementById('myId');
console.log(h1WithID)


// =============================================

const userName = document.getElementById('userName');
console.log(userName.textContent);
userName.textContent = "sabah";

const parentEl = document.getElementById('parent');
console.log(parentEl.textContent);
console.log(parentEl.innerHTML);


const tasks = [
    "prepare for the next and final js sessoni",
    "revue tasks",
    "finish php project",
    "do the lab"
]

const myTasks = document.getElementById('child_1');

const htmlTasks = "";

// htmlTasks = tasks.map(taks => htmlTasks += "<li>" + taks + "</li>") // <li> task conten  </li>)

// myTasks.innerHTML =htmlTasks
myTasks.innerHTML = tasks.reduce((res, curr) => res + "<li>" + curr + "</li>", "");

// styling

// userName.style.backgroundColor = "lightgreen";

const evenOdd = document.getElementById('evenOdd')


let number = 50;

// for (let i = 0; i <= number; i++) {
//     evenOdd.innerHTML += `<div class="sqare"> ${i + 1} </div>`;
//     // console.log(evenOdd.innerHTML);


// }

// css >>> backgrond-color >> backgrondColor
// classs list

const squareLIst = document.querySelectorAll('.sqare');

squareLIst.forEach(el => {
    +el.textContent % 2 == 0 ?
        el.classList.add('even') :
        el.classList.add('odd')  // remove, toggle

})
// squareLIst.forEach(el => {
//     if (+el.textContent % 2 == 0)
//         el.classList.remove('even');


// })




// events 

const btn = document.querySelector("button");
let itr = 1;

const inputNumber = document.getElementById("noOfS");
btn.addEventListener('click', () => {
    console.log("this butotn was clicked " + itr++);
    userName.classList.toggle('active');
    squareLIst.innerHTML = "";
    for (let i = 0; i <= number; i++) {
        evenOdd.innerHTML += `<div class="even sqare"> ${i + 1} </div>`;
        // console.log(evenOdd.innerHTML);
    }
})

inputNumber.addEventListener('input', (e) => {
    // for (let i = 0; i <= +e.target.value; i++) {
    //     evenOdd.innerHTML += `<div class="even sqare"> ${i + 1} </div>`;
    //     // console.log(evenOdd.innerHTML);
    // }
    number = e.target.value;
    console.log(number);

})


// const loginBtn = document.getElementById("login");
const form = document.querySelector("form");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("submitted");
    console.log(e);

})

const watch = document.querySelector('.watch');

let i = 0;
setInterval(() => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    watch.textContent = `${hours %12}:${minutes}:${seconds}`;

    console.log(i + 1);
    i++;
}, 1000); // ms


setTimeout(() => {
    console.log("Hello after 2 seconds");
}, 2000);

