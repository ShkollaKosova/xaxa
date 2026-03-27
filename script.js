const data = {
  "Tirana": 75,
  "Durrës": 68,
  "Elbasan": 62,
  "Vlorë": 60,
  "Shkodër": 58,
  "Berat": 52,
  "Korçë": 57,
  "Fier": 59,
  "Lushnjë": 55,
  "Pogradec": 50,
  "Kavajë": 54,
  "Lezhë": 53,
  "Kukës": 51,
  "Gjirokastër": 49,
  "Sarandë": 56,
  "Patos": 47,
  "Laç": 46,
  "Krujë": 45,
  "Peshkopi": 42,
  "Bulqizë": 40,
  "Fushë‑Krujë": 44,
  "Rrëshen": 43
};

const searchBtn = document.getElementById("searchBtn");
const cityField = document.getElementById("cityField");
const cityName = document.getElementById("cityName");
const noiseBar = document.getElementById("noiseBar");
const errorMessage = document.getElementById("errorMessage");
const noiseValue = document.getElementById("noiseValue");

searchBtn.addEventListener("click", () => {
  const city = cityField.value.trim();
  if (data[city]) {
    cityName.textContent = city;
    noiseBar.style.width = data[city] + "%";
    noiseValue.textContent = `${city} ${data[city]} dB`;
    errorMessage.textContent = "";
  } else {
    cityName.textContent = "";
    noiseBar.style.width = "0%";
    noiseValue.textContent = "";
    errorMessage.textContent = "Nuk ka të dhëna për këtë qytet.";
  }
});