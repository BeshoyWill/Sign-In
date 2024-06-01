let userMail = document.getElementById("email");
let userPass = document.getElementById("password");
let error = document.getElementById("error-message");

let login = document.getElementById("signin");

let users = [];

if (localStorage.getItem("users") != null) {
    users = JSON.parse(localStorage.getItem("users"));
}

function logIn() {
    let email = userMail.value;
    let password = userPass.value;

    if (userMail.vale = "" || userPass.value == "") {
        error.innerHTML = "All fields are required";
        return;
    }

    if (ValidInputs(email, password)) {
        window.location.href = "index.html";
    } else {
        error.innerHTML = "Invalid Email or Password";
    }
}

function ValidInputs(email, password) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email && users[i].password === password) {
            localStorage.setItem("username", users[i].name);
            return true;
        }
    }

    return false;
}

login.addEventListener("click", logIn);