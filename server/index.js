const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const { login, register, getWeather } = require("./controllers/auth");

app.post(`/api/login`, login);
app.post(`/api/register`, register);
app.get("/api/weather/:city", getWeather);

app.listen(4004, () => console.log(`running on 4004`));
