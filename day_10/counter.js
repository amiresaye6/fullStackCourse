const add = document.getElementById('add')
const sub = document.getElementById('sub')
const container = document.getElementById('container')

container.innerText = localStorage.getItem("counter") || 0;
add.addEventListener("click", () => {
    let counter = localStorage.getItem("counter") || 0;

    counter++;

    localStorage.setItem("counter", counter);

    container.innerText = counter;
})

sub.addEventListener("click", () => {
    let counter = localStorage.getItem("counter") || 0;

    counter -= 1;

    localStorage.setItem("counter", counter);

    container.innerText = counter;
})