const userContainerRegis = document.querySelector("#user-info");
const userContainerLogin = document.querySelector("#user-info-login");
const loginForm = document.querySelector("#login-form");
const registerForm = document.querySelector("#register-form");
const baseURL = `http://localhost:4004/api`;

const login = (body) =>
  axios
    .post(`${baseURL}/login`, body)
    .then((res) => {
      createUserCardLogin(res.data);
      alert("Log in successful!");
    })
    .catch((err) => {
      console.log(err);
      alert("Uh oh. Your request did not work.");
    });
const register = (body) =>
  axios
    .post(`${baseURL}/register`, body)
    .then((res) => {
      createUserCardRegis(res.data);
    })
    .catch((err) => {
      console.log(err);
      alert("Uh oh. Your request did not work.");
    });

function loginSubmitHandler(e) {
  e.preventDefault();

  let username = document.querySelector("#login-username");
  let password = document.querySelector("#login-password");

  let bodyObj = {
    username: username.value,
    password: password.value,
  };

  login(bodyObj);

  username.value = "";
  password.value = "";
}

function registerSubmitHandler(e) {
  e.preventDefault();

  let username = document.querySelector("#register-username");
  let email = document.querySelector("#register-email");
  let firstName = document.querySelector("#register-firstName");
  let lastName = document.querySelector("#register-lastName");
  let password = document.querySelector("#register-password");
  let password2 = document.querySelector("#register-password-2");

  if (password.value !== password2.value) {
    alert("Your passwords need to match.");
    return;
  }

  let bodyObj = {
    username: username.value,
    email: email.value,
    firstName: firstName.value,
    lastName: lastName.value,
    password: password.value,
  };

  register(bodyObj);

  username.value = "";
  email.value = "";
  firstName.value = "";
  lastName.value = "";
  password.value = "";
  password2.value = "";
}

function createUserCardRegis(data) {
  userContainerRegis.innerHTML = "";
  const userCardRegis = document.createElement("div");
  userCardRegis.classList.add("user-card");

  userCardRegis.innerHTML = `<p class="username">Username: ${data.username}</p>
    <p class="email">Email: ${data.email}</p>
    <p class="first-name">First Name: ${data.firstName}</p>
    <p class="last-name">Last Name: ${data.lastName}</p>`;

  userContainerRegis.appendChild(userCardRegis);
}

function createUserCardLogin(data) {
  userContainerLogin.innerHTML = "";
  const userCardLogin = document.createElement("div");
  userCardLogin.classList.add("user-card-2");

  userCardLogin.innerHTML = `<p class="username">${data.username}</p>
    <p class="message">WELCOME ${data.firstName}</p>
    
    
    <a href="userpage.html">ENTER</a>
    `;

  userContainerLogin.appendChild(userCardLogin);
}

loginForm.addEventListener("submit", loginSubmitHandler);
registerForm.addEventListener("submit", registerSubmitHandler);
