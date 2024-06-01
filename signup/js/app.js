let userName = document.getElementById("name");
let userMail = document.getElementById("email");
let userPass = document.getElementById("password");
let error = document.getElementById("error-message");

let signupBtn = document.getElementById("signup");

let users = [];

if (localStorage.getItem("users") != null) {
    users = JSON.parse(localStorage.getItem("users"));
}

function signUp() {
    let user = {
        name: userName.value,
        email: userMail.value,
        password: userPass.value
    }

    if (userName.value == "" || userMail.value == "" || userPass.value == "") {
        error.innerHTML = "All fields are required";
        return;
    }
    
    if (
        isValidEmail(userMail.value) && 
        isNewEmail(userMail.value)
    ) {
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
        clearForm();
        error.innerHTML = "Success";
        error.className = "text-center text-success";
    } else if (!isValidEmail(userMail.value)) {
        error.innerHTML = "Invalid Email";
        error.className = "text-center text-danger";
    } else if (!isNewEmail(userMail.value)) {
        error.innerHTML = "Email already exists";
        error.className = "text-center text-danger";
    }
}

function isValidEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}

function isNewEmail(email) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email) {
            return false;
        }
    }
    return true;
}

function clearForm() {
    userName.value = "";
    userMail.value = "";
    userPass.value = "";
}

signupBtn.addEventListener("click", signUp);