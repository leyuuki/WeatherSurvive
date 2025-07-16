const API_KEY = "541d0e33496f391f6cf3a67f63057a54"; // ← OpenWeatherMapのAPIキーに置き換えてね
const city = "Tokyo";

const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=ja`;

let hp = 100;
let stamina = 100;
let turn = 1;
let playerX = 1;
let playerY = 1;
let currentWeather = "";

function fetchWeather() {
  fetch(weatherURL)
    .then(res => res.json())
    .then(data => {
      const weather = data.weather[0].description;
      const temp = data.main.temp;
      currentWeather = data.weather[0].main;

      document.getElementById("weather").textContent = weather;
      document.getElementById("temp").textContent = temp;
    })
    .catch(err => {
      document.getElementById("weather").textContent = "取得失敗";
      console.error("天気取得エラー:", err);
    });
}

function updateStatus() {
  document.getElementById("hp").textContent = hp;
  document.getElementById("stamina").textContent = stamina;
  document.getElementById("turn").textContent = turn;
}

function updateField() {
  const field = document.getElementById("field");
  field.innerHTML = "";

  for (let y = 0; y < 3; y++) {
    for (let x = 0; x < 3; x++) {
      const cell = document.createElement("div");
      cell.className = "cell";
      if (x === playerX && y === playerY) {
        cell.textContent = "👣";
      }
      field.appendChild(cell);
    }
  }
}

function move(dir) {
  if (stamina <= 0 || hp <= 0) {
    document.getElementById("message").textContent = "動けません…";
    return;
  }

  if (dir === "up" && playerY > 0) playerY--;
  if (dir === "down" && playerY < 2) playerY++;
  if (dir === "left" && playerX > 0) playerX--;
  if (dir === "right" && playerX < 2) playerX++;

  turn++;
  stamina -= (currentWeather === "Rain" ? 15 : 10);

  if (stamina <= 0) {
    hp -= 10;
    stamina = 0;
  }

  updateField();
  updateStatus();
  document.getElementById("message").textContent =
    currentWeather === "Rain" ? "雨のため移動が重い…" : "移動しました。";
}

// ✅ HTMLが読み込まれた後に実行
window.onload = () => {
  fetchWeather();
  updateStatus();
  updateField();
};
