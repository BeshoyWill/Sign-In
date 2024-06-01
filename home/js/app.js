let logout = document.getElementById("logout");

let userName = document.getElementById("showname");

let getUserName = localStorage.getItem("username");

userName.innerHTML = "Welcome " + getUserName;

logout.addEventListener("click", () => {
    localStorage.removeItem("username");
    window.location.href = "signin.html";
})