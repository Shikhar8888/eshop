function registerUser() {
  const user = document.getElementById("regUser").value;
  const pass = document.getElementById("regPass").value;
  if (user === "" || pass === "") {
    document.getElementById("regError").textContent = "Fields required!";
    return;
  }
  const users = JSON.parse(localStorage.getItem("users")) || {};
  if (users[user]) {
    document.getElementById("regError").textContent = "User already exists!";
    return;
  }
  users[user] = pass;
  localStorage.setItem("users", JSON.stringify(users));
  alert("Registered! Please log in.");
}

function loginUser() {
  const user = document.getElementById("loginUser").value;
  const pass = document.getElementById("loginPass").value;

  if (user === "shikhar" && pass === "1234") {
    localStorage.setItem("adminLoggedIn", "true");
    location.href = "admin.html";
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || {};
  if (users[user] && users[user] === pass) {
    localStorage.setItem("loggedIn", "true");
    location.href = "index.html";
  } else {
    document.getElementById("loginError").textContent = "Invalid credentials!";
  }
}

function authGuard() {
  if (!localStorage.getItem("loggedIn")) {
    location.href = "login.html";
  }
}

function adminGuard() {
  if (!localStorage.getItem("adminLoggedIn")) {
    location.href = "login.html";
  }
}

function checkLoginRedirect() {
  if (localStorage.getItem("loggedIn")) {
    location.href = "index.html";
  }
  if (localStorage.getItem("adminLoggedIn")) {
    location.href = "admin.html";
  }
}
