const add = document.getElementById("add")
const sub = document.getElementById("sub")
const number = document.getElementById("number")

// console.log(add);
number.innerText = localStorage.getItem("currentValue") || 0;

add.addEventListener("click", () => {
    let currentValue = localStorage.getItem("currentValue");
    if (!currentValue) {
        currentValue = 0;
    }
    console.log("add button clicked", currentValue);

    number.innerText = ++currentValue;
    localStorage.setItem("currentValue", currentValue)

});

sub.addEventListener("click", () => {
    let currentValue = localStorage.getItem("currentValue");
    if (!currentValue) {
        currentValue = 0;
    }
    console.log("add button clicked", currentValue);

    number.innerText = --currentValue;
    localStorage.setItem("currentValue", currentValue)

});


// ======================================= form handling ===================

// get html elments
const form = document.getElementById("userForm");
const userName = document.getElementById("useruserName");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phoneNumber");

const userNameShow = document.getElementById("userNameShow")
const emailShow = document.getElementById("emailShow")
const phoneNumberShow = document.getElementById("phoneNumberShow")
const genderShow = document.getElementById("genderShow")

const tableBody = document.getElementById('tableBody');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(e.target);

    const data = {};

    data.userName = form.elements["userName"].value;
    data.email = form.elements["email"].value;
    data.phoneNumber = form.elements["phoneNumber"].value;
    data.gender = form.elements["gender"].value;

    localStorage.setItem("userData", JSON.stringify(data))

    // console.log(data);
    updateUi(data)
    addUser(data);
    renderUsers();

})

function updateUi() {
    let userData = localStorage.getItem("userData")
    userData = JSON.parse(userData)
    userNameShow.innerText = userData.userName;
    emailShow.innerText = userData.email;
    phoneNumberShow.innerText = userData.phoneNumber;
    genderShow.innerText = userData.gender;
}



function addUser(user) {
    const allUsers = JSON.parse(localStorage.getItem("usersArray")) || []

    allUsers.push(user);

    localStorage.setItem("usersArray", JSON.stringify(allUsers));
}

function getusers() {
    return JSON.parse(localStorage.getItem("usersArray")) || [];
}

function renderUsers() {
    const users = getusers();



    const newUsersUi = users.map(u => {

        return `
         <tr class="hover:bg-indigo-50 transition-colors">
                <td class="px-6 py-4 font-medium text-slate-900">${u.userName}</td>
                <td class="px-6 py-4">${u.email}</td>
                <td class="px-6 py-4">${u.phoneNumber}</td>
                <td class="px-6 py-4">
                <span
                    class="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
                    ${u.gender}
                </span>
            </td>
        </tr>
        `
    }).join("");

    tableBody.innerHTML = newUsersUi;

}

renderUsers();