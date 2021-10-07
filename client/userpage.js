const userContainer = document.getElementById("states");
const calibutton = document.getElementById("california");
const userContainer2 = document.getElementById("states2");
const txbutton = document.getElementById("texas");
const userContainer3 = document.getElementById("states3");
const utbutton = document.getElementById("utah");
const userContainer4 = document.getElementById("states4");
const nybutton = document.getElementById("newyork");
const userContainer5 = document.getElementById("states5");
const flbutton = document.getElementById("florida");
const weatherContainer = document.getElementById("weatherContainer");
const weatherForm = document.getElementById("weatherForm");
const openWeatherBase = "api.openweathermap.org/data/2.5/weather";
const baseURL = `http://localhost:4004/api`;

function createUserCard() {
  userContainer.innerHTML = "";
  const userCard = document.createElement("div");
  userCard.classList.add("user-card");

  userCard.innerHTML = `<ul class="username"><li><a href="https://en.wikipedia.org/wiki/Los_Angeles">Los Angeles</a></li>
  <li><a href="https://en.wikipedia.org/wiki/San_diego">San Diego</a></li></ul>`;

  userContainer.appendChild(userCard);
}

function createUserCard2() {
  userContainer2.innerHTML = "";
  const userCard = document.createElement("div");
  userCard.classList.add("user-card");

  userCard.innerHTML = `<ul class="username"><li>Dallas</li><li>Houston</li></ul>`;

  userContainer.appendChild(userCard);
}

function createUserCard3() {
  userContainer3.innerHTML = "";
  const userCard = document.createElement("div");
  userCard.classList.add("user-card");

  userCard.innerHTML = `<ul class="username"><li>Lehi</li><li>Salt Lake City</li></ul>`;

  userContainer.appendChild(userCard);
}

function createUserCard4() {
  userContainer4.innerHTML = "";
  const userCard = document.createElement("div");
  userCard.classList.add("user-card");

  userCard.innerHTML = `<ul class="username"><li>Albany</li><li>New York City</li></ul>`;

  userContainer.appendChild(userCard);
}

function createUserCard5() {
  userContainer5.innerHTML = "";
  const userCard = document.createElement("div");
  userCard.classList.add("user-card");

  userCard.innerHTML = `<ul class="username"><li>Miami</li><li>Orlando</li></ul>`;

  userContainer.appendChild(userCard);
}

calibutton.addEventListener("click", createUserCard);
txbutton.addEventListener("click", createUserCard2);
utbutton.addEventListener("click", createUserCard3);
nybutton.addEventListener("click", createUserCard4);
flbutton.addEventListener("click", createUserCard5);

weatherForm.onsubmit = (event) => {
  event.preventDefault();
  let city = document.getElementById("city");

  axios
    .get(`${baseURL}/weather/${city.value}`)
    .then((res) => {
      displayWeather(res.data);
    })
    .catch((err) => {
      console.log({ error: err });
    });

  city.value = "";
};
const displayWeather = (weather) => {
  let description = weather.weather[0].description;
  const weatherEntry = document.createElement("div");
  weatherEntry.innerHTML = `<h2>${description}</h2>`;
  weatherContainer.appendChild(weatherEntry);
};
